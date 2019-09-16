<?php
use Timber\Timber;

include_once get_stylesheet_directory() . '/vendor/autoload.php';

add_theme_support('custom-logo');
add_theme_support('post-thumbnails'); 

$updater = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/DoedeJaarsmaCommunicatie/smarble',
	__FILE__,
	'smarble',
	1
);

Timber::$locations = [
    get_stylesheet_directory() . '/templates/',
];

add_action( 'elementor/theme/register_locations', static function ( $elementor_theme_manager ) {
	$elementor_theme_manager->register_location(
		'footer_top',
		[
			'label' => __( 'Footer' ),
			'multiple' => false,
			'edit_in_content' => false,
		]
	);
	
} );
