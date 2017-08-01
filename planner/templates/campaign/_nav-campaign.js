/*
<!--
    <ul class="bionic-tab-menu">
        <li><a href="#/campaign/overview/">Overview</a></li>
        <li><a href="#/campaign/settings/" class="current">Settings</a></li>
        <li><a href="#/campaign/proposals/">Proposals</a></li>
        <li><a href="#/campaign/mediaplan-kpis/">Media Plan</a></li>
        <li><a href="#/campaign/flowchart/">Flowchart</a></li>
        <li><a href="#/campaign/schedule/">Schedule</a></li>
        <li><a href="#/campaign/allocations/">Allocations</a></li>
        <li><a href="#/campaign/tasks/">Tasks</a></li>
        <li><a href="#/campaign/performance/">Performance</a></li>
    </ul>
-->
*/
// When rending an underscore template, we want top-level
// variables to be referenced as part of an object. For
// technical reasons (scope-chain search), this speeds up
// rendering; however, more importantly, this also allows our
// templates to look / feel more like our server-side
// templates that use the rc (Request Context / Colletion) in
// order to render their markup.
_.templateSettings.variable = "bionic";
// Grab the HTML out of our template tag and pre-compile it.
var template = _.template(
	$( "script.campaignNav" ).html()
);
// Define our render data (to be put into the "rc" variable).
var templateData = {
	listTitle: "Campaign Tabs",
	campaignNavItems: [
		{
			name: "Overview",
			page: "#/campaign/overview/"
		},
		{
			name: "Settings",
			page: "#/campaign/settings-costs/"
		},
		{
			name: "Proposals",
			page: "#/campaign/proposals/"
		},
		{
			name: "Media Plan",
			page: "#/campaign/mediaplan-grid/"
		},
		{
			name: "Flowchart",
			page: "#/campaign/flowchart/"
		},
		{
			name: "Schedule",
			page: "#/campaign/schedule/"
		},
		{
			name: "Allocations",
			page: "#/campaign/allocations/"
		},
		{
			name: "Tasks",
			page: "#/campaign/tasks/"
		},
		{
			name: "Performace",
			page: "#/campaign/performance/"
		}
	]
};
// Render the underscore template and inject it after the H1
// in our current DOM.
$( ".bionic-campaign-summary" ).after(
	template( templateData )
);
