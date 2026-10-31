# BinaDarKe • Android Follow-Along Architecture (Capacitor 7)
> **Practise-by-Doing: Real Phone Extension**

---

## 🎯 Overview
In addition to the in-browser simulated Android phone, BinaDarKe supports an optional **Real Phone Follow-Along** workflow on Android via Capacitor 7:
1. The learner practices a task inside BinaDarKe's risk-free simulated phone (e.g., sending a voice note, checking recipient name).
2. Once confident, the learner can tap **"Practice on Real Phone"**.
3. BinaDarKe leverages the `@capacitor/app-launcher` plugin to open WhatsApp or EasyPaisa on the user's actual Android phone.
4. **Zero-Permission Privacy Guarantee**: BinaDarKe **never** requests runtime contact or SMS permissions, **never** reads chat histories, and **never** tracks banking apps. The learner returns to BinaDarKe and self-confirms: *"Maine asli phone par try kar liya!"*.

---

## 🛠️ Capacitor 7 Setup & Build Steps

### 1. Prerequisites
* Node.js 20+
* Android Studio Ladybug (or higher) with Android SDK 34+
* Java 17 (JDK)

### 2. Installation & Initialization
```bash
# 1. Install Capacitor core, CLI, and Android platform
npm install @capacitor/core@^7.0.0 @capacitor/cli@^7.0.0 @capacitor/android@^7.0.0

# 2. Install App Launcher plugin for opening real messaging/banking apps
npm install @capacitor/app-launcher@^7.0.0

# 3. Initialize Capacitor project
npx cap init "BinaDarKe" "pk.binadarke.app" --web-dir "dist"

# 4. Build Vite web bundle
npm run build

# 5. Add Android native platform
npx cap add android
```

### 3. Android Intent Configuration (`android/app/src/main/AndroidManifest.xml`)
To safely query and open WhatsApp on Android 11+ (API 30+ package visibility restrictions):
```xml
<queries>
  <!-- Allow opening WhatsApp for follow-along practice -->
  <package android:name="com.whatsapp" />
  <!-- Allow opening official mobile wallets if installed -->
  <package android:name="pk.com.telenor.phoenix" /> <!-- EasyPaisa -->
  <package android:name="com.techlogix.mobilinkcustomer" /> <!-- JazzCash -->
</queries>
```

### 4. Code Implementation (`src/utils/capacitorLauncher.js`)
```javascript
import { AppLauncher } from '@capacitor/app-launcher';

export async function openRealWhatsApp() {
  try {
    const canOpen = await AppLauncher.canOpenUrl({ url: 'whatsapp://send' });
    if (canOpen.value) {
      await AppLauncher.openUrl({ url: 'whatsapp://send' });
      return { success: true };
    } else {
      return { success: false, reason: 'WhatsApp not installed' };
    }
  } catch (err) {
    console.warn('[AppLauncher] Real phone launch fallback:', err);
    return { success: false, error: err };
  }
}
```

### 5. Run & Test on Connected Android Device
```bash
# Sync web build to native Android workspace
npx cap sync android

# Run on connected phone via adb
npx cap run android
```
