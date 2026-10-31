/**
 * Safe client-side storage utility with try/catch fallbacks.
 * Ensures the app works gracefully in incognito, restricted environments, or corrupted storage.
 */

const STORAGE_PREFIX = 'binadarke_';

export const storage = {
  safeGet(key, fallback = null) {
    if (typeof window === 'undefined' || !window.localStorage) {
      return fallback;
    }
    try {
      const fullKey = key.startsWith(STORAGE_PREFIX) ? key : `${STORAGE_PREFIX}${key}`;
      const raw = window.localStorage.getItem(fullKey);
      if (raw === null || raw === undefined) {
        return fallback;
      }
      try {
        return JSON.parse(raw);
      } catch {
        // Raw string value fallback
        return raw;
      }
    } catch (err) {
      console.warn(`[storage] safeGet failed for key "${key}":`, err);
      return fallback;
    }
  },

  safeSet(key, value) {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    try {
      const fullKey = key.startsWith(STORAGE_PREFIX) ? key : `${STORAGE_PREFIX}${key}`;
      const serialized = typeof value === 'string' ? value : JSON.stringify(value);
      window.localStorage.setItem(fullKey, serialized);
      return true;
    } catch (err) {
      console.warn(`[storage] safeSet failed for key "${key}":`, err);
      return false;
    }
  },

  safeRemove(key) {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    try {
      const fullKey = key.startsWith(STORAGE_PREFIX) ? key : `${STORAGE_PREFIX}${key}`;
      window.localStorage.removeItem(fullKey);
      return true;
    } catch (err) {
      console.warn(`[storage] safeRemove failed for key "${key}":`, err);
      return false;
    }
  },

  /**
   * Clears only BinaDarKe specific keys, respecting privacy without touching external data.
   */
  clearAllProgress() {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    try {
      const keysToRemove = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith(STORAGE_PREFIX)) {
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach((k) => window.localStorage.removeItem(k));
      return true;
    } catch (err) {
      console.warn('[storage] clearAllProgress failed:', err);
      return false;
    }
  }
};

export default storage;
