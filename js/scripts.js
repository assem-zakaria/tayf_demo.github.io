/*
Website Name: OpenDraw - Feras Al Masri
Website URL: ?????????
Version: 1.0
Author: N/A
Author URL: N/A

1.  Basics
2.  Header
3.  Footer
4.  Elements
5.  Portfolio
6.  Pages
7.  Blog
8.  Transitions
9.  Media Quieries
*/


  (function () {


  	// GSAP Plugin Registeration
  		gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, DrawSVGPlugin);


  	//	Variables
	  	const pink_line = document.querySelector("#pink_line path");
	  	const orange_line = document.querySelector("#orange_line path");
	  	const blue_line = document.querySelector("#blue_line path");
	  	const pink_graph_box = document.querySelector("#pink_graph_box");
	  	const blue_graph_box = document.querySelector("#blue_graph_box");
	  	const illustration_boxes = document.querySelectorAll("#illustration_boxes g");
	  	const top_text = document.querySelector("#top_text");
	  	const top_numbers = document.querySelectorAll("#top_numbers *");

	// Remove Loading and enable scrolling after document loaded
		window.onload = function() {
			console.log("page loaded")
		};

	//	Set Curved Lines
    gsap.set([pink_line, orange_line, blue_line], { drawSVG: "0% 0%" });

  //	Set graph boxes
    gsap.set([pink_graph_box, blue_graph_box], { y: 30, autoAlpha: 0 });

 	//	Set illustration boxes
    gsap.set(illustration_boxes, { y: 30, autoAlpha: 0 });

  //	Set top text and numbers
    gsap.set([top_text, top_numbers], { yPercent: 30, autoAlpha: 0 });



  //	Create timeline
		const tl = gsap.timeline();

    tl.to([top_text, top_numbers], {
		  duration: 0.2,
		  delay: 1,
		  yPercent: 0,
		  autoAlpha: 1,
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.05,
	    },
		});

    tl.to([pink_line, orange_line, blue_line], {
		  duration: 2,
		  drawSVG: "0% 100%",
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.6,
	    },
		}, "<=20%");

		tl.to([pink_graph_box, blue_graph_box], {
		  duration: 0.5,
		  y: 0,
		  autoAlpha: 1,
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.2,
	    },
		}, "<=90%");

		tl.to(illustration_boxes, {
		  duration: 0.8,
		  y: 0,
		  autoAlpha: 1,
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.2,
	    },
		}, "<=50%");

	



  })();