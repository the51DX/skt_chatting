// tab
function tabNavItem() {
    const tabLink = '.tab-list li button';
    const tabLinkTrigers = document.querySelectorAll(tabLink);
    const tabNavPanels = document.querySelectorAll('.tab-panel');
    if(tabLinkTrigers) {
        tabLinkTrigers.forEach(function(tabLinkTriger, index){
            tabLinkTriger.addEventListener('click', function(e) {
                e.preventDefault();
                let _target = this.closest('.tab-list');
                let _targetLinks = _target.querySelectorAll(tabLink);
                _targetLinks.forEach(function(_targetLink) {
                    _targetLink.parentNode.classList.remove('is-active');
                    _targetLink.removeAttribute('title');
                });
                tabLinkTriger.parentNode.classList.add('is-active');
                tabLinkTriger.setAttribute('title', '선택됨');

                // tabNavPanel 있는 경우
                if(tabNavPanels.length>0) {
                    tabNavPanels.forEach(function(tabNavPanel) {
                        tabNavPanel.classList.remove('is-active');
                    });
                    tabNavPanels[index].classList.add('is-active');
                }
            });
        });
    }
}
tabNavItem();


// faq
class Accordion {
    constructor(heading) {
    this.heading = heading;
}

showOne() {
    const accordionHeading = document.querySelectorAll(this.heading);
    accordionHeading.forEach((item, key) => {
        item.addEventListener('click', () => {
            if (item.classList.contains("is-active")) {
                item.classList.remove("is-active");
            } else {
                const accordionTitlesWithIsOpen = document.querySelectorAll(".accordion > .is-active");
                accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
                    accordionTitleWithIsOpen.classList.remove("is-active");
                });
                item.classList.add("is-active");
            }
        });
        });
    }
}
const accordion = new Accordion('.title');
// for open every use showAll();
accordion.showOne();

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
