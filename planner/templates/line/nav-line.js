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
	$( "script.lineNav" ).html()
);
// Define our render data (to be put into the "rc" variable).
var templateData = {
	listTitle: "Line Tabs",
	lineNavItems: [
		{
			name: "Overview",
			page: "#/line/overview/"
		},
		{
			name: "Cost",
			page: "#/line/cost/"
		},
		{
			name: "Tasks",
			page: "#/line/tasks/"
		},
		{
			name: "KPIs",
			page: "#/line/kpis/"
		},
		{
			name: "Performance",
			page: "#/line/performance/"
		}
	]
};
// Render the underscore template and inject it after the H1
// in our current DOM.
$( ".bionic-campaign-summary" ).after(
	template( templateData )
);
