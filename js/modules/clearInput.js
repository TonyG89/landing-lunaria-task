export default function clearInput() {
    const input = document.querySelector("input.tel")
    const startValue = input.value = "+35 088 528 63 59"
    
    input.addEventListener("click", () => input.value = "")
    input.addEventListener("focus", ()=> startValue)

}