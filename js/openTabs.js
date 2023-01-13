
export default function openTabs() {
    const btnsEl = document.querySelectorAll(".btn-accordion")
    const accordion = document.querySelector(".accordion")
    const widthBlock = document.querySelector("#accordion").offsetHeight


    btnsEl.forEach(btn => {
        const h5 = btn.parentElement.querySelector("h5")
        const closed = btn.querySelector(".closed")

        btn.addEventListener("click", e => {
            if (document.body.offsetWidth / 2 < e.pageX) {
                accordion.style.left = "-200px"
            } else accordion.style.left = null
            if (closed.textContent === "+") {
                btnsEl.forEach(el => {
                    const h5 = el.parentElement.querySelector("h5")
                    const closed = el.querySelector(".closed")
                    h5.classList.add("hide")
                    closed.textContent = "+"
                    accordion.parentElement.style.height = null
                })
                h5.classList.remove("hide")
                closed.textContent = "-"
                accordion.parentElement.style.height = widthBlock + h5.clientHeight + "px"
            } else {
                h5.classList.add("hide")
                closed.textContent = "+"
                accordion.parentElement.style.height = null
            }

        })
    })
}