import $ from 'jquery';
import whenDomReady from 'when-dom-ready';

whenDomReady(() => {
    
    console.log('init giftcard');
    
    var config = {
        qrCode: '#QrCode',
        printButton: '#PrintGiftCard',
        giftCardCode: '.giftcard__code'
    };

    var $qrCode = $('#QrCode');

    new QRCode($qrCode[0], {
        text: $qrCode.attr('data-identifier'),
        width: 120,
        height: 120
    });

    $(config.printButton).on('click', function() {
        window.print();
    });

    // Auto-select gift card code on click, based on ID passed to the function
    $(config.giftCardCode).on('click', {
        element: 'GiftCardDigits'
    }, selectText);

    function selectText(evt) {
        var text = document.getElementById(evt.data.element);
        var range = '';

        if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
});
