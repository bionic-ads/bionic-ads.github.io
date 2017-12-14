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
			page: "#/campaign/settings-authorization/"
		},
		{
			name: "Budget",
			page: "#/campaign/budget/"
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
/*
		{
			name: "Schedule",
			page: "#/campaign/schedule/"
		},
*/
		{
			name: "Allocations",
			page: "#/campaign/allocations-costs/"
		},
/*
		{
			name: "Authorizations",
			page: "#/campaign/authorizations/"
		},
*/
		{
			name: "Tasks",
			page: "#/campaign/tasks/"
		},
		{
			name: "Performance",
			page: "#/campaign/performance/"
		}
	]
};
// Render the underscore template and inject it after the H1
// in our current DOM.
$( ".bionic-campaign-summary" ).after(
	template( templateData )
);
