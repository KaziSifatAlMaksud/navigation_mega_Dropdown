jQuery(document).ready(function($) {

    // Toggle navigation dropdown
    function toggleNav() {
        var navIsVisible = !$('.cd-dropdown').hasClass('dropdown-is-active');
        $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
        $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
    }

    // Event handler for dropdown trigger click
    $('.cd-dropdown-trigger').on('click', function(event) {
        event.preventDefault();
        toggleNav();
    });

    // Event handler for closing the dropdown
    $('.cd-dropdown .cd-close').on('click', function(event) {
        event.preventDefault();
        toggleNav();
    });

    // Event handler for dropdown items with children
    // $('.has-children > a').click(function(event) {
    //     event.preventDefault();
    //     $(this).toggleClass('is-active');
    //     var $dropdownElements = $(this).nextAll('.cd-dropdown-gallery, .cd-secondary-dropdown, .cd-dropdown-icons');
    //     if ($(this).hasClass('is-active')) {
    //         $dropdownElements.removeClass('is-hidden').addClass('is-active');
    //     } else {
    //         $dropdownElements.removeClass('is-active').addClass('is-hidden');
    //     }
    // });
	
	$('.has-children > a').click(function(event) {
        event.preventDefault();

        // Remove 'is-active' from other items but keep 'is-active' for the current item's category
        $('.has-children > a').not(this).removeClass('is-active');
        var $dropdownElements = $(this).nextAll('.cd-dropdown-gallery, .cd-secondary-dropdown, .cd-dropdown-icons');
        
        // Hide other categories
        $('.cd-dropdown-gallery, .cd-secondary-dropdown, .cd-dropdown-icons').not($dropdownElements).removeClass('is-active').addClass('is-hidden');
        
        // Toggle 'is-active' for the current item's category
        $(this).toggleClass('is-active');
        $dropdownElements.toggleClass('is-active').toggleClass('is-hidden');
    });

    // Event handler for card clicks
    $('.card').click(function() {
        $('.card').removeClass('selected');
        $(this).addClass('selected');
    });







    // Updated: Only toggle the dropdown content's visibility without removing classes
    $('.cd-dropdown-trigger').click(function() {
        $('.cd-dropdown-content').toggleClass('is-active');
    });
});














// jQuery(document).ready(function($){

// 	$('.cd-dropdown-trigger').on('click', function(event){
// 		event.preventDefault();
// 		toggleNav();
// 	});

// 	$('.cd-dropdown .cd-close').on('click', function(event){
// 		event.preventDefault();
// 		toggleNav();
// 		closeNav();
// 	});


// 	$(document).ready(function() {
// 		$('.has-children > a').click(function(event) {
// 			event.preventDefault();
// 			$('.has-children > a').not(this).each(function() {
// 				$(this).removeClass('is-active');
// 				$(this).nextAll('.cd-dropdown-gallery, .cd-secondary-dropdown, .cd-dropdown-icons').removeClass('is-active').addClass('is-hidden');
// 			});
// 			$(this).toggleClass('is-active');
// 			var $dropdownElements = $(this).nextAll('.cd-dropdown-gallery, .cd-secondary-dropdown, .cd-dropdown-icons');
// 			if ($(this).hasClass('is-active')) {
// 				$dropdownElements.removeClass('is-hidden').addClass('is-active');
// 			} else {
// 				$dropdownElements.removeClass('is-active').addClass('is-hidden');
// 			}
// 		});

		
// 		 $('.card').click(function() {
			
// 			$('.card').removeClass('selected');
// 			$(this).addClass('selected');
// 		});
// 		$('.cd-dropdown-trigger').click(function() {
// 			$('.cd-dropdown-content').toggleClass('is-active');
// 			if (!$('.cd-dropdown-content').hasClass('is-active')) {
// 				$('.has-children > a, .card').removeClass('is-active selected');
// 				$('.cd-dropdown-gallery, .cd-secondary-dropdown, .cd-dropdown-icons').removeClass('is-active').addClass('is-hidden');
// 			}
// 		});
// 	});
	



// 	function toggleNav(){
	
// 		 var navIsVisible = !$('.cd-dropdown').hasClass('dropdown-is-active');
// 		$('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
// 		 $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
// 	}
		



// 	//on mobile - open submenu
// 	$('.has-children').children('a').on('click', function(event){
// 		event.preventDefault();
// 		var selected = $(this);
// 		selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
// 	});
// 	//IE9 placeholder fallback
// 	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
// 	if(!Modernizr.input.placeholder){
// 		$('[placeholder]').focus(function() {
// 			var input = $(this);
// 			if (input.val() == input.attr('placeholder')) {
// 				input.val('');
// 		  	}
// 		}).blur(function() {
// 		 	var input = $(this);
// 		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
// 				input.val(input.attr('placeholder'));
// 		  	}
// 		}).blur();
// 		$('[placeholder]').parents('form').submit(function() {
// 		  	$(this).find('[placeholder]').each(function() {
// 				var input = $(this);
// 				if (input.val() == input.attr('placeholder')) {
// 			 		input.val('');
// 				}
// 		  	})
// 		});
// 	}
// });



	// //submenu items - go back link
	// $('.go-back').on('click', function(){
	// 	var selected = $(this),
	// 		visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
	// 	selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
	// }); 


	

	// function closeNav() {
	
	// 	$('.cd-dropdown').hide();
	// 	$('.cd-secondary-dropdown').hide();
	// 	$('.has-children ul').addClass('is-hidden');
	// 	$('.move-out').removeClass('move-out');
	// 	$('.is-active').removeClass('is-active');
	// }
	