/*const nome = 'João';
const n1 = 1;
const n2 = 7;
const n3 = 8;
const MA = ((n1 + n2 + n3)/3);

    if(MA >= 9) {
        console.log(`${nome}, seu conceito A. Aprovado.`);
        }else if(MA >= 7.5) {
            console.log(`${nome}, seu conceito B. Aprovado.`);
            }else if(MA >=6) {
                console.log(`${nome}, seu conceito C. Aprovado.`);
                }else if(MA >= 4) {
                    console.log(`${nome}, seu conceito D. Você está reprovado.`);
                    }else{
                        console.log(`${nome}, seu conceito é E. Você está reprovado.`);
                    }*/


function calcularMedia(nome, n1, n2, n3) {
    const mediaAproveitamento = (n1 + n2 + n3) /3;
    let conceito = 'E';
    let aprovado = 'Reprovado';

    switch (true) {//pq true? quando o que estiver em um CASE for TRUE, esse CASE será o considerado e o executado.
        case mediaAproveitamento >= 9:
            conceito = 'A';
            break;
        case mediaAproveitamento >= 7.5 && mediaAproveitamento < 9:
            conceito = 'B';
            break;
        case mediaAproveitamento >= 6 && mediaAproveitamento < 7.5:
            conceito = 'C';
            break;
        case mediaAproveitamento >= 4 && mediaAproveitamento < 6:
            conceito = 'D';
            break;        
        /*default:
            conceito = 'E';
            break; por ter declarado a let conceito = 'E', não preciso usar esse default*/
    }
    
    console.log(`${nome} ${conceito} ${mediaExercicios} ${aprovado}`);
}

calcularMedia('André', 9, 10, 9)