
export default function openTabs() {
    const btnsEl = document.querySelectorAll(".btn-accordion")
    const accordion = document.querySelector(".accordion")
    const heightBlock = document.querySelector("#accordion").offsetHeight

    btnsEl.forEach(btn => {
        const h5 = btn.parentElement.querySelector("h5")
        const closed = btn.querySelector(".closed")

        btn.addEventListener("click", e => {
            const wrapperWidth = document.querySelector("wrapper").offsetWidth

            if (wrapperWidth > 1440 && wrapperWidth / 2 < e.pageX) {
                if (wrapperWidth > 1840) {
                    accordion.style.left = "-200px"
                } else if (wrapperWidth > 1440) {
                    accordion.style.left = e.pageX < 1150 ? "-450px" : "-700px"
                } else return
            } else accordion.style.left = null

            if (wrapperWidth > 1440) {
                
                if (closed.textContent === "+") {
                    btnsEl.forEach(el => {
                        const h5 = el.parentElement.querySelector("h5")
                        const closed = el.querySelector(".closed")
                        h5.style.opacity = "0"
                        closed.textContent = "+"
                        accordion.parentElement.style.height = null
                    })

                    h5.style.opacity = "1"
                    closed.textContent = "-"
                    accordion.parentElement.style.height = heightBlock + h5.clientHeight + "px"
                } else {
                    h5.style.opacity = "0"
                    closed.textContent = "+"
                    accordion.parentElement.style.height = null
                }
            }
        })
    })

    const sectionAccordion = document.querySelector("#accordion")
    const section = document.querySelector("header")

    sectionAccordion.style.width = section.clientWidth

}