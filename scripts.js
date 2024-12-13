//cotacao da moeda
const USD = 4.87
const EUR = 5.13
const GBP = 4.38

//pegando o formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")

// quando executar alguma acao, o addEventListener vai monitorar quando entrar conteudo no input 
//e logo em seguida vai executar uma funcao

//minupulando amount para receber somente numeros
amount.addEventListener("input",()=>{
    // verifica caracteres se tiver apenas numeros e vai subistituir letras por nada 
    const HasCharacterRegex = /\D+/g
    // replace é utilizado para trocar para nada  
    amount.value= amount.value.replace(HasCharacterRegex, "")
}) 
//capturando evento de submit do form
form.onsubmit = function(){ 
    // para nao fazer o reload da pagina qnd enviar o submit
    event.preventDefault();

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            //para nao olhar para outros casos
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
        default:
            alert("Selecione uma moeda válida");
            break;  // caso nao seja nenhuma das opcoes, exibe uma mensagem de alerta 
                         // e para o script não executar a funcao convertCurrency 
                         // (caso queira adicionar mais moedas, basta adicionar mais cases nesse switch) 
                         // e deixar o default break;  // sem ele, caso nao seja nenhuma das opcoes, o script vai continuar executando a funcao convertCurrency
    }

}
//estrutura da conversao e funcao para conversao
function convertCurrency(amount, price, symbol) {
    try {
        //aplica a classe para exibir o footer com resultado 
        footer.classList.add("show-result")
    } catch (error) {
        //oculta a classe do footer
        footer.classList.remove("show-result")
        
        console.log(error);
        alert("Ocorreu um erro durante a conversão. Tente novamente mais tarde.");
    }
}
    