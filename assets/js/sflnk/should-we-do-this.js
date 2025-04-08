const baseUrl = $('#baseUrl').val();
var jinwoostream = {
    sora_included_links: "",
    sora_excluded_links: `${baseUrl},jinwoodrive.com,server2.jinwoodrive.com,discord.com,t.me,facebook.com,instagram.com,threads.net,twitter.com,linki.ee,campsite.bio,trakteer.id,saweria.co,bit.ly,tinyurl.com,adskeeper.com`,
    sora_base_url: "",
}
jinwoostream.rmProtocol = function(href) {
    var result = href;
    if (href.indexOf('https://') === 0) result = href.replace("https://", "");
    if (href.indexOf('http://') === 0) result = href.replace("http://", "");
    if (href.indexOf('//') === 0) result = href.replace("//", "");
    return result;
}
jinwoostream.commaToArray = function(str) {
    var array = typeof str === 'string' ? str.replace(/\s+/g, "").split(",") : [];
    return array.filter(function(el) {
        return el != null && el != "";
    });
}
jinwoostream.shuffle = function(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a[0];
}

jinwoostream.buildLink = function(href) {
    return 'https://hidupsuccess.com/process?gt=' + btoa(href);
}
jinwoostream.in = function(needle, sourceArray) {
    var inside = sourceArray.filter(function(e) {
        if (e.indexOf('*') !== -1) {
            e = e.replace('.', '\\.').replace('*', '.*');
            var reg = new RegExp(e);
            return needle.match(e) !== null;
        }
        return jinwoostream.rmProtocol(needle).trim().indexOf(e) === 0;
    });
    return inside.length >= 1;
}
jinwoostream.shouldWeDoThat = function(url) {
    if (this.in(url, jinwoostream.sora_excluded_links)) return false
    if (jinwoostream.sora_included_links.length < 1) return true;
    if (this.in(url, jinwoostream.sora_included_links)) return true;
    return false;
}
// jinwoostream.me = function(){
// 	if (this.sora_base_url.length){
// 		return this.shuffle(this.sora_base_url);
// 	}
//     var jsscript = document.getElementsByTagName("script");
//     for (var i = 0; i < jsscript.length; i++) {
//         var pattern = /assets\/js\/soralink\.js/i;
//         if ( pattern.test( jsscript[i].getAttribute("src") ) ) {
//             var dUrl = jsscript[i].getAttribute("src");
//             dUrl = dUrl.split('wp-content/')[0];
//             return dUrl;
//         }
//     }
// }
jinwoostream.run = function() {
    jinwoostream.sora_included_links = this.commaToArray(typeof(jinwoostream.sora_included_links) != "undefined" ? jinwoostream.sora_included_links : "");
    jinwoostream.sora_excluded_links = this.commaToArray(window.location.hostname + ',' + (typeof(jinwoostream.sora_excluded_links) != "undefined" ? jinwoostream.sora_excluded_links : ""));
    jinwoostream.sora_base_url = this.commaToArray(typeof(jinwoostream.sora_base_url) == "string" ? jinwoostream.sora_base_url : "");
    var elementsArray = document.querySelectorAll("a[href]");
    elementsArray.forEach(function(elem) {
        var href = elem.href;
        if (jinwoostream.shouldWeDoThat(href) == false) return;
        elem.href = jinwoostream.buildLink(href);
    });
}