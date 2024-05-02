const listaDeTeclas =  document.querySelectorAll('.tecla');

function tocaSom (idElementAudio){
    const element = document.querySelector(idElementAudio);

    if(element !== null && element.localName === 'audio'){
        element.play();
    }else{
        console.log('Erro');
    }
}

listaDeTeclas.forEach(element => {
    const instrumento = element.classList[1];
    element.onclick = function () {
        tocaSom(`#som_${instrumento}`);
    }

    element.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            element.classList.add('ativa');
        }
    }
    
    element.onkeyup = function(){
        element.classList.remove('ativa');
    }
    
});