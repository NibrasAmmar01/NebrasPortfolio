import {
  //logo,
  java,
  backend,
  //creator,
  mobile,
  web,
  //github,
  //menu,
  //close,
  Messaging,
  cloud,
  css,
  postgresql,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  //redux,
  tailwind,
  typescript,
  //threejs,
  //meta,
  //shopify,
  //starbucks,
  //tesla,
  //carrent,
  //jobit,
  //tripguide,
  tensorflow,  // Add TensorFlow to the export
  pytorch,     // Add PyTorch to the export
  aws,         // Add AWS to the export
  azure,       // Add Microsoft Azure to the export
  //c,           // Add C to the export
  cpp,         // Add C++ to the export
  //csharp,      // Add C# to the export
  python,      // Add Python to the export
  //php,         // Add PHP to the export
  //arduino,     // Add Arduino to the export
  //esp32,
  Deployments, 
  Order, 
  azureArchitecture, 
  stock, 
  JEE
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Aspiring Full Stack Developer",
        icon: web,
    },
    {
        title: "AI/ML Enthusiast",
        icon: mobile,
    },
    {
        title: "Backend Developer in Training",
        icon: backend,
    },
    {
        title: "Cloud Infrastructure Learner",
        icon: cloud,
    },
];

const technologies = [
    //{
    //    name: "HTML 5",
    //    icon: html,
    //},
    {
        name: "Python",
        icon: python,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    //{
    //    name: "TypeScript",
    //    icon: typescript,
    //},
    {
        name: "Spring Boot",
        icon: java,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "TensorFlow",
        icon: tensorflow,
    },
    //{
    //    name: "PyTorch",
    //    icon: pytorch,
    //},
    {
        name: "Microsoft Azure",
        icon: azure,
    },
    {
        name: "AWS",
        icon: aws,
    },
];


const experiences = [
    {
        title: "Deep Learning Intern",
        company_name: "TAC TIC",
        icon: mobile, // Replace with the actual company logo icon
        iconBg: "#383E56",
        date: "June 2023 - July 2023",
        points: [
            "Developed a deep learning algorithm for facial recognition using a Siamese model.",
            "Implemented a facial detection system using ESP32-CAM and Arduino.",
            "Gained hands-on experience with ReactJS for building the front-end.",
        ],
    },
    {
        title: "AI Research Intern",
        company_name: "VERMEG",
        icon: mobile, // Replace with the actual company logo icon
        iconBg: "#E6DEDD",
        date: "July 2024 - August 2024",
        points: [
            "Fine-tuned Llama-3 8B for medical question answering and automated response generation.",
            "Built a local LLM with an interactive UI for file management.",
            "Created a pipeline for rating model response quality based on feedback.",
        ],
    },
];

const projects = [
    {
        name: "Multi-Tier Security Infrastructure",
        description:
            "Led the implementation of a multi-tier security infrastructure in Microsoft Azure, ensuring protection across application, data, and network layers.",
        tags: [
            {
                name: "Azure",
                color: "blue-text-gradient",
            },
            {
                name: "NGINX",
                color: "green-text-gradient",
            },
            {
                name: "Firewall",
                color: "pink-text-gradient",
            },
        ],
        image: azureArchitecture, // Replace with the actual project image
        source_code_link: "https://github.com/",
    },
    {
        name: "Project Management System",
        description:
            "Created a web-based project management system that enables efficient task tracking and collaboration.",
        tags: [
            {
                name: "JEE",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: JEE, // Replace with the actual project image
        source_code_link: "https://github.com/NibrasAmmar01/J2EE",
    },
    {
        name: "Stock Trading Simulator",
        description:
            "Created a C++ stock trading simulator enabling users to simulate automated trading with real-time market data.",
        tags: [
            {
                name: "C++",
                color: "blue-text-gradient",
            },
        ],
        image: stock, // Replace with the actual project image
        source_code_link: "https://github.com/achrefGT/TradingSimulator",
    },
   {
        name: "Order Microservice",
        description:
            "Developed an order microservice using Spring Boot, Java, PostgreSQL, and Docker. Communicated with other microservices to support an eCommerce platform.",
        tags: [
            {
                name: "Spring Boot",
                color: "blue-text-gradient",
            },
            {
                name: "Java",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "pink-text-gradient",
            },
            {
                name: "Docker",
                color: "blue-text-gradient",
            },
        ],
        image: Order, // Replace with the actual project image
        source_code_link: "https://github.com/RamziHaddad/projet-soa-ecommerce-enit-2024-3AINFO2",
    },
    {
        name: "Microservices with Dapr and Kubernetes",
        description:
            "Developed a set of microservices using TypeScript, Vue.js, and .NET, communicating through Dapr for efficient service-to-service communication. The solution leverages Kubernetes for monitoring, scalability, and orchestration, with robust access control mechanisms to ensure secure and efficient operations across the system.",
        tags: [
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "Vue.js",
                color: "green-text-gradient",
            },
            {
                name: ".NET",
                color: "pink-text-gradient",
            },
            {
                name: "Dapr",
                color: "blue-text-gradient",
            },
            {
                name: "Kubernetes",
                color: "green-text-gradient",
            },
            {
                name: "Access Control",
                color: "pink-text-gradient",
            },
        ],
        image: Deployments, // Replace with the actual project image
        source_code_link: "https://github.com/haroun08/Project-administration-r-seaux-et-services",
    },
    {
        name: "Kafka Messaging App",
        description:
            "Built a real time messaging app based on Spring Boot for backend services with Kafka for message communication and Vite for the front-end. The application enables real-time communication with a scalable architecture using Kafka as the message broker.",
        tags: [
            {
                name: "Spring Boot",
                color: "blue-text-gradient",
            },
            {
                name: "Kafka",
                color: "green-text-gradient",
            },
            {
                name: "Vite",
                color: "pink-text-gradient",
            },
            {
                name: "WebSocket",
                color: "blue-text-gradient",
            },
        ],
        image: Messaging, // Replace with the actual project image
        source_code_link: "https://github.com/NibrasAmmar01/Kafka-Messaging-App",
    },
];

export { services, technologies, experiences, projects };



