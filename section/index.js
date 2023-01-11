import fetch from '../js/fetchHtml.js';
import { whatWeDo, aboutUs, projects, socLink } from '../const.js';
import headerSection from '../js/headerSection.js';

const fillWhatWeDo = () => {
    const stylePadding = (num) => `style='padding-right: ${num}'`
    const stylePad = "style='padding-right: 10px'"
    whatWeDo.forEach(({ title, desc }, index) => {
        document.querySelector(".table").innerHTML += `
            <li>
                <div class="num">0${index + 1}</div>
                <h3 ${index === 1 && stylePadding(130)}>${title}</h3>
                <h5 ${index === 2 && stylePadding(10)}>${desc}</h5>
            </li>
            `
    })
}

const aboutUsCode = () => {
    headerSection("about-us")
    aboutUs.forEach(i => {
        document.querySelector("#about-us").innerHTML += `
            <div class="photo"><img src="../img/about-us/${i.photo}.png" alt="${i.name}"></div>
            <div class="persona">
                <h4 class="name">${i.name}</h4>
                <h5 class="job">${i.job}</h5>
            </div>
            `
    })
}

const projectsAsCode = () => {
    headerSection("projects")
    projects.forEach(i => {
        document.querySelector("#projects").innerHTML += `
        <div class="slide">
        <div class="photo"><img src="../img/projects/${i.photo}" alt="${i.title}"></div>
        <h4 class="name">${i.title}</h4>
        <h5 class="desc">${i.desc === "" && "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque delectus at, deleniti mollitia impedit laborum reprehenderit enim fugiat optio."}</h5>
    </div>
    `
    })
}

const tellUsAsCode = () => headerSection("tell-us")
const contactAsCode = () => headerSection("contact")


export default function render() {
    fetch("header")
    fetch("what-we-do", "#what-we-do", fillWhatWeDo)
    fetch("accordion", "#accordion")
    fetch("about-us", "#about-us", aboutUsCode)
    fetch("projects", "#projects", projectsAsCode)
    fetch("tell-us", "#tell-us", tellUsAsCode)
    fetch("contact", "#contact", contactAsCode)
    fetch("footer")
}