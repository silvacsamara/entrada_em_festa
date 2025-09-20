/*
Entrada em festa

- Pergunte ao usuário a idade e se ele tem convite (`sim` ou `não`).
- A entrada só é permitida se **maior de 18 E tiver convite**.
- Mostre mensagens apropriadas:
    - "Entrada permitida"
    - "Entrada negada: menor de idade"
    - "Entrada negada: precisa de convite"
*/



let idade = parseInt(prompt("Qual a sua idade: "))
let convite = prompt("Você tem convite: (sim ou nao): ").toLowerCase()

convite = convite.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

try{
    if(isNaN(idade)){
        throw new Error(`${idade} não é um valor válido. Por favor, insira apenas números.`)
    }else if(convite != "sim" && convite != "nao"){
        throw new Error(`${convite} não é um valor válido. Por favor, insira apenas "sim" ou "não".`)
    }

    if(idade >= 18 && convite === "sim"){
        console.log("Entrada permitida.")
    }else if(idade < 18 && convite === "sim"){
        console.log("Entrada negada: menor de idade.")
    }else{
        console.log("Entrada negada: precisa de convite.")
    }

}catch(erro){
    console.log("Erro: ", erro.message)
}