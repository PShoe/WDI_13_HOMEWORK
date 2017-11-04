$search_term = $('#search-term')
$search_btn = $('#search-btn')
$div_to_append = $('.gifs-below-this')

// https://api.giphy.com/v1/gifs/search?api_key=K0BlhOxhYYku9xZJAadBA9LlgXOizXIK&q=dog&limit=&offset=4&rating=G&lang=en


$search_btn.on('click', function(){
  var options = {
    url: "http://api.giphy.com/v1/gifs/search",
    method: 'get',
    data: {
      api_key: 'K0BlhOxhYYku9xZJAadBA9LlgXOizXIK',
      q: $search_term.val(),
      limit: 10
    }
  }

  $.ajax(options).done(function(resp){
    resp['data'].forEach(function(gif){
      $img = $('<img>')
      $img.attr('src', gif['images']['fixed_width']['url'])
      $div_to_append.append($img)
    })
  })
})

$(window).scroll(function () {

  if ($(window).scrollTop() + $(window).height() == $(document).height())
     {

      var options = {
      url: "http://api.giphy.com/v1/gifs/search",
      method: 'get',
      data: {
        api_key: 'K0BlhOxhYYku9xZJAadBA9LlgXOizXIK',
        q: $search.val(),
        limit: 10,
        offset: $div_to_append.children().length
      }
    }

    $.ajax(options).done(function(resp){
      resp['data'].forEach(function(gif){
        $img = $('<img>')
        $img.attr('src', gif['images']['fixed_width']['url'])
        $div_to_append.append($img)
      })
    })

  }
});
