

function openMenu() {
    $('#sidebar-menu').addClass("shiftRight");
    $('.body-container').addClass("shiftBodyRight");
    $('#closeOverlay').addClass("closingOverlay");
    $('#BurgerBtn').addClass("moveBurgerBtnRight");
    $('#HTMLTAG').addClass("noScroll");
}
function closeMenu() {
    if ($('.body-container').hasClass("shiftBodyRight")) {
        $('#sidebar-menu').removeClass("shiftRight");
        $('.body-container').removeClass("shiftBodyRight");
        $('#closeOverlay').removeClass("closingOverlay");
        $('#BurgerBtn').removeClass("moveBurgerBtnRight");
        $('#HTMLTAG').removeClass("noScroll");
        $('.sandwich').removeClass("innerAnimate");
        $('.sandwich').removeClass("beforeAnimate");
        $('.sandwich').removeClass("afterAnimate");
    }
}

function animateBurger() {
    $('.sandwich').addClass("innerAnimate");
    $('.sandwich').addClass("beforeAnimate");
    $('.sandwich').addClass("afterAnimate");
}

$('#closeOverlay').click(closeMenu);
$('#portfolioLink').click(closeMenu);
$('#contactMeLink').click(closeMenu);
$('#BurgerBtn').click(openMenu);
$('#BurgerBtn').click(animateBurger);
