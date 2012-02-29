var contact = contact || {};

(function($){

	// --------- Component Interface Implementation ---------- //
	function ContactList(){};
	contact.ContactList = ContactList; 
  
	ContactList.prototype.create = function(data,config){
		var json = {};
		json.users = data;
		var $e = hrender("#tmpl-UserContent",json)
		return $e;
	}
		
	ContactList.prototype.postDisplay = function(data,config){
        var $e = this.$element;	
        
		$e.delegate(".addNewUser","click",function(){
			brite.display('ContactEditComponent');
		});
					
		$e.delegate(".updateExistUser","click",function(){
			var objRef = $(this).bObjRef("Users");
			if (objRef){
				brite.dm.get("Users",objRef.id).done(function(user){
					brite.display('ContactEditComponent',user);
				});
			}
		});	
			
		$e.delegate(".viewDetail","click",function(){
			var objRef = $(this).bObjRef("Users");
			if (objRef){
				brite.dm.get("Users",objRef.id).done(function(user){
					brite.display('ContactViewComponent',user);
				});
			}
		});		
			
		// --- delete User --- //
		$e.delegate(".delUser","click",function(){
			var objRef = $(this).bObjRef("Users");
			if (objRef){
				brite.dm.remove("Users",{id:objRef.id}).done(function(){contact.refreshUserComponent();});
			}
		});
		
	}
	// --------- /Component Interface Implementation ---------- //
	
	
	// --------- Component Registration --------- //
	brite.registerComponent("ContactListComponent",{
		emptyParent: true,
		parent: "#mainContainer",
		loadTemplate: true
	},
	function(){
		return new contact.ContactList();
	});	
	// --------- /Component Registration --------- //
	
})(jQuery);

	
	