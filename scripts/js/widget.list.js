var widgetIcon = [{
    'eval' : {
	'title': 'EVAL',
	'img' : 'report_sprite.png',
	'imgPos': '0 113px',
	'imgPosHover': '0px 56px',
	'width' : '100%',
	'height' : '200px',
	'url' : 'toyota/eval/eval.html'
    },
    'traffic' : {
	'title': 'TRAFFIC',
	'img' : 'report_sprite.png',
	'imgPos': '-66px 113px',
	'imgPosHover': '-66px 169px',
	'width' : '100%',
	'height' : '300px',
	'url' : 'toyota/eval/toyota_search_terms.html'
    },
    'alert' : {
	'title': 'ALERT',
	'img' : 'report_sprite.png',
	'imgPos': '-133px 113px',
	'imgPosHover': '-133px 169px',
	'width' : '100%',
	'height' : '100px',
	'url' : 'toyota/alert/index.html'
    },
    'buzzword' : {
	'title': 'BUZZWORD',
	'img' : 'report_sprite.png',
	'imgPos': '-200px 113px',
	'imgPosHover': '-200px 169px',
	'width' : '100%',
	'height' : '150px',
	'url' : 'toyota/buzzword/index.html'
    },
    'live' : {
	'title': 'LIVE',
	'img' : 'report_sprite.png',
	'imgPos': '-267px 113px',
	'imgPosHover': '-267px 169px',
	'width' : '100%',
	'height' : '400px',
	'url' : 'toyota/live/live.html'
    },
    'report' : {
	'title': 'REPORT',
	'img' : 'report_sprite.png',
	'imgPos': '-334px 113px',
	'imgPosHover': '-334px 169px',
	'width' : '100%',
	'height' : '300px',
	'url' : 'toyota/report/index.html'
    },
    'Heading' : {
	'title': 'Heading',
	'img' : 'report_sprite.png',
	'imgPos': '-401px 113px',
	'imgPosHover': '-401px 170px',
	'width' : '100%',
	'height' : '300px',
	'url' : 'http://kode.fahmi.my'
    },
    'Comment' : {
	'title': 'Text block',
	'img' : 'report_sprite.png',
	'imgPos': '-468px 113px',
	'imgPosHover': '-468px 170px',
	'width' : '100%',
	'height' : '300px',
	'url' : 'http://kode.fahmi.my'
    },
    'Appendix' : {
	'title': 'List of segments',
	'img' : 'report_sprite.png',
	'imgPos': '-536px 113px',
	'imgPosHover': '-536px 170px',
	'width' : '100%',
	'height' : '300px',
	'url' : 'http://kode.fahmi.my'
    },
    'CampaignScatter' : {
	'title': 'Scatter chart',
	'img' : 'report_sprite.png',
	'imgPos': '-602px 113px',
	'imgPosHover': '-602px 169px',
	'width' : '100%',
	'height' : '300px',
	'url' : 'http://kode.fahmi.my'
    },
    'CampaignLine': {
	'id' : '',
	'title': 'Data by period',
	'img' : 'report_sprite.png',
	'imgPos': '-669px 113px',
	'imgPosHover': '-669px 169px',
	'width' : '100%',
	'height' : '300px',
	'url' : 'http://kode.fahmi.my'
    }
}];

$(document).ready(function() {
    var html = '';
    $.each(widgetIcon, function(k, v) {
	$.each(v, function(k2, v2) {
	    html += '<div '
		+ 'id="' + k2 + '" '
		+ 'class="widgetElementIcons" '
		+ 'title="' + v2.title + '" '
		+ 'wheight="' + v2.height + '" '
		+ 'url="' + v2.url + '" '
		+ 'style="'
		+ 'display: block; '
		+ 'position: relative;'
		+ (v2.imgPos?'background: url(\'images/' + v2.img + '\') ' + v2.imgPos + ';':'background:' + v2.img + ';')
		+ 'position: relative;'
		+ '">'
		+ '</div>';
	});
    });
    $('#widgetsContainer').append(html);

    $(".widgetElementIcons").draggable({
	helper: 'clone',
	revert: true
    });

    $('.frameholder').hide();

});