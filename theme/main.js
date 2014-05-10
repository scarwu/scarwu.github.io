'use strict';

require([
    '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.0/highlight.min.js'
], function() {
    hljs.tabReplace = '    ';

    // $('pre > code').each(function () {
    //     var count = $(this).text().split('\n').length;
    //     var line = $('<div>').attr('class', 'line').html(Array(count).join('<span></span>'));
    //     $(this).parent().append(line).end();

    //     hljs.highlightBlock($(this)[0]);
    // });

    $('pre').each(function() {
        var td = $('<td>').append($(this).clone());
        var tr = $('<tr>').append(td);
        var table = $('<table>').append(tr);
        var code = $('<div>').attr('class', 'code').append(table);

        var count = $(this).find('code').text().split('\n').length;
        var line = $('<div>').attr('class', 'line').html(Array(count).join('<span></span>'));

        var viewer = $('<div>').attr('class', 'viewer').append(line).append(code);

        $(this).parent().append(viewer);
        $(this).remove();

        hljs.highlightBlock(viewer[0]);
    });

    $(window).keydown(function(e) {
        switch(e.keyCode) {
            case 37:
            case 72:
                if($('#paging .new a')[0] != undefined)
                    $('#paging .new a')[0].click();
                break;
            case 39:
            case 76:
                if($('#paging .old a')[0] != undefined)
                    $('#paging .old a')[0].click();
                break;
            case 74:
                scrollBy(0, 40);
                break;
            case 75:
                scrollBy(0, -40);
                break;
        }
    });
});
