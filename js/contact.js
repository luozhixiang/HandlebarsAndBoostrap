var brite = brite || {};
var contact = contact || {};

brite.config.templatePath = "components/";
var _SQLiteDb;

(function($){
		
	contact.refreshUserComponent = function(){
			brite.dm.list("Users").done(function(results){
				brite.display('ContactListComponent',results);
			});
		}
	
	contact.parseRows2Json = function(rows){
			var json = [];
			var rlen = rows.length;
			for(var i=0;i<rlen;i++){
				json.push(rows.item(i));
			}
			return json;
		}	
	
})(jQuery);



$(document).ready(function(){
	var databaseOptions = {
			fileName: "sqlitecontacttest",
			version: "1.0",
			displayName: "SQLite Contact Test",
			maxSize: 1024
		};
	_SQLiteDb = openDatabase(
			databaseOptions.fileName,
			databaseOptions.version,
			databaseOptions.displayName,
			databaseOptions.maxSize
	);	
	
	brite.registerDao("Users",new brite.dao.SQLiteDao("Users","id",[{column:'name',dtype:'TEXT'},
	                                                                {column:'email',dtype:'TEXT'},
	                                                                {column:'pno',dtype:'TEXT'},
	                                                                {column:'title',dtype:'TEXT'}]));
	contact.refreshUserComponent();
});


