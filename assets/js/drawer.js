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
// var headline2 = document.getElementById("headingAnimition2");
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

setTimeout(() => {
    setTimeout(() => {

        document.getElementsByClassName('innerBar')[0].style.height = "100%"
        document.getElementsByClassName('innerBar')[1].style.height = "100%"
        document.getElementsByClassName('innerBar')[2].style.height = "100%"
    }, 200)
    // setTimeout(() => {
    // }, 400)
    headline10.style.opacity = 0
    setTimeout(() => {
        setTimeout(() => {
            if(document.getElementById('lwer_ar')){
                // document.getElementById('lwer_ar').style.top = "-150px"
            }
            if (document.getElementById('sustain') ) {
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
                console.log('found')
                // console.log('matched')
    headline10.style.opacity = 1
    headline11.style.opacity = 1
    headline12.style.opacity = 1

    // document.getElementById('leftAnim3').style.left = '0px'
                if (!animated11) {

                    animated11 = true
                    spanText(headline10, true);
                    // setTimeout(()=>{
                    spanText(headline11, true);
                    // },[1500])

                    spanText(headline12, true);


                }
            }
        }, 1500)
    }, 600)
}, 1000);

setTimeout(() => {
    /*  */

    document.getElementById('loader').style.transition = "2s"
    document.getElementById('loader').style.top = "-100%"
    document.getElementById('slider1').style.transition = "4s"
        document.getElementById('slider1').style.backgroundSize = "cover"
        // document.getElementById('slider1').style.backgroundSize = "auto 140%"

    setTimeout(() => {

        document.getElementById('slider1').style.backgroundSize = "cover"
        // document.getElementById('slider1').style.height = "65vh"
    }, 500)
}, 2000);




function sidebar(id) {
    console.log(id);
    if (document.getElementById(id).checked) {
        console.log(document.getElementById('curveDiv'))
        document.getElementById('curveDiv').style.transform = 'skewX(-10deg)'
        document.getElementById("sidebar__close").style.left = '-60px'
        document.getElementById("overlaySidebar").style.display = 'block'


        setTimeout(() => {
            document.getElementById('curveDiv').style.transform = 'skewX(0deg)'

        }, 400);
        setTimeout(() => {
            document.getElementById("sidebar__close").classList.add('onceSpin')

        }, 700)
        setTimeout(() => {
            // document.getElementById("sidebar__close").classList.remove('onceSpin')
        }, 1500)
    } else {
        document.getElementById('curveDiv').style.transform = 'skewX(10deg)'
        document.getElementById("sidebar__close").style.left = '0px'
        document.getElementById("sidebar__close").classList.remove('onceSpin')
        document.getElementById("overlaySidebar").style.display = 'none'

        setTimeout(() => {
            document.getElementById('curveDiv').style.transform = 'skewX(0deg)'

        }, 400);
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
console.log(document.body)
    document.body.addEventListener(
        "scroll",
        (e) => {
            console.log('runnnnnnn')
            // console.log(document.body.scrollTop /20)
            // window.scrollTo({
            //     top: 20,
            //     behavior: 'smooth',
            //   })
            if (window.matchMedia("(min-width: 1024px)").matches) {
                document.getElementById('slidesWithScroll').style.transform = `translate3d(${1000 - (document.body.scrollTop / 3)}px, 0px, 0px)`
                console.log('runned')
                // console.log((document.body.scrollTop + 200 ), document.getElementById('no') && (position(document.getElementById('no')) - 200))
                // if ((document.getElementById('no') && (position(document.getElementById('no'))) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     document.getElementById('no').style.transform = 'scale(1)'
                // }
                // if (document.getElementById('no2') && (position(document.getElementById('no2')) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     document.getElementById('no2').style.transform = 'scale(1)'
                // }
                // if (document.getElementById('divNumber1') && (position(document.getElementById('divNumber1')) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     document.getElementById('divNumber1').style.right = '0px'
                // }
                // if (document.getElementById('efx') && (position(document.getElementById('efx')) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     document.getElementById('efx').style.right = '0px'
                // }
                // if (document.getElementById('leftAnim2') && (position(document.getElementById('leftAnim2')) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     document.getElementById('leftAnim2').style.left = '0px'
                // }
                // if (document.getElementById('leftAnim3') && (position(document.getElementById('leftAnim3')) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     document.getElementById('leftAnim3').style.left = '0px'
                // }
                // if (document.getElementById("headingAnimition") && (position(document.getElementById("headingAnimition")) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     // document.getElementById('leftAnim3').style.left = '0px'
                //     if (!animated) {

                //         animated = true
                //         spanText(headline);
                //     }
                // }
                // if (document.getElementById("headingAnimition1") && (position(document.getElementById("headingAnimition1")) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     console.log('matched')
                //     // document.getElementById('leftAnim3').style.left = '0px'
                //     if (!animated1) {

                //         animated1 = true
                //         spanText(headline1);
                //         spanText(headline2)
                //     }
                // }
                // if (document.getElementById("headingAnimition3") && (position(document.getElementById("headingAnimition3")) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     // document.getElementById('leftAnim3').style.left = '0px'
                //     if (!animated4) {

                //         animated4 = true
                //         spanText(headline3);
                //     }
                // }
                // if (document.getElementById("headingAnimition4") && (position(document.getElementById("headingAnimition4")) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // document.getElementById('leftAnim3').style.left = '0px'
                //     if (!animated5) {

                //         console.log('matched')
                //         animated5 = true
                //         spanText(headline4);

                //         // setTimeout(() => {
                //         //     Array.from(document.getElementsByClassName('efxx')).map((a, i) => {
                //         //         setInterval(() => {
                //         //             console.log(i)
                //         //             if (i === 0) {
                //         //                 document.getElementsByClassName('efxx')[i].style.left = '0px'
                //         //             }
                //         //             if (i === 1) {
                //         //                 document.getElementsByClassName('efxx')[i].style.transform = 'scale(1)'
                //         //             }
                //         //             if (i === 2) {
                //         //                 document.getElementsByClassName('efxx')[i].style.right = '0px'
                //         //             }
                //         //             if (i === 3) {
                //         //                 document.getElementsByClassName('efxx')[i].style.left = '0px'
                //         //             }
                //         //             if (i === 4) {
                //         //                 document.getElementsByClassName('efxx')[i].style.transform = 'scale(1)'
                //         //             }
                //         //             if (i === 5) {
                //         //                 document.getElementsByClassName('efxx')[i].style.right = '0px'
                //         //             }
                //         //         }, [600])
                //         //     })
                //         // }, [1000])

                //     }
                // }
                // if (document.getElementById("headingAnimition5") && (position(document.getElementById("headingAnimition5")) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     // document.getElementById('leftAnim3').style.left = '0px'
                //     if (!animated6) {

                //         animated6 = true
                //         spanText(headline5);
                //         // setTimeout(()=>{
                //         spanText(headline6);
                //         // },[1500])



                //     }
                // }
                // if (document.getElementById("headingAnimition7") && (position(document.getElementById("headingAnimition7")) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     // document.getElementById('leftAnim3').style.left = '0px'
                //     if (!animated8) {

                //         animated8 = true
                //         spanText(headline7);



                //     }
                // }

                // if (document.getElementById("headingAnimition8") && (position(document.getElementById("headingAnimition8")) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     // console.log('matched')
                //     // document.getElementById('leftAnim3').style.left = '0px'
                //     if (!animated9) {

                //         animated9 = true
                //         spanText(headline8);
                //         // setTimeout(()=>{
                //         spanText(headline9);
                //         // },[1500])



                //     }
                // }




                // if (document.getElementById("sliderImage") && (position(document.getElementById("sliderImage")) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     if (!animated2) {
                //         animated2 = true
                //         document.getElementById('sliderImage').style.transform = 'scale(1.2)'
                //         setTimeout(() => {

                //             document.getElementById('sliderImage').style.transform = 'scale(1)'
                //         }, [1000])
                //     }
                // }
                // if (document.getElementById("imageInovate") && (position(document.getElementById("imageInovate")) - 400) < (document.body.scrollTop)) {
                //     console.log('found')
                //     if (!animated10) {
                //         animated10 = true
                //         document.getElementById('imageInovate').style.transform = 'scale(1)'
                //         setTimeout(() => {

                //             document.getElementById('imageInovate').style.transform = 'scale(1)'
                //         }, [1000])
                //     }
                // }


                // if (document.getElementById('counters') && (position(document.getElementById('counters')) - 100) < (document.body.scrollTop)) {
                //     console.log('found')

                //     if (!animated3) {
                //         animated3 = true
                //         console.log('matched')
                //         setTimeout(() => {

                //             incEltNbr("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/
                //             incEltNbr("nbr2"); /*Call this funtion with the ID-name for that element to increase the number within*/
                //             incEltNbr("nbr3"); /*Call this funtion with the ID-name for that element to increase the number within*/
                //         }, [500])
                //         setTimeout(() => {

                //             document.getElementById('water_edge').style.top = '0px'

                //             Array.from(document.getElementsByClassName('textCounter')).map((a, i) => {
                //                 document.getElementsByClassName('textCounter')[i].style.transform = 'scale(1)'
                //             })
                //             document.getElementsByClassName('textCounterRightAnimation')[0].style.left = '0%'
                //         }, [700])

                //         // console.log(document.getElementsByClassName('counterNumber'))
                //         // Array.from(document.getElementsByClassName('counterNumber')).map((a,i)=>{
                //         //     document.getElementsByClassName('counterNumber')[i].classList.add("animateNumber")
                //         // })

                //     }
                // }

            }

            console.log('first e', e)

        }
    );
}
window.addEventListener('scroll',(e)=>{
    console.log('first e', e)
})

var speed = 100;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
    console.log('runn')
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec(0, endNbr, elt);
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

    circlePlayButton.addEventListener("click", togglePlay);
    video.addEventListener("playing", function () {
        circlePlayButton.style.opacity = 0;
    });
    video.addEventListener("pause", function () {
        circlePlayButton.style.opacity = 1;
    });

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
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.split(' ').length; i++) {
        console.log(string.substring(i, i + 1))
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

const targets = document.querySelectorAll('.count_area');

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('hello World');
            if (entry.isIntersecting) {
                const div = entry.target.children[0];

                $(".counterNumber").each(function () {
                    var $this = $(this)
                    $({ Counter: 0 }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 1500,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                observer.disconnect();
            }
        });
    });

    io.observe(target);
};

targets.forEach(lazyLoad);
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





gsap.registerPlugin(    );
let bodyScrollBar = Scrollbar.init(document.body, {
  damping: 0.02,
  delegateTo: document,
});
// console.log(ScrollTrigger)
ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value; // setter
      }
      console.log(bodyScrollBar.scrollTop);    // getter
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    }
  });
bodyScrollBar.addListener(ScrollTrigger.update);

console.log(ScrollTrigger.update())
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

const checkTransform = () =>{
            // console.log(document.getElementsByClassName("scrollbar-thumb-y")[0].style.transform)   
            // console.log(prvValue)
    if(prvValue !==  document.getElementsByClassName("scrollbar-thumb-y")[0].style.transform){
            prvValue = document.getElementsByClassName("scrollbar-thumb-y")[0].style.transform   
            let currValue =  document.getElementsByClassName("scrollbar-thumb-y")[0].style.transform
            let val = Number(currValue.split(',')[1].split('p')[0]) 
            console.log(val)
            if (window.matchMedia("(min-width: 1024px)").matches) {
                document.getElementById('slidesWithScroll').style.transition = `1s`
                document.getElementById('slidesWithScroll').style.transform = `translate3d(${1000 - ((val*10) / 3)}px, 0px, 0px)`
                console.log('runned')
            if(val >= 35){
                console.log(val)
                // console.log('matched')
                document.getElementById('no').style.transform = 'scale(1)'
                document.getElementById('no2').style.transform = 'scale(1)'
                document.getElementById('divNumber1').style.right = '0px'
                if (!animated1) {

                    animated1 = true
                    headline1.style.opacity = 1
                    // headline2.style.opacity = 1
                    spanText(headline1);
                    // spanText(headline2)
                }
            }
            if(val > 100){
                document.getElementById('efx').style.right = '0px'

            }
            if(val > 80){
                document.getElementById('leftAnim2').style.left = '0px'
                document.getElementById('leftAnim3').style.left = '0px'
                
            }
            if(val > 130){
                if (!animated) {
    
                    animated = true
                    spanText(headline);
                    headline.style.opacity = 1
                }
            }
            if(val > 150){
                if (!animated2) {
                    animated2 = true
                    document.getElementById('sliderImage').style.transform = 'scale(1.2)'
                    setTimeout(() => {
    
                        document.getElementById('sliderImage').style.transform = 'scale(1)'
                    }, [1000])
                }

            }
            if(val > 200){

                if (!animated3) {
                    animated3 = true
                    console.log('matched')
                    setTimeout(() => {

                        incEltNbr("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/
                        incEltNbr("nbr2"); /*Call this funtion with the ID-name for that element to increase the number within*/
                        incEltNbr("nbr3"); /*Call this funtion with the ID-name for that element to increase the number within*/
                    }, [500])
                    setTimeout(() => {

                        document.getElementById('water_edge').style.top = '0px'

                        Array.from(document.getElementsByClassName('textCounter')).map((a, i) => {
                            document.getElementsByClassName('textCounter')[i].style.transform = 'scale(1)'
                        })
                        document.getElementsByClassName('textCounterRightAnimation')[0].style.left = '0%'
                    }, [700])

                    // console.log(document.getElementsByClassName('counterNumber'))
                    // Array.from(document.getElementsByClassName('counterNumber')).map((a,i)=>{
                    //     document.getElementsByClassName('counterNumber')[i].classList.add("animateNumber")
                    // })

                }
            }
            if(val > 265){
                if (!animated4) {
                    animated4 = true
                    spanText(headline3);
                    headline3.style.opacity = 1
                }
            }
            if(val > 300){

                if (!animated5) {
    
                    console.log('matched')
                    animated5 = true
                    spanText(headline4);
    
                    headline4.style.opacity = 1
    
                }
            }

            if(val > 360){
                if (!animated6) {    
                    animated6 = true
                    headline5.style.opacity = 1
                    headline6.style.opacity = 1

                    spanText(headline5);
                    // setTimeout(()=>{
                    spanText(headline6);

                }
            }
            if(val > 400){

                if (!animated8) {
    
                    animated8 = true
                    headline7.style.opacity = 1
                    spanText(headline7);    
                }
            }
            if(val > 455){

                if (!animated9) {
    
                    animated9 = true
                    headline8.style.opacity = 1
                    headline9.style.opacity = 1
                    spanText(headline8);
                    // setTimeout(()=>{
                    spanText(headline9);
                    // },[1500])
    
    
    
                }
            }



            // if (document.getElementById("imageInovate") && (position(document.getElementById("imageInovate")) - 400) < (document.body.scrollTop)) {
            //     console.log('found')
            //     if (!animated10) {
            //         animated10 = true
            //         document.getElementById('imageInovate').style.transform = 'scale(1)'
            //         setTimeout(() => {

            //             document.getElementById('imageInovate').style.transform = 'scale(1)'
            //         }, [1000])
            //     }
            // }


            if (document.getElementById('counters') && (position(document.getElementById('counters')) - 100) < (document.body.scrollTop)) {
                console.log('found')

            }
        }
    }
}
// setTimeout(()=>{},[])
setInterval(()=>{
    checkTransform()
},200)


console.log($('.scrollbar-thumb').attr("style"))




// gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

// var images = gsap.utils.toArray('.panel:not(.purple)');

// images.forEach((image, i) => {
  
//   var tl = gsap.timeline({
    
//     scrollTrigger: {
//       trigger: "section.black",
//       scroller: ".scroller",
//     //   start: () => "top -" + (window.innerHeight*(i+0.5)),
//     //   end: () => "+=" + window.innerHeight,
//       scrub: true,
//       toggleActions: "play none reverse none",
//       invalidateOnRefresh: true,     
//     }
    
//   })
  
//   tl
//   .to(image, { height: 0 })
//   ;
  
// });







// gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

// var texts = gsap.utils.toArray('.panel-text');

// texts.forEach((text, i) => {
  
//   var tl = gsap.timeline({
    
//     scrollTrigger: {
//       trigger: "section.black",
//       scroller: ".scroller",
//     //   start: () => "top -" + (window.innerHeight*i),
//     //   end: () => "+=" + window.innerHeight,
//       scrub: true,
//       toggleActions: "play none reverse none",
//       invalidateOnRefresh: true,     
//     }
    
//   })
  
//   tl
//   .to(text, { duration: 0.33, opacity: 1, y:"50%" })  
//   .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)
//   ;
  
// });





// let st = ScrollTrigger.create({

//     trigger: "section.black",
//     scroller: ".scroller",
//     scrub: true,
//     markers: true,
//     pin: true,
//     // start: () => "top top",
//     // end: () => "+=" + ((images.length + 1) * window.innerHeight),
//     invalidateOnRefresh: true,

// });

// // ScrollTrigger.create({
// //     trigger: ".class",
// //     scroller: ".scroller", // if no scroller is defined, the viewport (window) is used.
// //     start: "top center",
// //     end: "+=500"
// //   });
// st.addEventListener("scrollEnd", () => console.log("scrolling ended!"));

// st.scroll(1000);
// // console.log(st.scroll(),'ssss')
// // console.log(st.scroll())



// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;

// function wheel(event) {
//   var delta = 0;
// //   console.log(event.wheelDelta)
// //   console.log(-event.detail)
//   if (event.wheelDelta > 1) delta = event.wheelDelta / 120;
//   else if(event.wheelDelta < 0) delta = event.wheelDelta
//   else if (event.detail) delta = -event.detail / 3;


//   handle(delta);
// //   if (event.preventDefault) event.preventDefault();
//   event.returnValue = false;
// }

// function handle(delta) {
//     console.log($(window).scrollTop(),distance * delta)
//   var time = 50;
//   var distance = 300;

//   $('html, body').stop().animate({
//     scrollTop: $(window).scrollTop() - (distance * delta)
//   }, time);
// }




