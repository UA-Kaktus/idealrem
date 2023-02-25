!function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
    modalButtons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach


    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready

$(document).ready(function () {



    $('.appointment').submit(function (e) {
        var popup = $('#popup_text');
        e.preventDefault();
        $.ajax({
            url: "send_a.php",
            type: "POST",
            data: $('.appointment').serialize(),
            success: function (response) {
                //обработка успешной отправки
                $(".success_msg").css("display", "block");

                $('.surname').val('');
                $('.name').val('');
                $('.tel').val('');
                $('.comments').val('');
            },
            error: function (response) {
                //обработка ошибок при отправке
            }
        });
        $('.appointment')[0].reset();
    });
});

$('.carousel__inner').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/arr_left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/arr_right.png"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false
            }
        },

    ]
});


jQuery(function ($) {
    $('.phone').mask("+38(999) 999-99-99");
});
