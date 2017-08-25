var Campaigns = [];

$(document).ready(function() {
    
    var public_spreadsheet_url = '';
    
    getCampaigns().then(function() {
      setCampaignInfo();
    });
    
    var navItem = window.location.hash.substr(2);
    var userState = window.location.hash.substr(2);
//     console.log(navItem);

    $("#bionic-left-nav").hide();

//     $("#bionic-loading").delay(500).fadeOut();
    
    $("#bionic-loading").hide();

});


(function(){
        
    window.App = {
        Campaigns: {},
    	Models: {},
    	Collections: {},
    	Views: {},
    	Router: {}
    };
            
    App.Router = Backbone.Router.extend({
    	routes: {
    		''                      : 'index',
    		'newuser'               : 'newUser',
    		'notes'                 : 'notes',
    		'admin/:content/'       : 'showAdmin',
    		'line/:content/'        : 'showLine',
    		'campaign/:content/:id' : 'showCampaign',
    		'advertiser/:content/'  : 'showAdvertiser',
    		'advertisers'           : 'showAdvertisers',
    		'campaigns'             : 'showCampaigns',
    		'schedule'              : 'showSchedule',
    		'tasks'                 : 'showTasks',
    		'allocations'           : 'showAllocations'
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
	
    	showAdmin: function(content,id){
            console.log(content);
            updateFigawi("show","none");
    		$("#bionic-main").load("templates/admin/"+content+".html");           
    	},
    	
    	showLine: function(content,id){
            console.log(content);
            updateFigawi("show","none");
    		$("#bionic-main").load("templates/line/"+content+".html");           
    	},
	
    	showCampaign: function(content,id){
            console.log(content);
            updateFigawi("show","none");
    		$("#bionic-main").load("templates/campaign/"+content+".html");           
    	},
    	
    	showAdvertiser: function(content){
            console.log("Advertiser " + content);
            updateFigawi("show","none");
    		$("#bionic-main").load("templates/advertiser/"+content+".html");
    	},
    	
    	showAdvertisers: function(){
    		$("#bionic-main").load("templates/advertisers.html");
    		
    	}, 
    	
    	showCampaigns: function(){
    		$("#bionic-main").load("templates/campaigns.html");
    		
    	},       	
    	
    	showSchedule: function(){
    		$("#bionic-main").load("templates/schedule.html");
    	},    	
    	
    	showTasks: function(){
    		$("#bionic-main").load("templates/tasks.html");
    	},    	
    	showAllocations: function(){
    		$("#bionic-main").load("templates/allocations.html");
    	},    	
    });
    
    new App.Router;
    
    Backbone.history.start();    



})();

        
function getCampaigns(){
    
    return new Promise(function(resolve, reject){
        public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/13CfcOztU9RU-J-UHyXwt6NXsXbYWyeU3fMzLQa5uBLk/pubhtml';
        spreadsheetTab = 'MostRecentCampaigns';
        
        Tabletop.init( { key:       public_spreadsheet_url,
                         callback:  createList,
                         wanted:    [ spreadsheetTab ],
                         debug:     true } );
                         
        function createList(data, tabletop) {
            var i = 0;
            $.each( tabletop.sheets(spreadsheetTab).all(), function(i, item) {
                i++;
        
                campaign = {
                    campaignID : i,
                    campaignName : item.CampaignName,
                    advertiser : item.Advertiser,
                    start : item.StartDate,
                    end : item.EndDate,
                    budget : item.Budget,
                    planned : item.Planned,
                    percent : item.PercentPlanned,
                    lastviewed : item.LastViewed,
                }
                
                Campaigns.push(campaign);
            
           })
           
          if (Campaigns.length > 0) {
            resolve("Stuff worked!");
          }
          else {
            reject(Error("It broke"));
          }     
                  
//         console.log(Campaigns.length);
        
        }
        
                           
    });
}



function setCampaignInfo(){
    
    var url, theID, newName;
//     console.log("set campaign name "+Campaigns.length);
    
    if(Campaigns.length > 0){
        
        url = window.location.href;
//         console.log(url);
        theID = url.substring(url.lastIndexOf('/') + 1);

        // Campaign Name
        
        var header = $.find("#campaignname");
        
        if( header.length ){
            
            
            newName = Campaigns[theID].campaignName;
            
            $("#campaignname").text(newName);
//             console.log(newName);
        
        }
        
        // Campaign Tabs
        
        $('.bionic-tab-menu a').each(function(){
            this.href += theID;
        })
 
         // Campaign Tabs
        
        $('.bionic-subnav-menu a').each(function(){
            this.href += theID;
        })
        
    }
    
}

function checkIfFinished(){
    return(Campaigns.length >= 5);
}

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

