// Tax Rate Buttons
let percentBtn = document.querySelectorAll(".percent")
// Input Area
let taxRatio = document.querySelector(".taxRatio")
let costTax = document.querySelector(".costTax")
//tax Excluded & included Buttons
let taxFreeArea = document.querySelectorAll(".tax-free")
let taxFree = document.getElementById("tax-free-btn")
let taxIncluded = document.getElementById("include-tax-btn")
// Result Area 
let subtotal = document.querySelector(".subtotalInput")
let cost = document.querySelector(".tax")
let total = document.querySelector(".total")

// Yellow Buttons
let lastClickBtn = null;
percentBtn.forEach(button => {
    button.addEventListener("click", (e) =>{
        if(lastClickBtn){
            lastClickBtn.classList.remove("active")
        }
    e.target.classList.add("active");
    lastClickBtn = e.target;
    if(e.target.textContent === "Yüzde Gir"){
        taxRatio.value = ""
        taxRatio.focus()
    }else{
        taxRatio.value = e.target.textContent
    }
    })
})
// Blue buttons
let checkTaxBtn = null 
taxFreeArea.forEach(button => {
    button.addEventListener("click", (e) =>{
        if(checkTaxBtn){
            checkTaxBtn.classList.remove("selected")
        }
        e.target.classList.add("selected")
        checkTaxBtn = e.target
    })
})

// Vergi dahil değeri hesaplama
taxIncluded.addEventListener("click",() =>{
    let cleanInputText = Number(taxRatio.value.replace(/[^.,\d]/g, "").replace(",", ".")); //tax ratio
    let cleanCost = Number(costTax.value.replace(/[^.\d,]/g, "").replace(",", ".")); // Value
    let kdv =  Number((cleanInputText * (cleanCost/100)))
    let totalValue  = cleanCost + kdv

    subtotal.value = "₺"+ " " + cleanCost.toFixed(2)
    cost.value = "₺"+ " " + kdv.toFixed(2)
    total.value = "₺"+ " " + totalValue.toFixed(2)

})

// Vergi hariç değeri hesaplama
taxFree.addEventListener("click", () =>{
let cleanInputText = Number(taxRatio.value.replace(/[^\d.,]/g, "").replace(",", ".")); //tax ratio
let cleanCost = Number(costTax.value.replace(/[^.\d,]/g, "").replace(",", ".")); // Value
let netValue = (cleanCost / (1+(cleanInputText/100)))
let kdv = (cleanCost - netValue)

subtotal.value = "₺"+ " " + netValue .toFixed(2)
cost.value = "₺"+ " " + kdv.toFixed(2)
total.value = "₺"+ " " + cleanCost.toFixed(2)
})

