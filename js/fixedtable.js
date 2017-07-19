(function() {
  var mediaplan, fixedTable;

  fixedTable = function(el) {
    var $body, $header, $sidebar;
    $body = $(el).find('.fixedTable-body');
    $sidebar = $(el).find('.fixedTable-sidebar table');
    $header = $(el).find('.fixedTable-header table');
    return $($body).scroll(function() {
      $($sidebar).css('margin-top', -$($body).scrollTop());
      return $($header).css('margin-left', -$($body).scrollLeft());
    });
  };

  mediaplan = new fixedTable($('#mediaplan'));

}).call(this);
