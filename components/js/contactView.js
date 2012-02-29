var contact = contact || {};

(function($){

	// --------- Component Interface Implementation ---------- //
	function ContactView(){};
	contact.ContactView = ContactView; 
  
	ContactView.prototype.create = function(data,config){
		$("body").append("<div id='notTransparentScreen'></div>");
        var $e = hrender("#tmpl-UserViewContent",data)
        return $e;	
	}
		
	ContactView.prototype.postDisplay = function(data,config){
		var $e = this.$element;
		this.$element.delegate(".cancleprompt","click",function(){
	    	$("body").find("#notTransparentScreen").remove();
	    	$e.bRemove();
		});	
		
	}
	// --------- /Component Interface Implementation ---------- //
	
	
	// --------- Component Registration --------- //
	brite.registerComponent("ContactViewComponent",{
		parent: "body",
		loadTemplate: true
	},
	function(){
		return new contact.ContactView();
	});	
	// --------- /Component Registration --------- //
	
})(jQuery);

	
	