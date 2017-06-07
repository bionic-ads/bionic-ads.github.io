
$(document).ready(function() {
    
    var navItem = window.location.hash.substr(2);
    var userState = window.location.hash.substr(2);
//     console.log(navItem);

    $("#bionic-left-nav").hide();

    $("#bionic-loading").delay(500).fadeOut();
//     $("#bionic-loading").hide();



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
    		'' : 'index',
    		'newuser' : 'newUser',
    		'notes' : 'notes',
    		'campaign/:content' : 'showCampaign',
    		'advertiser/:content' : 'showAdvertiser',
    		'schedule' : 'showSchedule'
    	},
    	index: function(){
    		$("#bionic-main").load("templates/home.html");
    		updateFigawi("hide","none");
    	},

    	newUser: function(){
    		$("#bionic-main").load("templates/home.html");
            $("#bionic-overlay").delay(1000).fadeIn();
            console.log("new");
    	},

    	notes: function(){
    		$("#bionic-main").load("templates/home.html", function() {
                $("#bionic-overlay").delay(1000).fadeOut();
        		$("#bionic-home-note-1").delay(1000).fadeIn();
    		});
            
            console.log("callouts");
    	},
	
    	showCampaign: function(content){
            console.log(content);
            updateFigawi("show","none");
    		$("#bionic-main").load("templates/campaign/"+content+".html");
            
    	},
    	
    	showAdvertiser: function(content){
            console.log(content);
    		$("#bionic-main").load("templates/advertiser/"+content+".html");
    	},
    	
    	showSchedule: function(){
    		$("#bionic-main").load("templates/schedule.html");
    		
    	},    	
    });
    
    new App.Router;
    Backbone.history.start();

})();

function updateFigawi(menu,location){

    // hide the left menu on home page
    if(menu == "hide"){
        $("#menu").hide();
        $("#home").addClass("disabled");
    } else {
        $("#menu").show();
        $("#home").removeClass("disabled");
    }
}

$('body').on('click', '.open-modal', function(event) {
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

$('body').on('click', '.note a', function(event) {
    console.log("note");
    $(this).parent().fadeOut(); 
});


$('.menu-button').click(function (){
    $( '.filter-options' ).toggle();
});
