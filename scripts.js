const amount = document.getElementById("amount")

// quando executar alguma acao, o addEventListener vai monitorar quando entrar conteudo no input 
//e logo em seguida vai executar uma funcao

//minupulando amount para receber somente numeros
amount.addEventListener("input",()=>{
   console.log(amount.value)
}) 