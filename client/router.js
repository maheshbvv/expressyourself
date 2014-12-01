Router.configure({
	layoutTemplate: 'layout'
	
});

Router.map(function(){
	this.route('home', {path:'/'});
	this.route('post', {path:'/post'});
	this.route('about', {path:'/about'});
	this.route('contact', {path:'/contact'});
	this.route('report', {path:'/report'});
	this.route('profile', {path:'/profile'});
	

})