import headerSection from '../js/headerSection.js';
import { blockAboutUs } from './aboutUs.js';
import { blockProjects } from './projects.js';
import { blockWhatWeDo } from './whatWeDo.js';
import { blockContact } from './contacts.js';

export default function render() {
    blockWhatWeDo()
    blockAboutUs()
    blockProjects()
    headerSection("tell-us")
    blockContact()
}