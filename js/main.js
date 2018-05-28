$(() => {
    $('.toggle').click(() => {
        console.log('toggle');
        $('.header-menu-mobile').toggleClass('active');

    })
});

$(() => {
  $('.question-item').each(function() {
    $(this).on('click', function() {
      $(this).children('.question-answer').toggleClass('display');
    })
  })
})