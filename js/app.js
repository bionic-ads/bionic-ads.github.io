$(document).ready(function() {
    
        var navItem = window.location.hash.substr(2);
        console.log(navItem);
    
    $( '#navigation li' ).each( function() {
    if( $(this).children('ul').length > 0 ) {
        $(this).addClass('parent');     
        $(this).children('ul').hide();
    }
    });

    $( '#navigation li.parent > a' ).click( function( ) {
        $(this).parent().toggleClass( 'active' );
        $(this).parent().children( 'ul' ).slideToggle( 'fast' );
    });

$( '#all' ).click( function() {

    $( '#navigation li' ).each( function() {
        $( this ).toggleClass( 'active' );
        $( this ).children( 'ul' ).slideToggle( 'fast' );
    });
    });
});


(function(){
    
    window.App = {
    	Models: {},
    	Collections: {},
    	Views: {},
    	Router: {}
    };
    App.Router = Backbone.Router.extend({
    	routes: {
    		'': 'index',
    		':content': 'showContent'
    	},
    	index: function(){
    		$("#content").load("content/home.html");
    	},
    	
    	showContent: function(content){
    		$("#content").load("content/"+content+".html");
    	}        
    });
    
    new App.Router;
    Backbone.history.start();

})();