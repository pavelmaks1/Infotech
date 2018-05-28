$(() => {
  $('.services-slider-item').each(function () {

    $(this).on('mousemove', function () {
      const className = $(this).attr('class');
      switch(true) {
        case $(this).hasClass('programming'):
          $('.services-content-item').addClass('display');
          $('li.programming').removeClass('display');
          break;
        case $(this).hasClass('design'):
          $('.services-content-item').addClass('display');
          $('li.design').removeClass('display');
          break;
        case $(this).hasClass('content'):
          $('.services-content-item').addClass('display');
          $('li.content').removeClass('display');
          break;
        case $(this).hasClass('defend'):
          $('.services-content-item').addClass('display');
          $('li.defend').removeClass('display');
          break;
        case $(this).hasClass('work'):
          $('.services-content-item').addClass('display');
          $('li.work').removeClass('display');
          break;
        } 
    })

  })
})

