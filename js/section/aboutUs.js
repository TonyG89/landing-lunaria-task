import headerSection from '../components/headerSection.js';
import { aboutUs } from '../../const.js';

export const blockAboutUs = () => {
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