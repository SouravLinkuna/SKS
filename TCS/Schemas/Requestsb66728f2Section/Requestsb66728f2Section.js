define("Requestsb66728f2Section", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "Requests",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "RunProcessButton",
				"parentName": "SeparateModeActionButtonsLeftContainer", //visible in section and not on a page
				"propertyName": "items",
				"values":{
					itemType: this.Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.GREEN,
					classes: {
						textClass: ["actions-button-margin-right"],
						wrapperClass: ["actions-button-margin-right"]
					},
					caption: "RUN",
					hint: "Runs a business process",
					click: {"bindTo": "onMyMainButtonClick"},
					tag: "SeparateModeActionButtonsLeftContainer_RUN",
					enabled: {"bindTo": "isActiveRecord"}
				}
			},
			{
				"operation": "insert",
				"name": "RunProcessButton",
				"parentName": "CombinedModeActionButtonsCardLeftContainer", //visible in a page
				"propertyName": "items",
				"values":{
					itemType: this.Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.RED,
					classes: {
						textClass: ["actions-button-margin-right"],
						wrapperClass: ["actions-button-margin-right"]
					},
					caption: "RUN",
					hint: "Runs a business process",
					click: {"bindTo": "onMyMainButtonClick"},
					tag: "CombinedModeActionButtonsCardLeftContainer_RUN",
					//enabled: {"bindTo": "isActiveRecord"}
				}
			},
		]/**SCHEMA_DIFF*/,
		methods: {
			onMyMainButtonClick:function(){
				//var tag = arguments[3];
				//this.showInformationDialog("Action clicked with tag: "+tag);
				ProcessModleUtuilities.executeProcess({
					"sysProcessName": "Process_TimestampConverter"
				});
			},
			isActiveRecord: function(){
				if(this.$ActiveRow ){
					return true;
				}else{
					return false;
				}
			},
		}
	};
});
