
checkSearchBoxSize();

// Card hover shadow
$('.card').hover(
    function() {
        $(this).toggleClass('shadow');
        console.log("card hover")
    },
    function() {
        $(this).toggleClass('shadow');
        console.log("card hover")
    }
);

// mobile menu hamburger toggle
$('.mobile-menu').click(
    function() {
        $('.hamburger-icon').toggleClass('show');
        $('.mobile-nav').toggleClass('hidden');
    },
    function() {
        $('.hamburger-icon').toggleClass('show');
        $('.mobile-nav').toggleClass('hidden');
    }
);

$('.modal-btn').click(
    function() {
        $('.hamburger-icon').removeClass('show');
        $('.mobile-nav').addClass('hidden');
    }
)


$( window ).resize(function() {
    checkSearchBoxSize()         
    }
);

// mypage profile nav
$('.profile-nav-item span').click(
    function() {
        $('.profile-nav-item span').removeClass('active')
        $(this).addClass('active')
    }
)

$('.profile-info span').click(
    function() {
        $('.profile-section').css("display", "none")
        $('.profile-crew-section').css("display", "none")
        $('.profile-menu-section').css("display", "none")
        $('.profile-info-section').css("display", "block")
    }
)

$('.profile-post span').click(
    function() {
        $('.profile-section').css("display", "none")
        $('.profile-crew-section').css("display", "none")
        $('.profile-menu-section').css("display", "none")
        $('.profile-post-section').css("display", "block")
    }
)
$('.profile-menu span').click(
    function() {
        $('.profile-section').css("display", "none")
        $('.profile-crew-section').css("display", "none")
        $('.profile-menu-section').css("display", "block")
        $('.profile-info-section').css("display", "none")
    }
)

$('.profile-crew span').click(
    function() {
        $('.profile-section').css("display", "none")
        $('.profile-crew-section').css("display", "block")
        $('.profile-menu-section').css("display", "none")
        $('.profile-post-section').css("display", "none")
    }
)

// mobile card menu

function checkSearchBoxSize() {
    if($('.search-link-box').width() >= $('.search-link-wrapper').width()){
        $('.search-nav-right').css("display", "inline-block");
        $('.search-nav-left').css("display", "inline-block");

    }
    else {
        $('.search-nav-right').css("display", "none");
        $('.search-nav-left').css("display", "none");
    }
    
}

$('.search-nav-right').click(function() { 
    $('.search-link-wrapper').animate( { scrollLeft: '+=200' }, 300); 
});

$('.search-nav-left').click(function() { 
    $('.search-link-wrapper').animate( { scrollLeft: '-=200' }, 300); 

});

// click
$('.header-login-btn button').click(function() {
    $('.common-container').css('display', 'block');
    $('.regist-container').css('display', 'none');
    $('.forgot-password-container').css('display', 'none');
});


    

$('.login-to-regist .move-regist').click(function() {
    $('.common-container').css('display', 'none');
    $('.regist-container').css({
        "opacity":"0",
        "display":"block",
    }).show().animate({opacity:1})
});

$('.forgot-password .move-forgot-password').click(function() {
    $('.common-container').css('display', 'none');
    $('.forgot-password-container').css({
        "opacity":"0",
        "display":"block",
    }).show().animate({opacity:1})
});

$('.regist-to-login .move_login').click(function() {
    $('.common-container').css({
        "opacity":"0",
        "display":"block",
    }).show().animate({opacity:1})
    $('.regist-container').css('display', 'none');
    $('.forgot-password-container').css('display', 'none');
});

$('.search-icon').click(function() {
    $('.header-search-wrapper').addClass('active');
    $('.search-input').focus();
});

$('.header-menu .user-img').click(function() {
    window.location.replace('mypage');
});

$('.header .write-btn').click(function() {
    window.location.replace('/write');
});

$('.card').click(function() {
    
});

$(".search-input").keydown(function(key) {
    if (key.keyCode == 13) {
        window.location.replace('search');
}
});

$('.search-input').blur(function(){
    $('.search-input').val('')
    $('.header-search-wrapper').removeClass('active');
})