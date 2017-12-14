
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
	listTitle: "Campaign Settings Subnav",
	listItems: [
		{
			name: "Basic Info",
			page: "#/campaign/settings-basics/"
		},
		{
			name: "Image",
			page: ""
		},
		{
			name: "Description",
			page: ""
		},
		{
			name: "Contacts",
			page: ""
		},
		{
			name: "Currency",
			page: ""
		},
		{
			name: "Authorization",
			page: "#/campaign/settings-authorization/"
		},
		{
			name: "Production Costs",
			page: "#/campaign/settings-costs-production/"
		},
		{
			name: "Agency Compensation",
			page: ""
		},
		{
			name: "Delivery Costs",
			page: "#/campaign/settings-costs-delivery/"
		},
		{
			name: "Ad Serving",
			page: "#/campaign/settings-ad-serving/"
		},
		{
			name: "Task Columns",
			page: ""
		},
		{
			name: "KPI Columns",
			page: "#/campaign/settings-kpis/"
		},
		{
			name: "Picklist Columns",
			page: ""
		}
	]
};
// Render the underscore template and inject it after the H1
// in our current DOM.
$( ".bionic-campaign-header" ).after(
	template( templateData )
);
