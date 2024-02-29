const meterToFeet = 3.281
const literToGallon = 0.264
const kgToLb = 2.204

const unitInputEl = document.getElementById("unit-input")
const convertBtn = document.getElementById("convert-btn")

const statusMsgEl = document.getElementById("status-msg")

const volumeTxtEl = document.getElementById("volumeTxt")
const lengthTxtEl = document.getElementById("lengthTxt")
const massTxtEl = document.getElementById("massTxt")

convertBtn.addEventListener("click", convert)

function convert() {
    if(validate(unitInputEl.value)) {
        let unit = Number(unitInputEl.value)
        let length = `${unit} meters = ${(unit*meterToFeet).toFixed(3)} feet | ${unit} feet = ${(unit/meterToFeet).toFixed(3)} meters`
        lengthTxtEl.textContent = length
        
        let volume = `${unit} litres = ${(unit*literToGallon).toFixed(3)} gallons | ${unit} gallons = ${(unit/literToGallon).toFixed(3)} litres`
        volumeTxtEl.textContent = volume
        
        let mass= `${unit} kilos = ${(unit*kgToLb).toFixed(3)} pounds | ${unit} pounds = ${(unit/kgToLb).toFixed(3)} kilos`
        massTxtEl.textContent = mass
    }
}

function validate(input) {
    if (input.length === 0) {
        statusMsgEl.innerHTML = "<span role='img' aria-label='Error'>⚠️</span> Enter a number to convert"
        statusMsgEl.style.display = "block";
        return false
    } else if (isNaN(input)) {
        statusMsgEl.innerHTML = "<span role='img' aria-label='Error'>⚠️</span> Enter a valid number to convert"
        statusMsgEl.style.display = "block";
        return false
    } else if (!isNaN(input)) {
        statusMsgEl.textContent = ""
        statusMsgEl.style.display = "none";
        return true
    }
}