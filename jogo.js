var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
var nivel = nivel.replace("?", '')
	
	if(nivel === 'casaDaSamantha'){
		criaMosquitoTempo = 1500
	}
		 else if (nivel === 'casaDaJaque'){
			criaMosquitoTempo = 1000
		 }
	else if (nivel === 'casaDaVoTeresa'){
		 criaMosquitoTempo = 750
	}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
    window.onresize = ajustaTamanhoPalcoJogo;

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1	

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criarMosquito)
		window.location.href = 'vitoria.html'
	}else {
	document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

// aqui fiz o ajuste da página conforme o usuario modifique.

 function posicaoRandomica(){

	//remover o mosquito anterior (caso exista)
if(document.getElementById('mosquito')){
	document.getElementById('mosquito').remove()

	if(vidas > 3){
		window.location.href = 'fim_de_jogo.html'
	} else {
	document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
	
	vidas++
	}
}

var posicaoX = Math.floor(Math.random() * (largura - 90));
    var posicaoY = Math.floor(Math.random() * (altura - 90));

    posicaoX = Math.max(0, posicaoX);
    posicaoY = Math.max(0, posicaoY);

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    };

    document.body.appendChild(mosquito);
}




function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}

}

function ladoAleatorio() {

	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
		
	}

}
