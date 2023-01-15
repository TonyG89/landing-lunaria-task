import headerSection from './components/headerSection.js';
import goTop from './components/goTop.js'
import clearInput from './modules/clearInput.js'
import rangeSlider from './modules/rangeSlider.js'
import { blockAboutUs } from './section/aboutUs.js';
import { blockProjects } from './section/projects.js';
import { blockWhatWeDo } from './section/whatWeDo.js';
import { blockContact } from './section/contacts.js';
import { fixMenu } from './section/fix-menu.js';

export default function render() {
    blockWhatWeDo()
    blockAboutUs()
    blockProjects()
    headerSection("tell-us") // blockTellUs
    clearInput() // blockTellUs
    rangeSlider() // blockTellUs
    blockContact()
    goTop() // blockHeader wrapper-scroll
    fixMenu() // blockHeader header-scroll
}