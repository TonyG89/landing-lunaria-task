import headerSection from '../components/headerSection.js';
import { projects } from '../../const.js';

export const blockProjects = () => {
    headerSection("projects")
    projects.forEach(i => {
        document.querySelector(".slide-zone").innerHTML += `
        <div class="slide">
            <div class="photo">
                <img src="./img/projects/${i.photo}.png" alt="${i.title}">
            </div>
            <h4 class="name">${i.title}</h4>
            <h5 class="desc">${i.desc === "" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque delectus at, deleniti mollitia impedit laborum reprehenderit enim fugiat optio." : i.desc}</h5>
        </div>
    `
    })
}

const section = document.querySelector("#projects")
const slideZone = section.querySelector(".slide-zone")

const prevBtn = section.querySelector(".left")
const nextBtn = section.querySelector(".right")

const wrapperWidth = document.querySelector("wrapper").offsetWidth

let sliderPosition
if (wrapperWidth > 1720) {
    sliderPosition = [275, -1212, -1990]
} else if (wrapperWidth > 1500) {
    sliderPosition = [95, -840, -1730, -2515]
} else if (wrapperWidth > 1300) {
    sliderPosition = [205, -399, -1065, -1730]
} else if (wrapperWidth > 770) {
    sliderPosition = [50, -624, -1300, -1975]
} else sliderPosition = [20, -427, -872, -1318]

let position = 1

console.log(sliderPosition);

const slideLeft = () => {
    const arrSlides = section.querySelectorAll(".slide")

    switch (position) {
        case 1:
            slideZone.style.marginLeft = sliderPosition[0] + "px"
            prevBtn.classList.add("none")
            section.style.paddingBottom = wrapperWidth > 1720 ? "150px" : null
            break;
        case 2:
            slideZone.style.marginLeft = sliderPosition[1] + "px"
            nextBtn.classList.remove('none')
            section.style.paddingBottom = wrapperWidth <= 1720 && null
            break;
        case 3:
            slideZone.style.marginLeft = sliderPosition[2] + "px"
            section.style.paddingBottom = wrapperWidth <= 1720 && null
            break;
    }
    position--
    console.log(sliderPosition.length);
}

const slideRight = () => {
    switch (position) {
        case 0:
            slideZone.style.marginLeft = sliderPosition[1] + "px"
            prevBtn.classList.remove("none")
            section.style.paddingBottom = wrapperWidth > 1720 && null
            break;
        case 1:
            slideZone.style.marginLeft = sliderPosition[2] + "px"
            section.style.paddingBottom = wrapperWidth > 1720 || wrapperWidth < 1500 ? null : "150px"
            if (sliderPosition.length < 4) {
                nextBtn.classList.add('none')
            }
            break;
        case 2:
            slideZone.style.marginLeft = sliderPosition[3] + "px"
            nextBtn.classList.add('none')
            section.style.paddingBottom = wrapperWidth > 1720 ? null : "150px"
            break;
    }
    position++

    console.log(position);
}
prevBtn.addEventListener("click", () => slideLeft())

nextBtn.addEventListener("click", () => slideRight())
