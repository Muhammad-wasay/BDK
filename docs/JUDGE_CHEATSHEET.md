# BinaDarKe (بنا ڈر کے) • Hackathon Judge Cheatsheet
> **Evaluation Guide for Build4Better Hackathon Judges (NED University)**

---

## 📊 Rubric Alignment Matrix

| Rubric Criterion | Weight | Key BinaDarKe Implementation | Verification Location |
| :--- | :---: | :--- | :--- |
| **1. Ideation & Originality** | **20%** | • **Practice-by-doing**: Not an advisory text or passive video, but an interactive sandbox where mistakes cost 0 rupees.<br>• **Teach-Back Loop**: Learners choose *why* an alert is a scam, transforming passive recognition into active understanding.<br>• **Kid View & Chai Prompts**: Generational bridge turning scam awareness into a family bonding activity. | `src/screens/PracticePhoneScreen.jsx`<br>`src/screens/SoloPracticeScreen.jsx`<br>`src/screens/ResultScreen.jsx` |
| **2. Target User Understanding** | **16%** | • **Abba Ji Persona**: Modeled on Pakistani elders (fears scolding & pension loss; struggles with English bank jargon).<br>• **Realistic Context**: Focuses on budget Android phones, WhatsApp, EasyPaisa, and electricity cutoff panics.<br>• **Respectful Voice**: Respectful "Aap" grammar; spoken voiceovers in Urdu & Roman Urdu. | `docs/PERSONA.md`<br>`docs/INTERVIEW_NOTES.md`<br>`src/data/translations.js` |
| **3. Design & UI** | **16%** | • **Soft-Neobrutalism**: Distinctive `#1B2440` outlines, cream `#FFF4E0` background, high contrast palette.<br>• **Accessible Typography**: Body $\ge$ 16px ($\ge$ 18px in Buzurg mode), 0 instances of `text-[10px]` or `text-[11px]`.<br>• **Touch Targets**: All interactive elements $\ge$ 48px.<br>• **WCAG AA**: Visible focus rings, `prefers-reduced-motion` support. | `src/index.css`<br>`src/components/Navbar.jsx`<br>`src/components/phone/PhoneFrame.jsx` |
| **4. Trust, Safety & Privacy** | **16%** | • **100% Client-Side**: Zero telemetry, zero tracking cookies, zero database, zero remote API calls.<br>• **Defensive Storage (`storage.js`)**: Graceful try/catch fallback; one-tap complete progress wipe.<br>• **First-Use Consent**: Transparent modal setting expectations before practicing.<br>• **Zero Fabrications**: Honest disclosures; official helplines (FIA 1991, SBP 111-727-273, PTA 0800-55055) with last checked dates. | `src/utils/storage.js`<br>`src/screens/PrivacyScreen.jsx`<br>`src/components/FirstUseConsentModal.jsx`<br>`src/data/scenarios.js` |
| **5. Execution** | **16%** | • **Modern Stack**: React 19 + Vite 8 + Tailwind v4 + Framer Motion.<br>• **Code Splitting**: Dynamic `React.lazy()` with `<Suspense>` calm loading state.<br>• **Automated Unit Tests**: 17 passing Vitest tests covering storage, heuristics, and translations.<br>• **Zero Lint Errors**: Strict ESLint compliance with zero warnings. | `package.json`<br>`src/App.jsx`<br>`src/utils/storage.test.js`<br>`src/data/translations.test.js` |
| **6. Impact & Presentation** | **16%** | • **15 Balanced Scenarios**: 12 scams paired with 3 genuine bank/utility notifications to prevent paranoia.<br>• **Interactive Branching Call Simulator**: Multi-turn dialogue with consequences.<br>• **Shareable Certificate & Family Challenge**: WhatsApp prefilled messages spreading awareness virally. | `src/data/scenarios.js`<br>`src/screens/PhoneCallSimulatorScreen.jsx`<br>`DEMO_SCRIPT.md` |

---

## 🏛️ System Architecture Overview

```
                      +---------------------------------------+
                      |               index.html              |
                      |   Noto Sans Arabic / Space Grotesk    |
                      +-------------------+-------------------+
                                          |
                               +----------v----------+
                               |     App.jsx         |
                               | (ErrorBoundary)     |
                               +----------+----------+
                                          |
          +-------------------------------+-------------------------------+
          |                               |                               |
+---------v---------+           +---------v---------+           +---------v---------+
|   Practice Phone  |           |    Solo Test      |           |  Call Simulator   |
|   (Data-Driven    |           |   (Teach-Back     |           |   (Branching      |
|     Engine)       |           |   4-Stage Loop)   |           |    Dialogue)      |
+---------+---------+           +---------+---------+           +---------+---------+
          |                               |                               |
          +-------------------------------+-------------------------------+
                                          |
                               +----------v----------+
                               |  storage.js (Local) |
                               |  100% Client-Side   |
                               |   Zero Telemetry    |
                               +---------------------+
```

---

## 🔍 Anticipated Judge Questions & Crisp Answers

### Q1: "Why did you build this 100% client-side with no backend or database?"
> **Answer**: Senior citizens and vulnerable users should never be forced to create an account, enter an email, or surrender personal data just to learn about privacy. Building 100% client-side guarantees absolute privacy by architectural design—there is simply no server to compromise. It also enables offline PWA capabilities on weak mobile connections.

### Q2: "Why is the Scam Scanner rule-based rather than using an LLM or AI API?"
> **Answer**: Two reasons:
> 1. **Zero Data Leakage**: Sending user-pasted text (which might contain personal messages) to a third-party LLM violates privacy principles.
> 2. **Determinism & Transparency**: Rule-based heuristics run instantaneously in the browser, cost zero server fees, and explain the exact matching phrases (e.g. why `bit.ly` or `0345...` was flagged) without hallucinating.

### Q3: "Why did you include genuine messages alongside scams?"
> **Answer**: If an educational tool only shows fraud, users become paranoid and start ignoring legitimate electricity bills, bank debit receipts, and doctor appointments. True digital resilience requires discerning real communications from fake ones. That's why 3 of our 15 scenarios are authentic notifications.

### Q4: "How does the lesson engine support future scalability?"
> **Answer**: Lessons and scenarios are decoupled from the UI into declarative JSON schemas (`src/data/lessons.js` and `src/data/scenarios.js`). Adding a new lesson or scam vector requires zero component refactoring—only a new JSON object adhering to the schema.

---

## ⚡ Quick Verification Commands
```bash
# Run automated tests
npm test

# Run ESLint audit
npm run lint

# Build production bundle
npm run build

# Verify git commit identifier
git rev-parse --short HEAD
```
