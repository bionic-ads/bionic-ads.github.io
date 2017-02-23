$(document).ready(function() {
    
    var navItem = window.location.hash.substr(2);
//     console.log(navItem);

    $("#bionic-left-nav").hide();

//     $("#bionic-loading").delay(1000).fadeOut();
    $("#bionic-loading").hide();

});


(function(){
        
    window.Planner = {
    	Models: {},
    	Collections: {},
    	Views: {},
    	Router: {}
    };
    
    Planner.Router = Backbone.Router.extend({
    	routes: {
    		'' : 'index',
    		'campaign/:content' : 'showCampaign'
    	},
    	index: function(){
    		$("#bionic-main").load("templates/home.html");
    	},
    	
    	showCampaign: function(content){
            console.log(content);
    		$("#bionic-main").load("templates/campaign/"+content+".html");
            
    	}
    	
    });
    
    new Planner.Router;
    Backbone.history.start();

})();


$('body').on('click', 'a.open-modal', function(event) {
  $(this).modal({
      escapeClose: true,
      clickClose: false,
      showClose: true
  });
  
  $('.modal').addClass( "wide" );
  
  return false;
});


$(document).mouseup(function (e)
{
    var container = $(".input-menu");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && !$("input").is(e.target) 
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});
            
$('body').on('focus', 'input.menu', function(event) {
    
    $(".input-menu").show();
    var content = $(this).attr("data-rel");
    $(".input-menu").load("templates/menus/"+content+".html");
    
    var pos = $(this).offset();
    var menuWidth = $(this).css("width");
    
    console.log(menuWidth);
    
    $(".input-menu").offset({left: pos.left, top: pos.top + 40});
//     $(".input-menu").width(menuWidth);
    
});

$("#menu").click(function(){

    $("#bionic-main, #bionic-figawi").toggleClass( "left-nav-open" );
    if (!$("#bionic-main").hasClass( "left-nav-open")){
        $("#bionic-left-nav").hide();
    } else {
        $("#bionic-left-nav").show();

    }
});
