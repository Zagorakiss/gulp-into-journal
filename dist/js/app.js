// BookBlock ////////////////////////////////////////////////////////////////////////////////
var Page = (function() {
	
	var config = {
		$bookBlock : $( '#bb-bookblock' ),
		$navNext : $( '#bb-nav-next' ),
		$navPrev : $( '#bb-nav-prev' ),
		$navFirst : $( '#bb-nav-first' ),
		$navLast : $( '#bb-nav-last' )
	},
	init = function() {
		config.$bookBlock.bookblock( {
			speed : 1000,
			shadowSides : 0.8,
			shadowFlip : 0.4
		} );
		initEvents();
	},
	initEvents = function() {
		
		var $slides = config.$bookBlock.children();

						// add navigation events
						config.$navNext.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'next' );
							return false;
						} );

						config.$navPrev.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'prev' );
							return false;
						} );

						config.$navFirst.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'first' );
							return false;
						} );

						config.$navLast.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'last' );
							return false;
						} );
						
						// add swipe events
						$slides.on( {
							'swipeleft' : function( event ) {
								config.$bookBlock.bookblock( 'next' );
								return false;
							},
							'swiperight' : function( event ) {
								config.$bookBlock.bookblock( 'prev' );
								return false;
							}
						} );

						// add keyboard events
						$( document ).keydown( function(e) {
							var keyCode = e.keyCode || e.which,
							arrow = {
								left : 37,
								up : 38,
								right : 39,
								down : 40
							};

							switch (keyCode) {
								case arrow.left:
								config.$bookBlock.bookblock( 'prev' );
								break;
								case arrow.right:
								config.$bookBlock.bookblock( 'next' );
								break;
							}
						} );
					};

					return { init : init };

				})();


Page.init();
// BookBlock END ////////////////////////////////////////////////////////////////////////////////



$(document).ready(function(){
	if (window.location.href.indexOf("#1") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 1 );}
	if (window.location.href.indexOf("#2") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 3 );}
	if (window.location.href.indexOf("#3") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 5 );}
	if (window.location.href.indexOf("#4") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 8 );}
	if (window.location.href.indexOf("#5") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 9 );}
	if (window.location.href.indexOf("#6") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 10 );}

});