export const projects = [
    {
        id: 'tidoco',
        key: 'tidoco',
        github: '#',
        gitlab: 'https://gitlab.com/tidoco',
        architectureChart: "https://storage.googleapis.com/portfolio-bucket-99/system_design_commu.jpeg",
        external: null,
        tags: ['Kotlin', 'Spring Boot', 'System Design'],

    },
    {
        id: 'commu',
        key: 'commu',
        github: '#',
        gitlab: 'https://gitlab.com/commu-app',
        architectureChart: "https://placehold.co/800x600/1e293b/teal?text=System+Architecture+Chart",
        external: null,
        tags: ['Go', 'WebSocket', 'Message Queue'],
        media: [
            {
                type: 'image',
                url: 'https://placehold.co/600x400/1a202c/teal?text=Commu+App+Screenshot',
                caption: 'Main Chat Interface'
            },
        ]
    },
    {
        id: 'astra',
        key: 'astra',
        github: '#',
        gitlab: 'https://gitlab.com/astra-ai',
        external: 'https://www.linkedin.com/posts/anas-ashraf-dev_androiddev-kotlin-sideproject-activity-7173628132602560512-C37L?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC2kNGoBuvK-hWWFEq5pWtNd_JnRg1J4Nhw',
        tags: ['Jetpack Compose', 'AI', 'Kotlin'],
        longDescription: "Astra AI is a cutting-edge intelligent chat assistant designed to revolutionize how users interact with AI. Built using Jetpack Compose for a modern, reactive UI, it leverages OpenAI's powerful Large Language Models to provide accurate and context-aware responses. The application features a robust architecture that ensures low latency and high availability, making it suitable for both casual conversation and complex problem-solving tasks.",
        architectureChart: null,
        media: [
            {
                type: 'image',
                url: 'https://storage.googleapis.com/portfolio-bucket-99/astra_ai_screenshot1.jpeg',
                caption: 'Main page screenshot'
            },
            {
                type: 'video',
                url: 'https://storage.googleapis.com/portfolio-bucket-99/Astra%20Voice%20Input.mp4',
                caption: 'Voice Input'
            },
            {
                type: 'video',
                url: 'https://storage.googleapis.com/portfolio-bucket-99/Astra%20Read%20Message.mp4',
                caption: 'Sending and reading a message'
            },
            {
                type: 'image',
                url: 'https://storage.googleapis.com/portfolio-bucket-99/astra_ai_screenshot2.jpeg',
                caption: 'Chat Page'
            },
            {
                type: 'image',
                url: 'https://storage.googleapis.com/portfolio-bucket-99/astra_ai_screenshot3.jpeg',
                caption: 'Recent Chats Page'
            },
        ]
    },
    {
        id: 'zavvo',
        key: 'zavvo',
        architectureChart: "https://placehold.co/800x600/1e293b/teal?text=Zavvo+Architecture",
        github: '#',
        gitlab: 'https://gitlab.com/zavvo',
        external: null,
        tags: ['Java', 'Spring Boot', 'Kafka', 'Kubernetes', 'Android', 'Kotlin'],
        media: [
            {
                type: 'image',
                url: 'https://storage.googleapis.com/portfolio-bucket-99/zavvo_screenshot1.jpg',
                caption: 'Main page screenshot'
            },
            {
                type: 'image',
                url: 'https://storage.googleapis.com/portfolio-bucket-99/zavvo_screenshot2.jpg',
                caption: 'Buy Gift Card Page'
            },
            {
                type: 'image',
                url: 'https://storage.googleapis.com/portfolio-bucket-99/zavvo_screenshot3.jpg',
                caption: 'Buy '
            },
        ],
        longDescription: `Zavvo is a specialized gift card marketplace platform designed to facilitate the purchasing, management, and redemption of digital gift cards.

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
    },
    {
        id: 'microservices',
        key: 'microservices',
        architectureChart: "https://placehold.co/800x600/1e293b/teal?text=System+Architecture+Chart",
        github: '#',
        gitlab: 'https://gitlab.com/microservices-kubernetes',
        external: null,
        tags: ['Java', 'CI/CD', "GO", 'Kubernetes']
    },

];
