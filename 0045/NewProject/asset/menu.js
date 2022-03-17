  ///<<<<<<<<<< Funcion menu smoothy scroll  >>>>>>>..... 

  const menuItens = document.querySelectorAll('.menu a[href^="#"]');

  menuItens.forEach(item =>{
      item.addEventListener('click',scrollSmooth);
  })

  function scrollSmooth(event){
      event.preventDefaul();
      const to = scrollSmooth(event.target) - 80;

      scrollToPosition(to);
  }

  function scrollToPosition(to){

    window.scroll({

    top: to,
    behavior: "smooth",


    });


    // smoothScrollTo(0,to);


  }

  function scrollSmooth(element){
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
  }
  function smoothScrollTo(endX, endY, duration){


      const easeInOutQuart = (time,from,distance,duration) =>{
      if((time/=duration/2)< 1) return distance / 2* time * time*time*time + from;
      return - distance / 2 * ((time -=2) *time *time *time -2) + from;

      };



      const timer = setIterval(() =>{
      const time = new Date().getTime -startTime;
      const newX = easeInOutQuart(time,startY,distanceY,duration);
      if (time >= duration){

          clearInterval(timer);
              }

      window.Scroll(newX, newY);
      },9000);
  
  };



