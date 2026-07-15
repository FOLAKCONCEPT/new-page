
   
    
    var slideIndex = 1;
  showSlide(slideIndex)

  function plusSlide(n){
    showSlide(slideIndex += n);
  }
  function currentSlide(n){
    showSlide(slideIndex = n);
  }

  function showSlide(n){
     var i;
     var slides = document.getElementsByClassName('mySlides');
     var dots = document.getElementsByClassName('dot');

     if(n > slides.length){
      slideIndex = 1
     }
     if (n < 1){
      slideIndex = slides.length
     }

     for(i = 0; i < slides.length; i++){
      slides[i].style.display = 'none'
     }
     for(i=0; i < dots.length; i++){
      dots[i].classList.remove('active');
     }
     slides[slideIndex-1].style.display = 'block';
     dots[slideIndex-1].classList.add ('active');
    }
    
    /* frequently asked questions*/
/*
     var i;
     var x = document.getElementsByClassName('accandion');

    for(i=0; i < x.length; i++){
      x[i].addEventListener('click', function(){
        var panel = this.nextElementSibling;
        if(panel.style.display === 'block'){
          panel.style.display = 'none'
        } else{
          panel.style.display = 'block'
        }
      })
    }

  */

    
     /* const tundra = document.querySelector('.js-tundra');
      
      tundra.addEventListener('mouseover', myTundra);

      function myTundra(){
        //console.log('You are doing well! bro')
        document.querySelector('.js-para-tundra').innerHTML +='You are doing well bro!<br>'
      }*/

        
    
    