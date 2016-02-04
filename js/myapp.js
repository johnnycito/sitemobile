ko.extenders.required=function(target, overrideMessage){
	target.hasError=ko.observable();
	target.validationMessage=ko.observable();
	function validate(newValue){
		target.hasError(newValue ? false : true);
		target.validationMessage(newValue? "" : overrideMessage || "this field is required");
	}
	validate (target());
	target.subscribe(validate);
	return target;
}; 

var service = function(title, content){
	var serviceViewModel={
		title:title,
		content:content
	};
	return serviceViewModel;
};

var product = function(title, contenu, imageSource, imageAlt, imageUrl){
	var productViewModel={
		title:title,
		contenu:contenu,
		imageSource: imageSource,
		imageAlt: imageAlt,
		imageUrl:imageUrl
	};
	return productViewModel;
};

var technology = function (title, contenu, imageSource, pageUrl){
	var technologyViewModel={
		title: title,
		contenu: contenu,
		imageSource: imageSource,
		pageUrl: pageUrl
	};
	return technologyViewModel;
};
var travel = function(title, contenu, imageSource, pageUrl){
	var travelViewModel = {
		title: title,
		contenu: contenu,
		imageSource: imageSource,
		pageUrl: pageUrl
	};
	return travelViewModel;
};

var cities = (function(){
	var json=null;
	$.ajax({
		'async':false,
		'global':false,
		'url':'json/cities.json',
		'success': function(data){
			json=data;
			console.log(json);
		}
	});
	return json;
})();

var viewModel = {	
	listCities:ko.observableArray(cities),
	name:ko.observable('name').extend({required: '* Please the name is required'}),
	email:ko.observable('email').extend({required: '* Please the email is required'}),
	sujet:ko.observable('sujet').extend({required: '* Please the sujet is required'}),
	message:ko.observable('message').extend({required: '* Please the message is required'}),
	services:ko.observableArray(
		[
			new service('HTML5', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il a pas fait que survivre cinq siècles, mais est aussi adapté à la bureautique informatique, sans que son contenu en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.'),
			new service('CSS3', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il a pas fait que survivre cinq siècles, mais est aussi adapté à la bureautique informatique, sans que son contenu en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.'),
			new service('JavaScript', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il a pas fait que survivre cinq siècles, mais est aussi adapté à la bureautique informatique, sans que son contenu en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.'),
			new service('HTML5', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il a pas fait que survivre cinq siècles, mais est aussi adapté à la bureautique informatique, sans que son contenu en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.'),
			new service('CSS3', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il a pas fait que survivre cinq siècles, mais est aussi adapté à la bureautique informatique, sans que son contenu en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.'),
			new service('JavaScript', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il a pas fait que survivre cinq siècles, mais est aussi adapté à la bureautique informatique, sans que son contenu en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.')
		]
	),	
	products:ko.observableArray(
		[
			new product('Product nro1','This is the best product nro1','http://lorempixel.com/400/200/sports/','altimage1','https://www.facebook.com/'),
			new product('Product nro2','This is the best product nro2','http://lorempixel.com/400/200/','altimage2', 'https://www.linkedin.com/'),
			new product('Product nro3','This is the best product nro3','http://lorempixel.com/400/200/sports/1/','altimage3','https://www.instagram.com/'),
			new product('Product nro4','This is the best product nro1','http://lorempixel.com/400/200/','altimage4','https://www.facebook.com/'),
			new product('Product nro5','This is the best product nro2','http://lorempixel.com/400/200/sports/1/','altimage5', 'https://www.linkedin.com/'),
			new product('Product nro6','This is the best product nro3','http://lorempixel.com/400/200/sports/','altimage6','https://www.instagram.com/')
		]
	),
	technologys:ko.observableArray(
		[
			new technology('KnockoutJS FrameworkJS', 'Knockout is a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model. Any time you have sections of UI that update dynamically.', 'http://lorempixel.com/100/100/sports/1/' ,'product.html'),
			new technology('AngularJS FrameworkJS', 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application.', 'http://lorempixel.com/100/100/sports/' ,'product.html'),
			new technology('ReactJS FrameworkJS', 'React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.', 'http://lorempixel.com/100/100/' ,'product.html'),
			new technology('EmberJS FrameworkJS', 'Ember makes Handlebars templates even better, by ensuring your HTML stays up-to-date when the underlying model changes. To get started, you do not even need to write any JavaScript.', 'http://lorempixel.com/100/100/sports/1/' ,'product.html')
		]
	),
	travels:ko.observableArray(
		[
			new travel('Toronto', 'Knockout is a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model. Any time you have sections of UI that update dynamically.', 'http://lorempixel.com/100/100/sports/1/' ,'product.html'),
			new travel('London', 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application.', 'http://lorempixel.com/100/100/sports/' ,'product.html'),
			new travel('Singapure', 'React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.', 'http://lorempixel.com/100/100/' ,'product.html'),
			new travel('Paris', 'Ember makes Handlebars templates even better, by ensuring your HTML stays up-to-date when the underlying model changes. To get started, you do not even need to write any JavaScript.', 'http://lorempixel.com/100/100/sports/1/' ,'product.html')
		]
	),
		
	showTravel: ko.observable(true),
	showTechnology: ko.observable(true),
	newsTravelValue: ko.observable("Show only news travel"),
	newsTechnologyValue: ko.observable("Show only news technology"),
	
	showNewsTravel: function(){
		viewModel.showTechnology(false);
		viewModel.showTravel(true);
		viewModel.newsTravelValue("News Travel are only listed");
	},
	showNewsTechnology: function(){
		viewModel.showTravel(false);
		viewModel.showTechnology(true);
		viewModel.newsTechnologyValue("News Technology are only listed");
	},
	resetNews: function(){
		viewModel.showTravel(true);
		viewModel.showTechnology(true);
		viewModel.newsTravelValue("Show only news travel");
		viewModel.newsTechnologyValue("Show only news technology");
	},
};

ko.applyBindings(viewModel);