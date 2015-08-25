(function(LoginPanel) {

	LoginPanel.doAfter('init', function() {
		this.showImage.onChange(function(v) {
			//if(v === 'left' && this.width() < 500) this.width(500);
		});
	});
});

// For more information, refer to http://doc.wakanda.org/Wakanda/help/Title/en/page3870.html