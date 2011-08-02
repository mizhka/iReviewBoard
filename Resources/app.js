// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Titanium.include("rb_api.js");
Titanium.include("reqproc.js");

Titanium.include("uiDetailedView.js");
Titanium.include("uiRequestList.js");

Titanium.include("model/all.js");
Titanium.include("startup.js");

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
	title: 'Tab 1',
	backgroundColor: '#fff'
});

//
// create detailed UI tab and root window
//
var win2 = Titanium.UI.createWindow({
	title: 'Tab 2',
	backgroundColor: '#fff'
});

var api = new RBAPI();
var reqProcessor = new RequestProcessor();

reqProcessor.makeMain(win1,win2);

// open tab group
win1.open();