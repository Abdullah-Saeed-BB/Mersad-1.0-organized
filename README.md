# مِرصاد (النسخة المنظمة)

السلام عليكم, هذي نسخة من مشروع مرصاد (النسخة المنظمة) تم عمل هذي النسخة لتسهيل على مجتمع المبرمجين التعديل و التطوير على تطبيق مِرصاد. تم اعادة تصميم الهيكلة المشروع متماشياً مع افضل ممارسات تطوير تطبيقات الويب, فتم وضع الاكواد في مجلد الـ `/src` فصل الاكواد الـ _CSS_ و الـ _Javascript_ في مجلدات مختلفة. مع عمل ملف `INSTALLATION.md` توضح عملية تشغيل المشروع, وطريقة تثبيت **خطوط ثمانية** في التطبيق.

<img width="1920" height="422" alt="mersad_repo_banner" src="https://github.com/user-attachments/assets/14bbac11-7c44-4059-977f-6ee74dc1a671" />


## هيلكة المشروع

```

Mersad-1.0-organized/
├── public/
│   ├── icon-192.png                 # أيقونة تطبيق الـ PWA بحجم 192x192
│   └── icon-512.png                 # أيقونة تطبيق الـ PWA بحجم 512x512
├── src/
│   ├── assets/fonts/
│   │   ├── thmanyahsans/           # يحتوي على جميع ملفات خط ثمانية (thmanyah sans)
│   │   ├── thmanyahserifdisplay/   # يحتوي على جميع ملفات خط ثمانية عريض (thmanyah serif display)
│   ├── js/
│   │   ├── auth.js                  # يتعامل مع مصادقة المستخدمين (الربط مع Firebase Auth)
│   │   ├── main.js                  # المتحكم الرئيسي بالتطبيق لمنطق لوحة التحكم، الحالة (State)، والتفاعل
│   │   ├── service-worker.js       # الإعدادات الأساسية لملف الـ service worker
│   │   └── sony-fx3.js             # منطق الربط وملفات التحكم الخاصة بكاميرا Sony FX3
│   ├── styles/
│   │   ├── global.css               # تنسيقات CSS المظهر العام، الكلاسات المساعدة (Utility)، والمتغيرات الأساسية
│   │   ├── index.css                # تنسيقات CSS واجهة المستخدم الخاصة بلوحة التحكم الرئيسية ومكوناتها
│   │   └── teleprompter.css        # تنسيقات CSS مخصصة لنمط عرض الملقن (Teleprompter)
│   ├── index.html                   # نقطة الدخول الرئيسية وواجهة المستخدم للتطبيق
│   ├── sw.js                        # تفعيل الـ service worker للتخزين المؤقت دون اتصال (Offline Caching) والـ PWA
│   └── teleprompter.html            # هيكل HTML الخاص بوحدة الملقن (Teleprompter) المدمجة
├── firebase.json                    # ملف إعدادات خدمات Firebase Hosting و Firestore و Storage
├── firestore.rules                  # قواعد الأمان التي تحدد صلاحيات الوصول لمجموعات Firestore
├── manifest.json                    # ملف بيان الويب (Manifest) الذي يحدد البيانات الوصفية لتطبيق الـ PWA
├── README.md                        # نظرة عامة على المشروع والتوثيق العام
├── INSTALLATION.md                  # تفاصيل عملية تشغيل وتحميل ملفات المشروع
└── storage.rules                    # قواعد الأمان التي تحدد صلاحيات الوصول لخدمة Firebase Cloud Storage
```
