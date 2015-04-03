/* Strikethrough filter extension for showdown.js
 * v0.1 by Paul Matthews
 * License: FREE
 */

(function(){
    var strike = function(converter){
        var filter;

        filter = function(text) {
            return text.replace(/--([\w|\W]+?)--/g, '<s>$1</s>');
        }

        return [{
            type : 'lang',
            filter : filter
        }];
    }

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.strike = strike; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = strike;
})();
