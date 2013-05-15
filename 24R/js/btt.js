
var q = document.getElementById('obj').value;

var apikey = "bfsqfcdktj8yt8bvu2d2fzq2";
var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";

// construct the uri with our apikey
var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
var query = q;


$(document).ready(function() {

  // send off the query
  $.ajax({
    url: moviesSearchUrl + '&q=' + encodeURI(query),
    dataType: "jsonp",
    success: searchCallback
  });
});

// callback for when we get back the results
function searchCallback(data) {
 $('.btt').append('Found ' + data.total + ' results for ' + query);
 var movies = data.movies;
 $.each(movies, function(index, movie) {
   $('.btt').append("<div id='movie-tile'>" + "<a href='#movie'><img src='" + movie.posters.profile + "' /></a><h4>" + "&nbsp;&nbsp;" + movie.title + "</h4>" + "</br><h6>" + "Critic Score: " + movie.ratings.critics_score + "%" + "</h6></br><h6>"+ movie.abridged_cast[0].name +", "+ movie.abridged_cast[1].name  + "</h6></br><h6>"+ "Rating: " + movie.mpaa_rating +"</h6></br><h6>"+ "Runtime: " + movie.runtime + " min. </h6></br></div>");
 });
}