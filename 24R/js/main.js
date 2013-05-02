window.HomeView = Backbone.View.extend({

    template:_.template($('#home').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});


window.InTheaterView = Backbone.View.extend({

    template:_.template($('#intheater').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.DVDView = Backbone.View.extend({

    template:_.template($('#dvd').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.UpcomingView = Backbone.View.extend({

    template:_.template($('#upcoming').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.FavoritesView = Backbone.View.extend({

    template:_.template($('#fav').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.MovieView = Backbone.View.extend({

    template:_.template($('#movie').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});














window.Page1View = Backbone.View.extend({

    template:_.template($('#page1').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.Page2View = Backbone.View.extend({

    template:_.template($('#page2').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
		"intheater":"intheater",
		"dvd":"dvd",
		"upcoming":"upcoming",
        "fav":"fav",
        "movie":"movie",
        "page1":"page1",
        "page2":"page2"
    },

    initialize:function () {
        // Handle back button throughout the application
        $('.back').live('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    home:function () {
        console.log('#home');
        this.changePage(new HomeView());
    },
	
	intheater:function(){
		console.log('#intheater');
		this.changePage(new InTheaterView());
	},
	
	dvd:function(){
		console.log('#dvd');
		this.changePage(new DVDView());
	},
	
	upcoming:function(){
		console.log('#upcoming');
		this.changePage(new UpcomingView());
	},
	
    fav:function(){
        console.log('#fav');
        this.changePage(new FavoritesView());
    },

    movie:function(){
        console.log('#movie');
        this.changePage(new MovieView());
    },

    page1:function () {
        console.log('#page1');
        this.changePage(new Page1View());
    },

    page2:function () {
        console.log('#page2');
        this.changePage(new Page2View());
    },

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
		if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }

});

$(document).ready(function () {
    console.log('document ready');
    app = new AppRouter();
    Backbone.history.start();
});