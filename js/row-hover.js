$(document).on({
mouseenter: function () {
    console.log("mouseenter");
trIndex = $(this).index()+1;
$("table.mediaplan").each(function(index) {
    $(this).find("tr:eq("+trIndex+")").addClass("hover")
});
},
mouseleave: function () {
trIndex = $(this).index()+1;
$("table.mediaplan").each(function(index) {
    $(this).find("tr:eq("+trIndex+")").removeClass("hover")
});
}
}, "#mediaplan table tr");