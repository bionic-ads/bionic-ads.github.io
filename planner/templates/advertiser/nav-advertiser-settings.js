
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
	listTitle: "Advertiser Settings Subnav",
	listItems: [
		{
			name: "Basic Info",
			page: ""
		},
		{
			name: "Logo",
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
			name: "Security",
			page: ""
		},
		{
			name: "Currency",
			page: ""
		},
		{
			name: "Authorization",
			page: "#/advertiser/settings-authorization/"
		},
		{
			name: "Production Costs",
			page: "#/advertiser/settings-costs-production/"
		},
		{
			name: "Agency Compensation",
			page: "#/advertiser/settings-agency-comp/"
		},
		{
			name: "Delivery Costs",
			page: "#/advertiser/settings-costs-delivery/"
		},
		{
			name: "Ad Serving",
			page: "#/advertiser/settings-costs-ad-serving/"
		},
/*
		{
			name: "Production Costs",
			page: "#/advertiser/settings-costs-production/"
		},
		{
			name: "Delivery Costs",
			page: "#/advertiser/settings-costs-delivery/"
		},
*/
	]
};
// Render the underscore template and inject it after the H1
// in our current DOM.
$( ".bionic-advertiser-header" ).after(
	template( templateData )
);
