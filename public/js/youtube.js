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

        getVideoName(data, function(name){
          $('#playlist').append('<li>' + name + '</li>');
        });
      }
    });
  });
});

function getVideoName(video_id, callback) {
  $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+video_id+'?v=2&alt=jsonc',function(data,status,xhr){
    callback(data.data.title);
  });
}
