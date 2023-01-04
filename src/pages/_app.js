import '../../styles/globals.css'
import '../../public/assets/css/all.min.css';
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/locomotive-scroll.min.css'
import '../../public/assets/css/master.css'
import '../../public/assets/css/meanmenu.min.css'
import '../../public/assets/css/swiper-bundle.min.css' 
 


function MyApp({ Component, pageProps }) {
//   useEffect(() =>{
//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);

//     function mousemoveHandler(e) {
//       try {
//         const target = e.target;
  
//         let tl = gsap.timeline({
//           defaults: {
//             x: e.clientX,
//             y: e.clientY,
//           }
//         })
//         let t2 = gsap.timeline({
//           defaults: {
//             x: e.clientX,
//             y: e.clientY,
//           }
//         })
  
//         // Home Page Client Cursor
//         if (target.closest(".testimonial__img")) {
//           tl.to(client_cursor, {
//             opacity: 1,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
//         else {
//           t2.to(client_cursor, {
//             opacity: 0,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
  
//         // Team Page Team Cursor
//         if (target.closest(".team__slider")) {
//           tl.to(team_cursor, {
//             opacity: 1,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
//         else {
//           t2.to(team_cursor, {
//             opacity: 0,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
  
//         // Portfolio Cursor
//         if (target.closest(".portfolio__item-6")) {
//           tl.to(portf_cursor_6, {
//             opacity: 1,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
//         else {
//           t2.to(portf_cursor_6, {
//             opacity: 0,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
//         // Portfolio Cursor
//         if (target.closest(".portfolio__item-6")) {
//           tl.to(portf_cursor_6, {
//             opacity: 1,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
//         else {
//           t2.to(portf_cursor_6, {
//             opacity: 0,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
  
//         // featured  Cursor
//         if (target.closest(".portfolio__slider-3")) {
//           tl.to(featured_cursor, {
//             opacity: 1,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
//         else {
//           t2.to(featured_cursor, {
//             opacity: 0,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
  
//         // featured  Cursor
//         if (target.closest(".portfolio__area-5")) {
//           tl.to(portfolio4_cursor, {
//             opacity: 1,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
//         else {
//           t2.to(portfolio4_cursor, {
//             opacity: 0,
//             ease: "power4.out"
//           }, "-=0.3");
//         }
  
//         // Main Cursor Moving 
//         tl.to(".cursor1", {
//           ease: "power2.out"
//         })
//           .to(".cursor2", {
//             ease: "power2.out"
//           }, "-=0.4")
  
//       } catch (error) {
//         console.log(error)
//       }
  
//     }
//     document.addEventListener("mousemove", mousemoveHandler);

//     const all_btn = gsap.utils.toArray("#btn_wrapper");
//   const all_btn_cirlce = gsap.utils.toArray(".btn-item");
//   all_btn.forEach((btn, i) => {
//     $(btn).mousemove(function (e) {
//       callParallax(e);
//     });
//     function callParallax(e) {
//       parallaxIt(e, all_btn_cirlce[i], 80);
//     }

//     function parallaxIt(e, target, movement) {
//       var $this = $(btn);
//       var relX = e.pageX - $this.offset().left;
//       var relY = e.pageY - $this.offset().top;

//       gsap.to(target, 0.5, {
//         x: ((relX - $this.width() / 2) / $this.width()) * movement,
//         y: ((relY - $this.height() / 2) / $this.height()) * movement,
//         ease: Power2.easeOut,
//       });
//     }
//     $(btn).mouseleave(function (e) {
//       gsap.to(all_btn_cirlce[i], 0.5, {
//         x: 0,
//         y: 0,
//         ease: Power2.easeOut,
//       });
//     });
//   });
//   if (device_width > 1200) {
//     gsap.to(".service__list-6", {
//       scrollTrigger: {
//         trigger: ".service__area-6",
//         pin: ".service__list-6",
//         pinSpacing: true,
//         start: "top top",
//         end: "bottom bottom"
//       }
//     })

//     gsap.to(".service__image-wrap", {
//       scrollTrigger: {
//         trigger: ".service__area-6",
//         pin: ".mid-content",
//         pinSpacing: true,
//         start: "top top",
//         end: "bottom bottom",
//         markers: false
//       }
//     })

//     let service_images = gsap.utils.toArray(".service__image")
//     let service_imagess = gsap.utils.toArray(".service__image img")
//     let service_items = gsap.utils.toArray(".service__item-6")

//     if (service_items) {
//       service_items.forEach((image, i) => {
//         console.log(service_images[i].img)
//         let tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: image,
//             scrub: 1,
//             start: "top top-=600",
//             markers: false,
//           }
//         });
//         tl.to(service_images[i], {
//           zIndex: "1",
//         })
//         tl.to(service_imagess[i], {
//           opacity: 0,
//           duration: 1,
//           scale: 1.2,
//           ease: "power4.out"
//         }, "-=1")
//       })
//     }

//     let navItems = gsap.utils.toArray(".service__list-6 li a")
//     if (navItems) {
//       navItems.forEach((nav) => {
//         nav.addEventListener("click", (e) => {
//           e.preventDefault();
//           const ids = nav.getAttribute("href")
//           gsap.to(window, { duration: 0.5, scrollTo: ids, ease: "power4.out" });
//         })
//       })
//     }

//     // Active Nav
//     $(document).on('scroll', function () {
//       $('.service__item-6').each(function () {
//         if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
//           var sec_id = $(this).data('secid');

//           $('.service__list-6 li:nth-child(' + sec_id + ')').addClass('active').siblings().removeClass('active');
//         }
//       });
//     });
//   }
//   if (device_width > 1200) {

//     var workflow_section_3 = document.querySelector('.workflow__wrapper-3');
//     if (workflow_section_3) {

//       let duration = 1,
//         sections = gsap.utils.toArray(".wf_panel"),
//         sectionIncrement = duration / (sections.length - 1),
//         tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".workflow__wrapper-3",
//             pin: true,
//             scrub: 1,
//             start: "top top",
//             end: "+=5000"
//           }
//         });

//       tl.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         duration: duration,
//         ease: "none"
//       });

//       sections.forEach((section, index) => {
//         let tween = gsap.from(section, {
//           opacity: 0,
//           scale: 0.6,
//           duration: 0.5,
//           force3D: true,
//           paused: true
//         });
//         addSectionCallbacks(tl, {
//           start: sectionIncrement * (index - 0.99),
//           end: sectionIncrement * (index + 0.99),
//           onEnter: () => tween.play(),
//           onLeave: () => tween.reverse(),
//           onEnterBack: () => tween.play(),
//           onLeaveBack: () => tween.reverse()
//         });
//         index || tween.progress(1);
//       });

//       function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
//         let trackDirection = animation => {
//           let onUpdate = animation.eventCallback("onUpdate"),
//             prevTime = animation.time();
//           animation.direction = animation.reversed() ? -1 : 1;
//           animation.eventCallback("onUpdate", () => {
//             let time = animation.time();
//             if (prevTime !== time) {
//               animation.direction = time < prevTime ? -1 : 1;
//               prevTime = time;
//             }
//             onUpdate && onUpdate.call(animation);
//           });
//         },
//           empty = v => v;
//         timeline.direction || trackDirection(timeline);
//         start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
//         end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
//       }
//     }
//   }
//   if (device_width > 100) {

//     /////////////////////////////////////////////////////
//     // 24. Portfolio 5 Animation 
//     let skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY"),
//       clamp = gsap.utils.clamp(-15, 15);
//     const smoother = ScrollSmoother.create({
//       smooth: 1.35,
//       effects: device_width < 1025 ? false : true,
//       smoothTouch: false,
//       normalizeScroll: false,
//       ignoreMobileResize: true,
//       onUpdate: self => skewSetter(clamp(self.getVelocity() / -80)),
//       onStop: () => skewSetter(0)
//     });

//     /////////////////////////////////////////////////////


//     ///////////////////////////////////////////////////// 
//     // 25. Title Animation
//     let splitTitleLines = gsap.utils.toArray(".title-anim");

//     splitTitleLines.forEach(splitTextLine => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: splitTextLine,
//           start: 'top 90%',
//           end: 'bottom 60%',
//           scrub: false,
//           markers: false,
//           toggleActions: 'play none none none'
//         }
//       });

//       const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
//       gsap.set(splitTextLine, { perspective: 400 });
//       itemSplitted.split({ type: "lines" })
//       tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
//     });
//     /////////////////////////////////////////////////////


//     /////////////////////////////////////////////////////
//     // 26. Title Animation Top

//     /////////////////////////////////////////////////////


//     /////////////////////////////////////////////////////
//     // 27. Text Animation
//     let splitTextLines = gsap.utils.toArray(".text-anim p");

//     splitTextLines.forEach(splitTextLine => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: splitTextLine,
//           start: 'top 90%',
//           duration: 2,
//           end: 'bottom 60%',
//           scrub: false,
//           markers: false,
//           toggleActions: 'play none none none'
//         }
//       });

//       const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
//       gsap.set(splitTextLine, { perspective: 400 });
//       itemSplitted.split({ type: "lines" })
//       tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
//     });
//     /////////////////////////////////////////////////////


//     /////////////////////////////////////////////////////
//     // 28. Text Animation Top
//     let text_anim_top = gsap.utils.toArray(".text-anim-top");

//     text_anim_top.forEach(splitTextLine2 => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: splitTextLine2,
//           start: 'top 100%',
//           toggleActions: 'play none play reset'
//         }
//       });

//       const itemSplitted = new SplitText(splitTextLine2, { type: 'words' }),
//         textNumWords = itemSplitted.words.length;

//       gsap.delayedCall(0.05, function () {
//         for (var i = 0; i < textNumWords; i++) {
//           tl.from(itemSplitted.words[i], 1, { force3D: true, scale: Math.random() > 0.5 ? 0 : 2, opacity: 0 }, Math.random());
//         }
//       });
//     });
//     /////////////////////////////////////////////////////
//   }
//   let endTl = gsap.timeline({
//     repeat: -1,
//     delay: 0.5,
//     scrollTrigger: {
//       trigger: '.end',
//       start: 'bottom 100%-=50px'
//     }
//   });
//   gsap.set('.end', {
//     opacity: 0
//   });
//   gsap.to('.end', {
//     opacity: 1,
//     duration: 1,
//     ease: 'power2.out',
//     scrollTrigger: {
//       trigger: '.end',
//       start: 'bottom 100%-=50px',
//       once: true
//     }
//   });
//   let mySplitText = new SplitText(".end", { type: "words,chars" });
//   let chars = mySplitText.chars;
//   let endGradient = chroma.scale(['#F9D371', '#F47340', '#EF2F88', '#8843F2']);
//   endTl.to(chars, {
//     duration: 0.5,
//     scaleY: 0.6,
//     ease: "power3.out",
//     stagger: 0.04,
//     transformOrigin: 'center bottom'
//   });
//   endTl.to(chars, {
//     yPercent: -20,
//     ease: "elastic",
//     stagger: 0.03,
//     duration: 0.8
//   }, 0.5);
//   endTl.to(chars, {
//     scaleY: 1,
//     ease: "elastic.out(2.5, 0.2)",
//     stagger: 0.03,
//     duration: 1.5
//   }, 0.5);
//   endTl.to(chars, {
//     color: (i, el, arr) => {
//       return endGradient(i / arr.length).hex();
//     },
//     ease: "power2.out",
//     stagger: 0.03,
//     duration: 0.3
//   }, 0.5);
//   endTl.to(chars, {
//     yPercent: 0,
//     ease: "back",
//     stagger: 0.03,
//     duration: 0.8
//   }, 0.7);
//   endTl.to(chars, {
//     color: '#c9f31d',
//     duration: 1.4,
//     stagger: 0.05
//   });
//   ScrollTrigger.create({
//     trigger: ".portfolio__wrapper-6",
//     start: "top top",
//     end: "bottom bottom",
//     pin: ".portfolio__title-wrap-6",
//     pinSpacing: false,
//   });
//   let tHero = gsap.timeline()

//   let heading_title = new SplitText(".sec-title-3", { type: "chars" })
//   let heading_char = heading_title.chars

//   tHero.from(heading_char, {
//     rotate: 20,
//     ease: "back.out",
//     opacity: 0,
//     duration: 2,
//     stagger: 0.1
//   })

//   tHero.from(".hero2-shape img", {
//     xPercent: -100,
//     duration: 1,
//   }, '-=6.5')

//   tHero.from(".hero__text-2 p", {
//     opacity: 0,
//     x: -30,
//     duration: 1.5
//   }, '-=5')

//   tHero.from(".hero__text-2 #btn_wrapper", {
//     opacity: 0,
//     y: -70,
//     ease: "bounce",
//     duration: 1.5
//   }, '-=5')

//   // All Buttons 
//   let all_buttons = gsap.utils.toArray("#btn_wrapper")
//   all_buttons.forEach((btn) => {
//     if (!(btn.classList.contains("hero__button"))) {
//       gsap.from(btn, {
//         scrollTrigger: {
//           trigger: btn,
//           start: "top center+=150",
//           markers: false,
//         },
//         opacity: 0,
//         y: -70,
//         ease: "bounce",
//         duration: 1.5,
//       })
//     }
//   })

//   let imageTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".about__img-2",
//       start: "top bottom",
//       markers: false,
//       scrub: 1,
//       end: "bottom center"
//     }
//   })

//   // Image pin 
//   imageTl.to(".about__img-2 img", {
//     scale: 1.15,
//     duration: 1,
//   })
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 36. Award Animation
//   let award_timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".award__text",
//       start: "top center+=150",
//     }
//   })

//   gsap.set(".award__text", {
//     opacity: 0,
//     y: -500,
//   })
//   award_timeline.to(".award__text", {
//     opacity: 1,
//     y: 0,
//     duration: 2,
//     ease: "bounce",
//   })

//   gsap.set(".award__text-2", { opacity: 0, y: -500 })

//   award_timeline.to(".award__text-2", {
//     opacity: 1,
//     y: 0,
//     duration: 2,
//     ease: "bounce"
//   }, "-=1.5")

//   award_timeline.to(".award__text", {
//     x: -100,
//     duration: 2,
//   }, "-=1")
//   award_timeline.to(".award__text-2", {
//     x: -100,
//     duration: 2,
//   }, "-=1")
//   award_timeline.to(".award__text", {
//     x: 0,
//     duration: 2,
//   }, "-=1")
//   award_timeline.to(".award__text-2", {
//     x: 0,
//     duration: 2,
//   }, "-=1")
//   /////////////////////////////////////////////////////



//   /////////////////////////////////////////////////////
//   // 38. Portfolio Animation
//   if (device_width > 767) {
//     let portfolioline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".portfolio__area",
//         start: "top center-=200",
//         pin: ".portfolio__text",
//         end: "bottom bottom+=80",
//         markers: false,
//         pinSpacing: false,
//         scrub: 1,
//       }
//     })

//     portfolioline.to(".portfolio__text", {
//       scale: 3,
//       duration: 1
//     })
//     portfolioline.to(".portfolio__text", {
//       scale: 3,
//       duration: 1
//     })
//     portfolioline.to(".portfolio__text", {
//       scale: 1,
//       duration: 1
//     }, "+=2")
//   }


//   let portfolio_lists = gsap.utils.toArray(".portfolio__item")
//   portfolio_lists.forEach((portfolio, i) => {
//     gsap.set(portfolio, { opacity: 0.7 })
//     let t1 = gsap.timeline()

//     t1.set(portfolio, {
//       position: "relative",
//     })
//     t1.to(portfolio, {
//       scrollTrigger: {
//         trigger: portfolio,
//         scrub: 2,
//         duration: 1.5,
//         start: "top bottom+=100",
//         end: "bottom center",
//         markers: false
//       },
//       scale: 1,
//       opacity: 1,
//       rotateX: 0,
//     })
//   });

//   gsap.to(".bg_image img", {
//     xPercent: -18,
//     scrollTrigger: {
//       trigger: ".portfolio__area",
//       start: "top top",
//       end: "bottom center",
//       pin: ".bg_image",
//       scrub: 3
//     }
//   });
//   function imageMoving(wrapper, image_list) {
//     let container = document.querySelector(wrapper)
//     try {
//       if (container) {
//         container.addEventListener("mousemove", (e) => {

//           var x = e.clientX
//           var y = e.clientY
//           let viewportWidth = window.innerWidth;
//           let viewportHeight = window.innerHeight;
//           let center = viewportWidth / 2
//           let centerHeight = innerHeight / 2

//           if (x > center) {
//             gsap.to(image_list, {
//               x: 15,
//               duration: 5,
//               ease: "power4.out"
//             })
//           }
//           else {
//             gsap.to(image_list, {
//               x: -15,
//               duration: 5,
//               ease: "power4.out"
//             })
//           }
//           if (y > centerHeight) {
//             gsap.to(image_list, {
//               y: 15,
//               duration: 5,
//               ease: "power4.out"
//             })
//           }
//           else {
//             gsap.to(image_list, {
//               y: -15,
//               duration: 5,
//               ease: "power4.out"
//             })
//           }
//         });
//       }
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }
//   imageMovingPortfolio(".portfolio-section", ".portfolio__hero img")

//   // Image Moving with Cursor Function
//   function imageMovingPortfolio(wrapper, image_list) {
//     let container = document.querySelector(wrapper)
//     try {
//       if (container) {
//         container.addEventListener("mousemove", (e) => {

//           var x = e.clientX
//           var y = e.clientY
//           let viewportWidth = window.innerWidth;
//           let viewportHeight = window.innerHeight;
//           let center = viewportWidth / 2
//           let centerHeight = innerHeight / 2

//           if (x > center) {
//             gsap.to(image_list, {
//               x: 60,
//               duration: 5,
//               ease: "power4.out"
//             })
//           }
//           else {
//             gsap.to(image_list, {
//               x: -60,
//               duration: 5,
//               ease: "power4.out"
//             })
//           }
//           if (y > centerHeight) {
//             gsap.to(image_list, {
//               scale: 1.15,
//               duration: 5,
//               ease: "power4.out"
//             })
//           }
//           else {
//             gsap.to(image_list, {
//               scale: 1,
//               duration: 5,
//               ease: "power4.out"
//             })
//           }
//         });
//       }
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }



//   /////////////////////////////////////////////////////
//   // 42. Counter Animation
//   gsap.set(".counter_animation .counter__anim", { y: -100, opacity: 0, })
//   if (device_width < 1023) {
//     const counterArray = gsap.utils.toArray(".counter_animation .counter__anim")
//     counterArray.forEach((item, i) => {
//       let counterTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200",
//         }
//       })
//       counterTl.to(item, {
//         y: 0,
//         opacity: 1,
//         ease: "bounce",
//         duration: 1.5,
//       })
//     })
//   }
//   else {

//     gsap.to(".counter_animation .counter__anim", {
//       scrollTrigger: {
//         trigger: ".counter_animation",
//         start: "top center+=300",
//       },
//       y: 0,
//       opacity: 1,
//       ease: "bounce",
//       duration: 1.5,
//       stagger: {
//         each: 0.3,
//       }
//     })
//   }
//   gsap.set(".fade_left", { x: -20, opacity: 0, })
//   gsap.to(".fade_left", {
//     scrollTrigger: {
//       trigger: ".fade_left",
//       start: "top center+=300",
//     },
//     x: 0,
//     opacity: 1,
//     ease: "power2.out",
//     duration: 1,
//     stagger: {
//       each: 0.2,
//     }
//   })
  
//   /////////////////////////////////////////////////////
//   // 44. Workflow Slider Animation 2 |  fade_bottom
//   gsap.set(".fade_bottom", { y: 30, opacity: 0 });

//   if (device_width < 1023) {
//     const fadeArray = gsap.utils.toArray(".fade_bottom")
//     fadeArray.forEach((item, i) => {
//       let fadeTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200",
//         }
//       })
//       fadeTl.to(item, {
//         y: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 1.5,
//       })
//     })
//   }
//   else {
//     gsap.to(".fade_bottom", {
//       scrollTrigger: {
//         trigger: ".fade_bottom",
//         start: "top center+=300",
//         markers: false
//       },
//       y: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 1,
//       stagger: {
//         each: 0.2
//       }
//     })
//   }
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 45. Blog animation 
//   gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

//   if (device_width < 1023) {
//     const blogList = gsap.utils.toArray(".blog__animation .blog__item")
//     blogList.forEach((item, i) => {
//       let blogTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200",
//         }
//       })
//       blogTl.to(item, {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 1.5,
//       })
//     })
//   }
//   else {
//     gsap.to(".blog__animation .blog__item", {
//       scrollTrigger: {
//         trigger: ".blog__animation .blog__item",
//         start: "top center+=300",
//         markers: false
//       },
//       x: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 2,
//       stagger: {
//         each: 0.3
//       }
//     })
//   }
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 46. Blog animation 2
//   gsap.set(".blog__animation .blog__item-2", { x: 50, opacity: 0 });

//   if (device_width < 1023) {
//     const blogList = gsap.utils.toArray(".blog__animation .blog__item-2")
//     blogList.forEach((item, i) => {
//       let blogTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200",
//         }
//       })
//       blogTl.to(item, {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 1.5,
//       })
//     })
//   }
//   else {
//     gsap.to(".blog__animation .blog__item-2", {
//       scrollTrigger: {
//         trigger: ".blog__animation .blog__item-2",
//         start: "top center+=300",
//         markers: false
//       },
//       x: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 2,
//       stagger: {
//         each: 0.3
//       }
//     })
//   }
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 47. Blog Animation 3
//   gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

//   if (device_width < 1023) {
//     const blogList = gsap.utils.toArray(".blog__animation .blog__item-3")
//     blogList.forEach((item, i) => {
//       let blogTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200",
//         }
//       })
//       blogTl.to(item, {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 1.5,
//       })
//     })
//   }
//   else {
//     gsap.to(".blog__animation .blog__item-3", {
//       scrollTrigger: {
//         trigger: ".blog__animation .blog__item-3",
//         start: "top center+=300",
//         markers: false
//       },
//       x: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 2,
//       stagger: {
//         each: 0.3
//       }
//     })
//   }
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 48. Zoom In Animation
//   gsap.set(".zoom_in", { opacity: 0, y: 30, scale: 0.5, });
//   gsap.to(".zoom_in", {
//     scrollTrigger: {
//       trigger: ".zoom_in",
//       start: "top center+=200",
//       markers: false
//     },
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     ease: "power2.out",
//     duration: 1,
//     stagger: {
//       each: 0.2
//     }
//   })
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 49. Service 3 Animation 
//   let service__items_3 = gsap.utils.toArray(".service_animation")
//   let service__items_heading = gsap.utils.toArray(".service_animation h3")
//   let service__items_content = gsap.utils.toArray(".service_animation .service__content-3")

//   service__items_3.forEach((service_item, i) => {
//     gsap.set([service__items_heading[i], service__items_content[i]], {
//       x: -30,
//       opacity: 0,
//     })

//     let service3_timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: service_item,
//         start: "top center+=200",
//         markers: false
//       }
//     })

//     service3_timeline.to(service__items_heading[i], {
//       x: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 1.5,
//       stagger: {
//         each: 0.2
//       }
//     })
//     service3_timeline.to(service__items_content[i], {
//       x: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 1.5,
//       stagger: {
//         each: 0.2
//       }
//     }, "-=1")
//   })
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////  
//   // 50. Testimonial 2 Animation 
//   gsap.set(".testimonial__inner-2", {
//     opacity: 0,
//     x: -100
//   });

//   gsap.to(".testimonial__inner-2", {
//     scrollTrigger: {
//       trigger: ".testimonial__slider-wrapper-2",
//       start: "top center+=100",
//       end: "bottom bottom",
//     },
//     opacity: 1,
//     x: 0,
//     duration: 1
//   })
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 51. Testimonial 3 Image Animation
//   gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });

//   gsap.to(".animation_image_zoom img", {
//     scrollTrigger: {
//       trigger: ".testimonial__area-3",
//       start: "top center+=200",
//       markers: false
//     },
//     opacity: 1,
//     scale: 1,
//     x: 20,
//     ease: "power2.out",
//     duration: 2.5,
//     stagger: {
//       each: 0.3
//     }
//   })
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 52. Pricing Table Animation 
//   let pricing_timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".price__table",
//       start: "top center",
//     }
//   })

//   gsap.set(".animation_from_bottom", { yPercent: 50 })

//   pricing_timeline.to(".animation_from_bottom", {
//     yPercent: 0,
//     duration: 2,
//     ease: "power4.out",
//   })

//   gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 })
//   pricing_timeline.to(".animation_from_top", {
//     yPercent: 0,
//     duration: 2,
//     opacity: 1,
//     ease: "power4.out",
//   }, "-=2")
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 53. Service 2 Animation 
//   let animation__services2 = gsap.utils.toArray(".animation__service-2 .service__item-2")
//   gsap.set(animation__services2, {
//     opacity: 0,
//     x: -30,
//   })

//   if (animation__services2) {
//     if (device_width < 1023) {
//       animation__services2.forEach((item, i) => {
//         gsap.to(item, {
//           scrollTrigger: {
//             trigger: item,
//             start: "top center+=200",
//             markers: false
//           },
//           opacity: 1,
//           x: 0,
//           ease: "power2.out",
//           duration: 2,
//           stagger: {
//             each: 0.4
//           }
//         })
//       })
//     }
//     else {
//       gsap.to(".animation__service-2 .service__item-2", {
//         scrollTrigger: {
//           trigger: ".animation__service-2",
//           start: "top center+=200",
//           markers: false
//         },
//         opacity: 1,
//         x: 0,
//         ease: "power2.out",
//         duration: 2,
//         stagger: {
//           each: 0.4
//         }
//       })
//     }
//   }

//   let home1_services = gsap.utils.toArray(".animation_home1_service")
//   let service__number = gsap.utils.toArray(".animation_home1_service .service__number span")
//   let service__title = gsap.utils.toArray(".animation_home1_service .service__title")
//   let service__text = gsap.utils.toArray(".animation_home1_service .service__text p")
//   let service__link = gsap.utils.toArray(".animation_home1_service .service__link p")

//   home1_services.forEach((service, i) => {
//     gsap.set([service__number[i], service__title[i], service__text[i], service__link[i]], { opacity: 0, x: -50 })

//     let home1ServiceTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: service,
//         start: "top center+=300",
//         end: "bottom bottom",
//         markers: false
//       },
//     })

//     home1ServiceTl.to(service__number[i], {
//       x: 0,
//       opacity: 1,
//       duration: 1.2
//     })
//     home1ServiceTl.to(service__title[i], {
//       x: 0,
//       opacity: 1,
//       duration: 1.2
//     }, "-=1")
//     home1ServiceTl.to(service__text[i], {
//       x: 0,
//       opacity: 1,
//       duration: 1.2
//     }, "-=1")
//     home1ServiceTl.to(service__link[i], {
//       x: 0,
//       opacity: 1,
//       duration: 1.2
//     }, "-=1")
//   })
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////  
//   // 56. Features 2 Animation 
//   let animation__feature2 = gsap.utils.toArray(".animation__feature2 .feature__item")
//   if (device_width < 1023) {
//     animation__feature2.forEach((item, i) => {
//       gsap.set(item, { opacity: 0, y: 60 })
//       let featured2Timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200"
//         }
//       })
//       featured2Timeline.to(item, {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: "power4.out"
//       })
//     })
//   }
//   else {
//     gsap.set(".animation__feature2 .feature__item", { opacity: 0, y: 40 })
//     gsap.to(".animation__feature2 .feature__item", {
//       scrollTrigger: {
//         trigger: ".animation__feature2",
//         start: "top center+=200"
//       },
//       opacity: 1,
//       y: 0,
//       duration: 2,
//       ease: "power4.out",
//       stagger: 0.3
//     })
//   }
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 57. Portfolio 6 Animation 
//   const portfolio_listss = gsap.utils.toArray(".portfolio__item-6 img")
//   if (portfolio_listss) {
//     portfolio_listss.forEach((item, i) => {
//       gsap.from(item, {
//         scrollTrigger: {
//           trigger: item,
//           start: "top center",
//           scrub: 1.5,
//         },
//         scale: 2.5,
//         duration: 1,
//       })
//     })
//   }
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 58. Portfolio 5 Border
//   let total_portfolio_items = document.querySelectorAll(".portfolio__item-5")
//   let total_row = Math.ceil(total_portfolio_items.length / 3)

//   let border_row = document.getElementById("items__border")
//   for (let i = 0; i < total_row; i++) {
//     border_row.innerHTML += '<span class="sec-line"></span> '
//   }

//   let row_height = 100 / total_row
//   var total_lines = document.querySelectorAll("#items__border .sec-line")

//   total_lines.forEach((item, i) => {
//     let counter = i + 1
//     item.style.top = `${row_height * counter}%`;
//     item.style.opacity = 1;
//   })
//   /////////////////////////////////////////////////////



//   // Charchater Come Animation 
//   let char_come = document.querySelectorAll(".animation__char_come")

//   char_come.forEach((char_come) => {
//     let split_char = new SplitText(char_come, { type: "chars, words" })
//     gsap.from(split_char.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.05 });
//   })


//   // Charchater Come long Animation 
//   let char_come_long = document.querySelectorAll(".animation__char_come_long")

//   char_come_long.forEach((char_come) => {
//     let split_char = new SplitText(char_come, { type: "chars, words" })
//     gsap.from(split_char.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.15 });
//   })


//   // Charchater Up Animation 
//   let char_up = document.querySelector(".animation__char_up")
//   let split_char_up = new SplitText(char_up, { type: "chars, words" })
//   gsap.from(split_char_up.chars, { duration: 1, y: 15, autoAlpha: 0, stagger: 0.05 });



//   // Service Page hero Animation 
//   let word_up = document.querySelector(".animation__word_up")
//   let split_word_up = new SplitText(word_up, { type: "words", position: "absolute" })
//   gsap.from(split_word_up.words, { duration: 1, y: 50, autoAlpha: 0, stagger: 0.05 });

//   // Service Page hero Animation   
//   let word_come = document.querySelectorAll(".animation__word_come")
//   word_come.forEach((word_come) => {
//     let split_word_come = new SplitText(word_come, { type: "chars words", position: "absolute" })
//     gsap.from(split_word_come.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 });
//   })

//   // Service Page hero Animation   
//   let word_come_long = document.querySelectorAll(".animation__word_come_long")
//   word_come_long.forEach((word_come_long) => {
//     let split_word_come_long = new SplitText(word_come_long, { type: "chars words", position: "absolute" })
//     gsap.from(split_word_come_long.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.5 });
//   })


//   // Home page Hero Animation 
 
//   /////////////////////////////////////////////////////
//   //  Service Page Animation 
//   let animation__service_page = gsap.utils.toArray(".animation__service_page")
//   if (animation__service_page) {
//     animation__service_page.forEach((item, i) => {
//       gsap.from(item, {
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=20%",
//           markers: false,
//         },
//         opacity: 0,
//         x: -50,
//         ease: "power2.out",
//         duration: 2,
//       })
//     })

//   }
//   ////////
//   let animation_services_7 = gsap.utils.toArray(".animation_service_7 .service__item-7")
//   gsap.set(animation_services_7, {
//     opacity: 0,
//     x: -30,
//   })

//   if (animation_services_7) {
//     if (device_width < 1023) {
//       animation_services_7.forEach((item, i) => {
//         gsap.to(item, {
//           scrollTrigger: {
//             trigger: item,
//             start: "top center+=200",
//             markers: false
//           },
//           opacity: 1,
//           x: -0,
//           ease: "power2.out",
//           duration: 2,
//           stagger: {
//             each: 0.4
//           }
//         })
//       })
//     }
//     else {
//       gsap.to(".animation_service_7 .service__item-7", {
//         scrollTrigger: {
//           trigger: ".animation_service_7",
//           start: "top center+=200",
//           markers: false
//         },
//         opacity: 1,
//         x: 0,
//         ease: "power2.out",
//         duration: 2,
//         stagger: {
//           each: 0.4
//         }
//       })
//     }
//   }
//   /////////////////////////////////////////////////////



//   /////////////////////////////////////////////////////
//   // 65. Service 7 Animation 
//   let animation_workflow_6 = gsap.utils.toArray(".animation_workflow_6 .workflow__item-4")
//   if (animation_workflow_6) {
//     if (device_width < 1023) {
//       animation_workflow_6.forEach((item, i) => {
//         gsap.from(item, {
//           scrollTrigger: {
//             trigger: item,
//             start: "top center+=200",
//             markers: false
//           },
//           opacity: 0,
//           x: -30,
//           ease: "power2.out",
//           duration: 2,
//           stagger: {
//             each: 0.4
//           }
//         })
//       })
//     }
//     else {
//       gsap.from(".animation_workflow_6 .workflow__item-4", {
//         scrollTrigger: {
//           trigger: ".animation_workflow_6",
//           start: "top center+=200",
//           markers: false
//         },
//         opacity: 0,
//         x: -30,
//         ease: "power2.out",
//         duration: 2,
//         stagger: {
//           each: 0.4
//         }
//       })
//     }
//   }
//   /////////////////////////////////////////////////////



//   /////////////////////////////////////////////////////
//   // 66. Blog Animation 3
//   gsap.set(".blog__animation .blog__item-4", { x: 50, opacity: 0 });

//   if (device_width < 1023) {
//     const blogList = gsap.utils.toArray(".blog__animation .blog__item-4")
//     blogList.forEach((item, i) => {
//       let blogTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200",
//         }
//       })
//       blogTl.to(item, {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 1.5,
//       })
//     })
//   }
//   else {
//     gsap.to(".blog__animation .blog__item-4", {
//       scrollTrigger: {
//         trigger: ".blog__animation .blog__item-4",
//         start: "top center+=300",
//         markers: false
//       },
//       x: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 2,
//       stagger: {
//         each: 0.3
//       }
//     })
//   }
//   /////////////////////////////////////////////////////

//  // Home One Hero Animation 
//   let HomeDigital = gsap.timeline()
//   let HomeDigitalImage = gsap.timeline()

//   let hero7_thum_anim = document.querySelector(".hero7__thum-anim")
//   if(hero7_thum_anim){
//     let hero7_thumb_1 = document.querySelector(".image-1")
//     let hero7_thumb_2 = document.querySelector(".image-2")
//     let hero7_thumb_3 = document.querySelector(".image-3")
//     let hero7_thumb_4 = document.querySelector(".image-4")

//     gsap.from(".image-1",{ 
//       x:65,
//       yPercent:100,
//       opacity: 0,
//       duration: 2,
//       delay: 1
//     })

//     gsap.from(".image-2",{   
//       delay: 1.5,
//       scale: 0,
//       duration: 1.5
//     })

//     gsap.from(".image-3",{ 
//       x:65,
//       yPercent:-100,
//       duration: 2,
//       opacity: 0,
//       delay: 1
//     })
//     gsap.from(".image-4",{ 
//       xPercent:-100,
//       yPercent:-100,
//       duration: 2,
//       opacity: 0,
//       delay: 1
//     })

//   }


//   // Charchater Come long Animation 
//   let mark = document.querySelector(".hero__area-3 .title-left")
//   let eting = document.querySelector(".hero__area-3 .title-right")
//   let hero__text_animation = document.querySelector(".hero__text-animation")


//   let split_creatives = new SplitText(mark, { type: "chars" })
//   let split_solutions = new SplitText(eting, { type: "chars" })
//   let split_text_animation = new SplitText(hero__text_animation, { type: "chars words" })

//   HomeDigital.from(split_creatives.chars, { duration: 2, x: 100, autoAlpha: 0, stagger: 0.2 });
//   HomeDigital.from(split_solutions.chars, { duration: 1, x: 100, autoAlpha: 0, stagger: 0.1 }, "-=1");
//   HomeDigital.from(split_text_animation.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");



//   // Home page Hero Animation 
//   let homeCreative = gsap.timeline()

//   // Charchater Come long Animation 
//   let creative = document.querySelector(".service__hero-right-2 .creative")
//   let solution = document.querySelector(".service__hero-right-2 .solution")
//   let heroContent = document.querySelector(".service__hero-right-2 .animate_content")


//   let split_creative = new SplitText(creative, { type: "chars" })
//   let split_solution = new SplitText(solution, { type: "chars" })
//   let split_herocontent = new SplitText(heroContent, { type: "chars words" })

//   homeCreative.from(split_creative.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
//   homeCreative.from(split_solution.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 }, "-=1.5");
//   homeCreative.from(split_herocontent.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");


//   // Home page Hero Animation 
//   gsap.set(".experience", {
//     y: 50,
//     opacity: 0,
//   })
//   let homeAgency = gsap.timeline()

//   // Charchater Come long Animation 
//   let hero__title = document.querySelector(".hero__title")
//   let hero__subtitle = document.querySelector(".hero__sub-title") 


//   let split_hero__title = new SplitText(hero__title, { type: "chars" })
//   let split_hero__subtitle = new SplitText(hero__subtitle, { type: "chars words" })
   
//   homeAgency.from(split_hero__title.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 }); 
//   homeAgency.from(split_hero__subtitle.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");

//   homeAgency.to(".experience", {
//     y: 0,
//     opacity: 1,
//     duration: 2,
//     ease: "power2.out"
//   }, '-=1.5') 



//   // Home 6 Hero Animation 
//   let homeStratup = gsap.timeline()

//   // Charchater Come long Animation 
//   let hero6_title = document.querySelector(".hero__six_anim .hero__title-6")
//   let hero6_desc = document.querySelector(".hero__six_anim p")

//   let hero6_button = document.querySelector(".hero__six_anim a")
//   let hero6_image = document.querySelector(".hero__right-6 img")

//   gsap.set([hero6_button,hero6_image], {
//     opacity:0,
//     y:50
//   })


//   let split_hero6_title = new SplitText(hero6_title, { type: "chars" }) 
//   let split_hero6_desc = new SplitText(hero6_desc, { type: "chars words"})

//   homeStratup.from(split_hero6_title.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 }); 
//   homeStratup.from(split_hero6_desc.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");
//   homeStratup.to(hero6_button, {opacity: 1, y:0, duration: 1, ease: "power2.out"}, "-=1.5")
//   homeStratup.to(hero6_image, {opacity: 1, y:0, duration: 1, ease: "power2.out"}, "-=1")








//   /////////////////////////////////////////////////////
//   // 67. Workflow Slider Animation |  fade_bottom 2
//   gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

//   if (device_width < 1023) {
//     const fadeArray = gsap.utils.toArray(".fade_bottom_2")
//     fadeArray.forEach((item, i) => {
//       let fadeTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200",
//         }
//       })
//       fadeTl.to(item, {
//         y: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 1.5,
//       })
//     })
//   }
//   else {
//     gsap.to(".fade_bottom_2", {
//       scrollTrigger: {
//         trigger: ".fade_bottom_2",
//         start: "top center+=300",
//         markers: false
//       },
//       y: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 1,
//       stagger: {
//         each: 0.2
//       }
//     })
//   }
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 68. Workflow Slider Animation 2 |  fade_bottom
//   gsap.set(".fade_bottom_3", { y: 30, opacity: 0 });

//   if (device_width < 1023) {
//     const fadeArray = gsap.utils.toArray(".fade_bottom_3")
//     fadeArray.forEach((item, i) => {
//       let fadeTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200",
//         }
//       })
//       fadeTl.to(item, {
//         y: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 1.5,
//       })
//     })
//   }
//   else {
//     gsap.to(".fade_bottom_3", {
//       scrollTrigger: {
//         trigger: ".fade_bottom_3",
//         start: "top center+=300",
//         markers: false
//       },
//       y: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 1,
//       stagger: {
//         each: 0.2
//       }
//     })
//   }
//   /////////////////////////////////////////////////////


//   /////////////////////////////////////////////////////
//   // 69. Workflow Slider Animation 2 |  fade_bottom
//   gsap.set(".fade_bottom_4", { y: 30, opacity: 0 });

//   if (device_width < 1023) {
//     const fadeArray = gsap.utils.toArray(".fade_bottom_4")
//     fadeArray.forEach((item, i) => {
//       let fadeTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top center+=200",
//         }
//       })
//       fadeTl.to(item, {
//         y: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 1.5,
//       })
//     })
//   }
//   else {
//     gsap.to(".fade_bottom_4", {
//       scrollTrigger: {
//         trigger: ".fade_bottom_4",
//         start: "top center+=300",
//         markers: false
//       },
//       y: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 1,
//       stagger: {
//         each: 0.2
//       }
//     })
//   }
//   },[])

  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp