
/* abre e cfecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* quando clicar em item do menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* Mudar o header da pagina quando der scroll */



function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight


    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }   

}



/* Testimonials carousel swiper */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

  });

  /*  ScrollReveal: Mostrar elementos quando der scroll na pagina */

  const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 700,
        reset: true
  })

  scrollReveal.reveal(`
    
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
  `, { interval: 100})


  /* botão voltar para o topo */

  
  function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')
    if(window.scrollY>=560){
        backToTopButton.classList.add('show')
      } else {
        backToTopButton.classList.remove('show')
      }
    
  }
  /* when Scroll */
    window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()    
    backToTop()
    })
