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

        video_name(data, function(name){
          $('#playlist').append('<li>' + name + '</li>');
        });
      }
    });
  });
});

function video_name(video_id, callback) {
	var url = 'https://www.youtube.com/watch?v=' + video_id;

	$.getJSON('https://noembed.com/embed',
		{ format: 'json',
			url: url
		},
		function (data) {
			callback(data.title);
		});
}
