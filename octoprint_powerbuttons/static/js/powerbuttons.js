$(function() {
    function PowerButtonsPluginViewModel(parameters) {
        var self = this;
		
		//$('element').attr('id', 'value');
		
		$("#control > div.jog-panel").eq(0).addClass("controls")
		$("#control > div.jog-panel").eq(1).addClass("tools")
		$("#control > div.jog-panel").eq(2).addClass("general")
				
		//add power buttons
		$("#control > div.jog-panel.general").after("\
			<div id=\"control-jog-power\" class=\"jog-panel powercontrol\" data-bind=\"visible: loginState.isUser\">\
				<h1>" + gettext("Power") + "</h1>\
				<div>\
					<button class=\"btn btn-block control-box\" data-bind=\"enable: isOperational() && !isPrinting() && loginState.isUser(), click: function() { $root.sendCustomCommand({ \
						type: 'command', command: 'M80' }) }\" \
						>" + gettext("Power On") + "</button>\
					<button class=\"btn btn-block control-box\" data-bind=\"enable: isOperational() && !isPrinting() && loginState.isUser(), click: function() { $root.sendCustomCommand({ \
						type: 'command', command: 'M81' }) }\" \
						>" + gettext("Power Off") + "</button>\
				</div>\
			</div>\
		");
		/**/
			
	}	
		OCTOPRINT_VIEWMODELS.push([
        PowerButtonsPluginViewModel,

		["printerStateViewModel", "loginStateViewModel"]
		
    ]);
});