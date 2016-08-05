/* global bewpi_admin */

/**
 * Admin JS
 */
jQuery( function ( $ ) {

	$( document.body )

		.on( 'init_tooltips', function() {
			var tiptip_args = {
				'attribute': 'data-tip',
				'fadeIn': 50,
				'fadeOut': 50,
				'delay': 200
			};

			$( '.tips, .help_tip, .woocommerce-help-tip' ).tipTip( tiptip_args );

			// Add tiptip to parent element for widefat tables
			$( '.parent-tips' ).each( function() {
				$( this ).closest( 'a, th' ).attr( 'data-tip', $( this ).data( 'tip' ) ).tipTip( tiptip_args ).css( 'cursor', 'help' );
			});
		});

	// Tooltips
	$( document.body ).trigger( 'init_tooltips' );
});
