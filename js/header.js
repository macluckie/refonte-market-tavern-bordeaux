$(document).ready(
  function()
  {
    $(".toggle-mobile-nav").click(
    	function()
	    {
	        $(".toggle-mobile-nav").is(".is-active") ?
	        	( $(".toggle-mobile-nav").removeClass("is-active"), $("body").removeClass("mobile-nav") )
	        	: ( $(".toggle-mobile-nav").addClass("is-active"), $("body").addClass("mobile-nav") )
	    }
	 );

    $(window).scroll(
    	function()
    	{
        	$(window).scrollTop() >= 97 ?
        		$("#Header").addClass("sticky-nav")
        		: $("#Header").removeClass("sticky-nav");
        }
    );
  }
);