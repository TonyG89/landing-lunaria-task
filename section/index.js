import fetch from '../js/fetchHtml.js';
import { whatWeDo, aboutUs, projects, socLink } from '../const.js';
import headerSection from '../js/headerSection.js';
import Slider from '../js/slider.js';

const blockWhatWeDo = () => {
    const stylePadding = (num) => `style='padding-right: ${num}'`
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

const blockAboutUs = () => {
    headerSection("about-us")
    aboutUs.forEach(i => {
        const url = `../img/about-us/${i.photo}.png`
        document.querySelector(".photoes").innerHTML += `
            <div class="card">
                <div class="photo" style='background: url(${url}) no-repeat center'>
                    <img class="photo" src="../img/gradient.png" alt="${i.name}">
                </div>
                <div class="persona">
                    <h4 class="name">${i.name}</h4>
                    <h5 class="job">${i.job}</h5>
                </div>
            </div>
            `
    })
}

const blockProjects = () => {
    headerSection("projects")
    projects.forEach(i => {
        document.querySelector(".slide-zone").innerHTML += `
        <div class="slide">
            <div class="photo">
                <img src="../img/projects/${i.photo}.png" alt="${i.title}">
            </div>
            <h4 class="name">${i.title}</h4>
            <h5 class="desc">${i.desc === "" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque delectus at, deleniti mollitia impedit laborum reprehenderit enim fugiat optio." : i.desc}</h5>
        </div>
    `
    })
}

// const tellUsAsCode = () => headerSection("tell-us")

const contactAsCode = () => {
    headerSection("contact")
    socLink.forEach(i => {
        document.querySelector(".icon").innerHTML += `
        <img src="../img/icons/${i}.svg" alt="${i}">
        `
    })
}

export default function render() {
    blockWhatWeDo()
    blockAboutUs()
    blockProjects()
    headerSection("tell-us")
    contactAsCode()
}