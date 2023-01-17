import headerSection from '../components/headerSection.js'
import { socLink } from '../../const.js';

export const blockContact = () => {
    headerSection("contact")
    socLink.forEach(i => {
        document.querySelector(".icon").innerHTML += `
        <img src="./img/icons/${i}.svg" alt="${i}">
        `
    })
}

