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
	$( "script.advertiserNav" ).html()
);
// Define our render data (to be put into the "rc" variable).
var templateData = {
	listTitle: "Advertiser Tabs",
	advertiserNavItems: [
		{
			name: "Overview",
			page: "#/advertiser/overview/"
		},
		{
			name: "Settings",
			page: "#/advertiser/settings-costs-ad-serving/"
		},
		{
			name: "Campaigns",
			page: "#/advertiser/campaigns/"
		},
		{
			name: "Tasks",
			page: "#/advertiser/tasks/"
		},
		{
			name: "Flowchart",
			page: "#/advertiser/flowchart/"
		},
		{
			name: "Allocations",
			page: "#/advertiser/allocations-costs/"
		},
		{
			name: "Performance",
			page: "#/advertiser/performance/"
		}
	]
};
// Render the underscore template and inject it after the H1
// in our current DOM.
$( "h1" ).after(
	template( templateData )
);
