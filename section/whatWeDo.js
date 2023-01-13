import { whatWeDo } from '../const.js';

export const blockWhatWeDo = () => {
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