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
📱 Commu – Distributed Real-Time Messaging & WebRTC Calling Platform
Commu is a full-stack, event-driven communication platform engineered for low-latency messaging, peer-to-peer audio/video calling, and resilient offline delivery. It pairs a modern offline-first Android client with a containerized Go microservices backend.

🎨 Android Client Architecture
 Framework: Kotlin & Jetpack Compose with MVVM/MVI unidirectional data flow
 Dependency Injection: Dagger Hilt for modular, testable architecture
 Local Persistence: Offline-first caching powered by Room (SQLite) and Preferences DataStore
 Real-Time Sync: Persistent OkHttp WebSocket client with Kotlin Coroutines & SharedFlow event streams, automatic reconnection, and heartbeat polling
 Calling UI: Full-screen lock-screen call intents and Picture-in-Picture (PiP) video support

⚙️ Distributed Backend Architecture
 Language & Routing: 5 decoupled Go microservices fronted by an Nginx API Gateway & Reverse Proxy
 Services: Dedicated User, Chat, Call, Notification, and WebSocket Gateway services sharing a common domain & broker library (go-common)
 Event Broker: RabbitMQ (AMQP) with durable queues for non-blocking message ingestion, WebRTC signaling, presence fan-out, and push fallback
 Database: MongoDB document store for users, bidirectional friend graphs, chats, messages, and call logs
 WebSocket Hub: Stateful Gorilla WebSocket hub supporting multi-device sessions, 5-second write acknowledgments, Ping/Pong heartbeat deadlines, and friend-only online status broadcasts

📞 Peer-to-Peer Audio & HD Video Calling
 Engine: Native WebRTC (PeerConnection) with hardware-accelerated EglBase video rendering (720p @ 30fps)
 Audio Processing: Hardware Acoustic Echo Cancellation (AEC), Noise Suppression, and Auto Gain Control
 Signaling Pipeline: Asynchronous SDP Offer, SDP Answer, and Trickle ICE candidate exchange routed via Call Service, RabbitMQ, and WebSocket Gateway

🔔 Smart Offline Push Fallback
 System: Firebase Cloud Messaging (FCM) via Firebase Admin Go SDK
 Workflow: When the WebSocket Gateway detects a recipient has no active socket session (or times out on delivery), it automatically reroutes chat messages and incoming call alerts to RabbitMQ notification queues, waking the device with deep-linked chat banners or full-screen incoming call screens

🚀 Key Engineering Highlights
- Asynchronous write pipeline decoupling HTTP message ingestion from database persistence and real-time delivery
- End-to-end message lifecycle tracking (Created, Delivered, and Seen read receipts)
- Automatic failover from live WebSocket delivery to FCM push notifications
- Containerized multi-service deployment orchestrated with Docker Compose and health checks

💡 Summary
Commu showcases a production-style distributed messaging and WebRTC calling architecture. It combines a reactive, offline-first Jetpack Compose Android app with a fault-isolated, event-driven Go microservices backend built around RabbitMQ, WebSockets, and MongoDB.
`,
                ar: `
📱 Commu – منصة مراسلة فورية موزعة ومكالمات WebRTC
Commu هي منصة تواصل متكاملة تعتمد على الأحداث (Event-Driven)، صُممت للمراسلة ذات زمن الاستجابة المنخفض، ومكالمات الصوت والفيديو المباشرة من نظير إلى نظير (Peer-to-Peer)، والتسليم الموثوق للرسائل في وضع عدم الاتصال. تجمع المنصة بين تطبيق Android حديث يعمل بنهج Offline-First وخلفية خدمات مصغرة (Microservices) مبنية بلغة Go داخل حاويات.

🎨 بنية عميل Android
 إطار العمل: Kotlin و Jetpack Compose مع تدفق بيانات أحادي الاتجاه بنمط MVVM/MVI
 حقن التبعيات: Dagger Hilt لبنية معيارية وقابلة للاختبار
 التخزين المحلي: تخزين مؤقت بنهج Offline-First مدعوم بـ Room (SQLite) و Preferences DataStore
 المزامنة الفورية: عميل OkHttp WebSocket دائم مع تدفقات أحداث Kotlin Coroutines و SharedFlow، وإعادة اتصال تلقائية، ونبضات فحص الاتصال (Heartbeat Polling)
 واجهة المكالمات: شاشات مكالمات بملء الشاشة على شاشة القفل ودعم وضع صورة داخل صورة (PiP) للفيديو

⚙️ بنية الخلفية الموزعة (Backend)
 اللغة والتوجيه: 5 خدمات مصغرة مفصولة بلغة Go تتقدمها بوابة Nginx API Gateway و Reverse Proxy
 الخدمات: خدمات مخصصة للمستخدمين (User)، والمحادثات (Chat)، والمكالمات (Call)، والإشعارات (Notification)، وبوابة WebSocket تشترك جميعها في مكتبة نطاق ووسيط موحدة (go-common)
 وسيط الأحداث: RabbitMQ (AMQP) مع طوابير دائمة لاستيعاب الرسائل دون حظر، وإشارات WebRTC، وبث حالة الاتصال، والرجوع التلقائي لإشعارات الدفع
 قاعدة البيانات: مخزن مستندات MongoDB للمستخدمين، وعلاقات الصداقة ثنائية الاتجاه، والمحادثات، والرسائل، وسجلات المكالمات
 مركز WebSocket: مركز Gorilla WebSocket يحتفظ بالحالة ويدعم جلسات متعددة الأجهزة، وتأكيدات كتابة خلال 5 ثوانٍ، ومواعيد نهائية لنبضات Ping/Pong، وبث حالة الاتصال للأصدقاء فقط

📞 مكالمات صوتية وفيديو عالي الدقة (HD) من نظير إلى نظير
 المحرك: WebRTC الأصلي (PeerConnection) مع عرض فيديو مسرّع بالعتاد عبر EglBase (بدقة 720p بمعدل 30 إطاراً في الثانية)
 معالجة الصوت: إلغاء الصدى الصوتي بالعتاد (AEC)، وكتم الضوضاء، والتحكم التلقائي في الكسب (Auto Gain Control)
 خط أنابيب الإشارات: تبادل غير متزامن لعروض SDP وإجابات SDP ومرشحي Trickle ICE يتم توجيهه عبر خدمة المكالمات و RabbitMQ وبوابة WebSocket

🔔 النظام الذكي البديل لإشعارات الدفع دون اتصال
 النظام: Firebase Cloud Messaging (FCM) عبر حزمة Firebase Admin Go SDK
 آلية العمل: عندما تكتشف بوابة WebSocket عدم وجود جلسة نشطة للمستلم (أو انتهاء مهلة التسليم)، فإنها تعيد توجيه رسائل الدردشة وتنبيهات المكالمات الواردة تلقائياً إلى طوابير إشعارات RabbitMQ، مما يوقظ الجهاز بإشعارات دردشة ذات روابط عميقة أو شاشات مكالمات واردة بملء الشاشة

🚀 أبرز المزايا الهندسية
- خط أنابيب كتابة غير متزامن يفصل استيعاب رسائل HTTP عن الحفظ في قاعدة البيانات والتسليم الفوري
- تتبع شامل لدورة حياة الرسالة (إيصالات الإنشاء، والتسليم، والقراءة)
- التحويل التلقائي عند الفشل من التسليم المباشر عبر WebSocket إلى إشعارات الدفع عبر FCM
- نشر متعدد الخدمات داخل حاويات يتم تنسيقه باستخدام Docker Compose وفحوصات سلامة الخدمات (Health Checks)

💡 ملخص
يستعرض Commu بنية بمستوى إنتاجي للمراسلة الموزعة ومكالمات WebRTC. فهو يجمع بين تطبيق Android تفاعلي يعمل بنهج Offline-First باستخدام Jetpack Compose، وخلفية خدمات مصغرة بلغة Go معزولة الأخطاء وتعتمد على الأحداث، مبنية حول RabbitMQ و WebSockets و MongoDB.
`,
                de: `
📱 Commu – Verteilte Echtzeit-Messaging- & WebRTC-Anrufplattform
Commu ist eine ereignisgesteuerte Full-Stack-Kommunikationsplattform, die für Messaging mit geringer Latenz, Peer-to-Peer-Audio-/Videoanrufe und eine ausfallsichere Offline-Zustellung entwickelt wurde. Sie kombiniert einen modernen Offline-First-Android-Client mit einem containerisierten Go-Microservices-Backend.

🎨 Android-Client-Architektur
 Framework: Kotlin & Jetpack Compose mit unidirektionalem MVVM/MVI-Datenfluss
 Dependency Injection: Dagger Hilt für eine modulare, testbare Architektur
 Lokale Persistenz: Offline-First-Caching auf Basis von Room (SQLite) und Preferences DataStore
 Echtzeit-Synchronisation: Persistenter OkHttp-WebSocket-Client mit Kotlin Coroutines & SharedFlow-Event-Streams, automatischer Wiederverbindung und Heartbeat-Polling
 Anruf-UI: Vollbild-Anruf-Intents auf dem Sperrbildschirm und Bild-in-Bild (PiP)-Videounterstützung

⚙️ Verteilte Backend-Architektur
 Sprache & Routing: 5 entkoppelte Go-Microservices hinter einem Nginx API Gateway & Reverse Proxy
 Services: Dedizierte User-, Chat-, Call-, Notification- und WebSocket-Gateway-Services, die eine gemeinsame Domain- & Broker-Bibliothek (go-common) nutzen
 Event Broker: RabbitMQ (AMQP) mit dauerhaften Warteschlangen für nicht-blockierende Nachrichtenaufnahme, WebRTC-Signalisierung, Präsenz-Fan-Out und Push-Fallback
 Datenbank: MongoDB-Dokumentenspeicher für Benutzer, bidirektionale Freundschaftsgraphen, Chats, Nachrichten und Anrufprotokolle
 WebSocket-Hub: Zustandsbehafteter Gorilla-WebSocket-Hub mit Unterstützung für Multi-Device-Sitzungen, 5-Sekunden-Schreibbestätigungen, Ping/Pong-Heartbeat-Fristen und Online-Status-Broadcasts nur für Freunde

📞 Peer-to-Peer-Audio- & HD-Videoanrufe
 Engine: Natives WebRTC (PeerConnection) mit hardwarebeschleunigtem EglBase-Videorendering (720p @ 30fps)
 Audioverarbeitung: Hardwareseitige akustische Echounterdrückung (AEC), Rauschunterdrückung und automatische Verstärkungsregelung (Auto Gain Control)
 Signalisierungs-Pipeline: Asynchroner Austausch von SDP-Offer, SDP-Answer und Trickle-ICE-Kandidaten über Call Service, RabbitMQ und WebSocket Gateway

🔔 Intelligenter Offline-Push-Fallback
 System: Firebase Cloud Messaging (FCM) über das Firebase Admin Go SDK
 Workflow: Wenn das WebSocket Gateway erkennt, dass ein Empfänger keine aktive Socket-Sitzung hat (oder bei der Zustellung eine Zeitüberschreitung auftritt), leitet es Chat-Nachrichten und eingehende Anrufsignale automatisch an RabbitMQ-Benachrichtigungswarteschlangen weiter und weckt das Gerät mit Deep-Link-Chat-Bannern oder Vollbild-Anrufanzeigen auf

🚀 Wichtige Engineering-Highlights
- Asynchrone Schreib-Pipeline, die die HTTP-Nachrichtenaufnahme von der Datenbankpersistenz und der Echtzeitzustellung entkoppelt
- Durchgängige Verfolgung des Nachrichtenlebenszyklus (Lesebestätigungen für Erstellt, Zugestellt und Gesehen)
- Automatisches Failover von der Live-WebSocket-Zustellung auf FCM-Push-Benachrichtigungen
- Containerisiertes Multi-Service-Deployment, orchestriert mit Docker Compose und Health Checks

💡 Zusammenfassung
Commu präsentiert eine produktionsreife Architektur für verteiltes Messaging und WebRTC-Telefonie. Es vereint eine reaktive Offline-First-Android-App auf Basis von Jetpack Compose mit einem fehlerisolierten, ereignisgesteuerten Go-Microservices-Backend rund um RabbitMQ, WebSockets und MongoDB.
`,
                he: `
📱 Commu – פלטפורמה מבוזרת להודעות בזמן אמת ושיחות WebRTC
Commu היא פלטפורמת תקשורת Full-Stack מונחית-אירועים (Event-Driven), שהונדסה להעברת הודעות בשיהוי נמוך, שיחות אודיו/וידאו ישירות (Peer-to-Peer) ומסירה אמינה גם במצב לא מקוון. היא משלבת לקוח אנדרואיד מודרני בגישת Offline-First עם Backend מבוסס מיקרו-שירותים בשפת Go הרצים בקונטיינרים.

🎨 ארכיטקטורת לקוח אנדרואיד
 תשתית (Framework): Kotlin ו-Jetpack Compose עם זרימת נתונים חד-כיוונית במודל MVVM/MVI
 הזרקת תלויות (DI): Dagger Hilt לארכיטקטורה מודולרית וניתנת לבדיקה
 שמירה מקומית: מטמון Offline-First המופעל על ידי Room (SQLite) ו-Preferences DataStore
 סנכרון בזמן אמת: לקוח OkHttp WebSocket מתמיד עם זרמי אירועים של Kotlin Coroutines ו-SharedFlow, התחברות מחדש אוטומטית ובדיקות דופק (Heartbeat Polling)
 ממשק שיחות: מסכי שיחה במסך מלא מעל מסך הנעילה ותמיכה בוידאו בתצוגת תמונה-בתוך-תמונה (PiP)

⚙️ ארכיטקטורת Backend מבוזרת
 שפה וניתוב: 5 מיקרו-שירותים מופרדים ב-Go מאחורי Nginx API Gateway ו-Reverse Proxy
 שירותים: שירותים ייעודיים למשתמשים (User), צ'אט (Chat), שיחות (Call), התראות (Notification) ו-WebSocket Gateway החולקים ספריית דומיין וברוקר משותפת (go-common)
 מתווך אירועים (Event Broker): RabbitMQ (AMQP) עם תורים עמידים לקליטת הודעות לא-חוסמת, איתות WebRTC, הפצת סטטוס מחובר וגיבוי בהתראות דחיפה (Push)
 מסד נתונים: מאגר מסמכים MongoDB עבור משתמשים, גרף חברים דו-כיווני, צ'אטים, הודעות ויומני שיחות
 מרכז WebSocket: שרת Gorilla WebSocket שומר-מצב (Stateful) התומך בחיבורים מרובי-מכשירים, אישורי כתיבה תוך 5 שניות, מועדי Ping/Pong קצובים ושידור סטטוס מחובר לחברים בלבד

📞 שיחות אודיו ווידאו HD ישירות (Peer-to-Peer)
 מנוע: WebRTC טבעי (PeerConnection) עם רינדור וידאו מואץ-חומרה באמצעות EglBase (720p @ 30fps)
 עיבוד שמע: ביטול הד אקוסטי בחומרה (AEC), סינון רעשים ובקרת עוצמה אוטומטית (Auto Gain Control)
 צינור איתות (Signaling): החלפה אסינכרונית של SDP Offer, SDP Answer ומועמדי Trickle ICE המנותבים דרך שירות השיחות, RabbitMQ ו-WebSocket Gateway

🔔 מנגנון גיבוי חכם להתראות Push במצב לא מקוון
 מערכת: Firebase Cloud Messaging (FCM) באמצעות Firebase Admin Go SDK
 אופן פעולה: כאשר ה-WebSocket Gateway מזהה שלנמען אין חיבור פעיל (או שחלה חריגה מזמן המסירה), הוא מנתב מחדש באופן אוטומטי הודעות צ'אט והתראות על שיחות נכנסות לתורי ההתראות ב-RabbitMQ, ומעיר את המכשיר עם באנרים בעלי קישור עמוק לצ'אט או מסכי שיחה נכנסת במסך מלא

🚀 דגשים הנדסיים מרכזיים
- צינור כתיבה אסינכרוני המפריד בין קליטת הודעות ב-HTTP לבין שמירה במסד הנתונים ומסירה בזמן אמת
- מעקב מקצה-לקצה אחר מחזור חיי ההודעה (אישורי יצירה, מסירה וקריאה)
- מעבר גיבוי אוטומטי (Failover) ממסירה חיה ב-WebSocket להתראות דחיפה ב-FCM
- פריסה מרובת-שירותים בקונטיינרים המתוזמרת באמצעות Docker Compose ובדיקות תקינות (Health Checks)

💡 סיכום
Commu מדגימה ארכיטקטורה ברמת ייצור להעברת הודעות מבוזרת ושיחות WebRTC. היא משלבת אפליקציית אנדרואיד ריאקטיבית בגישת Offline-First הבנויה ב-Jetpack Compose עם Backend מיקרו-שירותים ב-Go מבודד-כשלים ומונחה-אירועים, הבנוי סביב RabbitMQ, WebSockets ו-MongoDB.
`
        },
        microservices: {
                en: "PassGenius is a cloud-native, microservices-based password and secret management platform architected for Kubernetes. Built with a polyglot backend in Java (Spring Boot) and Go, it separates authentication, user management, encrypted vault storage, and email notifications into independent services orchestrated behind a Kong API Gateway. Traffic is split between open ingress routes for login/registration and authenticated ingress routes protected at the edge by the Kong JWT plugin using shared Kubernetes secrets. The platform features BCrypt password hashing, HS256 JWT authentication, MongoDB persistence, and an automated GitOps-style Jenkins CI/CD pipeline that builds, tests, and pushes container images to Docker Hub while automatically updating Kustomize Kubernetes manifests.",
                ar: "PassGenius هي منصة سحابية أصلية (Cloud-Native) ومبنية على بنية الخدمات المصغرة (Microservices) لإدارة كلمات المرور والأسرار الرقمية، ومصممة خصيصاً لبيئة Kubernetes. تم بناء المنصة بخلفية متعددة اللغات البرمجية باستخدام Java (Spring Boot) و Go، حيث تفصل المصادقة، وإدارة المستخدمين، ومخزن الخزينة المشفر، وإشعارات البريد الإلكتروني إلى خدمات مستقلة يتم تنسيقها خلف بوابة Kong API Gateway. يتم تقسيم حركة المرور بين مسارات دخول مفتوحة لتسجيل الدخول والتسجيل، ومسارات دخول موثقة محمية عند الحافة بواسطة إضافة Kong JWT باستخدام أسرار Kubernetes المشتركة. تتميز المنصة بتشفير كلمات المرور باستخدام BCrypt، والمصادقة عبر HS256 JWT، والتخزين الدائم في MongoDB، وخط أنابيب Jenkins CI/CD آلي بنمط GitOps يقوم بالبناء والاختبار ودفع صور الحاويات إلى Docker Hub مع تحديث بيانات Kustomize في Kubernetes تلقائياً.",
                de: "PassGenius ist eine Cloud-Native, auf Microservices basierende Plattform zur Passwort- und Geheimnisverwaltung, die für Kubernetes entwickelt wurde. Mit einem polyglotten Backend in Java (Spring Boot) und Go trennt sie Authentifizierung, Benutzerverwaltung, verschlüsselten Vault-Speicher und E-Mail-Benachrichtigungen in unabhängige Dienste, die hinter einem Kong API Gateway orchestriert werden. Der Datenverkehr wird aufgeteilt in offene Ingress-Routen für Login/Registrierung und authentifizierte Ingress-Routen, die am Edge durch das Kong JWT-Plugin unter Verwendung gemeinsam genutzter Kubernetes-Secrets geschützt sind. Die Plattform bietet BCrypt-Passwort-Hashing, HS256-JWT-Authentifizierung, MongoDB-Persistenz und eine automatisierte Jenkins-CI/CD-Pipeline im GitOps-Stil, die Container-Images erstellt, testet und auf Docker Hub pusht, während Kustomize-Kubernetes-Manifeste automatisch aktualisiert werden.",
                he: "PassGenius היא פלטפורמת ניהול סיסמאות וסודות Cloud-Native מבוססת מיקרו-שירותים שתוכננה עבור Kubernetes. היא נבנתה עם Backend רב-לשוני (Polyglot) ב-Java (Spring Boot) וב-Go, ומפרידה אימות, ניהול משתמשים, אחסון כספת מוצפן והתראות דוא\"ל לשירותים עצמאיים המתוזמרים מאחורי Kong API Gateway. תעבורת הרשת מפוצלת בין נתיבי Ingress פתוחים להתחברות/הרשמה לבין נתיבי Ingress מאומתים המוגנים בקצה באמצעות תוסף Kong JWT וסודות Kubernetes משותפים. הפלטפורמה כוללת גיבוב סיסמאות BCrypt, אימות HS256 JWT, שמירת נתונים ב-MongoDB וצינור Jenkins CI/CD אוטומטי בסגנון GitOps שבונה, בודק ודוחף תמונות קונטיינר ל-Docker Hub תוך עדכון אוטומטי של מניפסטים ב-Kustomize Kubernetes."
        },
        tidoco: {
                en: "A cross-platform appointment booking platform designed for businesses such as barbershops, salons, and nail studios. The platform connects customers with service providers through an intuitive booking experience, with real-time appointment management and notifications.",
                ar: "منصة متعددة المنصات (Cross-Platform) لحجز المواعيد مصممة للشركات والأعمال مثل صالونات الحلاقة، ومراكز التجميل، واستوديوهات العناية بالأظافر. تربط المنصة العملاء بمقدمي الخدمات من خلال تجربة حجز سلسة وبديهية، مع إدارة فورية للمواعيد والإشعارات في الوقت الفعلي.",
                de: "Eine plattformübergreifende Terminbuchungsplattform für Unternehmen wie Barbershops, Friseursalons und Nagelstudios. Die Plattform verbindet Kunden mit Dienstleistern über ein intuitives Buchungserlebnis – mit Terminverwaltung und Benachrichtigungen in Echtzeit.",
                he: "פלטפורמת הזמנת תורים חוצת-פלטפורמות (Cross-Platform) המיועדת לעסקים כגון מספרות, סלוני יופי וסטודיו לציפורניים. הפלטפורמה מחברת בין לקוחות לנותני שירות באמצעות חוויית הזמנה אינטואיטיבית, עם ניהול תורים והתראות בזמן אמת."
        }
};
