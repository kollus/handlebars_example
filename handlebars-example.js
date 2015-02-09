$(function () {
var source = $( '#test1-template' ).html();
var template = Handlebars.compile( source)

var context = {title:"타이틀","body":"바디"};

$('body').append(template(context));
});

