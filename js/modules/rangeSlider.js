export default function rangeSlider() {
    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => {
            e.style.setProperty('--value', e.value)
            if (e.value === e.max) {
                document.querySelector(".price span").innerHTML = "More than $ 25 000"
                document.querySelector("output").style.display = "none"
            } else {
                document.querySelector(".price span").innerHTML = "$"
                document.querySelector("output").style.display = ""
            }
        });
    }
}