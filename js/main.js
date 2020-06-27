 /*-------------------------------- Sidebar Menu --------------------------------------*/
     function openSlideMenu(){
      document.getElementById('menu').style.width='250px';
      document.getElementById('content').style.marginRight='250px';
      document.getElementById('.fa fa-bars').style.disply= 'none';s
     }
     function closeSlideMenu(){
      document.getElementById('menu').style.width='0';
      document.getElementById('content').style.marginRight='0';
     }
/*-------------------------------- Search --------------------------------------*/
    $(document).ready(function(){
      $("#search").click(function(){
        $("#exampleInputPassword1, .logo").toggle();
        $("#search").toggleClass("myclass");
      });
    });
 /*-------------------------------- Scroll --------------------------------------*/
 $(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()>400) {
      $(".scroll_top").fadeIn();
    }else{
       $(".scroll_top").fadeOut();
    }
  });
  $(".scroll_top").click(function(){
    $("html, body").animate({scrollTop:0}, 500);
  })
 });
 
  