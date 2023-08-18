
// header
window.addEventListener('load', function(){
    fetch('./gnb.html')
    .then(function(res){                
        res.text().then(function(html){
            const footer = document.querySelector('header');
            footer.innerHTML = html;                                
        })
    })
    .catch(error => console.log(error))                     
});

// footer
window.addEventListener('load', function(){
    fetch('./footer.html')
    .then(function(res){                
        res.text().then(function(html){
            const footer = document.querySelector('footer');
            footer.innerHTML = html;                                
        })
    })
    .catch(error => console.log(error))                     
});

$(()=>{
    _layout.init();
    _front.init();
    _aside.init();
})

// gnb-btn
const _aside = {
    init: function(){
        $(document).find(".btn__aside-open").on("click", function(){
            _aside.open();
        })
        $(document).find(".btn__aside-close").on("click", function(){
            _aside.close();
        })
    },
    open: function(){
        const elem = $(document).find(".aside__wrap");
        const btn_open = $(document).find(".btn__aside-open");
        elem.addClass("open");
        elem.removeAttr("aria-hidden");
        btn_open.attr("aria-expanded", true);
        
        
        $(".btn__aside-open").attr({"aria-hidden":true, "tabindex":-1});
        $(document).find(".aside__wrap h2").attr("tabindex", 0).focus();

        _front.noScroll(0);
        if( $(".wrap").hasClass("index") ) myFullpage.setAllowScrolling(false);
    },
    close: function(){

        $(document).find(".btn__aside-open").attr("tabindex", 0).focus();
        $(".btn__aside-open").removeAttr("aria-hidden tabindex");

        const elem = $(document).find(".aside__wrap");
        const btn_open = $(document).find(".btn__aside-open");
        elem.removeClass("open");
        elem.attr("aria-hidden", true);
        btn_open.attr("aria-expanded", false);

        $(".wrap").removeAttr("aria-hidden tabindex");
        
        _front.noScroll(1);
        if( $(".wrap").hasClass("index") ) myFullpage.setAllowScrolling(true);
    }
}

const _layout = {
    init:function(){
        _layout.header();
    },
    header: function(){
        const html = `
            <div class="header_inner">
                <h1 class="logo">
                    <a href="#"><img src="../assets/img/logo.svg" alt="채팅 플러스 로고 이미지"></a>
                </h1>
                <button type="button" class="btn__aside-open" aria-expanded="false" aria-label="메뉴"><span></span></button>
            </div> 
            <div class="aside__wrap" aria-hidden="true">
                <div class="aside__ttl"><h2><span class="hidden">메뉴</span></h2></div>
                <div class="aside__inner">
                    <div class="aside__menu">
                        <ul>
                            <li><a href="#">주요서비스</a></li>
                            <li><a href="#">배터리 인증서</a></li>
                            <li><a href="#">이용안내</a></li>
                            <li><a href="#">제휴문의</a></li>
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">EV Life</a></li>
                            <li><a href="#">이벤트</a></li>
                        </ul>
                    </div>
                </div>
                <button type="button" class="btn__aside-close" aria-label="닫기"></button>
            </div>
        `;
        $(document).find("header#header").html(html);

        $(document).on("click", ".header__app-btn[role='combobox']", function(e){
            const parents = $(this).parents(".header__app");
            if( parents.hasClass("on") ){
                parents.removeClass("on");
                $(this).attr("aria-expanded", false);
            } else {
                parents.addClass("on");
                $(this).attr("aria-expanded", true);
            }
        })

    }
}

// tab
function tabNavItem() {
    const tabLink = '.tab_inn li a';
    const tabLinkTrigers = document.querySelectorAll(tabLink);
    const tabNavPanels = document.querySelectorAll('.tab-panel');
    if(tabLinkTrigers) {
        tabLinkTrigers.forEach(function(tabLinkTriger, index){
            tabLinkTriger.addEventListener('click', function(e) {
                e.preventDefault();
                let _target = this.closest('.tab-list');
                let _targetLinks = _target.querySelectorAll(tabLink);
                _targetLinks.forEach(function(_targetLink) {
                    _targetLink.parentNode.classList.remove('active');
                    _targetLink.removeAttribute('title');
                });
                tabLinkTriger.parentNode.classList.add('active');
                tabLinkTriger.setAttribute('title', '선택됨');

                // tabNavPanel 있는 경우
                if(tabNavPanels.length>0) {
                    tabNavPanels.forEach(function(tabNavPanel) {
                        tabNavPanel.classList.remove('active');
                    });
                    tabNavPanels[index].classList.add('active');
                }
            });
        });
    }
}
tabNavItem();


// faq
var accordion = {
    click: function(target) {
      var $target = $(target);
      $target.on('click', function() {
  
        if ($(this).hasClass('on')) {
          slideUp($target);
        } else {
          slideUp($target);
          $(this).addClass('on').next().slideDown();
        }
  
        function slideUp($target) {
          $target.removeClass('on').next().slideUp();
        }
  
      });
    }
};
accordion.click('.acc_wrap > .acc_tit');


// scroll 
// 스크롤 모션
function ScrollEnterMain() {
  const scrollElements = document.querySelectorAll(".scroll-enter");
  if(scrollElements) {
      const elementInView = (el,dividend = 1) => {
          const elementTop = el.getBoundingClientRect().top;
          return(elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
      };
      // section enter 시
      const elementOutofView = (el) =>{
          const elementTop = el.getBoundingClientRect().top;
          return(elementTop > ( window.innerHeight || document.documentElement.clientHeight));
      };
      //section out 시
      const displayScrollElement = (element) => {
          element.classList.add("motion_view");
      };
      const hideScrollElement = (element) => {
          element.classList.remove("motion_view");
      };
      const handleScrollAnimation = () => {
          scrollElements.forEach((el) => {
              if(elementInView(el, 1.25)) {
                  displayScrollElement(el);
              }else if(elementOutofView(el)) {
                  hideScrollElement(el);
              }
          });
      };
      window.addEventListener("scroll", () => {
          handleScrollAnimation();
      });
  }
}
ScrollEnterMain();

///// === 스크롤 모션
// 위 아래 구분을 위한 스크립트
let lastScrollTop = 0;
window.addEventListener('scroll',scrollEventManage);

function scrollEventManage(){
  const Yoffset = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector(".header");
  const keyvisual = document.querySelector(".key-visual");


  if (Yoffset > lastScrollTop){
      // downscroll code
      if(header){
          header.classList.remove('fixed');
      }        
      
      console.log('내려가나');

  } else {
      // upscroll code
      console.log('올라가나');
      if(keyvisual){
          const keyviHeight = keyvisual.offsetHeight * 0.7;

      }

  }
  lastScrollTop = Yoffset <= 0 ? 0 : Yoffset;
  // 위 아래 구분을 위한 스크립트====================
}

