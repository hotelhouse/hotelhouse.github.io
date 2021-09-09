   
   $(document).ready(function()
   {
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $(document).on('click','.headerMenu-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      SetStyle('Card1', 'initially-hidden');
      SetStyle('Card2', 'initially-hidden');
      SetStyle('Card3', 'initially-hidden');
      SetStyle('Card4', 'initially-hidden');
      SetStyle('Card5', 'initially-hidden');
      SetStyle('Card6', 'initially-hidden');
      SetStyle('portfolio-image1', 'initially-hidden');
      SetStyle('portfolio-image2', 'initially-hidden');
      SetStyle('about-text', 'initially-hidden');
      SetStyle('contact-text', 'initially-hidden');
      SetStyle('location-text', 'initially-hidden');
      SetStyle('service-text', 'initially-hidden');
      SetStyle('location-icon1', 'initially-hidden');
      SetStyle('location-icon2', 'initially-hidden');
      SetStyle('location-icon3', 'initially-hidden');
      SetStyle('location-icon4', 'initially-hidden');
      SetStyle('location-icon5', 'initially-hidden');
      SetStyle('JavaScript1', 'initially-hidden');
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_LayoutGrid9').css('background-attachment', 'scroll');
      }
   });
