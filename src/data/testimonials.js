/**
 * Real-Only Testimonials Data Schema
 * 
 * Strict Zero-Fabrication Rule:
 * Only real quotes collected with explicit user consent from user testing or field interviews.
 * Never invent names, ages, cities, or quotes.
 * 
 * Schema:
 * {
 *   id: string,
 *   quote: { roman: string, urdu: string, en: string },
 *   originalLanguage: "roman" | "urdu" | "en",
 *   attribution: string, // e.g. "Parent, Karachi" (generic attribution protecting anonymity)
 *   consent: boolean,    // MUST be true to render
 *   date: string,        // ISO date "YYYY-MM-DD"
 *   source: "interview" | "feedback"
 * }
 */

// Starts empty. If empty, UI components fallback gracefully to the labelled Abba Ji persona card.
export const TESTIMONIALS_DATA = [
  /* Example of structure when genuine consented feedback is gathered during live testing:
  {
    id: "testimonial-sample-1",
    quote: {
      roman: "Pehle mujhe darr lagta tha, ab main khud check kar ke decision leta hoon.",
      urdu: "پہلے مجھے ڈر لگتا تھا، اب میں خود چیک کر کے فیصلہ کرتا ہوں۔",
      en: "Earlier I was hesitant; now I independently inspect prompts before deciding."
    },
    originalLanguage: "urdu",
    attribution: "Parent, Karachi",
    consent: false, // excluded from rendering until verified with signed consent
    date: "2026-03-15",
    source: "interview"
  }
  */
];

export default TESTIMONIALS_DATA;
