let convertButton = document.querySelector(".convert-button")
const CurrencySelect = document.querySelector(".currency-select")



async function convertValues() {
        const inputCurrencyValue = document.querySelector(".input-currency").value
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value")
        const CurrencySelect = document.querySelector(".currency-select").value


        const data = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

        const DollarToDay = data.USDBRL.bid
        const EuroDay = data.EURBRL.bid
        const BitCoinDay = data.BTCBRL.bid

                currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL"
                }).format(inputCurrencyValue) 

        
        if (CurrencySelect === "Dolar") {

                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency" ,
                        currency: "USD"
                }).format(inputCurrencyValue / DollarToDay)

        } 
        
        if (CurrencySelect === "Euro") {

                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency" ,
                        currency: "EUR"
                }).format(inputCurrencyValue / EuroDay)
        }

        if (CurrencySelect === "BitCoin") {

                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency" ,
                        currency: "BTC"
                }).format(inputCurrencyValue / BitCoinDay)
        }
        

        }

        function changeCurrency() {
                const currencyName = document.getElementById("currencyName")
                const CurrencyImg = document.querySelector(".us-logo")
                
                if (CurrencySelect.value === "Dolar") {
                        currencyName.innerHTML = "Dólar"
                        CurrencyImg.src = "./assets/dolar.png"
                }

                if (CurrencySelect.value === "Euro") {
                        currencyName.innerHTML = "Euro"
                        CurrencyImg.src = "./assets/eur-logo.png"
                        
                }

                if (CurrencySelect.value === "BitCoin") {
                        currencyName.innerHTML = "BitCoin"
                        CurrencyImg.src = "./assets/bitcoin.png"

                }
        convertValues()

        }

CurrencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

