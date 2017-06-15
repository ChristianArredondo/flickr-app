$('#searchForm').submit(function(event) {
  event.preventDefault();
  var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var searchVal = $('#search').val();
  var flickrOptions = {
  tags: searchVal,
  format: "json"
  };  //end flickrOptions object
  // Create API request variables
  displayPhotos = function(data) {
    console.log(data);
    flickrHTML = '';
    $.each(data.items, function(i, photo) {
       flickrHTML += '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 thumb">';
       flickrHTML += '<a href="' + photo.link + '" class="image" target="_blank">';
       flickrHTML += '<img src="' + photo.media.m + '" width="" class=""></a></div>';
    });
    $('#photos').html(flickrHTML);       
  };  //end displayPhotos function
  $.getJSON(flickrAPI, flickrOptions, displayPhotos);
}); //end button click handler