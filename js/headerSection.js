import {titles} from '../const.js';

export default function headerSection(id) {
    const section = document.querySelector("#" + id)
    let html
    titles.forEach(i => {
        if (i.id == id) {
            html = `
            <div class="top-section">
            <h2>${i.title}</h2>
            <h5>${i.desc}</h5>
            </div>
            `
        }
    })
    section.insertAdjacentHTML('afterbegin', html)
}


