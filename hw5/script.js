// I adapted code from this student's project https://angie-xu.github.io/webp2/week5/index.html that was posted in the notion. 

//onload function
$(function() {
  $("body").css("background", "white");
  $("h2").css("color", "black");


  $("#name-search").click(function() {
    let searchTerm = $("#name").val()
    $("#fail").text('')
    // make sure the searchTerm isn't empty
    if (searchTerm !== '') {
      // here we pass the API the topic as our "query"

      $.getJSON(`https://api.nationalize.io?name=${searchTerm}`, function(country) {
        //but, depending on what we search, we could get thousands of things or nothing
        //so we should account for the first case
        let key = country[0].country_code;

        
        $('#output').text('country code: ' + key)

        
    }).fail(function() {
      //we can add a "fail" function to our AJAX request to do something if it fails
      $('#fail').text("try another name")
      console.log("try another name.")
      })
    }
    //reset the input
    $('#name').val('')

    $('#search').text('Type another name to search again.')
  })

    let img = $("<img />",
    {
      src: 'img/book1.png',
      id: 'book-image'
    }
  )

  