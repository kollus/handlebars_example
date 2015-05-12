$(function () {
var source = $( '#test1-template' ).html();
var template = Handlebars.compile( source);

var context = {title:"타이틀","body":"바디"};

$('body').append(template(context));

var srcStudent = $('#student-template').html();
var tplStudent = Handlebars.compile(srcStudent);
var ctxStudent = {FirstName:"핸들",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""};
$('body').append(tplStudent(ctxStudent));

// Group Example
var srcStudentGroup = $('#student-group-template').html();
var tplStudentGroup = Handlebars.compile(srcStudentGroup);
var ctxStudentGroup = {Title:"Group Example", Group:"남자",
							man: [ {FirstName:"핸들",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""} ]};
$('body').append(tplStudentGroup(ctxStudentGroup));

// No-named array Example
var srcStudentNoNamedArr = $('#student-no-named-array-template').html();
var tplStudentNoNamedArr = Handlebars.compile(srcStudentNoNamedArr);
var ctxStudentNoNamedArr = [
	{FirstName:"핸들",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
	{FirstName:"노핸",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
	{FirstName:"바즈",LastName:"이",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
	{FirstName:"수염",LastName:"장",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""}
];
$('body').append(tplStudentNoNamedArr(ctxStudentNoNamedArr));

// Named Array Example
var srcStudentArr = $('#student-array-template').html();
var tplStudentArr = Handlebars.compile(srcStudentArr);
var ctxStudentArr = {Title:"Named Array Example",
	student:[
		{FirstName:"핸들",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
		{FirstName:"노핸",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
		{FirstName:"바즈",LastName:"이",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
		{FirstName:"수염",LastName:"장",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""}]
};
$('body').append(tplStudentArr(ctxStudentArr));

// Named Array Example
var srcChildAttrArr = $('#child-attr-template').html();
var tplChildAttrArr = Handlebars.compile(srcChildAttrArr);
var ctxChildAttrArr = {Title:"Child Attribute Example",
	Student:{FirstName:"핸들",LastName:"김"}
};
$('body').append(tplChildAttrArr(ctxChildAttrArr));

// Parent attribute Example
var srcParentAttrArr = $('#parent-attr-template').html();
var tplParentAttrArr = Handlebars.compile(srcParentAttrArr);
var ctxParentAttrArr = {Title:"Parent Attribute", Group:"학생",
	student:[
		{FirstName:"핸들",LastName:"김"},
		{FirstName:"노핸",LastName:"김"},
		{FirstName:"바즈",LastName:"이"},
		{FirstName:"수염",LastName:"장"}]
};
$('body').append(tplParentAttrArr(ctxParentAttrArr));
});

