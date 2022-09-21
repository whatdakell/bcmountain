=== Relative URL for Img and A Tags ===

Contributors: edesac
Requires at least: 4.5.3
Tested up to: 5.5.3
Stable tag: 1.0.3
Tags: remove root URL from image & link tags, relative links, relative image source
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin will filter the content of your posts and pages to remove the root of the domain from links and image sources.

== Description ==

This plugin will remove the root of the domain from links and image sources. This means that it will leave the relative URL on your image and links. This is useful if you are installing your wordpress website on a subfolder which you will move on the main domain.

You can move your site to a different subdomain, subfolder, parent folder, etc., without having to edit image sources and link URLs.

So, **http://webdev-tuts.com/wp-content/uploads/2016/05/svggraph-pie-graph.jpg** would become **/wp-content/uploads/2016/05/svggraph-pie-graph.jpg**

Note: We haven't tested the plugin on any page builder yet.

== Features ==

*   removes the the domain name on links for internal links
*   removes domain from on image sources for images located in the server

== Installation ==

This section describes how to install the plugin and get it working.

1. Back up database before activating and installing the plugin.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. If you have installed a cache plugin, clear it, then view an old post that contains an image and check if the image or link renders properly.

== Changelog ==

= 1.0.0 =
* Initial upload

= 1.0.1 =
* Fixed problem on url in case the site is moved to subfolder to parent folder and vise versa

= 1.0.2 =
* Removed content filter because it's no longer necessary
* Improved codes

= 1.0.3 =
* Fixed problem when user did not add www and the domain is set to have www
* Tested on WP 5.5.3