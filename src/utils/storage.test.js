import { describe, it, expect, beforeEach } from 'vitest';

// Set up browser-like environment on globalThis for Node/Vitest
const storageStore = new Map();
const mockLocalStorage = {
  get length() {
    return storageStore.size;
  },
  key: (i) => Array.from(storageStore.keys())[i] || null,
  getItem: (key) => (storageStore.has(key) ? storageStore.get(key) : null),
  setItem: (key, val) => storageStore.set(key, String(val)),
  removeItem: (key) => storageStore.delete(key),
  clear: () => storageStore.clear()
};

globalThis.window = {
  localStorage: mockLocalStorage
};

import storage from './storage';

describe('storage utility safe operations', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
  });

  it('returns fallback when key does not exist', () => {
    const val = storage.safeGet('non_existent_key', 'fallback_val');
    expect(val).toBe('fallback_val');
  });

  it('stores and retrieves primitive values', () => {
    storage.safeSet('theme_key', 'dark');
    expect(storage.safeGet('theme_key')).toBe('dark');

    storage.safeSet('elder_mode', true);
    expect(storage.safeGet('elder_mode')).toBe(true);

    storage.safeSet('user_score', 15);
    expect(storage.safeGet('user_score')).toBe(15);
  });

  it('stores and retrieves complex objects and arrays', () => {
    const complexData = { name: 'Abba Ji', completed: [1, 2, 3], active: true };
    storage.safeSet('profile', complexData);
    expect(storage.safeGet('profile')).toEqual(complexData);
  });

  it('safely handles corrupted JSON without crashing', () => {
    mockLocalStorage.setItem('binadarke_corrupted_key', '{not valid json:');
    const val = storage.safeGet('corrupted_key', { safe: true });
    // Returns either fallback or raw string without throwing
    expect(val).toBeDefined();
  });

  it('removes keys cleanly with safeRemove', () => {
    storage.safeSet('temp_key', 'value');
    expect(storage.safeGet('temp_key')).toBe('value');
    storage.safeRemove('temp_key');
    expect(storage.safeGet('temp_key', null)).toBeNull();
  });

  it('clears all progress cleanly with clearAllProgress', () => {
    storage.safeSet('score', 10);
    storage.safeSet('answers', ['q1', 'q2']);
    storage.clearAllProgress();
    expect(storage.safeGet('score', 0)).toBe(0);
    expect(storage.safeGet('answers', [])).toEqual([]);
  });
});
