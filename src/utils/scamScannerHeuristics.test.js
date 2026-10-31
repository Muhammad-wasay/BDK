import { describe, it, expect } from 'vitest';
import { analyzeMessage, HEURISTIC_RULES } from './scamScannerHeuristics';

describe('scamScannerHeuristics rule-based analyzer', () => {
  it('detects credential theft (OTP, PIN, passwords)', () => {
    const text = 'Aapka account block ho raha hai, foran apna 4-digit OTP aur ATM PIN batayein';
    const result = analyzeMessage(text);
    expect(result.redFlagCount).toBeGreaterThanOrEqual(1);
    expect(result.hasCritical).toBe(true);
    expect(result.flagsFound.some((f) => f.id === 'credential_theft')).toBe(true);
  });

  it('detects lottery, prize, and BISP scheme lures', () => {
    const text = 'Mubarak ho! Benazir Kafalat Scheme mein aapka 50,000 inaam nikla hai bit.ly link par click karein';
    const result = analyzeMessage(text);
    expect(result.redFlagCount).toBeGreaterThanOrEqual(1);
    expect(result.flagsFound.some((f) => f.id === 'prize_lottery' || f.id === 'shortened_link')).toBe(true);
  });

  it('detects urgency and threats in Urdu script', () => {
    const text = 'معزز صارف! مشکوک لین دین کی وجہ سے آپ کا اکاؤنٹ بلاک کیا جا رہا ہے۔ فوری رابطہ کریں۔';
    const result = analyzeMessage(text);
    expect(result.flagsFound.some((f) => f.id === 'urgency_threat')).toBe(true);
    expect(result.redFlagCount).toBeGreaterThanOrEqual(1);
  });

  it('evaluates legitimate family messages with zero red flags', () => {
    const safeText = 'Kal subah 10 baje doctor ke clinic mein appointment hai, time par pohonch jaiye ga.';
    const result = analyzeMessage(safeText);
    expect(result.redFlagCount).toBe(0);
    expect(result.flagsFound).toHaveLength(0);
    expect(result.hasCritical).toBe(false);
  });

  it('matches spans with start and end indices for precise UI highlighting', () => {
    const text = 'Click here: http://bit.ly/claim-prize now or block!';
    const result = analyzeMessage(text);
    expect(result.matchedSpans.length).toBeGreaterThan(0);
    const span = result.matchedSpans[0];
    expect(span).toHaveProperty('start');
    expect(span).toHaveProperty('end');
    expect(span).toHaveProperty('ruleId');
  });

  it('provides comprehensive multi-language descriptions for all rules', () => {
    HEURISTIC_RULES.forEach((rule) => {
      expect(rule.id).toBeTruthy();
      expect(rule.title.roman).toBeTruthy();
      expect(rule.title.urdu).toBeTruthy();
      expect(rule.title.en).toBeTruthy();
      expect(rule.description.roman).toBeTruthy();
      expect(rule.description.urdu).toBeTruthy();
      expect(rule.description.en).toBeTruthy();
    });
  });
});
