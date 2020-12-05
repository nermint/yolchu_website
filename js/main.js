
  // scroll to top

  $(document).ready(function(){
    //show/hide button
    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $('.scrollTop').fadeIn();
      }else{
        $('.scrollTop').fadeOut();
      }
    });

    //smooth scrolling to top
    $('.scrollTop').click(function(){
      $('html,body').animate(
        {scrollTop:0},1000
      )
    });
  });


  // pagination
  $(document).on('click','.pagination-side a',function(){
    $(this).addClass('active').siblings().removeClass('active');
});