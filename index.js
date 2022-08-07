let getConvert = document.getElementById("get-Convert")
let lEl = document.getElementById("l-el")
let vEl = document.getElementById("v-el")
let mEl = document.getElementById("m-el")
let numEl = document.getElementById("num-el")



getConvert.addEventListener("click", function(){
    let myLeads = []
    myLeads.push(numEl.value)
    function render(){
        lEl.innerHTML = `${myLeads} meters = ${(myLeads * 3.281).toFixed(3)} feet | ${myLeads} feet = ${(myLeads / 3.281).toFixed(3)} meters`
        vEl.innerHTML = `${myLeads} liters = ${(myLeads * 0.264).toFixed(3)} gallons | ${myLeads} gallons = ${(myLeads / 0.264).toFixed(3)} gallons`
        mEl.innerHTML = `${myLeads} kilos = ${(myLeads * 2.20).toFixed(3)} pounds | ${myLeads} pounds = ${(myLeads / 2.20).toFixed(3)} kilos`     
    }
   render()
})
