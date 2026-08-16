/**
 * Swiper Vertical Autoheight Plugin
 * If the vertical direction of the slider is used, sets the height of the swiper container depending on the highest slide.
 * Requires additional inner element in each slide.
 * Some CSS properties affecting height can break the plugin.
 * @example Swiper.use( swiperVerticalAutoheight );
 */
( function () {
	function set () {
		if ( this.params.direction === 'vertical' ) {
			let
				slides = Array.from( this.wrapperEl.children ),
				height = slides.reduce( function ( val, node ) {
					let height = node.children[0].getBoundingClientRect().height;
					return ( height > val ) ? height : val;
				}, 0 ),
				result = height * this.params.slidesPerView + ( this.params.spaceBetween * ( this.params.slidesPerView - 1 ) );

			this.el.style.height = result +'px';
			this.update( true );
		} else {
			this.el.style.height = null;
			this.update( true );
		}
	}

	let swiperVerticalAutoheight = {
		name: 'swiperVerticalAutoheight',
		on: {
			init: set,
			resize: set,
			breakpoint: set,
			imagesReady: set
		}
	};

	if ( !window.swiperVerticalAutoheight ) {
		window.swiperVerticalAutoheight = swiperVerticalAutoheight;
	} else {
		throw new Error( 'swiperVerticalAutoheight plugin is already defined or occupied' );
	}
})();
