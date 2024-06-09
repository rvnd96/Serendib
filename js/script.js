$(document).ready(function () {
  var navbarHeight = $('.navbar').outerHeight();

  // Handle nav link click with offset
  $('.navbar-nav .nav-link').click(function (event) {
    event.preventDefault();
    var targetId = $(this).attr('href');
    var targetPosition = $(targetId).offset().top - navbarHeight + 1;

    $('html, body').animate({
      scrollTop: targetPosition
    }, 100);

    // Close the navbar-collapse on click in mobile view
    if ($('.navbar-toggler').is(':visible')) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  var $sections = $('section');
  var $navLinks = $('.navbar-nav .nav-link');

  function onScroll() {
    var scrollPos = $(document).scrollTop();
    $sections.each(function () {
      var $section = $(this);
      var sectionTop = $section.offset().top - (navbarHeight+70);
      var sectionHeight = $section.outerHeight();

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        var currentId = $section.attr('id');
        $navLinks.removeClass('active');
        $('.navbar-nav .nav-link[href="#' + currentId + '"]').addClass('active');
      }
    });
  }

  $(document).on('scroll', onScroll);

  var currentYear = new Date().getFullYear();
  $('#year').text(currentYear);
});