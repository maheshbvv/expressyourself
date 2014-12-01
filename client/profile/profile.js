Template.profile.helpers({
	twPicture:function(){
		var tw = Meteor.user().services.twitter.profile_image_url;
		return tw;
	},
	serviceFB:function(){
		var fbYes = Meteor.user().services.facebook.id;
		if(fbYes != null){
			return "Facebook";
		}
	},
	serviceTW:function(){
		var twYes = Meteor.user().services.twitter.profile_image_url;
		if(twYes != null){
			return "Twitter";
		}
	},
	shoutCount:function(){
		var user = Meteor.user().profile.name;
		var countPost = Posts.find({user:user}).count();
		return countPost;
	},
	commentCount:function(){
		var user = Meteor.user().profile.name;
		var replyCount = Replies.find({user:user}).count();
		return replyCount;
	}
});

