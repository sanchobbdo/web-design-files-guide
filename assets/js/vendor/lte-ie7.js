/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'guides-ui\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-menu' : '&#xe000;',
			'icon-cloud-download' : '&#xe001;',
			'icon-github' : '&#xe002;',
			'icon-google-plus' : '&#xe003;',
			'icon-feed' : '&#xe004;',
			'icon-twitter' : '&#xe005;',
			'icon-facebook' : '&#xe006;',
			'icon-apple' : '&#xe007;',
			'icon-android' : '&#xe008;',
			'icon-windows8' : '&#xe009;',
			'icon-chrome' : '&#xe00a;',
			'icon-firefox' : '&#xe00b;',
			'icon-IE' : '&#xe00c;',
			'icon-opera' : '&#xe00d;',
			'icon-safari' : '&#xe00e;',
			'icon-html5' : '&#xe00f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};