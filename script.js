let materiais =[];

let precos ={
    "arduino mega": 14500,
    "arduino nano": 8000,
    "arduino uno": 12500,
    "botão": 100,
    "capacitor ceramico": 100,
    "capacitor eletrolítico": 100,
    "ci 555": 2500,
    "conector dc": 1200,
    "conector usb": 1200,
    "cristal oscilador": 1200,
    "diodo zenner": 100,
    "diodo": 100,
    "display lcd": 6500,
    "display oled": 5000,
    "display": 1200,
    "esp32": 13000,
    "fotodiodo": 2500,
    "fusivel": 2500,
    "indutor": 2000,
    "infravermelho": 2200,
    "interruptor": 2000,
    "jampers": 100,
    "ldr": 1500,
    "leds": 100,
    "microfone": 3000,
    "motor dc": 1000,
    "motor de passo": 3500,
    "placa de ensaio": 3000,
    "ponte retificadora": 2000,
    "potenciometro": 2000,
    "red swicth": 1500,
    "ci registador de deslocamento": 2500,
    "rele": 2500,
    "resistores": 100,
    "sensor de temperatura LM35": 2500,
    "sensor dht11": 3500,
    "sensor ultrasonico": 5000,
    "servo motor": 4500,
    "teclado matricial": 5000,
    "termistor": 1200,
    "transistores": 300,
    "varistor": 1200,
    "porta lógica (74HC00)": 1500,
    "multímetro digital": 11200,
    "módulo réle 5v": 4000,
    "sensor de movimento": 3000,
    "porta lógica (74HC08)": 1500,
    "porta lógica (74HC32)": 1500,
    "porta lógica (74HC04)": 1500,
    "porta lógica (74HC00)": 1500,
    "porta lógica (74HC02)": 1500,
    "porta lógica (74HC86)": 1500,
    "módulo bluetooth": 6000,
    "buzzer": 200,
    "sensor de gás MQ-2": 6500,
    "sensor de chuva":5000,
    "sensor de chama": 5000,
    "drive de motor L298N": 6000,
    "sensor de distania": 4000,
    "módulo joystick": 6500,
    "sensor de corrente": 5000,
    "módulo cartão micro SD": 5500,
    "sensor de nível de agua": 4500,
    "sensor de proximidade": 4000,
    "sensor de vibração": 4000,
    "sensor de impressão digital AS608": 24000,
    "conversor de tensão LM2596": 3500,
    "display módulo relógio digital": 4500,
    "módulo GSM": 4000,
    "Ventoinha DC 5V": 2500,
    "sensor de cor": 2500,
    "sensor de inclinação": 4000,
    "módulo amplificador LM386": 5000,
    "sensor magnético": 5500,
    "sensor de qualidade do ar MQ-7": 6000,
    "módulo amplificador de áudio": 5500,
    "porta lógica 74LS00": 1500,
    "porta lógica 74LS02": 1500,
    "porta lógica 74LS04": 1500,
    "porta lógica 74LS08": 1500,
    "porta lógica 74LS86": 1500,
    "módulo TX": 4500,
    "módulo RX": 4500,
    "ci HT12E": 2000,
    "ci L293D": 2000,
    "ci HT12D": 2000,
    "ci 4017": 2000,
    "pilha 9volts": 1000,
    "ferro de solda": 6000,
    "stanho": 4500
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
    let total = 0;

    for(let i = 0; i < materiais.length; i++){

        let subtotal = Number(materiais[i].subtotal);

        textoMateriais += materiais[i].nome +
        "- Quantidade: " + materiais[i].quantidade + " | " 
        + materiais[i].preco +  " kz = " + materiais[i].subtotal +
        " kz\n";

        total = total + materiais[i].subtotal;
    }

    let numero = "244958160691";

    let mensagem = "*Nova Encomenda Erosart*\n\n" +
    "*Data*: " + data + "\n" +
    "*Nome*: " + nome + "\n" +
    "*Contacto*: " + contacto + "\n\n" +
    "*Materiais:*\n" + textoMateriais + "\n*Total: " + total + " kz*\n\n" + "*Localização*: " + localizacao;

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
);
}
