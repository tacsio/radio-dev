$(function (){
  $('#add_music').submit(function(ev){
    //this happens if form is submitted
    //prevent the default behavior of a form (it should do nothing in our case)
    ev.preventDefault();

    //send an ajax request to our action
    $.ajax({
      url: "/add",
      //serialize the form and use it as data for our ajax request
      data: $(this).serialize(),
      //the type of data we are expecting back from server, could be json too
      dataType: "html",
      success: function(data) {
        $('#music-url').val("");

        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data+'?v=2&alt=jsonc',function(data,status,xhr){
          $('#playlist').append('<li>' + data.data.title + '</li>');
        });
      }
    });
  });
});

