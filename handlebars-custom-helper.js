Handlebars.registerHelper ("KorGrade", function (Kor) {
   if (Kor >= 90) {
       return "A" ;
   }
   else if (Kor >= 80 && Kor < 90) {
       return "B" ;
   }
   else if (Kor >= 70 && Kor < 80) {
       return "C" ;
   }
   else {
       return "D" ;
   }
});

Handlebars.registerHelper("cbhScore", function(cbhObject, options){
	var totalScore = "";
	
	for(var i=cbhObject.length - 1 ; i>=0 ; i--){
		cbhObject[i].score = cbhObject[i].score.reduce(function (prev, cur, index, array){
			return prev+cur;
		});
		totalScore += options.fn(cbhObject[i]);
	}
	return totalScore;
});

$(function () {
// Custom Helper
var srcCustomHelper = $('#custom-helper-template').html();
var tplCustomHelper = Handlebars.compile(srcCustomHelper);
var ctxCustomHelper = {Title:"Custom Helper Example", Name:"Handle Kim", Kor:85};
$('body').append(tplCustomHelper(ctxCustomHelper));

// Custom block helper
var cbhSource = $('#cbh-template').html();
var cbhTemplate = Handlebars.compile(cbhSource);
var cbhContextObj = [{name:"HK Song",score:[50,50,50,50]},{name:"HC Shin",score:[60,60,60,60]}];
$('body').append(cbhTemplate(cbhContextObj));

});
