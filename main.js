const inputs = document.querySelectorAll(".css-cont input")
inputs.forEach((inputs) => inputs.addEventListener("change", update))
function update() {
    const suffixDate = this.dataset.sizing || ""
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffixDate)
}