var contact = contact || {};

(function($){

	// --------- Component Interface Implementation ---------- //
	function ContactEdit(){};
	contact.ContactEdit = ContactEdit; 
  
	ContactEdit.prototype.create = function(data,config){
	    if(!data) data ={};
		var $e = hrender("#tmpl-UserEditContent",data)
		return $e;
	}
		
	ContactEdit.prototype.postDisplay = function(data,config){
        if(data)this.$element.find('.updateUser').val("Edit");
	    
		// --- Create User --- //
		this.$element.find('.updateUser').click(function(){
			var userJson = {};
			userJson.name=$('#nameInput').val();
			userJson.email=$('#emailInput').val();
			userJson.pno=$('#phoneNumberInput').val();
			userJson.title=$('#titleInput').val();
			var userid=$('#useridInput').val();
			if(userid==""){
				brite.dm.create("Users",userJson).done(function(uid){
					contact.refreshUserComponent();
				});
			}else{
				brite.dm.update("Users",userid,userJson).done(function(uid){
					contact.refreshUserComponent();
				});
			}
		});		
					

		this.$element.delegate(".userCancle","click",function(){
			contact.refreshUserComponent();
		});	
	}
	// --------- /Component Interface Implementation ---------- //
	
	
	// --------- Component Registration --------- //
	brite.registerComponent("ContactEditComponent",{
		emptyParent: true,
		parent: "#mainContainer",
		loadTemplate: true
	},
	function(){
		return new contact.ContactEdit();
	});	
	// --------- /Component Registration --------- //
	
})(jQuery);

	
	