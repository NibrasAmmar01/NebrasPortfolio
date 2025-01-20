import {
    mobile,
    backend,
    creator,
    cloud,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    //redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    java,
    postgresql,
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
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
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
    {
        name: "TypeScript",
        icon: typescript,
    },
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
        name: "Figma",
        icon: figma,
    },
    {
        name: "TensorFlow",
        icon: mobile, // Replace with a proper icon for TensorFlow
    },
    {
        name: "PyTorch",
        icon: mobile, // Replace with a proper icon for PyTorch
    },
    {
        name: "Microsoft Azure",
        icon: creator, // Replace with a proper icon
    },
    {
        name: "AWS",
        icon: creator, // Replace with a proper icon for AWS
    },
    {
        name: "C",
        icon: mobile, // Replace with a proper icon
    },
    {
        name: "C++",
        icon: mobile, // Replace with a proper icon
    },
    {
        name: "C#",
        icon: mobile, // Replace with a proper icon
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: mobile, // Replace with a proper icon
    },
    {
        name: "PHP",
        icon: mobile, // Replace with a proper icon
    },
    {
        name: "MIPS",
        icon: mobile, // Replace with a proper icon
    },
    {
        name: "Flutter",
        icon: mobile, // Replace with a proper icon for Flutter
    },
    {
        name: "ASP.NET",
        icon: mobile, // Replace with a proper icon for ASP.NET
    },
    {
        name: "JEE",
        icon: mobile, // Replace with a proper icon for JEE
    },
    {
        name: "Symfony",
        icon: mobile, // Replace with a proper icon for Symfony
    },
    {
        name: "Bootstrap",
        icon: mobile, // Replace with a proper icon for Bootstrap
    },
    {
        name: "UML",
        icon: mobile, // Replace with a proper icon for UML
    },
    {
        name: "PL/SQL",
        icon: mobile, // Replace with a proper icon for PL/SQL
    },
    {
        name: "MySQL",
        icon: postgresql, // You can change the icon to a more specific one for MySQL
    },
    {
        name: "Oracle",
        icon: mobile, // Replace with a proper icon for Oracle
    },
    {
        name: "Arduino",
        icon: mobile, // Replace with a proper icon for Arduino
    },
    {
        name: "ESP32",
        icon: mobile, // Replace with a proper icon for ESP32
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
        image: mobile, // Replace with the actual project image
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
        image: mobile, // Replace with the actual project image
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
        image: mobile, // Replace with the actual project image
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
        image: mobile, // Replace with the actual project image
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };



