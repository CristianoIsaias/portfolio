function clickMenu(){
    if(itens.style.display == 'block'){
      itens.style.display = 'none'
  } else{
    itens.style.display = 'block'
  }
} 

const slides = document.querySelector('.slides');
  const carrossel = document.getElementById('carrossel');
  const imagens = document.querySelectorAll('.slides img');
  const larguraImagem = 850;

  let indiceAtual = 1; // Começa na imagem 1 real (segunda imagem)
  let intervalo;

  function atualizarCarrossel(animar = true) {
    slides.style.transition = animar ? 'transform 0.5s ease-in-out' : 'none';
    slides.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
  }

  function mudarSlide(direcao) {
    indiceAtual += direcao;
    atualizarCarrossel();

    // Espera a transição terminar para checar clones
    setTimeout(() => {
      if (indiceAtual === 0) {
        indiceAtual = imagens.length - 2;
        atualizarCarrossel(false);
      }
      if (indiceAtual === imagens.length - 1) {
        indiceAtual = 1;
        atualizarCarrossel(false);
      }
    }, 510); // Ligeiramente maior que a duração da animação
  }

  function iniciarAutoPlay() {
    intervalo = setInterval(() => {
      mudarSlide(1);
    }, 3000);
  }

  function pararAutoPlay() {
    clearInterval(intervalo);
  }

  // Iniciar na imagem correta
  atualizarCarrossel(false);
  iniciarAutoPlay();

  carrossel.addEventListener('mouseenter', pararAutoPlay);
  carrossel.addEventListener('mouseleave', iniciarAutoPlay);

  //Atualizar a minha idade de forma automática.
  
