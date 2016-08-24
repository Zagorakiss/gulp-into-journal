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
			shadowFlip : 0.4,
			// onEndFlip: function(old, page, isLimit ) {
			// 	page = page + 1;

			// 	var pageUrl = '/nastroenie-more';
			// 	var arPageNumbers = {
			// 		1: '/mechta-detstva/',
			// 		2: '/mechta-detstva/#2',
			// 		3: '/morskaya-tatoo-istoriya/',
			// 		4: '/morskaya-tatoo-istoriya/#2',
			// 		5: '/gorod/',
			// 		6: '/gorod/#2',
			// 		7: '/gorod/#3',
			// 		8: '/telnashka/',
			// 		9: '/kapitan-sudna/',
			// 		10: '/v-samostoyatelnom-plavanii/',
			// 		11: '/v-samostoyatelnom-plavanii/#2'
			// 	};
				
			// 	history.replaceState('', '', pageUrl + arPageNumbers[page]); 
			// 	return false;
			// }
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




// Page Jumping /////////////////////////////////////////////////////////////////////////////////
// $(document).ready(function(){
// 	if (window.location.href.indexOf("#1") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 1 );}
// 	if (window.location.href.indexOf("#2") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 3 );}
// 	if (window.location.href.indexOf("#3") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 5 );}
// 	if (window.location.href.indexOf("#4") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 8 );}
// 	if (window.location.href.indexOf("#5") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 9 );}
// 	if (window.location.href.indexOf("#6") !== -1) {$( '#bb-bookblock' ).bookblock( 'jump', 10 );}

// });
// Page Jumping END //////////////////////////////////////////////////////////////////////////////







// Sidebar ///////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
	var toggleBtnSidebar = document.querySelector('.sidebar__toggle');
	var sidebar = document.querySelector('.sidebar');
	var linkSidebar = $('.sidebar__link');
	var journalContainer = $('.container_mobile-journal');

	toggleBtnSidebar.addEventListener('click', function() {
	  toggleBtnSidebar.classList.toggle('is-closed');
	  sidebar.classList.toggle('is-closed');
	});

	// linkSidebar.on('click', function(e) {
	// 	e.preventDefault();
	// 	var pageToShow = $(this).attr('data-link');
	// 	journalContainer.attr('data-show', pageToShow);
	// 	journalContainer.animate({"scrollTop":0},"slow");
	// 	toggleBtnSidebar.classList.toggle('is-closed');
	// 	sidebar.classList.toggle('is-closed');
	// });

});
// Sidebar END ///////////////////////////////////////////////////////////////////////////////////