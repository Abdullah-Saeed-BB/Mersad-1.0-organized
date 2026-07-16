<img width="3840" height="552" alt="banner" src="https://github.com/user-attachments/assets/4419015c-e670-4ce3-a246-4ed81b6d32eb" />

<h1 align="center">مِداد</h1>
<h3 align="center">هو مساعد ذكاء اصطناعي صمم لمساعدة المصورين والكُتاب في كتابة محتوى, وهو اضافة في مِرصاد وهو تطبيق لتنظيم وإدارة عمليات التصوير.</h3>
<h3 align="center">تم استعمال نموذج <code>Gemini 3.1 Flash-Lite</code> كعقل لي مِداد.</h3>


<h2 align="center">إمكانيات مِداد</h2>

<img width="3840" height="552" alt="feature_1_mention_content" src="https://github.com/user-attachments/assets/3e8de1c2-0a09-40e6-98bd-e801485d91ab" />
<p align="center">فهو ليس مجرد روبوت محادثة, فتستطيع الإشارة لمحتويات سابقة من دون حاجة لي نسخ المحتوى ولصقها.</p>
<br>
<br>

<img width="3840" height="552" alt="feature_2_impove_parts" src="https://github.com/user-attachments/assets/e430f28d-670d-4327-8153-8810f5a70e76" />
<p align="center">القدرة على تحسين النص عن طريق تحديد الجزئية التي تريد تحسينها والضغط على ايقونة مِداد او ضغط على Ctrl + I او Cmd + I</p> 
<br>
<br>

<img width="3840" height="552" alt="feature_3_write_from_scratch" src="https://github.com/user-attachments/assets/d0b6db9e-a80b-46fa-81bd-afe7a9b87c1a" />
<p align="center">إنشاء محتوى كامل من الصفر خلال ارسال الطلب واحد لي مِداد.</p> 
<br>
<br>

---

## هيكلة المشروع 
### الواجهة (Frontend)
كامل تفاصيل هيكلة المشروع للواجهة متواجدة في فرع (Branch) الـ [mersad-base](https://github.com/Abdullah-Saeed-BB/Mersad-1.0-organized/tree/mersad-base#%D9%87%D9%8A%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9), سأشرح هنا ما تم اضافته وتعديله فقط من الفرع الاصلي:
 - مجلد `src/js`:
	 - إنشاء `ai-action.js`: يحتوي على جميع الاكواد الخاصة لإرسال طلب المستخدم للذكاء الاصطناعي, وتحميل الإجابة ووضعها في محرر المحتوى.
	 - إنشاء `get-scripts.js`: يحتوي على اوامر الخاصة بي بجلب المحتويات وتنسيقها.
	 - إنشاء `notification.js`: يحتوي على اوامر لإنشاء إشعارات لتحذير المستخدم بأمر ما او بحدوث خطأ.
	 - تعديل على `main.js`: تم عمل تعديلات بسيطة, لأتمكن من تحميل بعض الأوامر من خارج الملف.
	 - إنشاء `icon_animation.js`: يحتوي على جميع الاوامر الخاصة بي تشغيل وإطفاء انميشن الانتظار.
 - تعديل على `src/index.html`: تم إضافة اكواد *HTML* الخاصة بي القائمة المنبثقة ليتمكن المستخدم بالتواصل مع الذكاء الاصطناعي. 
 - مجلد `src/styles`:
	 - إنشاء `ai-elements.css`: يحتوي على تنسيقات بالقائمة المنبثقة.
	 - إنشاء `icon_animation.css`: يحتوي على تنسيقات لانميشن الانتظار.
	 - إنشاء `notification.css`: يحتوي على تنسيقات الإشعارات.
 - مجلد `src/assets`:
	 - تم إضافة مجلد `images/` الذي يحتوي على شعار مِداد, و إضافة مجلد `icon_frames/` الذي يحتوي على إطارات لانميشن الانتظار.

### الخادم (Backend)
**محتويات مجلد الخادم:**
 - الـ `main.py`: نقطة الدخول لتطبيق FastAPI. ابدأ تشغيل الخادم من هنا.
 - الـ `dependencies.py`: الاعتماديات المشتركة. حقن جلسات قاعدة البيانات والإعدادات.
 - الـ `data/base_system_prompt.txt`: يحتوي على التعليمات الأساسية لوكيل الذكاء الاصطناعي.
 - الـ `db/`: 
	 - الـ `config.py`: تحميل متغيرات البيئة وإعدادات التطبيق.
	 - الـ `schemas.py`: مخططات التحقق باستخدام Pydantic ونماذج البيانات.
 - الـ `routers/ai_router`: نقاط النهاية التي تمكن الواجهة بالتواصل مع الذكاء الاصطناعي,.
 - الـ `agent/ai_agent.py`: الكود الرئيسي لعمليات وكيل الذكاء الاصطناعي.

**الأدوات المستعملة لبناء الخادم:**

<div align="right">
<img src="https://img.shields.io/badge/Python-Programming%20Languge-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
<img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
<img src="https://img.shields.io/badge/LangGraph-AI%20Agent-0F172A?style=for-the-badge&logo=langchain&logoColor=white" alt="LangGraph">
</div>


