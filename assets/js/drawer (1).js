// import Scrollbar from 'https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/5.0.1/smooth-scrollbar.js'
// const listener = _ => {
//     document.querySelector('.container').classList.toggle('active');
//   }

//   document.querySelectorAll('.js-click').forEach((el) => {
//     el.addEventListener('click', listener)
//   });


// var scroller = new SmoothScroll({
//     target: document.querySelector("#scroll-container"),
//     scrollEase: 0.05,
//   });

// var Scrollbar = window.Scrollbar;
// var options = {
//     'dumping': 0.05,
//     'alwaysShowTracks': true,
// }

// Scrollbar.init(document.querySelector('#my-scrollbar'), options);




var headline = document.getElementById("headingAnimition");
var headline1 = document.getElementById("headingAnimition1");
var headingAnimition_reshaping = document.getElementById("headingAnimition_reshaping");
var sustain_future = document.getElementById("sustain_future");
var build = document.getElementById("build");
var headline2 = document.getElementById("headingAnimition2");
var headline3 = document.getElementById("headingAnimition3");
var headline4 = document.getElementById("headingAnimition4");
var headline5 = document.getElementById("headingAnimition5");
var headline6 = document.getElementById("headingAnimition6");
var headline7 = document.getElementById("headingAnimition7");
var headline8 = document.getElementById("headingAnimition8");
var headline9 = document.getElementById("headingAnimition9");
var headline10 = document.getElementById("headingAnimition10");
var headline11 = document.getElementById("headingAnimition11");
var headline12 = document.getElementById("headingAnimition12");
var headline13 = document.getElementById("headingAnimition13");
var headline14 = document.getElementById("headingAnimition14");
var headline15 = document.getElementById("headingAnimition15");
var headline16 = document.getElementById("headingAnimition16");
 
let animated = false
let animated1 = false
let animated2 = false
let animated3 = false
let animated4 = false
let animated5 = false
let animated6 = false
let animated7 = false
let animated8 = false
let animated9 = false
let animated10 = false
let animated11 = false
let animated12 = false
let animated13 = false
let animated14 = false
// let animated15 = false
let animated16 = false
// let animated15 = false

setTimeout(() => {
    // setTimeout(() => {

    //     document.getElementsByClassName('innerBar')[0].style.height = "100%"
    //     document.getElementsByClassName('innerBar')[1].style.height = "100%"
    //     document.getElementsByClassName('innerBar')[2].style.height = "100%"
    // }, 200)
    // setTimeout(() => {
    // }, 400)
    if (headline10) {
        headline10.style.opacity = 0
    }
    setTimeout(() => {
        setTimeout(() => {
            if (document.getElementById('lwer_ar')) {
                // document.getElementById('lwer_ar').style.top = "-150px"
            }
            if (document.getElementById('sustain')) {
                document.getElementById('sustain').style.marginTop = "0px"
            }
            if (document.getElementById('db_main')) {
                document.getElementById('db_main').style.paddingTop = '8em'
            }
            if (document.getElementById('navbar')) {
                document.getElementById('navbar').style.top = '0px'
                document.getElementById('navbar').style.transform = 'rotate(0deg)'
                // transform: rotate(363deg);

            }
            // if(document.getElementByTagName('nav')){
            //     document.getElementsByTagName('nav')[0].style.top = '0px'
            // }
            if (document.getElementById("headingAnimition10") && (position(document.getElementById("headingAnimition10")) - 400) < (document.body.scrollTop)) {
                // console.log('matched')
                if (headline10) {
                    headline10.style.opacity = 1
                }
                if (headline11) {
                    headline11.style.opacity = 1
                }
                if (headline12) {
                    headline12.style.opacity = 1
                }

                // document.getElementById('leftAnim3').style.left = '0px'
                if (!animated11) {

                    animated11 = true
                    spanText(headline10, true);
                    // setTimeout(()=>{
                    spanText(headline11, true);
                    // },[1500])
                    if (headline12) {
                        spanText(headline12, true);
                    }



                }
            }
        }, 1500)
    }, 600)
}, 1000);

setTimeout(() => {
    /*  */
    if (document.getElementById('loader')) {

        document.getElementById('loader').style.transition = "4s"
        document.getElementById('loader').style.top = "-1900px"
    }
    if (document.getElementById('slider1')) {
        document.getElementById('slider1').style.transition = "4s"
        document.getElementById('slider1').style.backgroundSize = "cover"
    }
    // document.getElementById('slider1').style.backgroundSize = "auto 140%"

    setTimeout(() => {
        if (document.getElementById('slider1')) {
            document.getElementById('slider1').style.backgroundSize = "cover"
        }
        // document.getElementById('slider1').style.height = "65vh"
    }, 500)
}, 2000);
if (document.getElementById('side1')) {
    document.getElementById('side1').style.display = 'none'
}
if (document.getElementById('side2')) {
    document.getElementById('side2').style.display = 'none'
}
let drawerOpen = false
function sidebar(id) {
    if (document.getElementById(id).checked) {
        // if(document.getElementsByClassName("scroll-content")){
        //     console.log(document.getElementsByClassName("scroll-content"))
        //     document.getElementsByClassName("scroll-content")[0].classList.add('transformLock')
        // }
        if (document.getElementById('side1')) {
            document.getElementById('side1').style.display = 'flex'
        }
        setTimeout(() => {
            if (document.getElementById('slider1')) {

                document.getElementById('side1').style.transform = 'translatex(0) skewX(-30deg)'
            }
        }, 100)
        setTimeout(() => {

            console.log(document.getElementById('curveDiv'))
            // document.getElementById('curveDiv').style.transform = ''
            if (document.getElementById("sidebar__close")) {
                document.getElementById("sidebar__close").style.left = '-60px'
            }
        }, 100)


        setTimeout(() => {
            if (document.getElementById('side1')) {
                document.getElementById('side1').style.transform = 'translatex(0) skewX(0deg)'
            }
            if (document.getElementById('curveDiv')) {
                document.getElementById('curveDiv').style.transform = 'translatex(0) '
            }
            setTimeout(() => {
                if (document.getElementById("sidebar__close")) {
                    document.getElementById("sidebar__close").classList.add('onceSpin')
                }

            }, 700)

        }, 400);
        setTimeout(() => {
            if (document.getElementById("overlaySidebar")) {
                document.getElementById("overlaySidebar").style.display = 'block'
            }
            // document.getElementById("sidebar__close").classList.remove('onceSpin')
        }, 900)
    } else {
        if (document.getElementById('side1')) {
            document.getElementById('side1').style.transform = 'translatex(100%) skewX(-30deg)'
        }
        setTimeout(() => {

            if (document.getElementById('side1')) {
                document.getElementById('side1').style.display = 'none'
            }
        }, 800)
        // document.getElementsByClassName("scroll-content")[0].classList.remove('transformLock')
        // drawerOpen = false
        // if (document.getElementById('curveDiv')) {

        //     document.getElementById('curveDiv').style.transform = 'skewX(10deg)'
        // }
        if (document.getElementById("sidebar__close")) {

            document.getElementById("sidebar__close").style.left = '0px'
        }
        if (document.getElementById("sidebar__close")) {

            document.getElementById("sidebar__close").classList.remove('onceSpin')
        }
        if (document.getElementById("overlaySidebar")) {

            document.getElementById("overlaySidebar").style.display = 'none'
        }

        setTimeout(() => {
            if (document.getElementById('side1')) {

                document.getElementById('side1').style.transform = 'translatex(100%) skewX(30deg)'
            }

        }, 1000);
        // document.getElementById('curveDiv').style.transform = 'skewX(0deg)'
    }
}

let drawerOpen2 = false
function sidebar2(id) {
    if (document.getElementById(id).checked) {
        // if(document.getElementsByClassName("scroll-content")){
        //     console.log(document.getElementsByClassName("scroll-content"))
        //     document.getElementsByClassName("scroll-content")[0].classList.add('transformLock')
        // }
        if (document.getElementById('side2')) {
            document.getElementById('side2').style.display = 'flex'
        }
        setTimeout(() => {
            if (document.getElementById('slider1')) {

                document.getElementById('side2').style.transform = 'translatex(0) skewX(-30deg)'
            }
        }, 100)
        setTimeout(() => {

            console.log(document.getElementById('curveDiv'))
            // document.getElementById('curveDiv').style.transform = ''
            if (document.getElementById("sidebar__close")) {
                document.getElementById("sidebar__close").style.left = '-60px'
            }
        }, 100)


        setTimeout(() => {
            if (document.getElementById('side2')) {
                document.getElementById('side2').style.transform = 'translatex(0) skewX(0deg)'
            }
            if (document.getElementById('curveDiv')) {
                document.getElementById('curveDiv').style.transform = 'translatex(0) '
            }
            setTimeout(() => {
                if (document.getElementById("sidebar__close")) {
                    document.getElementById("sidebar__close").classList.add('onceSpin')
                }

            }, 700)

        }, 400);
        setTimeout(() => {
            if (document.getElementById("overlaySidebar2")) {
                document.getElementById("overlaySidebar2").style.display = 'block'
            }
            // document.getElementById("sidebar__close").classList.remove('onceSpin')
        }, 900)
    } else {
        if (document.getElementById('side2')) {
            document.getElementById('side2').style.transform = 'translatex(100%) skewX(-30deg)'
        }
        setTimeout(() => {

            if (document.getElementById('side2')) {
                document.getElementById('side2').style.display = 'none'
            }
        }, 800)
        // document.getElementsByClassName("scroll-content")[0].classList.remove('transformLock')
        // drawerOpen = false
        // if (document.getElementById('curveDiv')) {

        //     document.getElementById('curveDiv').style.transform = 'skewX(10deg)'
        // }
        if (document.getElementById("sidebar__close")) {

            document.getElementById("sidebar__close").style.left = '0px'
        }
        if (document.getElementById("sidebar__close")) {

            document.getElementById("sidebar__close").classList.remove('onceSpin')
        }
        if (document.getElementById("overlaySidebar2")) {

            document.getElementById("overlaySidebar2").style.display = 'none'
        }

        setTimeout(() => {
            if (document.getElementById('side2')) {

                document.getElementById('side2').style.transform = 'translatex(100%) skewX(30deg)'
            }

        }, 1000);
        // document.getElementById('curveDiv').style.transform = 'skewX(0deg)'
    }
}






// {/* <script> */}
// $(window).on("scroll", function () {
//  AOS.init();
// });
// {/* </script> */}


function position(elem) {
    var left = 0,
        top = 0;

    do {
        left += elem.offsetLeft;
        top += elem.offsetTop;
    } while (elem = elem.offsetParent);

    return top;
}



if (document.body) {
    document.body.addEventListener(
        "scroll",
        (e) => {
            // console.log(document.body.scrollTop /20)
            // window.scrollTo({
            //     top: 20,
            //     behavior: 'smooth',
            //   })
            if (window.matchMedia("(max-width: 1024px)").matches) {
                if (document.getElementById('slidesWithScroll')) {
                    document.getElementById('slidesWithScroll').style.transition = `2s`
                }

            }


        }
    );
}


var speed = 1;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
    if (document.getElementById(id)) {
        elt = document.getElementById(id);
        endNbr = Number(document.getElementById(id).innerHTML);
        incNbrRec(0, endNbr, elt);
    }
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
        elt.innerHTML = i;
        setTimeout(function () {//Delay a bit before calling the function again.
            incNbrRec(i + 1, endNbr, elt);
        }, speed);
    }
}

/*Function called on button click*/
function incNbr() {
    incEltNbr("nbr");
}



const video = document.getElementById("my_video_1");
if (video) {

    const circlePlayButton = document.getElementById("circle-play-b");

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }
    if (circlePlayButton) {
        circlePlayButton.addEventListener("click", togglePlay);
        video.addEventListener("playing", function () {
            circlePlayButton.style.opacity = 0;
        });
        video.addEventListener("pause", function () {
            circlePlayButton.style.opacity = 1;
        });
    }

}








// $('.animateNumber').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

var spanText = function spanText(text, maintext) {
    console.log(text,"texttexttexttexttexttext");
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.split(' ').length; i++) {
        if (string.split(' ')[i] === ' ') {
            spaned += '<span style="color: #f1a10a; white-space: break-spaces;">' + '' + '</span>';
        } else if (string.split(' ')[i] === '&') {
            spaned += '<span class="clr" style="color: #f1a10a;white-space: break-spaces;">' + '&' + ' ' + '</span>';

        } else if (maintext && string.split(' ')[i] === 'Tomorrow') {
            spaned += '<span class="db_bottom" style="white-space: break-spaces;">' + 'Tomorrow' + ' ' + '</span>';


        }
        else { spaned += '<span style="white-space: break-spaces;">' + `${string.split(' ')[i] + ' '}` + '</span>'; }
    }
    text.innerHTML = spaned;
}





{/* <script> */ }

// const targets = document.querySelectorAll('.count_area');

// const lazyLoad = target => {
//     const io = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             console.log('hello World');
//             if (entry.isIntersecting) {
//                 const div = entry.target.children[0];

//                 $(".counterNumber").each(function () {
//                     var $this = $(this)
//                     $({ Counter: 0 }).animate({
//                         Counter: $this.text()
//                     }, {
//                         duration: 1500,
//                         easing: "swing",
//                         step: function () {
//                             $this.text(Math.ceil(this.Counter));
//                         }
//                     });
//                 });
//                 observer.disconnect();
//             }
//         });
//     });

//     io.observe(target);
// };

// targets.forEach(lazyLoad);
// </script>


// $(document).ready(function () {
//     animateDiv('.crlce');
//     animateDiv('._cir');
//     animateDiv('.dots2');
//     animateDiv('.circles ');
//     animateDiv('.__lines');
//     animateDiv('.zero');
//     animateDiv('.reshapes_line');
//     animateDiv('.__lines2');
//     animateDiv('.ssdw ');
//     animateDiv('.dt ');
//     animateDiv('.circle3');
//     animateDiv('.cd__line ');
//     animateDiv('.sm__line ');
//     animateDiv('.dots1 ');
//     animateDiv('.grdots ');
//     animateDiv(".two")
//     animateDiv(".__grdots ")
//     animateDiv(".lines1 ")
//     animateDiv(".gxt ")
//     animateDiv(".dr_line ")
//     animateDiv(".__circles ")
//     animateDiv('.right__lines')
//     animateDiv('.sustain_lft_line ')
//     animateDiv('.bx')
//     animateDiv('.wind ')
//     animateDiv('.circle ')
//     animateDiv('.bx02 ')
//     animateDiv('.v_line')
//     animateDiv('.circles2')
//     animateDiv('.planes')

//     animateDiv('.pl')



// });
// setTimeout(()=>{
//     document.body.scrollTop = 1000
// },[4000])
// document.body.addEventListener('scroll', ()=>{
//     // setInterval(()=>{
//         // document.body.scrollTop = document.body.scrollTop / document.body.offsetHeight
//     // },1)
// })




if (window.matchMedia("(min-width: 1024px)").matches) {
    gsap.registerPlugin(ScrollTrigger);
    let bodyScrollBar = Scrollbar.init(document.body, {
        damping: 0.04,
        delegateTo: document,
    });
    ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
            if (arguments.length) {
                bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: document.body });

    const fixedElem2 = document.querySelector('#overlaySidebar')
    bodyScrollBar.addListener(status => {
        const { offset } = status

        fixedElem.style.top = `${offset.y}px`
    })

    //   if (ScrollTrigger.isScrolling()) {
    // let lastScrolPos = 0
    // setInterval(()=>{

    //     // console.log('ss')
    //     if(lastScrolPos !=  bodyScrollBar.scrollTop){
    //         lastScrolPos = bodyScrollBar.scrollTop
    //         console.log(bodyScrollBar.scrollTop)
    //     }


    // },100)
    // }

    gsap.to(fixedElem2.current, {
        backgroundColor: '#000000',
        scrollTrigger: {
            trigger: 'body',
            start: '200 top',
            end: '400 top',
            scrub: true,
        },
    })

    const fixedElem = document.querySelector('aside')
    bodyScrollBar.addListener(status => {
        const { offset } = status

        fixedElem.style.top = `${offset.y}px`
    })

    gsap.to(fixedElem.current, {
        backgroundColor: '#000000',
        scrollTrigger: {
            trigger: 'body',
            start: '200 top',
            end: '400 top',
            scrub: true,
        },
    })



    const fixedElem4 = document.querySelector('.contactCallBackDrawer')
    if(fixedElem4){

        bodyScrollBar.addListener(status => {
            const { offset } = status
            
            fixedElem4.style.top = `${offset.y}px`
        })
        
        gsap.to(fixedElem4.current, {
            backgroundColor: '#000000',
            scrollTrigger: {
                trigger: 'body',
                start: '200 top',
                end: '400 top',
                scrub: true,
            },
        })
        
    }

    const fixedElem3 = document.querySelector('.site_footer')
    bodyScrollBar.addListener(status => {
        const { offset } = status

        fixedElem3.style.top = `${offset.y}px`
    })

    gsap.to(fixedElem3.current, {
        backgroundColor: '#000000',
        scrollTrigger: {
            trigger: 'body',
            start: '200 top',
            end: '400 top',
            scrub: true,
        },
    })

    // setTimeout(()=>{
    //     console.log(bodyScrollBar.scrollTop,'sdasd')
    // },6000)





    //   gsap.to(".opacity-layer", {
    //       xPercent: 0,
    //       opacity: 0.3,
    //       scrollTrigger: {
    //           trigger: ".opacity-layer",
    //           scrub: true,
    //           markers: true,
    //           start: "top 0",
    //           end: "top top",
    //       },
    //       transformOrigin: "left center",
    //   });

    //   gsap.from(".white-half", {
    //       scrollTrigger: {
    //           trigger: ".white-half",
    //           scrub: true,
    //           // scrub: 0.5,
    //           // markers: true,
    //           start: "top top",
    //           end: "top top",
    //       },
    //       x: "-100%",
    //       // opacity: 0,
    //       // ease: "power1.in",
    //       transformOrigin: "left center",
    //   });



}
// setTimeout(()=>{
//     let prvValue = ''
// },2000)

// setInterval(()=>{
//     if(document.getElementsByClassName("scrollbar-thumb-y")){

//         if(prvValue != document.getElementsByClassName("scrollbar-thumb")[0].style.transform){
//             console.log('1')
//             prvValue = document.getElementsByClassName("scrollbar-thumb")[0].style.transform
//         }
//     }
//     },1)


let prvValue = ''
let animNumber = 0
let dectectLastScroll = 0
const checkTransform = () => {
    if (document.getElementsByClassName("scroll-content")) {

        if (prvValue !== document.getElementsByClassName("scroll-content")[0].style.transform) {
            prvValue = document.getElementsByClassName("scroll-content")[0].style.transform
            let currValue = document.getElementsByClassName("scroll-content")[0].style.transform
            let val = - Number(currValue.split(',')[1].split('p')[0])
            console.log(val,"val");
            if (window.matchMedia("(min-width: 1024px)").matches) {

                if (val >= 303) {
                    if (document.getElementById('no')) {

                        document.getElementById('no').style.transform = 'scale(1)'
                    }
                    if (document.getElementById('no2')) {

                        document.getElementById('no2').style.transform = 'scale(1)'
                    }
                    if (document.getElementById('divNumber1')) {

                        document.getElementById('divNumber1').style.display = 'block'
                    }
                    if (document.getElementById('divNumber1')) {

                        document.getElementById('divNumber1').style.right = '0px'
                    }
                    if (!animated1) {

                        animated1 = true
                        if (headline1) {
                            headline1.style.opacity = 1
                            // headline2.style.opacity = 1
                            spanText(headline1);
                        }
                        if(headingAnimition_reshaping) {
                            headingAnimition_reshaping.style.opacity = 1
                            spanText(headingAnimition_reshaping);

                        }
                        if(sustain_future) {
                            sustain_future.style.opacity = 1
                            spanText(sustain_future);

                        }
                        // spanText(headline2)
                    }
                }
                if (val > 90) {
                    if (document.getElementById('efx')) {

                        document.getElementById('efx').style.right = '0px'
                    }

                }
                if (val > 973) {
                    if (document.getElementById('leftAnim2')) {

                        document.getElementById('leftAnim2').style.left = '0px'
                    }
                    if (document.getElementById('leftAnim3')) {

                        document.getElementById('leftAnim3').style.left = '0px'
                    }

                }
                if (window.matchMedia("(min-height: 780px)").matches) {
                    if (val > 2000) {
                        if (!animated) {

                            animated = true
                            if (headline) {

                                spanText(headline);
                                headline.style.opacity = 1
                            }
                        }
                    }
                } else if (window.matchMedia("(max-height: 769px)").matches) {
                    if (val > 1538) {
                        if (!animated) {

                            animated = true
                            if (headline) {

                                spanText(headline);
                                headline.style.opacity = 1
                            }
                        }
                    }
                }
                if (val > 1923) {
                    if (!animated2) {
                        animated2 = true
                        if (document.getElementById('sliderImage')) {
                            document.getElementById('sliderImage').style.transform = 'scale(1.2)'
                        }
                        setTimeout(() => {

                            if (document.getElementById('sliderImage')) {
                                document.getElementById('sliderImage').style.transform = 'scale(1)'
                            }
                        }, [1000])
                    }

                }
                if (val > 446 ) {

                    if (!animated3) {
                        animated3 = true
                        // setTimeout(() => {

                        incEltNbr("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/
                        incEltNbr("nbr2"); /*Call this funtion with the ID-name for that element to increase the number within*/
                        incEltNbr("nbr3"); /*Call this funtion with the ID-name for that element to increase the number within*/
                        // }, [500])
                        setTimeout(() => {
                            if (document.getElementById('water_edge')) {
                                document.getElementById('water_edge').style.top = '0px'
                            }
                            if (document.getElementsByClassName('textCounter')) {

                                Array.from(document.getElementsByClassName('textCounter')).map((a, i) => {
                                    document.getElementsByClassName('textCounter')[i].style.transform = 'scale(1)'
                                })
                                if (document.getElementsByClassName('textCounterRightAnimation')) {
                                    document.getElementsByClassName('textCounterRightAnimation')[0].style.left = '0%'
                                }
                            }
                        }, [700])

                        // Array.from(document.getElementsByClassName('counterNumber')).map((a,i)=>{
                        //     document.getElementsByClassName('counterNumber')[i].classList.add("animateNumber")
                        // })

                    }
                }

                if (window.matchMedia("(min-height: 770px)").matches) {
                    if (val > 4312  ) {
                        if (!animated4) {
                            animated4 = true
                            console.log('reached2')
                            spanText(headline3);
                            headline3.style.opacity = 1


                        }
                    }
                } else if (window.matchMedia("(max-height: 769px)").matches) {
                    if (val > 4312  ) {
                        if (!animated4) {
                            animated4 = true
                            console.log('reached2')
                            spanText(headline3);
                            headline3.style.opacity = 1


                        }
                    }
                }

                if (window.matchMedia("(min-height: 770px)").matches) {
                    if (val > 4812  ) {
                        if (!animated6) {
                            animated6 = true
                            if(headline5) {
                                spanText(headline5);
                                headline5.style.opacity = 1
                            }
                            if(build) {
                                console.log('reached build')
                                spanText(build);
                                build.style.opacity = 1
                            }

                        }
                    }
                } else if (window.matchMedia("(max-height: 769px)").matches) {
                    if (val > 4860 ) {
                        if (!animated6) {
                            animated6 = true
                            if(headline5) {
                                spanText(headline5);
                                headline5.style.opacity = 1
                            }
                            if(build) {
                                console.log('reached build')
                                spanText(build);
                                build.style.opacity = 1
                            }

                        }
                    }
                }



                if (val > 3814) {
                    if (!animated4) {
                        animated4 = true
                        console.log('reached2')
                        spanText(headline3);
                        headline3.style.opacity = 1


                    }

                }

                if (window.matchMedia("(min-height: 780px)").matches) {
                    if (val > 1492 ) {
                        if (!animated5) {
                            animated5 = true
                            spanText(headline4);
                            headline4.style.opacity = 1
                        }
                    }
                } else if (window.matchMedia("(max-height: 749px)").matches) {
                    if (val > 1321) {
                        if (!animated5) {
                            animated5 = true
                            spanText(headline4);

                            headline4.style.opacity = 1

                        }
                    }
                }

                if (window.matchMedia("(min-height: 780px)").matches) {
                    if (val > 5937) {
                        if (!animated8) {

                            animated8 = true
                            headline7.style.opacity = 1
                            spanText(headline7);
                        }
                    }
                } else if (window.matchMedia("(max-height: 769px)").matches) {
                    if (val > 5577 ) {
                        if (!animated8) {

                            animated8 = true
                            headline7.style.opacity = 1
                            spanText(headline7);
                        }
                    }
                }
                // if (val > 6402) {

                //     if (!animated8) {

                //         animated8 = true
                //         headline7.style.opacity = 1
                //         spanText(headline7);
                //     }
                // }

                if (window.matchMedia("(min-height: 780px)").matches) {
                    if (val > 6568 ) {
                        if (!animated9) {

                            animated9 = true
                            if (headline8) {
                                headline8.style.opacity = 1
                                spanText(headline8);
                            }
                            if (headline9) {
                                headline9.style.opacity = 1
                                spanText(headline9);
                            }
                            // setTimeout(()=>{
                            // },[1500])

                        }
                    }
                } else if (window.matchMedia("(max-height: 769px)").matches) {
                    if (val > 6424 ) {
                        if (!animated9) {

                            animated9 = true
                            if (headline8) {
                                headline8.style.opacity = 1
                                spanText(headline8);
                            }
                            if (headline9) {
                                headline9.style.opacity = 1
                                spanText(headline9);
                            }
                            // setTimeout(()=>{
                            // },[1500])



                        }
                    }
                }
                // if (val > 7297) {

                //     if (!animated9) {

                //         animated9 = true
                //         if (headline8) {
                //             headline8.style.opacity = 1
                //             spanText(headline8);
                //         }
                //         if (headline9) {
                //             headline9.style.opacity = 1
                //             spanText(headline9);
                //         }
                //         // setTimeout(()=>{
                //         // },[1500])



                //     }
                // }
                if (val > 547) {

                    if (!animated14) {

                        animated14 = true
                        if (headline13) {

                            headline13.style.opacity = 1
                            spanText(headline13);
                        }
                        if (headline14) {

                            headline14.style.opacity = 1
                            // setTimeout(()=>{
                            spanText(headline14);
                            // },[1500])
                        }



                    }
                }
                if (val > 592) {

                    if (!animated14) {

                        animated14 = true
                        if (headline13 || headline14)
                            headline13.style.opacity = 1
                        headline14.style.opacity = 1
                        spanText(headline13);
                        // setTimeout(()=>{
                        spanText(headline14);
                        // },[1500])


                    }

                }
                if (val > 1875) {

                    if (!animated16) {

                        animated16 = true
                        if (headline15)
                            headline15.style.opacity = 1
                        spanText(headline15);
                        // setTimeout(()=>{
                        // },[1500])


                    }

                }



                console.log(val)



                // if (document.getElementById('counters') && (position(document.getElementById('counters')) - 100) < (document.body.scrollTop)) {

                // }
            }
        }
    }
}
// setTimeout(()=>{},[])

const sliderParalex = () => {
    // document.getElementById('slidesWithScroll').style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,  ${(val * -15)/7}, 0, 0, 1)`
    let currValue = document.getElementsByClassName("scroll-content")[0].style.transform
    let val = Number(currValue.split(',')[1].split('p')[0])
    if (document.getElementById('slidesWithScroll')) {
        document.getElementById('slidesWithScroll').style.transform = `translate3d(${val / 5}px, 0px, 0px)`
    }

    // document.getElementsByClassName('scroll-content')[0].style.tr
}


if (window.matchMedia("(min-width: 1024px)").matches) {

    setInterval(() => {
        // sliderParalex()
        // console.log(bodyScrollBar.scrollTop,'sdasd')
        checkTransform()
    }, 200)

}

gsap.to('.all_slides', {
    xPercent: -60,
    ease: "none",
    scrollTrigger: {
        trigger: ".all_slides",
        start: "top center",
        end: "bottom top",
        scrub: true
    }
})

//   ScrollTrigger.create({
//     trigger: ".scroller",
//     start: "top top",
//     endTrigger: "#otherID",
//     end: "bottom 50%+=100px",
//     onToggle: self => console.log("toggled, isActive:", self.isActive),
//     onUpdate: self => {
//       console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//     }
//   });


// const sections = gsap.utils.toArray(".item__div");
// let maxWidth = 0;

// const getMaxWidth = () => {
//   maxWidth = 0;
//   sections.forEach((section) => {
//     maxWidth += section.offsetWidth;
//   });
// };
// getMaxWidth();
// ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

// gsap.to(sections, {
//   x: () => `-${maxWidth - window.innerWidth}`,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".wrapper",
//     pin: true,
//     scrub: true,
//     end: () => `+=${maxWidth}`,
//     invalidateOnRefresh: true
//   }
// });

// sections.forEach((sct, i) => {
//   ScrollTrigger.create({
//     trigger: sct,
//     start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
//     end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
//     toggleClass: {targets: sct, className: "active"}
//   });
// });
