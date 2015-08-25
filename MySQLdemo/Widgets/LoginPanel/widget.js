WAF.define('LoginPanel', ['waf-core/widget', 'Image', 'TextInput', 'LoginButton'], function(widget, Image, TextInput, LoginButton) {
	
    var LoginPanel = widget.create('LoginPanel', {
        appearence: widget.property({
        	type: 'enum',
        	values: ['vertical', 'horizontal'],
        	defaultValueCallback: function() {
                var r = /(^| )appearence-(vertical|horizontal)( |$)/.exec(this.node.className);
                return r && r[2] || 'vertical';
        	}
    	}),
    	showImage: widget.property({
        	type: 'enum',
        	values: ['top', 'left', 'no'],
        	defaultValueCallback: function() {
                var r = /(^| )show-image-(top|left|no)( |$)/.exec(this.node.className);
                return r && r[2] || 'top';
        	}
    	}),
    	animation: widget.property({ type: 'boolean', defaultValue: true }),
        init: function() {
			var loginButton = this.getPart('loginButton')
			
			var loginInput = this.getPart('loginInput')
			if (!loginButton.loginField()) {
				loginButton.loginField(loginInput.node.id);
			}
			var passwordInput = this.getPart('passwordInput')
			if (!loginButton.passwordField()) {
				loginButton.passwordField(passwordInput.node.id);
			}
			loginInput.placeholder(loginInput.placeholder() || 'Login...');
			passwordInput.inputType('password');
			passwordInput.placeholder(passwordInput.placeholder() || 'Password...');
			
			
			var changeAppearence = function() {
				['appearence-horizontal', 'appearence-vertical'].forEach(function(c) {
					this.removeClass(c);
				}.bind(this));
				if (this.appearence()) {
					this.addClass('appearence-' + this.appearence());
				}
			};
			this.appearence.onChange(changeAppearence);
			changeAppearence.call(this);

			var changeShowImage = function() {
				['show-image-top', 'show-image-left', 'show-image-no'].forEach(function(c) {
					this.removeClass(c);
				}.bind(this));
				if (this.showImage()) {
					this.addClass('show-image-' + this.showImage());
				}
			};
			this.showImage.onChange(changeShowImage);
			changeShowImage.call(this);
			
			loginButton.subscribe('error', function() {
				if (this.animation()) {
		            $(this.node).addClass("login-wrong");
    			}
			}, this);
		    $(this.node).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
        	    $(this).removeClass("login-wrong");
        	});
        	
        	loginButton.subscribe('login', function() {
        		loginInput.value('');
        		passwordInput.value('');
        		loginInput.hide();
        		passwordInput.hide();
        	});
        	loginButton.subscribe('logout', function() {
        		loginInput.show();
        		passwordInput.show();
        	});
        	
        	var subscriber = this.subscribe('submit', function() {
        		loginButton.click();
        	});
        	subscriber.options.allowPropagation = true;
		}
    });
	
	LoginPanel.inherit('waf-behavior/layout/composed');
	LoginPanel.setPart('image', Image, { scale: 'contain', align: 'center center' });
	LoginPanel.setPart('loginInput', TextInput, { placeholder: 'Login...' });
	LoginPanel.setPart('passwordInput', TextInput, { inputType: 'password', placeholder: 'Password...' });
	LoginPanel.setPart('loginButton', LoginButton);


    return LoginPanel;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda/help/Title/en/page3871.html */