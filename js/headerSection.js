import { titles } from '../const.js';

export default function headerSection(id) {
    const section = document.querySelector("#" + id)
    let html
    titles.forEach(i => {
        if (i.id == id) {
            html = `
            <div class="top-section">
            <h2>${i.title}</h2>
            <div class="text">
                <h5>${i.desc}</h5>
                ${id === "about-us" ? '<a href="#" class="more-about">More About Us<span><img src="../img/arrow.svg" alt="arrow" /></span></a>': ''}
            </div>
            </div>
            `
        }
    })
    section.insertAdjacentHTML('afterbegin', html)
}


