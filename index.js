
const inputEl = document.getElementById("number")
const buttonEl = document.getElementById("convert-btn")



// ..............ON CLICK OF BUTTON.........
buttonEl.addEventListener("click", function () {
    // GET And Change P ELEM
    let lengthElp1 = document.getElementById("length-el")
    lengthElp1.textContent = `${inputEl.value} meters  = ${(inputEl.value * 3.281).toFixed(3)} feet |
                            ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`



    let volumeElp2 = document.getElementById("volume-el")
    volumeElp2.textContent = `${inputEl.value} liters  = ${(inputEl.value * 0.264).toFixed(3)} gallons |
                         ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`



    let massElp3 = document.getElementById("mass-el")
    massElp3.textContent = `${inputEl.value} kilos  = ${(inputEl.value * 2.204).toFixed(3)} pounds |
                            ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`

})

// ............ON REFRESH........

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const refreshEl = document.getElementById("refresh-btn")

refreshEl.addEventListener("click", function () {
    inputEl.value = ""
    lengthEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""
})