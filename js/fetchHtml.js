export default function fetchHtml(sectionName, attr = sectionName, code=undefined) {
    fetch(`./section/${sectionName}.html`)
        .then(res => res.text())
        .then(html => document.querySelector(attr).innerHTML = html)
        .catch(err => console.log(err))
        .then(code)
}   