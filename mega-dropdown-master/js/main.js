jQuery(document).ready(function($) {

    // Toggle navigation dropdown
    function toggleNav() {
        var navIsVisible = !$('.cd-dropdown').hasClass('dropdown-is-active');
        $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
        $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
    }

    $('.cd-dropdown-trigger').on('click', function(event) {
        event.preventDefault();
        toggleNav();
    });

    $('.cd-dropdown .cd-close').on('click', function(event) {
        event.preventDefault();
        toggleNav();
    });
	
	$('.has-children > a').click(function(event) {
        event.preventDefault();
        $('.has-children > a').not(this).removeClass('is-active');
        var $dropdownElements = $(this).nextAll('.cd-dropdown-gallery, .cd-secondary-dropdown, .cd-dropdown-icons');
        
        $('.cd-dropdown-gallery, .cd-secondary-dropdown, .cd-dropdown-icons').not($dropdownElements).removeClass('is-active').addClass('is-hidden');
        
        $(this).toggleClass('is-active');
        $dropdownElements.toggleClass('is-active').toggleClass('is-hidden');
    });

    $('.card').click(function() {
        $('.card').removeClass('selected');
        $(this).addClass('selected');
    });
    // Updated: Only toggle the dropdown content's visibility without removing classes
    $('.cd-dropdown-trigger').click(function() {
        $('.cd-dropdown-content').toggleClass('is-active');
    });
});







