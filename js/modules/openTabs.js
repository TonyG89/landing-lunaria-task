
export default function openTabs() {
    const btnsEl = document.querySelectorAll(".btn-accordion")
    const accordion = document.querySelector(".accordion")
    const widthBlock = document.querySelector("#accordion").offsetHeight
    
    btnsEl.forEach(btn => {
        const h5 = btn.parentElement.querySelector("h5")
        const closed = btn.querySelector(".closed")

        btn.addEventListener("click", e => {
            if (document.querySelector("wrapper").offsetWidth / 2 < e.pageX) {
                accordion.style.left = "-200px"
            } else accordion.style.left = null
            if (closed.textContent === "+") {
                btnsEl.forEach(el => {
                    const h5 = el.parentElement.querySelector("h5")
                    const closed = el.querySelector(".closed")
                    h5.style.opacity="0"
                    closed.textContent = "+"
                    accordion.parentElement.style.height = null
                })
                h5.style.opacity="1"
                closed.textContent = "-"
                accordion.parentElement.style.height = widthBlock + h5.clientHeight + "px"
            } else {
                h5.style.opacity="0"
                closed.textContent = "+"
                accordion.parentElement.style.height = null
            }

        })
    })

    const sectionAccordion = document.querySelector("#accordion")
    const section = document.querySelector("header")
    
    sectionAccordion.style.width=section.clientWidth
    
}