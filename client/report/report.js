Template.report.events({
	'click #adminLogin':function(){
		var adminName = $('#adminName').val();
		var adminPassword = $('#adminPassword').val();
		if(adminName === "Mahesh Babu" && adminPassword === "amiselfish@1"){
			$('.backdrop').css('display', 'none');
			$('.box').css('display', 'none');
		}
	}
});

