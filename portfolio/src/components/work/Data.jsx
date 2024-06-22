import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";
export const projectsData = [
    {
        id: 1,
        image:Work1,
        title: ' Medical Records Management System',
        subtitle: 'Medical records management system which provides online appointment and consultation features for university students.',
        technologies:'ReactJS | NodeJS | MySQL',
        category:'web',
        icons: [
            {
                href: 'https://www.figma.com/design/ULpUh244De2fF9d1vfxfa6/Medical-System?node-id=0-1&t=jshIQyHfqIXsNiid-1',
                iconClass: 'bx bxl-figma'  
            },
            {
                href: 'https://github.com/Ruchira-Peries/Capston_Mini_Project',
                iconClass: 'uil uil-github'  
            },
        ]
    },
    {
        id: 2,
        image:Work2,
        title: 'Portfolio Website',
        subtitle: 'Portfolio website to showcase the individual information and projects ',
        technologies:'ReactJS',
        category:'web',
        icons: [
            {
                href: 'https://github.com/Ruchira-Peries/Personal-Portfolio',
                iconClass: 'uil uil-github'  
            },
        ]
    },
];

export const projectsNav = [
    {
        name:'all',
    },
    {
        name:'web',
    },
    {
        name:'app',
    },
    {
        name:'design',
    },
];