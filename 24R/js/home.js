
(function() {
  var cleanRT = {
   init: function(){
    this.box_office();
  },
  
  box_office: function(){
    $.getJSON('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=bfsqfcdktj8yt8bvu2d2fzq2&limit=7&country=us&callback=?', function(data) {
     $.each(data.movies, function(i, movies) {
      var movie_obj = movies;
      $('.main-movies').append("<div id='movie-tile'>" + "<a href='#movie'><img src='" + movie_obj.posters.profile + "' /></a><h4>" + "&nbsp;&nbsp;&nbsp;" + movie_obj.title + "</h4></br><h6>" + "Critic Score: " + movie_obj.ratings.critics_score + "%" + "</h6></br><h6>"+ movie_obj.abridged_cast[0].name +", "+ movie_obj.abridged_cast[1].name  + "</h6></br><h6>"+ "Rating: " + movie_obj.mpaa_rating +"</h6></br><h6>"+ "Runtime: " + movie_obj.runtime + " min. </h6></br></div>");
    });
	
		 
   });
   
   
   
   
   
  }

};

cleanRT.init();

})();