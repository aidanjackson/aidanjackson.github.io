	/* ========================================================================
	Site Menu
	======================================================================== */

	site_menu = {

		init: function() {

			// Variables
			
			var jQuerymenu_handle = jQuery('#js-menu-handle'),
				jQuerysite_menu = jQuery('#js-site-menu'),
				menu_height = jQuerysite_menu.find('> ul').outerHeight();

			// Events

			jQuerymenu_handle.on('click', function(e){

				e.preventDefault();

				if(jQuerymenu_handle.hasClass('is-open')) {
					jQuerysite_menu.css('max-height', 0);
					jQuerymenu_handle.removeClass('is-open').addClass('is-closed');

				} else {
					jQuerysite_menu.css('max-height', menu_height);
					jQuerymenu_handle.removeClass('is-closed').addClass('is-open');
				}
			});

			jQuery(window).resize(function() {

				menu_height = jQuerysite_menu.find('> ul').outerHeight();

				if (jQuery(window).width() >= 1008) {
					jQuerysite_menu.css('max-height', 999);
				} else {
					jQuerysite_menu.css('max-height', 0);
				}

			});

		}

	}.init();

	/* ========================================================================
	Animate scroll on # links
	======================================================================== */

	hashtag_link = {

		init: function() {

			// Vars
			var self = this;

			// Events

			jQuery(document).on( 'click', '.hashtag-link', function(e) { 

		  		e.preventDefault();

		    	self.animate_scroll(this);
		  	});

		  	return this;
		},

		animate_scroll: function(el) {

			if (location.pathname.replace(/^\//,'') === el.pathname.replace(/^\//,'') && location.hostname === el.hostname) {
		      
		      var target = jQuery(el.hash);
		      target = target.length ? target : jQuery('[name=' + el.hash.slice(1) +']');

		      if (target.length) {
		        
		        jQuery('html,body').animate({
		          scrollTop: target.offset().top-100
		        }, 1000);

		      }
		    }
		}

	}.init();