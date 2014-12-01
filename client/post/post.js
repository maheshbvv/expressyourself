Template.post.events({
	'keyup .postText':function(evt){
		if(evt.which === 13){
			var post = $('.postText').val();
			var original = Meteor.user().profile.name;
			var timeNow = Date.now();
			
			var annon = document.getElementById('annon').checked;
			if(annon === true){
				user = "Annonymous";
			}
			else{
				user = original;
			}
			if(post.length > 0){
				Posts.insert({user:user,orgininal:original,posts:post,timeNow:timeNow,parent:null});
				console.log("insreted");
				$('.postText').val("");
			}
			else{
				$('.postText').val("");
				$('.postText').attr('placeholder','At least 2 characters needed');
			}

		}
	}
});

Template.post.helpers({
	postTexts:function(){
		return Posts.find({},{sort:{timeNow:-1}});
	}
})