/**
 * BinaDarKe - Data-Driven Practice Lessons
 * Each lesson is defined as a series of steps with target elements,
 * multilingual instructions, hints, wrong-tap messages, and audio narrations.
 */

export const FICTIONAL_CONTACTS = [
  { id: 'ammi', name: 'Ammi (امی)', avatar: '👵', relation: 'Mother', unread: 2 },
  { id: 'abu', name: 'Abu (ابو)', avatar: '👴', relation: 'Father', unread: 0 },
  { id: 'beti', name: 'Beti Ayesha (عائشہ)', avatar: '👧', relation: 'Daughter', unread: 1 },
  { id: 'family_group', name: 'Apna Pyaara Khandaan (خاندان)', avatar: '🏡', relation: 'Family Group', unread: 5 }
];

export const FICTIONAL_GALLERY_PHOTOS = [
  {
    id: 'photo_eid',
    title: 'Eid Mubarak Morning',
    category: 'Family',
    svgType: 'eid'
  },
  {
    id: 'photo_tea',
    title: 'Shaam Ki Chai',
    category: 'Family',
    svgType: 'tea'
  },
  {
    id: 'photo_garden',
    title: 'Ghar Ka Bagheecha',
    category: 'Nature',
    svgType: 'garden'
  },
  {
    id: 'photo_mangoes',
    title: 'Sindhri Aam Ki Peti',
    category: 'Food',
    svgType: 'mangoes'
  },
  {
    id: 'photo_mosque',
    title: 'Lahore Sair Safar',
    category: 'Travel',
    svgType: 'mosque'
  },
  {
    id: 'photo_drawing',
    title: 'Poti Ki Pehli Drawing',
    category: 'Art',
    svgType: 'drawing'
  }
];

export const LESSONS_DATA = [
  {
    id: 'lesson_share_photo',
    moduleNumber: 1,
    title: {
      roman: "Family Photo WhatsApp Par Bhejein",
      urdu: "خاندان کی تصویر واٹس ایپ پر بھیجیں",
      en: "Share a Family Photo on WhatsApp"
    },
    subtitle: {
      roman: "Gallery se tasveer muntakhab kar ke Ammi ko bhejna seekhein.",
      urdu: "گیلری سے تصویر منتخب کر کے امی کو محفوظ طریقے سے بھیجیں۔",
      en: "Select a photo from your gallery and send it to Ammi with confidence."
    },
    icon: 'image',
    difficulty: 'beginner',
    estimatedMinutes: 2,
    steps: [
      {
        stepIndex: 1,
        screen: 'home',
        targetId: 'phone-app-gallery',
        instruction: {
          roman: "Phone ki home screen par 'Gallery' app par tap karein.",
          urdu: "فون کی ہوم اسکرین پر موجود 'گیلری' ایپ پر ٹیپ کریں۔",
          en: "Tap on the 'Gallery' app icon on the home screen."
        },
        hint: {
          roman: "Neelay aur peele rang ka tasveer wala icon dhoondein.",
          urdu: "نیلے اور پیلے رنگ کا تصویر والا گیلری آئیکون تلاش کریں۔",
          en: "Look for the colorful image icon labeled 'Gallery'."
        },
        wrongTapMessage: {
          roman: "Ye doosri app hai. Barah-e-karam 'Gallery' icon par tap karein.",
          urdu: "یہ دوسری ایپ ہے۔ براہ کرم 'گیلری' کے نشان پر ٹیپ کریں۔",
          en: "That is a different app. Please tap the Gallery app icon."
        },
        audioText: {
          roman: "Pehla marhala: Phone ki screen par Gallery icon dhoond kar ungli lagayein.",
          urdu: "پہلا مرحلہ: فون کی اسکرین پر گیلری کا آئیکون تلاش کر کے اس پر ٹیپ کریں۔",
          en: "Step one: Locate and tap the Gallery icon on your simulated home screen."
        }
      },
      {
        stepIndex: 2,
        screen: 'gallery',
        targetId: 'gallery-item-photo_tea',
        instruction: {
          roman: "'Shaam Ki Chai' wali tasveer par tap karein.",
          urdu: "'شام کی چائے' والی خاندانی تصویر پر ٹیپ کریں۔",
          en: "Tap on the 'Shaam Ki Chai' family photo."
        },
        hint: {
          roman: "Chai ke cup aur samose wali tasveer muntakhab karein.",
          urdu: "چائے کے کپ والی پہلی تصویر پر انگلی لگائیں۔",
          en: "Select the tea cup photo from the gallery grid."
        },
        wrongTapMessage: {
          roman: "Aapne doosri tasveer par tap kiya. 'Shaam Ki Chai' tasveer muntakhab karein.",
          urdu: "آپ نے دوسری تصویر چنی ہے۔ شام کی چائے والی تصویر منتخب کریں۔",
          en: "Please tap the 'Shaam Ki Chai' photo to continue."
        },
        audioText: {
          roman: "Doosra marhala: Ab chai wali tasveer par tap karke ise select karein.",
          urdu: "دوسرا مرحلہ: اب چائے والی تصویر پر کلک کر کے اسے منتخب کریں۔",
          en: "Step two: Select the tea photo to open the preview."
        }
      },
      {
        stepIndex: 3,
        screen: 'gallery_view',
        targetId: 'btn-photo-share',
        instruction: {
          roman: "Neeche diye gaye 'Share' (شیئر) button par tap karein.",
          urdu: "نیچے دیے گئے 'شیئر' (Share) بٹن پر ٹیپ کریں۔",
          en: "Tap the 'Share' action button at the bottom."
        },
        hint: {
          roman: "Share ka teer wala nishan screen ke neeche mojood hai.",
          urdu: "شیئر کا تیر والا نشان اسکرین کے نیچے موجود ہے۔",
          en: "Look for the share icon at the bottom action bar."
        },
        wrongTapMessage: {
          roman: "Tasveer bhejne ke liye 'Share' button dabayein.",
          urdu: "تصویر آگے بھیجنے کے لیے شیئر کا بٹن دبائیں۔",
          en: "Tap the Share button to bring up sending options."
        },
        audioText: {
          roman: "Teesra marhala: Tasveer bhejne ke liye share button dabayein.",
          urdu: "تیسرا مرحلہ: تصویر آگے بھیجنے کے لیے نیچے شیئر بٹن دبائیں۔",
          en: "Step three: Tap the share button to select the sending app."
        }
      },
      {
        stepIndex: 4,
        screen: 'sharesheet',
        targetId: 'share-contact-ammi',
        instruction: {
          roman: "Rabtay ki fehrist mein se 'Ammi (امی)' par tap karein.",
          urdu: "رابطوں کی فہرست میں سے 'امی (Ammi)' پر ٹیپ کریں۔",
          en: "Select 'Ammi' from the share sheet contact list."
        },
        hint: {
          roman: "Ammi ka naam sab se ooper sabz daira mein hai.",
          urdu: "امی کا نام سب سے اوپر واٹس ایپ رابطوں میں ہے۔",
          en: "Look for Ammi at the top of the contacts list."
        },
        wrongTapMessage: {
          roman: "Ye doosra contact hai. 'Ammi' par tap karein.",
          urdu: "یہ دوسرا رابطہ ہے۔ براہ کرم 'امی' پر ٹیپ کریں۔",
          en: "Please tap on Ammi's contact to send her the picture."
        },
        audioText: {
          roman: "Chautha marhala: Fehrist mein se Ammi ka naam muntakhab karein.",
          urdu: "چوتھا مرحلہ: فہرست میں سے امی کے نام کا انتخاب کریں۔",
          en: "Step four: Tap on Ammi's name to send the photo directly."
        }
      }
    ]
  },
  {
    id: 'lesson_voice_note',
    moduleNumber: 2,
    title: {
      roman: "WhatsApp Voice Message Bhejein",
      urdu: "واٹس ایپ وائس میسج بھیجیں",
      en: "Send a WhatsApp Voice Note"
    },
    subtitle: {
      roman: "Bina typing kiye aawaz ka paigham record kar ke bhejna seekhein.",
      urdu: "بغیر ٹائپنگ کیے آواز کا پیغام ریکارڈ کر کے بھیجنا سیکھیں۔",
      en: "Learn to record and send an audio message without tedious typing."
    },
    icon: 'mic',
    difficulty: 'beginner',
    estimatedMinutes: 2,
    steps: [
      {
        stepIndex: 1,
        screen: 'home',
        targetId: 'phone-app-whatsapp',
        instruction: {
          roman: "Phone screen par 'WhatsApp' icon par tap karein.",
          urdu: "فون اسکرین پر 'واٹس ایپ' (WhatsApp) کے نشان پر ٹیپ کریں۔",
          en: "Tap on the 'WhatsApp' app icon on the home screen."
        },
        hint: {
          roman: "Sabz rang ka phone wala WhatsApp icon dhoondein.",
          urdu: "سبز رنگ کا واٹس ایپ آئیکون تلاش کریں۔",
          en: "Look for the green WhatsApp icon."
        },
        wrongTapMessage: {
          roman: "Ye WhatsApp nahi hai. Sabz WhatsApp icon par tap karein.",
          urdu: "یہ واٹس ایپ نہیں ہے۔ سبز واٹس ایپ نشان پر ٹیپ کریں۔",
          en: "Please tap the green WhatsApp icon."
        },
        audioText: {
          roman: "WhatsApp kholne ke liye sabz icon par tap karein.",
          urdu: "واٹس ایپ کھولنے کے لیے سبز آئیکون پر ٹیپ کریں۔",
          en: "Tap the green WhatsApp icon to open your chats."
        }
      },
      {
        stepIndex: 2,
        screen: 'chat_list',
        targetId: 'chat-item-beti',
        instruction: {
          roman: "'Beti Ayesha' ki chat par tap karke guftagu kholein.",
          urdu: "'بیٹی عائشہ' کی چیٹ پر ٹیپ کر کے گفتگو کھولیں۔",
          en: "Tap on 'Beti Ayesha' to open her conversation."
        },
        hint: {
          roman: "Beti Ayesha ka naam fehrist mein dhoondein.",
          urdu: "فہرست میں بیٹی عائشہ کا نام منتخب کریں۔",
          en: "Find and tap Beti Ayesha in the chat list."
        },
        wrongTapMessage: {
          roman: "Ye doosri chat hai. 'Beti Ayesha' ki chat kholein.",
          urdu: "یہ دوسری چیٹ ہے۔ بیٹی عائشہ کی چیٹ پر ٹیپ کریں۔",
          en: "Please tap Beti Ayesha's chat."
        },
        audioText: {
          roman: "Beti Ayesha ki chat kholne ke liye unke naam par ungli lagayein.",
          urdu: "بیٹی عائشہ کی چیٹ کھولنے کے لیے ان کے نام پر ٹیپ کریں۔",
          en: "Tap Beti Ayesha to open her messaging thread."
        }
      },
      {
        stepIndex: 3,
        screen: 'chat_thread',
        targetId: 'btn-mic-record',
        instruction: {
          roman: "Sabz microphone (مائیکروفون) button par tap karein taake aawaz record ho.",
          urdu: "سبز مائیکروفون بٹن پر ٹیپ کریں تاکہ آپ کی آواز ریکارڈ ہو۔",
          en: "Tap the green microphone button to record your voice note."
        },
        hint: {
          roman: "Neeche seedhi taraf sabz rang ka mic icon dhoondein.",
          urdu: "نیچے دائیں جانب موجود مائیکروفون کے نشان پر ٹیپ کریں۔",
          en: "Look for the circular green mic icon at the bottom right."
        },
        wrongTapMessage: {
          roman: "Aawaz bhejne ke liye sabz microphone button dabayein.",
          urdu: "آواز ریکارڈ کرنے کے لیے مائیک کے نشان پر ٹیپ کریں۔",
          en: "Tap the mic icon to record."
        },
        audioText: {
          roman: "Aawaz record karne ke liye mic ke button par ungli lagayein.",
          urdu: "آواز کا پیغام ریکارڈ کرنے کے لیے مائیک بٹن پر کلک کریں۔",
          en: "Tap the green microphone button to capture your voice message."
        }
      }
    ]
  },
  {
    id: 'lesson_verify_payment',
    moduleNumber: 3,
    title: {
      roman: "Paisa Bhejne Se Pehle Tasdeeq Karein",
      urdu: "پیسہ بھیجنے سے پہلے نام کی تصدیق کریں",
      en: "Safely Verify Recipient Before Sending Money"
    },
    subtitle: {
      roman: "EasyPaisa ya JazzCash par ghalt number ya fraud ko rokein.",
      urdu: "ایزی پیسہ پر پیسے بھیجتے وقت وصول کنندہ کا نام پرکھنا سیکھیں۔",
      en: "Inspect recipient credentials and prevent accidental or scam money transfers."
    },
    icon: 'shield-check',
    difficulty: 'intermediate',
    estimatedMinutes: 3,
    steps: [
      {
        stepIndex: 1,
        screen: 'home',
        targetId: 'phone-app-easypaisa',
        instruction: {
          roman: "Phone screen par 'EasyPaisa' wallet app par tap karein.",
          urdu: "فون اسکرین پر 'ایزی پیسہ' (EasyPaisa) ایپ پر ٹیپ کریں۔",
          en: "Tap on the 'EasyPaisa' wallet icon on the home screen."
        },
        hint: {
          roman: "Sabz rang ka EasyPaisa logo dhoondein.",
          urdu: "سبز اور سفید رنگ کا ایزی پیسہ آئیکون تلاش کریں۔",
          en: "Find the green EasyPaisa wallet icon."
        },
        wrongTapMessage: {
          roman: "EasyPaisa app kholne ke liye iske logo par tap karein.",
          urdu: "براہ کرم ایزی پیسہ کے نشان پر ٹیپ کریں۔",
          en: "Tap the EasyPaisa app icon."
        },
        audioText: {
          roman: "EasyPaisa wallet kholne ke liye app icon par tap karein.",
          urdu: "ایزی پیسہ ایپ کھولنے کے لیے اس کے آئیکون پر ٹیپ کریں۔",
          en: "Tap the EasyPaisa app to open your digital wallet."
        }
      },
      {
        stepIndex: 2,
        screen: 'wallet_home',
        targetId: 'btn-send-money',
        instruction: {
          roman: "'Send Money' (رقم بھیجیں) button par tap karein.",
          urdu: "'رقم بھیجیں' (Send Money) بٹن پر ٹیپ کریں۔",
          en: "Tap on the 'Send Money' button."
        },
        hint: {
          roman: "Bada sabz button jis par 'Send Money' likha hai.",
          urdu: "بڑا بٹن جس پر 'رقم بھیجیں' درج ہے۔",
          en: "Tap the large 'Send Money' option."
        },
        wrongTapMessage: {
          roman: "Raqam transfer karne ke liye 'Send Money' par tap karein.",
          urdu: "رقم بھیجنے کے لیے 'Send Money' پر ٹیپ کریں۔",
          en: "Please tap the Send Money button."
        },
        audioText: {
          roman: "Raqam transfer shuru karne ke liye Send Money button dabayein.",
          urdu: "رقم بھیجنے کا عمل شروع کرنے کے لیے Send Money منتخب کریں۔",
          en: "Tap Send Money to initiate the transfer."
        }
      },
      {
        stepIndex: 3,
        screen: 'wallet_transfer_confirm',
        targetId: 'verify-recipient-name',
        instruction: {
          roman: "Ghor se dekhein! Wasool karne walay ka naam check karein: 'Hassan Ali'.",
          urdu: "غور سے دیکھیں! وصول کنندہ کا نام چیک کریں: 'حسن علی'۔",
          en: "Carefully inspect the verified recipient name: 'Hassan Ali'."
        },
        hint: {
          roman: "Naam par tap karke tasdeeq karein ke ye wahi shakhs hai jise paise bhejne hain.",
          urdu: "نام والے خانے پر ٹیپ کر کے تسلی کریں کہ نام درست ہے۔",
          en: "Tap on the recipient name box to confirm it matches who you intended."
        },
        wrongTapMessage: {
          roman: "Pehle recipient ka naam tasdeeq karein.",
          urdu: "پہلے وصول کنندہ کا نام پرکھیں۔",
          en: "Always inspect the recipient name before entering your PIN."
        },
        audioText: {
          roman: "Ahem naseehat: Kisi ko bhi paise bhejne se pehle screen par uska naam zaroor parhein.",
          urdu: "اہم نصیحت: پیسہ بھیجنے سے پہلے اسکرین پر وصول کنندہ کا اصل نام لازمی پڑھیں۔",
          en: "Golden rule: Always verify the recipient's full name before entering any PIN."
        }
      },
      {
        stepIndex: 4,
        screen: 'wallet_transfer_confirm',
        targetId: 'btn-confirm-safe-send',
        instruction: {
          roman: "Tasdeeq ke baad 'Send Rs. 500' button dabayein (Practice Simulation).",
          urdu: "تسلی کے بعد '500 روپے بھیجیں' پر کلک کریں (محفوظ مشق)۔",
          en: "After verifying, tap 'Send PKR 500' (Safe Practice Simulation)."
        },
        hint: {
          roman: "Neeche sabz button par tap karein.",
          urdu: "نیچے موجود سبز بٹن دبائیں۔",
          en: "Tap the green confirm button at the bottom."
        },
        wrongTapMessage: {
          roman: "Raqam bhejne ke liye confirm button dabayein.",
          urdu: "رقم بھیجنے کے لیے کنفرم بٹن دبائیں۔",
          en: "Tap confirm to complete the practice transfer."
        },
        audioText: {
          roman: "Shabash! Tasdeeq mukammal hui. Ab mehfooz send button dabayein.",
          urdu: "شاباش! نام کی تصدیق ہو گئی۔ اب محفوظ طریقے سے رقم بھیجیں۔",
          en: "Well done! Recipient verified. Tap confirm to complete the transfer safely."
        }
      }
    ]
  },
  {
    id: 'lesson_ignore_scam_link',
    moduleNumber: 4,
    title: {
      roman: "Mashkook Link Pehchano aur Ignore Karo",
      urdu: "مشکوک لنک پہچانیں اور بلاک کریں",
      en: "Recognize & Report a Deceptive Link"
    },
    subtitle: {
      roman: "Ajeeb link par click karne ke bajaye report aur block karna seekhein.",
      urdu: "کسی بھی انجانے لنک کو کھولنے کے بجائے بلاک کرنا سیکھیں۔",
      en: "Avoid phishing traps by learning to report and block instead of tapping links."
    },
    icon: 'alert-triangle',
    difficulty: 'intermediate',
    estimatedMinutes: 2,
    steps: [
      {
        stepIndex: 1,
        screen: 'chat_thread_scam',
        targetId: 'inspect-fake-link-domain',
        instruction: {
          roman: "Miesaj mein diye gaye '.xyz' link ko ghor se dekhein, isay kholna nahi hai!",
          urdu: "پیغام میں موجود 'xyz' والے لنک کو غور سے دیکھیں، اسے کھولنا نہیں ہے!",
          en: "Inspect the suspicious '.xyz' domain in the message. Do NOT open it!"
        },
        hint: {
          roman: "Surkh rang mein highlighted link par tap karein taake iska khatra samjhain.",
          urdu: "سرخ رنگ میں نمایاں کیے گئے لنک پر ٹیپ کریں۔",
          en: "Tap the highlighted link box to inspect its warning tag."
        },
        wrongTapMessage: {
          roman: "Mashkook link par tap karke iska warning note dekhein.",
          urdu: "مشکوک لنک کو منتخب کریں۔",
          en: "Tap the highlighted link to inspect why it is suspicious."
        },
        audioText: {
          roman: "Khatra: Is link ke aakhir mein xyz likha hai. Asli sarkari websites gov.pk hoti hain.",
          urdu: "خطرہ: اس لنک کے آخر میں ڈاٹ ایکس وائی زیڈ لکھا ہے۔ اصلی سرکاری ویب سائٹس gov.pk ہوتی ہیں۔",
          en: "Danger alert: Notice the rogue .xyz extension. Official government sites use .gov.pk."
        }
      },
      {
        stepIndex: 2,
        screen: 'chat_thread_scam',
        targetId: 'btn-block-scam-sender',
        instruction: {
          roman: "Ab 'Block & Report' (بلاک کریں) button par tap karke chor ko block karein.",
          urdu: "اب 'بلاک کریں' (Block & Report) بٹن پر ٹیپ کر کے فراڈیے کو بلاک کریں۔",
          en: "Now tap 'Block & Report' to stop the sender from messaging you again."
        },
        hint: {
          roman: "Ooper surkh rang ka Block button dhoondein.",
          urdu: "اوپر موجود سرخ رنگ کا بلاک بٹن دبائیں۔",
          en: "Look for the red Block & Report button."
        },
        wrongTapMessage: {
          roman: "Choron se bachnay ka sahi tareeqa 'Block' karna hai.",
          urdu: "دھوکے سے بچنے کا بہترین طریقہ بلاک کرنا ہے۔",
          en: "Tap Block & Report to protect your phone."
        },
        audioText: {
          roman: "Shabash! Link par click karne ke bajaye number ko block karna hi aqal-mandi hai.",
          urdu: "بہت خوب! کسی بھی انجانے لنک پر کلک کرنے کے بجائے نمبر کو بلاک کرنا ہی اصل حفاظت ہے۔",
          en: "Excellent! Blocking the number is always the safest response to unsolicited links."
        }
      }
    ]
  }
];
