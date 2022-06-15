document.addEventListener('DOMContentLoaded', () => {
   const elementosCarousel = document.querySelectorAll('.carousel');
   M.Carousel.init(elementosCarousel, {
       duration: 10,
       dist: -80, /*alarga la imagen cuando paso a la siguiente*/
       shift:5,
       padding:5,
       numVisible:4,
       indicators: true, /*muestra los indicadores*/


   });

}); 