jQuery(document).ready(function ($) {
  /**
   * Load new post when the link is clicked.
   */
  $('.portfolio-item').click(function () {
    var that = this
    console.log(that)
    console.log(that.id)

    $('body').css('cursor', 'wait')
    $(this).append(
      '<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>'
    )

    var $post_id = $(this).attr('id')

    // Show that we're working.
    $('#project-info').html(
      '<div class="text-center"><div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div></div>'
    )

    $('#project-info').load('?p=' + $post_id + ' #content-' + $post_id, function () {
      $('html, body, .page-section-current').animate({ scrollTop: '0' }, 1000)
      //   if (that.id == 153) {
      //     $('.project-info-2').removeClass('hide')
      //     $('.project-info-2').css('display', 'block')
      //   } else if (that.id == 157) {
      //     $('.project-info-1').removeClass('hide')
      //     $('.project-info-1').css('display', 'block')
      //   }
      $('#project-info').removeClass('hide')
      $('#project-info').css('display', 'block')
      $('body').css('cursor', 'auto')

      $(that).find('.ajax-progress-throbber').remove()
    })
    return false
  })
})
