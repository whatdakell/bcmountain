<?php
/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function hello_elementor_child_enqueue_scripts() {
	wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100;200;300;400;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap', false );
	wp_enqueue_style(
		'hello-elementor-child-style', get_stylesheet_directory_uri() . '/style.css', false,'1.2'
	);
}
function unhook_parent_style() {

	wp_dequeue_style( 'hello-elementor-theme-style' );
	wp_deregister_style( 'hello-elementor-theme-style' );
	wp_dequeue_style( 'hello-elementor' );
	wp_deregister_style( 'hello-elementor' );
	
	// hello-elementor
}
add_action( 'wp_enqueue_scripts', 'unhook_parent_style', 20 );

add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 103 );
