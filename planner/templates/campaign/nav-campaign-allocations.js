
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
	$( "script.template" ).html()
);
// Define our render data (to be put into the "rc" variable).
var templateData = {
	listTitle: "Campaign Allocations Subnav",
	listItems: [
		{
			name: "Over Time",
			page: ""
		},
		{
			name: "Cost Breakdown",
			page: "#/campaign/allocations-cost-breakdown/"
		},
		{
			name: "Agency Compensation",
			page: ""
		},
		{
			name: "Sellers",
			page: ""
		},
		{
			name: "Channels",
			page: ""
		},
		{
			name: "Programs",
			page: ""
		},
		{
			name: "Ad Units",
			page: ""
		},
		{
			name: "Dayparting",
			page: ""
		},
		{
			name: "Markets",
			page: ""
		}
	]
};
// Render the underscore template and inject it after the H1
// in our current DOM.
$( ".bionic-campaign-header" ).after(
	template( templateData )
);
