export const longDescriptions = {
    astra: {
        en: "Astra AI is a cutting-edge intelligent chat assistant designed to revolutionize how users interact with AI. Built using Jetpack Compose for a modern, reactive UI, it leverages OpenAI's powerful Large Language Models to provide accurate and context-aware responses. The application features a robust architecture that ensures low latency and high availability, making it suitable for both casual conversation and complex problem-solving tasks.",
        ar: "Astra AI هو مساعد دردشة ذكي متطور مصمم لإحداث ثورة في كيفية تفاعل المستخدمين مع الذكاء الاصطناعي. تم تصميمه باستخدام Jetpack Compose لواجهة مستخدم حديثة وتفاعلية، ويستفيد من نماذج اللغة الكبيرة القوية من OpenAI لتوفير استجابات دقيقة ومدركة للسياق. يتميز التطبيق ببنية قوية تضمن زمن انتقال منخفض وتوافر عالي، مما يجعله مناسبًا لكل من المحادثات العادية ومهام حل المشكلات المعقدة.",
        de: "Astra AI ist ein hochmoderner intelligenter Chat-Assistent, der entwickelt wurde, um die Interaktion von Benutzern mit KI zu revolutionieren. Er wurde mit Jetpack Compose für eine moderne, reaktive Benutzeroberfläche entwickelt und nutzt die leistungsstarken Large Language Models von OpenAI, um genaue und kontextbezogene Antworten zu liefern. Die Anwendung verfügt über eine robuste Architektur, die geringe Latenz und hohe Verfügbarkeit gewährleistet und sich sowohl für lockere Gespräche als auch für komplexe Problemlösungsaufgaben eignet.",
        he: "Astra AI הוא עוזר צ'אט חכם ומתקדם שנועד לחולל מהפכה באופן שבו משתמשים מתקשרים עם AI. הוא נבנה באמצעות Jetpack Compose לממשק משתמש מודרני וריאקטיבי, וממנף את מודלי השפה הגדולים והחזקים של OpenAI כדי לספק תשובות מדויקות ומודעות להקשר. האפליקציה כוללת ארכיטקטורה חזקה המבטיחה השהיה נמוכה וזמינות גבוהה, מה שהופך אותה למתאימה הן לשיחות חולין והן למשימות פתרון בעיות מורכבות."
    },
    zavvo: {
        en: `Zavvo is a specialized gift card marketplace platform designed to facilitate the purchasing, management, and redemption of digital gift cards.

Built on a robust event-driven microservices architecture, it ensures scalability and reliability for handling financial transactions and inventory management.

System Overview
Core Functionality: Users can browse a variety of stores, purchase gift cards, and redeem them directly through the application.
User Interface: A native Android mobile application (Kotlin) serves as the primary customer touchpoint, offering a seamless experience for managing a digital wallet of gift cards.

Technical Architecture
The backend is composed of decoupled Java/Spring Boot microservices that communicate asynchronously via Apache Kafka:

card_service: The core engine for gift card lifecycle management (generation, activation, redemption, and balance tracking).
store_service: Manages the catalog of supported retailers and their specific gift card policies.
payment_service & transaction_service: Securely handle payment processing and maintain an immutable ledger of all purchase and redemption activities.
user_service: Handles user profiles, authentication, and wallet associations.
broker_service: Orchestrates event streaming, ensuring that actions like "Payment Completed" trigger downstream effects like "Issue Card" or "Send Email" without tight coupling.
email_service: Delivers transactional emails (e.g., purchase receipts, gift card codes).

Infrastructure
Containerization: Services are Dockerized for consistent deployment environments.
Orchestration: Deployed using Kubernetes (managed via Kustomize), allowing for independent scaling of high-demand services like payments or card lookups.`,
        ar: `Zavvo هي منصة سوق متخصصة لبطاقات الهدايا مصممة لتسهيل شراء وإدارة واسترداد بطاقات الهدايا الرقمية.

مبنية على بنية خدمات مصغرة قوية تعتمد على الأحداث، مما يضمن قابلية التوسع والموثوقية للتعامل مع المعاملات المالية وإدارة المخزون.

نظرة عامة على النظام
الوظائف الأساسية: يمكن للمستخدمين تصفح مجموعة متنوعة من المتاجر وشراء بطاقات الهدايا واستردادها مباشرة من خلال التطبيق.
واجهة المستخدم: يعمل تطبيق Android الأصلي (Kotlin) كنقطة اتصال أساسية للعملاء، مما يوفر تجربة سلسة لإدارة محفظة رقمية لبطاقات الهدايا.

البنية التقنية
تتكون الخلفية من خدمات مصغرة Java/Spring Boot مفصولة تتواصل بشكل غير متزامن عبر Apache Kafka:

card_service: المحرك الأساسي لإدارة دورة حياة بطاقة الهدايا (التوليد والتفعيل والاسترداد وتتبع الرصيد).
store_service: يدير كتالوج تجار التجزئة المدعومين وسياسات بطاقات الهدايا الخاصة بهم.
payment_service & transaction_service: التعامل بأمان مع معالجة الدفع والحفاظ على سجل غير قابل للتغيير لجميع أنشطة الشراء والاسترداد.
user_service: يعالج ملفات تعريف المستخدمين والمصادقة وارتباطات المحفظة.
broker_service: ينظم تدفق الأحداث، مما يضمن أن الإجراءات مثل "اكتمل الدفع" تؤدي إلى تأثيرات لاحقة مثل "إصدار بطاقة" أو "إرسال بريد إلكتروني" دون اقتران وثيق.
email_service: يسلم رسائل البريد الإلكتروني للمعاملات (مثل إيصالات الشراء ورموز بطاقات الهدايا).

البنية التحتية
الحاويات: الخدمات موضوعة في حاويات Docker لبيئات نشر متسقة.
التنسيق: يتم النشر باستخدام Kubernetes (تتم إدارته عبر Kustomize)، مما يسمح بالتوسع المستقل للخدمات عالية الطلب مثل المدفوعات أو عمليات البحث عن البطاقات.`,
        de: `Zavvo ist eine spezialisierte Marktplatzplattform für Geschenkkarten, die den Kauf, die Verwaltung und die Einlösung digitaler Geschenkkarten erleichtern soll.

Aufgebaut auf einer robusten ereignisgesteuerten Microservices-Architektur gewährleistet sie Skalierbarkeit und Zuverlässigkeit für die Abwicklung von Finanztransaktionen und die Bestandsverwaltung.

Systemüberblick
Kernfunktionalität: Benutzer können eine Vielzahl von Geschäften durchsuchen, Geschenkkarten kaufen und diese direkt über die Anwendung einlösen.
Benutzeroberfläche: Eine native Android-Mobilanwendung (Kotlin) dient als primärer Kundenkontaktpunkt und bietet ein nahtloses Erlebnis für die Verwaltung einer digitalen Brieftasche mit Geschenkkarten.

Technische Architektur
Das Backend besteht aus entkoppelten Java/Spring Boot-Microservices, die asynchron über Apache Kafka kommunizieren:

card_service: Die Kern-Engine für das Lebenszyklusmanagement von Geschenkkarten (Generierung, Aktivierung, Einlösung und Saldo-Tracking).
store_service: Verwaltet den Katalog der unterstützten Einzelhändler und deren spezifische Geschenkkartenrichtlinien.
payment_service & transaction_service: Sichere Abwicklung der Zahlungsverarbeitung und Führung eines unveränderlichen Hauptbuchs aller Kauf- und Einlöseaktivitäten.
user_service: Verwaltet Benutzerprofile, Authentifizierung und Wallet-Verknüpfungen.
broker_service: Orchestriert das Event-Streaming und stellt sicher, dass Aktionen wie "Zahlung abgeschlossen" nachgelagerte Effekte wie "Karte ausstellen" oder "E-Mail senden" ohne enge Kopplung auslösen.
email_service: Liefert Transaktions-E-Mails (z. B. Kaufbelege, Geschenkkartencodes).

Infrastruktur
Containerisierung: Dienste sind für konsistente Bereitstellungsumgebungen dockerisiert.
Orchestrierung: Bereitgestellt mit Kubernetes (verwaltet über Kustomize), was eine unabhängige Skalierung von stark nachgefragten Diensten wie Zahlungen oder Kartensuchen ermöglicht.`,
        he: `Zavvo היא פלטפורמת שוק ייעודית לכרטיסי מתנה שנועדה להקל על הרכישה, הניהול והפדיון של כרטיסי מתנה דיגיטליים.

היא בנויה על ארכיטקטורת מיקרו-שירותים חזקה מונעת אירועים, ומבטיחה סקלביליות ואמינות לטיפול בעסקאות פיננסיות וניהול מלאי.

סקירת מערכת
פונקציונליות ליבה: משתמשים יכולים לגלוש במגוון חנויות, לרכוש כרטיסי מתנה ולפדות אותם ישירות דרך האפליקציה.
ממשק משתמש: אפליקציית מובייל אנדרואיד טבעית (Kotlin) משמשת כנקודת המגע העיקרית עם הלקוח, ומציעה חוויה חלקה לניהול ארנק דיגיטלי של כרטיסי מתנה.

ארכיטקטורה טכנית
ה-Backend מורכב ממיקרו-שירותי Java/Spring Boot מופרדים המתקשרים באופן אסינכרוני באמצעות Apache Kafka:

card_service: מנוע הליבה לניהול מחזור חיי כרטיס המתנה (יצירה, הפעלה, פדיון ומעקב יתרה).
store_service: מנהל את קטלוג הקמעונאים הנתמכים ואת מדיניות כרטיסי המתנה הספציפית שלהם.
payment_service & transaction_service: מטפלים בצורה מאובטחת בעיבוד תשלומים ושומרים על יומן בלתי ניתן לשינוי של כל פעילויות הרכישה והפדיון.
user_service: מטפל בפרופילי משתמשים, אימות ושיוכי ארנק.
broker_service: מתזמר הזרמת אירועים, ומבטיח שפעולות כמו "תשלום הושלם" יפעילו אפקטים במורד הזרם כמו "הנפק כרטיס" או "שלח אימייל" ללא צימוד הדוק.
email_service: מספק אימיילים עסקתיים (למשל, קבלות רכישה, קודי כרטיס מתנה).

תשתית
קונטיינריזציה: השירותים ארוזים ב-Docker עבור סביבות פריסה עקביות.
תזמור: נפרס באמצעות Kubernetes (מנוהל באמצעות Kustomize), המאפשר סקיילינג עצמאי של שירותים בעלי ביקוש גבוה כמו תשלומים או חיפושי כרטיסים.`
    },
    commu: {
        en: `
📱 Commu – Real-Time Messaging App
Commu is a full-stack messaging application designed for speed, reliability, and modern usability. It delivers seamless real-time communication with a responsive Android experience and a high-performance backend.

🎨 Android Front-End
 Framework: Jetpack Compose
 Design: Modern reactive UI with smooth animations
 Communication: Persistent WebSocket connection for live messaging

⚙️ Backend Architecture
 Language: Go
 Pattern: Event-driven, distributed service design
 Transport: WebSocket for real-time communication
 Queueing: RabbitMQ for message publishing and load distribution
 Caching: Redis for fast data access and reduced database load

🔔 Notifications
 System: Firebase Cloud Messaging
 Purpose: Deliver push notifications even when users are offline

🚀 Highlights
- Low-latency real-time messaging
- Scalable backend messaging pipeline
- Optimized UI powered by Jetpack Compose
- Robust caching and offline support

💡 Summary
Commu demonstrates a complete production-grade messaging platform built with modern technologies across the entire stack. It combines a sleek Android experience with a fast, scalable, and event-driven backend built in Go.
`,
        ar: `
📱 Commu – تطبيق مراسلة في الوقت الفعلي
Commu هو تطبيق مراسلة متكامل مصمم للسرعة والموثوقية وسهولة الاستخدام الحديثة. يوفر تواصلاً سلساً في الوقت الفعلي مع تجربة Android سريعة الاستجابة وخلفية عالية الأداء.

🎨 واجهة Android الأمامية
 إطار العمل: Jetpack Compose
 التصميم: واجهة مستخدم تفاعلية حديثة مع رسوم متحركة سلسة
 الاتصال: اتصال WebSocket دائم للمراسلة المباشرة

⚙️ بنية الخلفية
 اللغة: Go
 النمط: تصميم خدمة موزع يعتمد على الأحداث
 النقل: WebSocket للتواصل في الوقت الفعلي
 قائمة الانتظار: RabbitMQ لنشر الرسائل وتوزيع الحمل
 التخزين المؤقت: Redis للوصول السريع للبيانات وتقليل حمل قاعدة البيانات

🔔 الإشعارات
 النظام: Firebase Cloud Messaging
 الغرض: تسليم إشعارات الدفع حتى عندما يكون المستخدمون غير متصلين

🚀 أبرز الملامح
- مراسلة في الوقت الفعلي بزمن انتقال منخفض
- خط أنابيب مراسلة خلفية قابل للتوسع
- واجهة مستخدم محسنة مدعومة بـ Jetpack Compose
- تخزين مؤقت قوي ودعم وضع عدم الاتصال

💡 ملخص
يوضح Commu منصة مراسلة كاملة من الدرجة الإنتاجية مبنية بتقنيات حديثة عبر المجموعة بأكملها. يجمع بين تجربة Android أنيقة وخلفية سريعة وقابلة للتوسع وتعتمد على الأحداث مبنية بـ Go.
`,
        de: `
📱 Commu – Echtzeit-Messaging-App
Commu ist eine Full-Stack-Messaging-Anwendung, die auf Geschwindigkeit, Zuverlässigkeit und moderne Benutzerfreundlichkeit ausgelegt ist. Sie bietet nahtlose Echtzeitkommunikation mit einem reaktionsschnellen Android-Erlebnis und einem leistungsstarken Backend.

🎨 Android-Frontend
 Framework: Jetpack Compose
 Design: Moderne reaktive Benutzeroberfläche mit flüssigen Animationen
 Kommunikation: Dauerhafte WebSocket-Verbindung für Live-Messaging

⚙️ Backend-Architektur
 Sprache: Go
 Muster: Ereignisgesteuertes, verteiltes Service-Design
 Transport: WebSocket für Echtzeitkommunikation
 Warteschlange: RabbitMQ für Nachrichtenveröffentlichung und Lastverteilung
 Caching: Redis für schnellen Datenzugriff und reduzierte Datenbanklast

🔔 Benachrichtigungen
 System: Firebase Cloud Messaging
 Zweck: Zustellung von Push-Benachrichtigungen, auch wenn Benutzer offline sind

🚀 Highlights
- Echtzeit-Messaging mit geringer Latenz
- Skalierbare Backend-Messaging-Pipeline
- Optimierte Benutzeroberfläche powered by Jetpack Compose
- Robustes Caching und Offline-Support

💡 Zusammenfassung
Commu demonstriert eine komplette Messaging-Plattform auf Produktionsniveau, die mit modernen Technologien über den gesamten Stack hinweg aufgebaut ist. Sie kombiniert ein elegantes Android-Erlebnis mit einem schnellen, skalierbaren und ereignisgesteuerten Backend, das in Go erstellt wurde.
`,
        he: `
📱 Commu – אפליקציית הודעות בזמן אמת
Commu היא אפליקציית הודעות Full-Stack שתוכננה למהירות, אמינות ושימושיות מודרנית. היא מספקת תקשורת חלקה בזמן אמת עם חווית אנדרואיד רספונסיבית ו-Backend בעל ביצועים גבוהים.

🎨 Front-End אנדרואיד
 Framework: Jetpack Compose
 עיצוב: ממשק משתמש ריאקטיבי מודרני עם אנימציות חלקות
 תקשורת: חיבור WebSocket מתמיד להודעות חיניות

⚙️ ארכיטקטורת Backend
 שפה: Go
 תבנית: עיצוב שירות מבוזר מונחה אירועים
 תעבורה: WebSocket לתקשורת בזמן אמת
 תור: RabbitMQ לפרסום הודעות וחלוקת עומסים
 מטמון: Redis לגישה מהירה לנתונים והפחתת עומס על מסד הנתונים

🔔 התראות
 מערכת: Firebase Cloud Messaging
מטרה: מסירת התראות דחיפה גם כאשר משתמשים במצב לא מקוון

🚀 דגשים
- הודעות בזמן אמת עם השהיה נמוכה
- צינור הודעות Backend סקלבילי
- ממשק משתמש מותאם המופעל על ידי Jetpack Compose
- מטמון חזק ותמיכה במצב לא מקוון

💡 סיכום
Commu מדגימה פלטפורמת הודעות מלאה ברמת ייצור שנבנתה עם טכנולוגיות מודרניות לאורך כל ה-Stack. היא משלבת חווית אנדרואיד אלגנטית עם Backend מהיר, סקלבילי ומונחה אירועים שנבנה ב-Go.
`
    },
    microservices: {
        en: "",
        ar: "",
        de: "",
        he: ""
    },
    tidoco: {
        en: "",
        ar: "",
        de: "",
        he: ""
    }
};
