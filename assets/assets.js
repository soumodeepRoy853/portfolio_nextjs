import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import Link from 'next/link';
import nextjs_icon from "./nextjs_icon.png";
import nodejs_icon from "./nodejs_icon.png";
import expressjs_icon from "./expressjs_icon.png";
import tailwindcss_icon from "./tailwindcss_icon.png";
import js_icon from "./js_icon.png";
import github_icon from "./github_icon.png";
import dsa_icon from "./dsa_icon.png";
import dsa_icon_dark from "./dsa_icon_dark.png";
// import portfolio_img from "./portfolio-img.png"

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    nextjs_icon,
    nodejs_icon,
    tailwindcss_icon,
    js_icon,
    expressjs_icon,
    github_icon,
    dsa_icon,
    dsa_icon_dark

};

export const workData = [
  {
    title: 'Portfolio - NextJs',
    description: 'Responsive UI with NextJS and TailwindCSS',
    live: 'https://soumodeep.vercel.app/',
    github: 'https://github.com/soumodeepRoy853/portfolio',
    bgImage: "/work-1.png"
  },
  {
    title: 'AI Agent',
    description: 'Real time chat with AI - MERN Stack',
    //live: 'https://ai-agent-soumodeep.vercel.app/',
    github: 'https://github.com/soumodeepRoy853/VotingApp.git',
    bgImage: '/work-2.png',
  },
  {
    title: 'DevConnect',
    description: 'Developer Social Network - MERN Stack',
    //live: 'https://devconnect-soumodeep.vercel.app/', 
    github: 'https://github.com/soumodeepRoy853/DevConnect.git',
    bgImage: '/work-3.png',
  },
  {
    title: 'Voting App',
    description: 'Build a Voting app for Backend - Node.js, Express.js',
    //live: '',
    github: 'https://github.com/soumodeepRoy853/VotingApp.git',
    bgImage: '/work-4.png',
  },
];


export const serviceData = [
    { icon: assets.web_icon, title: 'Frontend project', description: 'Web development is the process of building, programming...', link: 'https://github.com/soumodeepRoy853/BlogSide.git' },
    { icon: assets.mobile_icon, title: 'Backend project', description: 'Back-end development focuses on the server-side logic, databases, and infrastructure that power web applications...', link: 'https://github.com/soumodeepRoy853/VotingApp.git' },
    { icon: assets.ui_icon, title: 'Fullstack project', description: 'Full-stack development involves building both the front-end and back-end of web applications...', link: 'https://github.com/Poluslg/fundamentaleureka_nextjs.git' },
    { icon: assets.graphics_icon, title: 'Portfolio project', description: 'A portfolio project is a curated showcase of your skills, expertise, and accomplishments, typically presented through a professional website or platform...', link: 'https://github.com/soumodeepRoy853/Portfolio.git' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML5, CSS3, JavaScript ES6, TypeScript, C++' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Information Technology' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 10 projects' },
 {
  icon: assets.dsa_icon, // Use a brain, code, or algorithm icon
  iconDark: assets.dsa_icon_dark,
  title: 'Problem Solving',
  description: 'Solved 150+ DSA problems on LeetCode and GeeksforGeeks',
}

,
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git, assets.expressjs_icon, assets.tailwindcss_icon, assets.nextjs_icon, assets.nodejs_icon
];


