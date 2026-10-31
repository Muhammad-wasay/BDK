# BinaDarKe • بغیر ڈر کے
> **Pakistan's First Fear-Free Anti-Scam Training Sandbox for Families & Elders**

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)](https://tailwindcss.com)

---

## 💡 Project Vision & Core Philosophy

In Pakistan, elders and parents frequently fall victim to digital scams (fake lottery messages, bank account block threats, electricity cutoff notices, and OTP thefts). The root problem is often **fear & lack of safe practice**—elders are terrified of pressing the wrong button.

**BinaDarKe** eliminates this fear with a radical promise:
> **"Yahan ghalti karne par koi paisa nahi katega. Bilkul be-khauf seekhein!"**
> *(Mistakes cost zero rupees here. Learn with complete peace of mind.)*

---

## 🚀 How to Run Locally

```bash
# 1. Navigate to the project directory
cd BinaDarKe

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```
Local URL: `http://localhost:5174/` (or `5173`)

---

## ✅ What Has Been Implemented (Completed Work)

### 1. Design System & Aesthetics (Soft Neobrutalism)
* **Signature Stitch Black Outlines**: 2.5px - 3px solid `#1B2440` borders on all cards, buttons, badges, and modals.
* **Colors**: Warm cream canvas (`#FFF4E0`), butter yellow (`#FFF1A8`), soft mint (`#B8F2D0`), coral warning (`#FF6B6B`), lavender (`#D4C5F9`), and peach (`#FFD3B6`).
* **Subtle Tactile Shadows**: Replaced bulky cardboard block shadows with crisp 2px depth (`shadow-[2px_2px_0px_#1B2440]`) and smooth pressed-down active states (`.btn-tactile`).
* **Typography**: Space Grotesk (headings), Nunito Sans (body), Caveat (handwritten accents), and Noto Sans Arabic / Noto Nastaliq (Urdu script).

### 2. Multi-Language System (Zero Mixing)
* **Dedicated Language Switcher**: `Roman Urdu` (Default) | `اردو` (RTL) | `English`.
* All content cleanly separated in `src/data/translations.js` and `src/data/scenarios.js`—no awkward mixing of three languages in one sentence.

### 3. Audio & Accessibility (Elder Mode)
* **Urdu Audio Guide (`UrduVoiceoverBar.jsx`)**: Integrated with Web Speech API (`SpeechSynthesis`) configured with a gentle 0.88x speech rate for elder-friendly comprehension.
* **Buzurg Mode (Elder Mode)**: Instant toggle button in the navbar that enlarges typography and boosts touch targets across all screens.

### 4. Interactive Screens
* **`LandingScreen.jsx`**:
  * Top micro-ticker awareness line (`OTP kisi ko nahi dena • Anjane link pe click na karein`).
  * Full-resolution official logo without duplicate text.
  * Interactive WhatsApp phone sandbox preview with decision buttons.
  * 3 Bento feature cards + heartwarming elder testimonial.
* **`GuidedPracticeScreen.jsx`**:
  * Step-by-step hotspot inspection on a fake Ehsaas cash prize WhatsApp message.
  * 4 interactive hotspots: *Lalach (Rs. 50,000)*, *Khufia PIN*, *Jaldbazi (Cancel ho jayega)*, and *Naqli Link*.
  * Clicking hotspots focuses the corresponding "Ustaad ki Naseehat" breakdown card.
  * Safe simulated link click warning alert.
* **`SoloPracticeScreen.jsx`**:
  * 5 real-life Pakistani scenarios (4 scams + 1 legitimate bank alert to teach distinguishing real alerts from fraud).
  * Big decision buttons: *"Mehfooz Hai (Safe)"* vs *"Dhoka Hai (Scam!)"*.
  * Hint/Ishara drawer.
  * Instant feedback drawer explaining the exact red flags with dynamic score tracking.
* **`ResultScreen.jsx`**:
  * Dynamic score pill (e.g. 4/5) with *Zero Real Money Nuqsan* guarantee.
  * Confidence meter progress bar.
  * Baba Ji speech bubble with personalized encouraging advice.
  * Detailed review list for each question with modal tips.
  * Action buttons: *Certificate*, *Retry*, and *Return Home*.
  * WhatsApp Family Share button to send results to children.

### 5. Modals
* **`HelplineModal.jsx`**: Official Pakistani hotlines (FIA Cyber Crime **1991**, State Bank **111-727-273**, PTA **9000**, BinaDarKe **0800-BINA-DARR**) + 4 Elder Golden Rules.
* **`CertificateModal.jsx`**: Downloadable/printable "Safe Citizen Certificate" with customizable recipient name, date, and verified badge.

---

## 🛠️ Project Structure

```
BinaDarKe/
├── public/
│   ├── official_logo.png     # Cropped high-res brand logo
│   ├── favicon-logo.png      # Favicon emblem
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.jsx   # Top micro-ticker line
│   │   ├── Navbar.jsx            # Animated floating navbar & language switcher
│   │   ├── HelplineModal.jsx     # Pakistan cyber crime helplines
│   │   ├── CertificateModal.jsx  # Printable Safe Citizen Certificate
│   │   └── UrduVoiceoverBar.jsx  # Audio voiceover player
│   ├── data/
│   │   ├── scenarios.js          # Guided & Solo scenarios (3 languages)
│   │   └── translations.js       # Pure Roman, Urdu, and English dictionaries
│   ├── screens/
│   │   ├── LandingScreen.jsx
│   │   ├── GuidedPracticeScreen.jsx
│   │   ├── SoloPracticeScreen.jsx
│   │   └── ResultScreen.jsx
│   ├── App.jsx                   # Main state & screen router
│   ├── index.css                 # Stitch design tokens & typography
│   └── main.jsx
├── index.html
└── package.json
```

---

## 🎯 Next Steps & Future Roadmap (For Incoming Developer)

### Priority 1: Polish & Enhancements
1. **Real Human Audio Files (MP3)**:
   * Currently, audio uses the browser's Web Speech API (`SpeechSynthesis`).
   * Replacing this with real human voice recordings (a warm, affectionate Pakistani elder/uncle voice) in MP3 format will make it 10x more relatable and engaging.
2. **Tactile Sound Effects**:
   * Add subtle audio sound effects on button clicks (mechanical click sound) and success chimes when picking the correct answer.
3. **State Persistence (`localStorage`)**:
   * Save quiz score and current screen in `localStorage` so page refreshes don't lose progress.
4. **Mobile Optimization**:
   * Test specifically on low-cost Android devices commonly used by Pakistani parents (Infinix, Tecno, Redmi).

### Priority 2: New Features
1. **Fake Voice Call Simulator (Level 2)**:
   * Many Pakistani elders are duped via fake phone calls ("Main bank manager bol raha hoon, OTP batayein").
   * Build an interactive Incoming Call UI with Accept / Reject buttons and simulated audio dialogue.
2. **EasyPaisa / JazzCash Scam Level (Level 3)**:
   * Fake screenshot payment slips and QR code manipulation scenarios.
3. **"Scam Scanner" (Community Feature)**:
   * Allow users or children to paste a suspicious SMS or upload a screenshot to get instant guidance on whether it's safe or a fraud.
4. **WhatsApp Family Challenge Link**:
   * A pre-filled WhatsApp share link allowing sons/daughters to send a challenge to their parents or family group: *"Ammi ye test karein aur certificate hasil karein!"*.
