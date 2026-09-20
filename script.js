function encomendar(){
    let data = document.getElementById("data").value;
    let nome = document.getElementById("nome").value;
    let contacto = document.getElementById("contacto").value;
    let material = document.getElementById("material").value;
    let quantidade = document.getElementById("quantidade").value;
    let localizacao = document.getElementById("localizacao").value;

    if(data == "" || nome == "" || contacto == "" || material == "" || quantidade == "" || localizacao == ""){
        alert("Prencha todos os campos");
        return;
    }

    let numero = "244974519069";

    let mensagem = `*Nova Encomenda Erosart*%0A
    *Data*: ${data}%0A
    *Nome*: ${nome}%0A
    *Contacto*: ${contacto}%0A
    *Material*: ${material}%0A
    *Quantidade*: ${quantidade}%0A
    *Localizacao*: ${localizacao}%0A`;


    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");

} 