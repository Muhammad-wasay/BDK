import { describe, it, expect } from 'vitest';
import { TRANSLATIONS } from './translations';
import { SOLO_SCENARIOS_DATA } from './scenarios';

describe('translations and scenarios parity', () => {
  it('has translation objects for roman, urdu, and en', () => {
    expect(TRANSLATIONS).toHaveProperty('roman');
    expect(TRANSLATIONS).toHaveProperty('urdu');
    expect(TRANSLATIONS).toHaveProperty('en');
  });

  it('guarantees identical keys across all 3 languages', () => {
    const romanKeys = Object.keys(TRANSLATIONS.roman).sort();
    const urduKeys = Object.keys(TRANSLATIONS.urdu).sort();
    const enKeys = Object.keys(TRANSLATIONS.en).sort();

    expect(urduKeys).toEqual(romanKeys);
    expect(enKeys).toEqual(romanKeys);
  });

  it('provides 15 balanced scenarios for all 3 languages', () => {
    expect(SOLO_SCENARIOS_DATA.roman).toHaveLength(15);
    expect(SOLO_SCENARIOS_DATA.urdu).toHaveLength(15);
    expect(SOLO_SCENARIOS_DATA.en).toHaveLength(15);
  });

  it('ensures each scenario contains valid structure, redFlags, and teachBack', () => {
    ['roman', 'urdu', 'en'].forEach((lang) => {
      SOLO_SCENARIOS_DATA[lang].forEach((scenario, idx) => {
        expect(scenario.id).toBe(`solo-${idx + 1}`);
        expect(scenario.category).toBeTruthy();
        expect(scenario.message).toBeTruthy();
        expect(scenario.hint).toBeTruthy();
        expect(['scam', 'safe']).toContain(scenario.correctChoice);
        expect(scenario.feedback.redFlags).toBeInstanceOf(Array);
        expect(scenario.teachBack).toBeDefined();
        expect(scenario.teachBack.options).toHaveLength(3);
        expect(scenario.teachBack.options.some((o) => o.isCorrect)).toBe(true);
      });
    });
  });

  it('pairs scams with genuine messages to prevent paranoia', () => {
    ['roman', 'urdu', 'en'].forEach((lang) => {
      const scams = SOLO_SCENARIOS_DATA[lang].filter((s) => s.isScam);
      const genuine = SOLO_SCENARIOS_DATA[lang].filter((s) => !s.isScam);

      expect(scams.length).toBe(12);
      expect(genuine.length).toBe(3);
    });
  });
});
