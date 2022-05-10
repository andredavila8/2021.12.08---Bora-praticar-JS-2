const nome = 'João';
const peso = 200;
const altura = 1.70;
const imc = peso/(altura*altura);

function acharImc() {
    if (imc >= 30) {
        console.log(`${nome}, você está cima do peso.`);
    }else {
        console.log(`${nome}, você não está acima do peso.`);
    }
}
acharImc()