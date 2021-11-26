/*----------------------------------------------------*/
	/*	Video Settings
	/*----------------------------------------------------*/
	$( '.buttonbar' ).on( 'click', '.play', function()
	{
		var video = $( '.video-earth video' ),
			button = $( '.play' );
		if( video[ 0 ].paused )
		{
			video[ 0 ].play();
			$( this ).addClass( 'pause-show' );
			$( this ).removeClass( 'play-show' );
		}
		else
		{
			video[ 0 ].pause();
			$( this ).addClass( 'play-show' );
			$( this ).removeClass( 'pause-show' );
		}
		$('.bg-video').addClass('hidden-bg');
	} );
