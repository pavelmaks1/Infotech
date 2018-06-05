$(() => {
    $('.toggle').click(() => {
        $('.header-menu-mobile').toggleClass('active');

    })
});

$(() => {
  $('.question-item').each(function() {
    $(this).on('click', function() {
      $(this).children('.question-answer').toggleClass('display');
    })
  });

  $('.button-more').on('click', function() {
    $('.customs-additional').toggleClass('display');
   if ($('.button-text').html() === 'Больше') {
     $('.button-text').html("Скрыть")
   } else if ($('.button-text').html() === 'Скрыть') {
   }
  })
})