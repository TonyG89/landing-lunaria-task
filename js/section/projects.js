import headerSection from '../components/headerSection.js';
import { projects } from '../../const.js';

export const blockProjects = () => {
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

const section = document.querySelector("#projects")
const slideZone = section.querySelector(".slide-zone")

const prevBtn = section.querySelector(".left")
const nextBtn = section.querySelector(".right")

const sliderPosition = [275, -1212, -1990]
let position = 1
console.log(sliderPosition);
const slideLeft = (e) => {
    const arrSlides = section.querySelectorAll(".slide")

    // arrSlides.forEach(slide => {
    //     console.log(slide.clientWidth);
    //     console.log(slide.scrollWidth);

    // })

    switch (position) {
        case 1:
            slideZone.style.marginLeft = sliderPosition[0] + "px"
            prevBtn.classList.add("none")
            section.style.paddingBottom = "150px"
            break;
        case 2:
            slideZone.style.marginLeft = sliderPosition[1] + "px"
            nextBtn.classList.remove('none')
            break;
    }


    position--
}

const slideRight = () => {
    switch (position) {
        case 0:
            slideZone.style.marginLeft = sliderPosition[1] + "px"
            prevBtn.classList.remove("none")
            section.style.paddingBottom = null
            break;
        case 1:
            slideZone.style.marginLeft = sliderPosition[2] + "px"
            nextBtn.classList.add('none')
            break;
    }
    position++
}

prevBtn.addEventListener("click", () => slideLeft())

nextBtn.addEventListener("click", () => slideRight())
