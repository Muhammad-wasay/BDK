# BinaDarKe • بنا ڈر کے
> **A Free Anti-Scam Practice Space for Families and Elders**  
> Built for the Build4Better Hackathon (NED University)

[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![Vite 8](https://img.shields.io/badge/Vite-8-purple.svg)](https://vitejs.dev)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-green.svg)](https://vitest.dev)
[![Zero Telemetry](https://img.shields.io/badge/Privacy-100%25%20Client--Side-brightgreen.svg)](#-trust-safety--privacy-architecture)

---

## 👥 Team Information
* **Project**: BinaDarKe (بنا ڈر کے)
* **Hackathon**: Build4Better (NED University of Engineering & Technology)
* **Team Members**:
  * [Team Member 1 - Full-Stack / Product Designer]
  * [Team Member 2 - Frontend Engineer]
  * [Team Member 3 - Accessibility Specialist]
* **Repository**: [GitHub Repository URL]
* **Live Demo**: [https://binadarke.web.app](https://binadarke.web.app) (or local host)

---

## 🎯 Target User & The Problem

### Meet Abba Ji (Fictional Composite Persona)
* **Profile**: 67-year-old retired clerk in Pakistan using a budget Android device (3GB RAM).
* **Daily Apps**: WhatsApp (voice notes, family greetings), EasyPaisa (utility bills), and phone dialer.
* **The Real Barrier**: It is not a lack of intelligence; it is **fear of financial loss** and **fear of scolding**:
  > *"Agar ghalti se koi button dab gaya to meri saari pension kat jayegi."*  
  > *"Bachon ko bataunga to wo daantein ge ke aap phone mat chhera karein."*

### Why Existing Approaches Fail
1. **Advisories without practice**: Telling elders *"Never click links"* is useless when genuine bank alerts, utility bills, and courier notices also arrive via SMS. Elders become paralyzed with anxiety or blindly trust scammers using familiar brand names.
2. **High stakes in real apps**: Testing a transaction in real banking apps carries real financial risk. A mistake costs actual rupees.
3. **Complex jargon & English interfaces**: Dense banking terms ("CVV", "2FA", "Phishing domain") confuse elders.

---

## 💡 Solution: What BinaDarKe Is and Does

BinaDarKe eliminates the fear of technology with a core promise:
> **"Yahan ghalti karne par koi paisa nahi katega. Bilkul be-khauf seekhein!"**  
> *(Mistakes cost zero rupees here. Practice with complete peace of mind.)*

### Core Capabilities
1. **Practice Phone Module (`src/screens/PracticePhoneScreen.jsx`)**:
   * Realistic Android-style practice phone frame with persistent safety badge: *"PRACTICE ONLY: nothing is sent"*.
   * Fictional vector assets and contacts (`Ammi`, `Abu`, `Beti`, `Family Group`).
   * 4 data-driven lessons (`src/data/lessons.js`):
     * Share a family photo
     * Send a WhatsApp voice message
     * Check a payment safely before sending money (verify recipient title)
     * Recognize and report a suspicious link
   * Two modes: **Guided** (dynamic spotlight overlay with tooltips) and **Independent** (no hints, tracking attempts, wrong taps, and time).
   * Transparent, non-shaming feedback and one-tap progress erasure.

2. **4-Stage Teaching Loop (`src/screens/SoloPracticeScreen.jsx`)**:
   * **Guided**: Spot the 4 key red flags with audio explanations.
   * **Independent**: Decide *"Yeh Dhoka Hai (Scam)"* vs. *"Mehfooz Hai (Safe)"* without hints.
   * **Teach-Back**: One-tap interactive choice explaining *why* the message is a scam or safe to solidify mental models.
   * **Family Challenge**: One-tap WhatsApp share (`wa.me`) to challenge relatives.

3. **15 Balanced Scenarios (`src/data/scenarios.js`)**:
   * Covers 12 common Pakistani scam vectors: fake prize/BISP/Ehsaas, bank block threats, OTP social engineering, courier address fees, electricity cutoff threats, gas arrears notices, fake relative hospital emergencies, video-like task jobs, fake payment slip refund traps, regulatory impersonation, remote-access app traps (AnyDesk), and ATM PIN phishing.
   * **Crucially paired with 3 genuine messages** (routine debit alerts, legitimate utility bill reminders, and user-requested login OTPs) so learners build discernment instead of paranoia.

4. **Branching Phone Call Simulator (`src/screens/PhoneCallSimulatorScreen.jsx`)**:
   * Multi-turn interactive phone conversation with a fake bank manager.
   * Branching choices ("What would you say?"): panicked response vs. calm verification.
   * Consequence-free outcomes demonstrating why bank staff never ask for OTPs over the phone.

5. **Rule-Based Scam Scanner (`src/screens/ScamScannerScreen.jsx`)**:
   * 100% client-side, deterministic regex heuristic analyzer.
   * Detects credential theft, artificial urgency, prize bait, advance fees, shortened links, and unverified mobile senders.
   * Highlights triggered phrases in-context and explains each in plain language.
   * Low scores explicitly state: *"No known red flags found. This is a rule-based check, not a guarantee."*

6. **Accessibility & Buzurg (Elder) Mode**:
   * Body text $\ge$ 16px ($\ge$ 18px in Buzurg mode), touch targets $\ge$ 48px.
   * Zero `text-[10px]` or `text-[11px]` readable text anywhere in the app.
   * WCAG AA contrast, visible focus rings (`:focus-visible`), and `prefers-reduced-motion` CSS overrides.
   * Urdu Voiceover Bar supporting speech synthesis and audio layer fallbacks.

7. **Family Reassurance & Kid View (`src/screens/ResultScreen.jsx`)**:
   * Dedicated Kid View showing parents' practice summary without carrying any personal data.
   * 3 calm conversation starters over chai for family members.

---

## 🔒 Trust, Safety & Privacy Architecture

* **Zero Telemetry**: No Google Analytics, no Meta Pixel, no Mixpanel, no Sentry, no cookies, no tracking pixels.
* **Zero Backend**: BinaDarKe is 100% client-side. There is no remote database or server storing user inputs.
* **Zero Real Financial Data**: No real OTP, PIN, CNIC, card, or bank data is ever requested or accepted. Everything simulated is fictional.
* **Local Storage Safety (`src/utils/storage.js`)**: Preferences (language, Buzurg mode, test score) are stored purely in `window.localStorage` wrapped in defensive try/catch error handling.
* **One-Tap Data Purge**: Learners can wipe all saved progress, scores, and preferences in one tap from the Settings or Privacy screen (`storage.clearAllProgress()`).
* **First-Use Consent**: On first visit, learners are presented with a plain-language summary of these principles before practicing.

---

## 🛠️ Tech Stack & Dependencies

* **Frontend Framework**: React 19 (`react`, `react-dom`)
* **Build Tool & Bundler**: Vite 8 (`vite`, `@vitejs/plugin-react`)
* **Styling**: Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`)
* **Icons**: Lucide React (`lucide-react`)
* **Animations**: Framer Motion (`framer-motion`)
* **Testing Framework**: Vitest (`vitest`)
* **Hosting**: 100% static client-side hosting (Firebase Hosting, GitHub Pages, or Vercel static)

---

## 🚀 Setup & Local Execution

Ensure you have **Node.js 18+** and **npm** installed.

```bash
# 1. Clone the repository
git clone <repository-url>
cd <repository-directory>

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Run automated unit tests
npm test

# 5. Run ESLint code quality check
npm run lint

# 6. Build production bundle
npm run build

# 7. Preview production build locally
npm run preview
```

Development server runs at `http://localhost:5173/`.

---

## 🧪 Test Suite

BinaDarKe includes comprehensive automated unit tests (`npm test`):
* `src/utils/storage.test.js`: Validates safe get, set, remove, clear, and corrupted JSON resilience.
* `src/utils/scamScannerHeuristics.test.js`: Validates regex pattern matching for OTP theft, urgency threats, prize lures, and legitimate message handling.
* `src/data/translations.test.js`: Validates 100% key parity across Roman Urdu, Urdu script, and English, and verifies all 15 scenarios adhere to data contracts.

---

## ⚖️ Honest Disclosures (Simulated vs. Real)

To ensure full compliance with hackathon integrity standards:
* **Simulated Phone & Apps**: The WhatsApp chat, EasyPaisa wallet, and phone call interface are mock HTML/CSS components. They cannot send real SMS, place real cellular calls, or connect to real bank accounts.
* **Scam Scanner**: It is a **deterministic rule-based regex checker**, NOT a machine learning or generative AI model. It does not send text to external APIs and cannot guarantee 100% security.
* **Helplines**: Only official Pakistani emergency channels are provided:
  * FIA NR3C Cyber Crime: `1991` ([complaint.fia.gov.pk](https://complaint.fia.gov.pk))
  * State Bank of Pakistan (SBP) Consumer Protection: `111-727-273` / `1025` ([sbp.org.pk](https://www.sbp.org.pk))
  * Pakistan Telecommunication Authority (PTA): `0800-55055` / `9000` ([pta.gov.pk](https://www.pta.gov.pk))

---

## 🙏 Credits & Attributions

* **Visual Identity Inspiration**: Inspired by the Google Stitch export system and Soft-Neobrutalism design patterns.
* **Pair Programming**: Assisted by Antigravity AI coding assistant for architecture and accessible component implementations.
* **Logos & Brand Names**: EasyPaisa, JazzCash, HBL, Meezan Bank, SBP, and WhatsApp trademarks belong to their respective registered entities. They are featured strictly for educational simulation under nominative fair use. BinaDarKe is an independent educational tool not affiliated with or endorsed by these companies.
* **Fonts**: Google Fonts (`Noto Sans Arabic`, `Nunito Sans`, `Space Grotesk`, `Caveat`).

---

## 📌 Submission Verification

To verify the exact commit submitted for hackathon evaluation:

```bash
git rev-parse --short HEAD
```

**Submitted Commit**: `8e0443d` (or latest HEAD)
