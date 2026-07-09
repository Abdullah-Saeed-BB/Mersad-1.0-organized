# مِرصاد (النسخة المنظمة)
السلام عليكم, هذي نسخة من مشروع مرصاد (النسخة المنظمة) انشئت هذي النسخة لتسهيل على مجتمع المبرمجين التعديل و التطوير على تطبيق مِرصاد. تم اعادة تصميم هيكلة المشروع لتتماشة مع افضل ممارسات تطوير تطبيقات الويب, فتم وضع الاكواد في مجلد الـ `/src` فصل الاكواد الـ _CSS_ و الـ _Javascript_ في مجلدات مختلفة.
وضحت عملية تشغيل المشروع وطريقة تثبيت **خطوط ثمانية** في تطبيق مِرصاد, في فقرة **"التثبيت & التشغيل"**.

<img width="1920" height="422" alt="mersad_repo_banner" src="https://github.com/user-attachments/assets/7398a283-453f-4c6e-a816-ee91471720f4" />


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
└── storage.rules                    # قواعد الأمان التي تحدد صلاحيات الوصول لخدمة Firebase Cloud Storage
```

## التثبيت & التشغيل
### تحميل التطبيق
اولاً تحميل المشروع  يمكنك تحمليه عن طريق ضغط زر **"Code"** اعلى الصفحة المشروع و الضغط على **"Download ZIP"** وسيتحمل معك المشروع, او إذا كان لديك Git مثبت في جهازك اكتب الامر في التالي الـ **Terminal** (او CMD):

```git
git clone https://github.com/Abdullah-Saeed-BB/Mersad-1.0-organized.git
``` 

### التشغيل التطبيق
بعد التحميل افتح المشروع في **Visual Studio Code** (او اي محرر اكواد يناسبك), وقم بي تثبيت اضافة **Live Server** عن طريق الذهاب لقسم **Extensions** و كتابة اسم الاضافة في محرك البحث.
بعد التحميل, اذهب لملف الـ `src/index.html` واضغط على زر الماوس الأيمن, واضغط على خيار  **"Open with Live Server"** وسيفتح لك المتصفح ومع صفحة التطبيق. (الـ URL للصفحة: `127.0.0.1:5500/src/index.html`)
### تثبيت خطوط ثمانية
إذهب لي موقع الرسمي لي [خطوط ثمانية](https://font.thmanyah.com/) وقم بي تحميل الخطوط, بعد تحميل وفك الضغط للمجلد, إذهب لي مجلد `thmanyah typeface`  وسيتواجد مجلدين اساسين هما:
 - مجلد thmanyahsans.
 - مجلد thmanyahserifdisplay.
كم بنسخ جميع الخطوط المتواجدة في `thmanyahsans\otf`, ثم اذهب لي المشروع والصقها في مجلد `src\assets\fonts\thmanyahsans`, وقم بنفس العملية للمجلد الاخر, نسخ جميع الخطوط المتواجدة في `thmanyahserifdisplay/otf`, ثم اذهب لي المشروع والصقها في مجلد `src\assets\fonts\thmanyahserifdisplay`. 

وانتهينا.


