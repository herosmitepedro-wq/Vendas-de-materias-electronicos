let materiais =[];

let precos = {
    "arduino uno": 12000,
    "resistores": 100,
    "jampers": 100,
    "transistores": 250,
    "modulo rele": 3000,
    "leds": 130,
    "ldr": 1000
};

function adicionarMaterial(){

    let material = document.getElementById("material").value;

    let quantidade = document.getElementById("quantidade").value;

    if(material == ""){
        alert("Digite o material");
        return;
    }

    if(quantidade == "" || quantidade < 1){
        alert("Digite uma quantidade válida");
        return;
    }

    if(precos[material] == undefined){
        alert("Material não cadastrado");
        return;
    }

    let preco = precos[material];

    materiais.push({
        nome: material,
        quantidade: Number(quantidade),
        preco: preco,
        subtotal: preco * Number(quantidade)
    });

    mostrarMateriais();

    document.getElementById("material").value = "";

    document.getElementById("quantidade").value = 1;
}

function mostrarMateriais(){

    let lista = document.getElementById("verMateriais");

    lista.innerHTML = "";

    let total = 0;

    for(let i = 0; i < materiais.length; i++){

        lista.innerHTML += "<div class='itemMaterial'>" +

        "<strong>" + materiais[i].nome + "</strong><br>" +

        "Preço: " + materiais[i].preco + "kz<br>" +

        "Quantidade: " + materiais[i].quantidade + "<br>" +

        "Subtotal: " + materiais[i].subtotal + "kz\n" +
        "</div>";

        total = total + materiais[i].subtotal;
    }

    document.getElementById("total").innerHTML = "Total: " + total + "kz";
}

function encomendar(){

    let data = document.getElementById("data").value;
    let nome = document.getElementById("nome").value;
    let contacto = document.getElementById("contacto").value;
    let localizacao = document.getElementById("localizacao").value;

    if(data == "" || nome== "" || contacto == "" || localizacao == ""){
        alert("Prencha todos os campos");
        return;
    }

    let textoMateriais = "";

    for(let i = 0; i < materiais.length; i++){

        textoMateriais += materiais[i].nome +
        "- Quantidade: " + materiais[i].quantidade +
        "\n";
    }

    let numero = "244974519069";

    let mensagem = "*Nova Encomenda Erosart*\n\n" +
    "*Data*: " + data + "\n" +
    "*Nome*: " + nome + "\n" +
    "*Contacto*: " + contacto + "\n\n" +
    "*Materiais:*\n" + textoMateriais + "\n*Localização*: " + localizacao;

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
);
}