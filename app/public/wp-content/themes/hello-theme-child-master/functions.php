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
	wp_register_style('jqueryUI', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/jquery-ui.min.css');
	wp_enqueue_style( 'jqueryUI' );
	wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600&display=swap', false );

	wp_enqueue_style(
		'hello-elementor-child-style', get_stylesheet_directory_uri() . '/style.css', false,'1.2'
	);
}
function unhook_parent_style() {

	// wp_dequeue_style( 'hello-elementor-theme-style' );
	// wp_deregister_style( 'hello-elementor-theme-style' );

	// wp_register_style( 'hello-elementor-child-style', get_stylesheet_directory_uri() . '/style.css', false, '1.0.0' ); 
	// wp_enqueue_style( 'hello-elementor-child-style' );

	// wp_enqueue_style( 'hello-elementor', get_parent_theme_file_uri( '/style.css' ) );

	wp_dequeue_style( 'hello-elementor-theme-style' );
	wp_deregister_style( 'hello-elementor-theme-style' );
	wp_dequeue_style( 'hello-elementor' );
	wp_deregister_style( 'hello-elementor' );
	// wp_dequeue_style( 'elementor' );
	// wp_deregister_style( 'elementor' );

  // wp_dequeue_style('elementor-global');
  // wp_deregister_style('elementor-global');


	// wp_enqueue_style('hello-elementor', get_template_directory_uri() . '/style.css');
	// wp_enqueue_style('hello-elementor', get_stylesheet_directory_uri() . '/style.css', array( 'hello-elementor' ));
	
	// hello-elementor
}
add_action( 'wp_enqueue_scripts', 'unhook_parent_style', 20 );

function scripts_and_styles()
{
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
    wp_enqueue_script('jquery');
    wp_register_script('jqueryUI', 'https://code.jquery.com/ui/1.13.2/jquery-ui.min.js');
    wp_enqueue_script('jqueryUI');
		wp_enqueue_style( 'style', get_stylesheet_uri() );
    wp_register_script('e-custom', get_stylesheet_directory_uri() . '/e-custom.js', false,'1.2');
    wp_enqueue_script('e-custom');
}

add_action('wp_enqueue_scripts', 'scripts_and_styles');

add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 103 );

add_filter('use_block_editor_for_post_type', 'prefix_disable_gutenberg', 10, 2);
function prefix_disable_gutenberg($current_status, $post_type)
{
    // Use your post type key instead of 'product'
    if ($post_type === 'winners') return false;
    return $current_status;
}
add_filter('use_block_editor_for_post_type', '__return_false');

function switch_to_relative_url($html, $id, $caption, $title, $align, $url, $size, $alt)
{
	$imageurl = wp_get_attachment_image_src($id, $size);
	$relativeurl = wp_make_link_relative($imageurl[0]);   
	$html = str_replace($imageurl[0],$relativeurl,$html);
	      
	return $html;
}
add_filter('image_send_to_editor','switch_to_relative_url',10,8);

add_filter( 'hello_elementor_page_title', '__return_false' );

// Shortcode to output custom PHP in Elementor
function wpc_elementor_shortcode(  ) {
	// echo "This is my custom PHP output in Elementor!";
	ob_start(); // SOLUTION
	include('test.html');
	return ob_get_clean(); // SOLUTION
}

// function daily_profit() {
//   ob_start(); // SOLUTION
//   include( locate_template( './daily_profit-layout.php', false, false ) );
//   return ob_get_clean(); // SOLUTION
// }
// add_shortcode('daily_profit', 'daily_profit');

add_shortcode( 'my_elementor_php_output', 'wpc_elementor_shortcode');