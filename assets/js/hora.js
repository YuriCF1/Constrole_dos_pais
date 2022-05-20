//_____________________________________________MOSTRAR RELÓGIO_________________________________
function mostraHora() {
    let data = new Date()
    let hora = data.getHours();

    if (hora < 10) {
         hora = "0" + hora;
     }
    
     let tempoAtual = hora;

    document.getElementById("hora").innerHTML= tempoAtual;

}

function mostraMinuto() {
    let data = new Date()
    let min = data.getMinutes();

     if (min < 10) {
        min = "0" + min;
    }

    let tempoAtual = min;

    document.getElementById("min").innerHTML= tempoAtual;

}
function mostraSegundo() {
    let data = new Date();
    let seg = data.getSeconds();

    if (seg < 10) {
        seg = "0" + seg;
    }

    let tempoAtual = seg

    document.getElementById("seg").innerHTML= tempoAtual;

}


function mostraAHora() {
    setInterval(mostraHora, 1000);
    setInterval(mostraMinuto, 1000);
    setInterval(mostraSegundo, 1000);
    

}

//_________________________________________Movimenta Imagem______________________________
const fundo = document.getElementById('body');
const header = document.getElementById('header');
const form = document.getElementById('form');
const botao = document.getElementById('botao');

const foguete = document.getElementById('foguete');
const body = document.getElementById('body');

const primeiraCamada = document.getElementById('primeira_camada');
const final = document.getElementById('final')

const popup = document.querySelector('.popup_fundo')
const botaoSaida = document.querySelector('button')

    botao.addEventListener("click", function(e){
    
        document.addEventListener("mouseleave", (event) => {  
            if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {  
                //console.log("Saiu");  
                popup.style.display = 'block' //Mostra o botão caso tente sair da página
                botaoSaida.addEventListener('click', () => {
                    popup.style.display = 'none'

                 })
            }  
          });

        // startSimulation and pauseSimulation defined elsewhere

        let tentativasFeitas = 0;

        document.addEventListener('visibilitychange', function() {
            const tentativas = document.getElementById('frase_tentativas')
            tentativasFeitas +=  0.5
            tentativas.innerHTML = 'Você já saiu ' + tentativasFeitas + ' vezes!';
            console.log('Saiu do site');
            
        }, false)

        e.preventDefault(); //Tive que colocar aí pra fazer com o que o botão não recarregue, ou posso mudar ele para type=button
        let horaDada = document.getElementById('horas').value;
        let minutoDado = document.getElementById('minutos').value;

        let pixels = -2095;
        let positionFoguete = 100;
        
        let iniciaFundo;
        let iniciaFoguete; 


        function mostraFrase() {
            const acao = document.getElementById('acao')
            const frase = document.getElementById('frase_atividade')
            
            let atividade = acao.value;
            
            if (atividade) {
                frase.innerHTML = 'Você está focado em ' + atividade + '!';
            }

        }

        mostraFrase();

        function comecaFundo() {
            let horaDefinida = horaDada * 1718.377;            
            let minutoDefinido = minutoDado * 28.6396181384248;
            let tempoDefinitivo = horaDefinida + minutoDefinido;

            iniciaFundo = setInterval(moveFundo, tempoDefinitivo) //Tempo aqui____________________________________
            header.style.cssText = 'visibility: hidden';
            form.style.cssText = 'visibility: hidden';

            console.log(horaDefinida);
            console.log(minutoDefinido);
            console.log(tempoDefinitivo)

        }
        
        function comecaFoguete() {
            iniciaFoguete = setInterval(sobefoguete, 1) 
            
        }

        function paraFundo() {
            clearInterval(iniciaFundo);
            
        }
        
        function paraFoguete() {
            clearInterval(iniciaFoguete);

        }

        comecaFundo();

        let pixelCamadas = [600, 900];
        function moveFundo() {
            // let positionFoguete = 1;
            
            fundo.style.cssText = 'background-position-y:' + pixels +'px;';
            pixels++

            primeiraCamada.style.cssText ='bottom:' + pixelCamadas[0] + 'px;'
            pixelCamadas[0]--
         

            if (pixelCamadas[0] <= -637) {
                primeiraCamada.style.cssText ='display:none;'
            }
    
            if (pixels > 0) {
               fundo.style.cssText = 'background-position-y:' + 0 +'px;';
               paraFundo();
               comecaFoguete();
               final.style.cssText = 'display: block;'
             }
             
        }
                
            function sobefoguete() {
                foguete.style.cssText = 'bottom:' + positionFoguete + 'px';
                positionFoguete++;
               // console.log(positionFoguete)
                
                if (positionFoguete > 650) {
                paraFoguete();
            
                }
            }
    }, true)


// ________________________________________Códigos de estudo______________________________
    

// form.addEventListener("blur", function( event ) {
//    let tempo = event.target.value;
//    console.log(tempo)

//    let tempoTotal = (tempo);

//     setInterval(moveFundo, tempoTotal)

//     let pixels = -2100;  
//     function moveFundo() {
//         header.style.cssText = 'opacity: 0'
//         form.style.cssText = 'display:none'
//         fundo.style.cssText = 'background-position-y:' + pixels +'px;';
//         pixels++
        
//         if (pixels > 0) {
//             fundo.style.cssText = 'background-position-y:' + 0 +'px;';

//         }
    
//     }
    

// }, true);



// horas.addEventListener('blur', (input) => {
//     pegaTempo(input)
//     //Evento = Elemento do input onde digitei e ocorreu o 'blur'. Target pega o dado desse evento
    

// })




