import { whatWeDo } from '../const.js';

const htmlCode = `<button class="go-top"><img src="./img/arrow.svg" alt="go-top"><div>UP</div></button>`


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

const a = document.querySelector(".table")
    console.log(a);
}