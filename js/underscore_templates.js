var _underscore_template = _.template;

_.template = function(str, data) {
    // match "<% include template-id %>"
    while (str != (str = str.replace(/<%\sinclude\s*(.*?)\s%>/g, function(match, templateId) {
    var el = $('#' + templateId);
    return el ? el.html() : '';
    }
)));

return _underscore_template(str, data);
};
