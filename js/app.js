$(document).ready(function() {
    
    var navItem = window.location.hash.substr(2);
//     console.log(navItem);
    
    $( '#navigation li' ).each( function() {
    if( $(this).children('ul').length > 0 ) {
        $(this).addClass('parent');     
        $(this).children('ul').hide();
    }
    });

    $( '#navigation li.parent > a' ).click( function( ) {
        $(this).parent().toggleClass( 'active' );
        $(this).parent().children( 'ul' ).slideToggle( 'fast' );
        prettyPrint();
    });

    $( '#all' ).click( function() {
    
        $( '#navigation li' ).each( function() {
            $( this ).toggleClass( 'active' );
            $( this ).children( 'ul' ).slideToggle( 'fast' );
        });
    });

    prettyPrint();                
    new Clipboard('.copyIt');

    $( '#menu' ).click( function (){
        $( '#navigation' ).toggle();
    });
    
    $( '.menu-item' ).click( function (){
        $( '.filter-options' ).toggle();
    });

});


(function(){
        
    App = {
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
    	
    	showContent: function(content, converter){

    		if(content == "components-filters"){
        		console.log("filters");
        		//BionicMenuFiltersView();
    		}

//         	content = $.get("content/"+content+".html");
            content = $.ajax({type: "GET", url: "content/"+content+".html", async: false}).responseText;

        	converter = new showdown.Converter(),
            html   = converter.makeHtml(content);    
//          console.log(html);
        	
    		$("#content").html(html);
    		
            
            prettyPrint();
    	}
    	
    });
    
    new App.Router;
    Backbone.history.start();

})();


