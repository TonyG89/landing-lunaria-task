import { titles } from '../../const.js';

export default function headerSection(id) {
    const section = document.querySelector("#" + id)
    const moreHtml = '<br><h5 class="hidden">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, pariatur saepe ipsam at mollitia?</h5><button class="more-about">More About Us<span><img src="./img/arrow.svg" alt="arrow" /></span></button>'

    let html
    titles.forEach(i => {

        if (i.id == id) {
            html = `
            <div class="top-section">
            <h2>${i.title}</h2>
            <div class="text">
                <h5>${i.desc}</h5>
                ${id === "about-us" ? moreHtml : ''}
            </div>
            </div>
            `
        }
    })
    section.insertAdjacentHTML('afterbegin', html)

    const btn = document.querySelector('.more-about')
    const hiddenBlock = document.querySelector(".hidden")
    btn.addEventListener("click", () => {
        hiddenBlock.classList.add("visible")
        btn.classList.add("hidden")
    })
    document.querySelector("#" + id).style.width = document.querySelector("header").offsetWidth
}


