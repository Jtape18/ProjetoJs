const form = document.querySelector("form");
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

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

    console.log(currency.value)
}