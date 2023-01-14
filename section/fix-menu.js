
export const fixMenu = () => {
    const section = document.querySelector('header')
    const fixMenu = document.querySelector('#fix-menu')

    const htmlBlock = `
        <div class="menu" style="width: ${section.offsetWidth}px">
            <div class="logo-block" onclick="window.scrollTo(0, 0)">
                <div class="logo"><img src="../img/lunaria.png"
                        alt="logo"></div>
                <div><img src="../img/web-ui-dev.png" alt="web-ui-dev"></div>
            </div>
            <div class="top-header">Stand <span>with Ukraine</span></div>
            <nav>
                <ul>
                    <li><a href="#projects">portfolio</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    `
    document.querySelector('#fix-menu').innerHTML = htmlBlock

    console.log(document.body.scrollTop);


    document.addEventListener("scroll", function () {
        fixMenu.classList[window.pageYOffset < 800 ? "add" : "remove"]("hide")
    })
}