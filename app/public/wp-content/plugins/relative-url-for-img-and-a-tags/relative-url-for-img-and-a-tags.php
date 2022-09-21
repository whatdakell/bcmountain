<?php
/*
 * Plugin Name: Relative URL for Img and A Tags
 * Description: This plugin will filter the content of your posts and pages to remove the root of the domain from links and image sources.
 * Author: EdesaC
 * Version: 1.0.3
**/
 
class RemoveRootURL {
    protected $_plugin_url;
    protected $_plugin_folder;

    public function __construct($file) {
        if (!$file) {
            throw new Error('Missing 1 argument!');
        }

        $this->_plugin_url = plugin_dir_url($file);
        $this->_plugin_folder = basename(dirname($file));
        
        $url = get_bloginfo('wpurl');
        $parse = parse_url($url);
        $subfolder = $parse['path'];
        
        $opt = get_option('relative-url-img-a-tags');

        if ($opt['subfolder'] != $subfolder) {
            $this->_changeSubfolderDB($opt['subfolder'], $subfolder);
                    
            $opt['subfolder'] = $subfolder;
            update_option('relative-url-img-a-tags', $opt);            
        }
        
        add_action('wp_insert_post_data', array($this, 'filterURLOnUpdate'), 99, 2);
        register_activation_hook($file, array($this, 'removeOnDB'));        
    }
    
    /**
     * remove root url from src and href upon saving a post or page.
     * @action wp_insert_post_data
     * @param array $data
     * @param array $postarr
     * @return type array
     */
    function filterURLOnUpdate($data , $postarr = array()){
        $content = htmlentities($data['post_content']);
        
        $url = get_bloginfo('wpurl');
        $parse = parse_url($url);
        $root = $parse['scheme'] . '://' . $parse['host'];

        $replace1 = htmlentities('href=\\"' . $root);
        $replace2 = htmlentities('src=\"' . $root);

        $new_content = str_replace($replace1, 'href=\\"', $content);
        $new_content = str_replace($replace2, 'src=\\"', $new_content);
        
        //when wwww is used
        $rootwww = $parse['scheme'] . '://www.' . $parse['host'];

        $replace1 = htmlentities('href=\\"' . $rootwww);
        $replace2 = htmlentities('src=\"' . $rootwww);

        $new_content = str_replace($replace1, 'href=\\"', $new_content);
        $new_content = str_replace($replace2, 'src=\\"', $new_content);

        $data['post_content'] = html_entity_decode($new_content);
        
        return $data;
    }

    /**
     * If the plugin detects that the wp installation is moved to a new subfolder, it will update the database
     * @global type $wpdb
     * @param type $old_subfolder
     * @param type $new_subfolder
     */
    protected function _changeSubfolderDB($old_subfolder, $new_subfolder) {
        global $wpdb;
        $url = get_bloginfo('wpurl');
        $path_info = pathinfo($url);
        $root = $path_info['dirname'];        
        
        $query = 'UPDATE ' . $wpdb->prefix . 'posts SET post_content="%src="' . $root . '%"';
        
        $post_table = $wpdb->prefix . 'posts';
        $unwanted_text = 'src="' . $old_subfolder;
        $wanted_text = 'src="' . $new_subfolder;
        
        $query = 'UPDATE ' . $post_table . ' SET post_content = replace(post_content, \'' . $unwanted_text . '\', \'' . $wanted_text . '\')';
        $wpdb->query($query);
        
        
        $unwanted_text2 = 'href="' . $root;
        $wanted_text2 = 'href="';        
        $query2 = 'UPDATE ' . $post_table . ' SET post_content = replace(post_content, \'' . $unwanted_text2 . '\', \'' . $wanted_text2 . '\')';
        $wpdb->query($query2);          
    }

    /**
     * Removes the root of the url in image and link tags from posts table
     * @global type $wpdb
     */
    public function removeOnDB() {
        global $wpdb;
        $url = get_bloginfo('wpurl');
        
        $parse = parse_url($url);
        $root = $parse['scheme'] . '://' . $parse['host'];
        
        $query = 'UPDATE ' . $wpdb->prefix . 'posts SET post_content="%src="' . $root . '%"';
        
        $post_table = $wpdb->prefix . 'posts';
        $unwanted_text = 'src="' . $root;
        $wanted_text = 'src="';
        
        $query = 'UPDATE ' . $post_table . ' SET post_content = replace(post_content, \'' . $unwanted_text . '\', \'' . $wanted_text . '\')';
        $wpdb->query($query);
        
        
        $unwanted_text2 = 'href="' . $root;
        $wanted_text2 = 'href="';        
        $query2 = 'UPDATE ' . $post_table . ' SET post_content = replace(post_content, \'' . $unwanted_text2 . '\', \'' . $wanted_text2 . '\')';
        $wpdb->query($query2);                
    }
} // end of class

new RemoveRootURL(__FILE__);