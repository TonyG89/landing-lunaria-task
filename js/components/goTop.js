
export default function goTop() {
    
    const htmlCode = `<button class="go-top hide"><img src="./img/arrow.svg" alt="go-top"><div>UP</div></button>`

    document.querySelector('body').insertAdjacentHTML("beforeend", htmlCode)    

    const btnGoTop = document.querySelector(".go-top")

    btnGoTop.addEventListener("click", () => window.scrollTo(0, 0))

    document.addEventListener("scroll", function () {
        btnGoTop.classList[window.pageYOffset <= 0 ? "add" : "remove"]("hide")
    })
}