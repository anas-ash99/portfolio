
import { longDescriptions } from './longDescriptions';

export const projects = [
    {
        id: 'tidoco',
        key: 'tidoco',
        github: '#',
        gitlab: 'https://gitlab.com/tidoco',
        architectureChart: "https://storage.googleapis.com/portfolio-bucket-99/system_design_commu.jpeg",
        external: null,
        longDescription: longDescriptions.tidoco,
        tags: ['Kotlin', 'Spring Boot', 'System Design'],

    },
    {
        id: 'commu',
        key: 'commu',
        github: '#',
        gitlab: 'https://gitlab.com/commu-app',
        architectureChart: "https://storage.googleapis.com/portfolio-bucket-99/Commu%20system%20design.png",
        external: null,
        tags: ['Go', 'WebSocket', 'Message Queue'],
        longDescription: longDescriptions.commu,
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
        longDescription: longDescriptions.astra,
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
        architectureChart: "https://storage.googleapis.com/portfolio-bucket-99/Zavvo%20design.png",
        github: '#',
        gitlab: 'https://gitlab.com/zavvo',
        external: null,
        tags: ['Java', 'Spring Boot', 'Kafka', 'Kubernetes', 'Android', 'Kotlin', 'SQL', 'NoSQL', 'REST', 'JWT', 'OAuth', 'Docker', 'K8s', 'Jenkins', 'GitLab', 'Jira', 'Confluence', 'Jenkins', 'GitLab', 'Jira', 'Confluence'],
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
        longDescription: longDescriptions.zavvo,
    },
    {
        id: 'microservices',
        key: 'microservices',
        architectureChart: "https://placehold.co/800x600/1e293b/teal?text=System+Architecture+Chart",
        github: '#',
        gitlab: 'https://gitlab.com/microservices-kubernetes',
        external: null,
        longDescription: longDescriptions.microservices,
        tags: ['Java', 'CI/CD', "GO", 'Kubernetes', 'Docker', 'Jenkins', 'GitHub Actions', 'Jira', 'MongoDB', 'PostgreSQL', 'Redis', 'API Gateway']
    },

];
