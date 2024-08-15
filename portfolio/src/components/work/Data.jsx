import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/work4.png";
import Work5 from "../../assets/work5.png";
export const projectsData = [
    {
        id: 1,
        image:Work1,
        title: ' Medical Records Management System',
        subtitle: 'Medical records management system which provides online appointment and consultation features for university students.',
        technologies:'ReactJS | NodeJS | MySQL',
        category:'web design',
        icons: [
            {
                href: 'https://www.figma.com/design/ULpUh244De2fF9d1vfxfa6/Medical-System?node-id=0-1&t=jshIQyHfqIXsNiid-1',
                iconClass: 'bx bxl-figma'  
            },
            {
                href: 'https://github.com/Ruchira-Peries/Capston_Mini_Project',
                iconClass: 'uil uil-github'  
            },
            {
                href: 'https://www.behance.net/gallery/203720379/Medical-Records-Management-System',
                iconClass: 'uil uil-behance'  
            },
        ]
    },
    {
        id: 2,
        image:Work2,
        title: 'Portfolio Website',
        subtitle: 'Developed a comprehensive personal portfolio website which showcase my projects, skills, and experience in an engaging and visually appealing manner.',
        technologies:'ReactJS',
        category:'web design',
        icons: [
            {
                href: 'https://github.com/Ruchira-Peries/Personal-Portfolio',
                iconClass: 'uil uil-github'  
            },
        ]
    },
    {
        id: 3,
        image:Work3,
        title: 'Fluent Master',
        subtitle: 'Fluent Master is an English learning app tailored for Sri Lankan university students who are looking to improve their English proficiency.',
        technologies:'Figma',
        category:'mobile design',
        icons: [
            {
                href: 'https://www.figma.com/design/QqChS3MbguQZKwxinYTmuA/Fluent-Master?node-id=4049-990&t=CaK8Y9AdoHl38Wg9-1',
                iconClass: 'bx bxl-figma'  
            },
            {
                href: 'https://www.behance.net/gallery/204552353/Fluent-Master-English-learning-app',
                iconClass: 'uil uil-behance'  
            },
        ]
    },
       {
        id: 4,
        image:Work4,
        title: 'Vector Illustration',
        subtitle: 'My first vector illustration, created in Adobe Illustrator, blends creativity with technical skills, marking my debut in digital art with a vibrant and detailed design.',
        technologies:'Adobe Illustrator',
        category:'visual design',
        icons: [
    
            {
                href: 'https://www.behance.net/gallery/204401151/Vector-Illustration-Her',
                iconClass: 'uil uil-behance'  
            },
        ]
    },
    {
        id: 5,
        image:Work5,
        title: 'E-Sports Roster',
        subtitle: 'Created an intuitive design for an eSports app, showcasing teams, match schedules, and standings for a seamless user experience.',
        technologies:'Figma',
        category:'web design',
        icons: [
            {
                href: 'https://www.figma.com/design/8iLPbecF3lsXJXFH4dS6js/E-Sports-Roster?node-id=5-2&t=St8i1b1WY5NzyCEQ-1',
                iconClass: 'bx bxl-figma'  
            },
        ]
    },
];

export const projectsNav = [
    {
        name:'all',
    },
    {
        name:'web design',
    },
    {
        name:'mobile design',
    },
    {
        name:'visual design',
    },
];