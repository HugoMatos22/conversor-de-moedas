const convertValue = document.querySelector(".convert-buton")
const selectValue = document.querySelector(".currency-select")

function convertValues(){
  const inputValue = document.querySelector(".input-currency").value
  const currencyValueConvert = document.querySelector(".currency-value-convert")
  const currencyConverted = document.querySelector(".currency-value")
  
  
  const dolar = 5
  const euro = 6.2

  if(selectValue.value == "dolar"){
    currencyConverted.innerHTML = new Intl.NumberFormat('un-US', { style: 'currency', currency: 'USD' }).format(inputValue / dolar)
  }

  if(selectValue.value == "euro"){
    currencyConverted.innerHTML = new Intl.NumberFormat("ed-ED", {style: "currency",currency: "EUR",}).format(inputValue / euro)
  }

  currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue)

}


function inputChange(){
  const currencyName = document.querySelector("#currency-name")
  const imgCurrency = document.querySelector(".img-moeda-convertido")


  if(selectValue.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano"
    imgCurrency.src = "./imagens/dolar.png"
  }

  if(selectValue.value == "euro"){
    currencyName.innerHTML = "Euro"
    imgCurrency.src = "./imagens/euro.png"
  }

  convertValues()
}

selectValue.addEventListener("change",inputChange )
convertValue.addEventListener("click",convertValues)