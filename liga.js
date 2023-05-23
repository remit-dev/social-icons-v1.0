/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'remit': '&#xe98d;',
            'blogger2': '&#xe987;',
            'dribbble': '&#xe900;',
            'drive': '&#xe941;',
            'google': '&#xe942;',
            'google1': '&#xe943;',
            'yelp': '&#xe901;',
            'foursquare': '&#xe902;',
            'flattr': '&#xe903;',
            'xing': '&#xe904;',
            'xing1': '&#xe905;',
            'pinterest': '&#xe906;',
            'pinterest1': '&#xe907;',
            'stackoverflow': '&#xe908;',
            'stumbleupon': '&#xe909;',
            'stumbleupon1': '&#xe90a;',
            'delicious': '&#xe90b;',
            'lastfm': '&#xe90c;',
            'lastfm1': '&#xe90d;',
            'linkedin': '&#xe90e;',
            'linkedin1': '&#xe90f;',
            'hackernews': '&#xe910;',
            'reddit': '&#xe911;',
            'skype': '&#xe912;',
            'soundcloud': '&#xe913;',
            'soundcloud1': '&#xe914;',
            'yahoo': '&#xe915;',
            'tumblr': '&#xe916;',
            'tumblr1': '&#xe917;',
            'blogger': '&#xe918;',
            'blogger1': '&#xe919;',
            'ello': '&#xe91a;',
            'wordpress': '&#xe91b;',
            'github': '&#xe91c;',
            'steam': '&#xe91d;',
            'steam1': '&#xe91e;',
            '500px': '&#xe91f;',
            'deviantart': '&#xe920;',
            'behance': '&#xe921;',
            'behance1': '&#xe922;',
            'dribbble1': '&#xe923;',
            'flickr': '&#xe924;',
            'flickr1': '&#xe925;',
            'flickr2': '&#xe926;',
            'flickr3': '&#xe927;',
            'vimeo': '&#xe928;',
            'vimeo1': '&#xe929;',
            'twitch': '&#xe92a;',
            'youtube': '&#xe92b;',
            'feed': '&#xe92c;',
            'rss': '&#xe92c;',
            'feed1': '&#xe92d;',
            'rss1': '&#xe92d;',
            'sina-weibo': '&#xe92e;',
            'renren': '&#xe92f;',
            'vk': '&#xe930;',
            'vine': '&#xe931;',
            'twitter': '&#xe932;',
            'telegram': '&#xe933;',
            'spotify': '&#xe934;',
            'whatsapp': '&#xe935;',
            'instagram': '&#xe936;',
            'facebook': '&#xe937;',
            'facebook1': '&#xe938;',
            'hangouts': '&#xe939;',
            'google-plus': '&#xe93a;',
            'google-plus1': '&#xe93b;',
            'google-plus2': '&#xe93c;',
            'mail': '&#xe93d;',
            'mail1': '&#xe93e;',
            'mail2': '&#xe93f;',
            'mail3': '&#xe940;',
            'share': '&#xe96c;',
            'social': '&#xe96c;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/i/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
