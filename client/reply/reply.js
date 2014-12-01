Template.comment.events({
	'keyup .form-control':function(e){
		if(e.which === 13){
			var commentText = $('.form-control').val();
			var annonComment = document.getElementById('annonComment').checked;
			var original = Meteor.user().profile.name;
			var timeNow = Date.now();
			if(annonComment === true){
				user = "Annonymous";
			}
			else{
				user = Meteor.user().profile.name;
			}
			if(commentText.length>2){
				Replies.insert({user:user,parent:this._id,original:original,commentText:commentText,timeNow:timeNow});
				$('.form-control').val("");
				console.log("comment inserted");
			}
			else{
				$('.form-control').val("");
				$('.form-control').attr('placeholder','Need at least 2 characters to comment');
			}
		}
	},
	'click .close':function(){
		if(this.original === Meteor.user().profile.name){
			Replies.remove({_id:this._id});
		}
		else{
			alert("If you are not the owner, you can't delete this comment");
		}
	}
	
});

Template.comment.helpers({
	getComments:function(){
		return Replies.find({parent:this._id},{sort:{timeNow:-1}});
	}
});