var app = (function() {
    var $font_li = $('ul').find('li[data-x="2"]'),
    $font = $('#font'),
    $menus = $('.menus');
    console.log($font);


    $font_li.click(function() {
        $font.css({ display: 'inline-block' });
        $menus.css({ display: 'none' });
    })
})