function UIRequestList(uiTable){
	this.uiTable = uiTable;
	this.fillTable = function(data){
		var output = [];
		var section = Titanium.UI.createTableViewSection({
			headerTitle: "Review Request"
		});
		for (var i = 0; i < data.length; i++){
			var row = Titanium.UI.createTableViewRow({});
			var mainLabel = Titanium.UI.createLabel({
				text: data[i].title + " (ID= "+ data[i].id + ")",
				font:{fontSize:20,fontWeight:'bold'},
				textAlign:'left',
				height:32,
				top:0,
				left:0,
				width:'auto'
			});
			var rowFooter  = Titanium.UI.createLabel({
				text: data[i].request.links.submitter.title,
				font: {fontSite:15, fontWeight:'normal'},
				color: "#B2B2B2",
				top: 20,
				left: 12,
				height: 24,
				width:'auto',
				textAlign:'left'
			});
			
			var dateLabel = Titanium.UI.createLabel ({
				text: data[i].request.last_updated,
				font: {fontSite:15, fontWeight:'normal'},
				color: '#0000FF',
				right: 0,
				top: 12,
				height: 24,
				width:'auto',
				textAlign:'right'
			});
			
			row.request = data[i].request;
			row.submitter = data[i].request.links.submitter.title;
			row.activity = data[i].title;
			row.requestid = data[i].request.id;
		
			row.add(mainLabel);
			row.add(rowFooter);
			row.add(dateLabel);
			
			row.className = 'mainrow_class';
			output.push(row);
			section.add(row);
			//Titanium.API.info(data[i].title + "..." + data[i].request.links.submitter.title);
		}
		uiTable.setData([section]);
	}
}
