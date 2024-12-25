/*
	File Name: Vively App Animation
*/


  (function () {

  	console.log("Vively App Animation");

  	

  	// GSAP Plugin Registeration
  		gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);


  	//	Variables
  		const anim_el = document.querySelector("#vively_app_animation");

  		const dashed_graph_el = anim_el.querySelector("#Dashed_Graph");
  		const opacity_curved_lines_els = dashed_graph_el.querySelectorAll("#Opacity_Lines path");
  		const opacity_blue_line = dashed_graph_el.querySelector("#Opacity_Blue_Line");
  		const opacity_orange_line = dashed_graph_el.querySelector("#Opacity_Orange_Line");
  		const opacity_pink_line = dashed_graph_el.querySelector("#Opacity_Pink_Line");
  		

  		const dashed_red_box_el = dashed_graph_el.querySelectorAll("#Dashed_Red_Box_Group");
  		const dashed_blue_box_el = dashed_graph_el.querySelectorAll("#Dashed_Blue_Box_Group");


  		const solid_graph_el = anim_el.querySelector("#Solid_Graph");
  		const solid_curved_lines_els = solid_graph_el.querySelectorAll("#Solid_Lines path");
  		const pink_solid_line = solid_graph_el.querySelector("#Solid_Lines #Solid_Pink_Line");
  		const orange_solid_line = solid_graph_el.querySelector("#Solid_Lines #Solid_Orange_Line");
  		const blue_solid_line = solid_graph_el.querySelector("#Solid_Lines #Solid_Blue_Line");

  		const moving_line = anim_el.querySelector("#Moving_Line");

  		const glucose_box_el = anim_el.querySelector("#Status_Box_1");
  		const energy_box_el = anim_el.querySelector("#Status_Box_2");
  		const pain_box_el = anim_el.querySelector("#Status_Box_3");

  		const top_text_els = anim_el.querySelectorAll("#Top_Text > *");
  		const days_num_els = anim_el.querySelectorAll("#Days_Numbers *");
  		const bottom_text_els = anim_el.querySelectorAll("#Bottom_Static_Text > *");


	// Remove Loading and enable scrolling after document loaded
		window.onload = function() {
			console.log("page loaded")
		};

	//	Set Curved Lines
		gsap.set(opacity_curved_lines_els, { drawSVG: "0% 0%", autoAlpha: 1 });
		gsap.set([dashed_red_box_el, dashed_blue_box_el], { autoAlpha: 0, yPercent: 10 });
		gsap.set(moving_line, { autoAlpha: 0 });

		gsap.set(["#Status_Box_1 .avrg_indicator", "#Status_Box_2 .low_indicator", "#Status_Box_3 .low_indicator"], {
			autoAlpha: 0,
			scale: 0.8,
			transformOrigin: "50% 50%"
		});

		gsap.set([glucose_box_el, energy_box_el, pain_box_el], { yPercent: -50, autoAlpha: 0 });

		
		gsap.set(days_num_els, { yPercent: -100, autoAlpha: 0 });

		gsap.set(top_text_els, { yPercent: -100, autoAlpha: 0 });

		gsap.set(bottom_text_els, { yPercent: -100, autoAlpha: 0 });






	//	Light Colors:	light blue  #C8D5FC , light pink #FFDEE8 , light orange #F4D4CD
		let part1Logged = false;
		let part2Logged = false;
		let part3Logged = false;
		let part4Logged = false;
		let part5Logged = false;
		let part6Logged = false;
		let part7Logged = false;

  //	Create Graph Timeline
		const graph_tl = gsap.timeline({ 
				repeat: -1,
			});

		graph_tl.to(top_text_els, {
		  duration: 0.5,
		  autoAlpha: 1,
		  yPercent: 0,
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.1,
	    },
		});

		graph_tl.to(days_num_els, {
		  duration: 0.5,
		  autoAlpha: 1,
		  yPercent: 0,
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.02,
	    },
		}, "<");

		graph_tl.to(bottom_text_els, {
		  duration: 0.5,
		  autoAlpha: 1,
		  yPercent: 0,
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.1,
	    },
		}, "<");

		graph_tl.to([glucose_box_el, energy_box_el, pain_box_el], {
		  duration: 1,
		  autoAlpha: 1,
		  yPercent: 0,
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.1,
	    },
		}, "<");



    graph_tl.to(opacity_curved_lines_els, {
		  duration: 2,
		  drawSVG: "0% 100%",
		  autoAlpha: 1,
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.4,
	    },
		}, "<50%");

		graph_tl.to(opacity_pink_line, {
		  duration: 1,
		  stroke: "#FFDEE8",
		  ease: "power3.inOut",
		}, "<70%");

		graph_tl.to(opacity_orange_line, {
		  duration: 1,
		  stroke: "#F4D4CD",
		  ease: "power3.inOut",
		}, "<20%");

		graph_tl.to(opacity_blue_line, {
		  duration: 1,
		  stroke: "#C8D5FC",
		  ease: "power3.inOut",
		}, "<20%");

		graph_tl.to([dashed_red_box_el, dashed_blue_box_el], {
		  duration: 1,
		  yPercent: 0,
		  autoAlpha: 1,
		  ease: "power3.inOut",
		  stagger: {
	      each: 0.2,
	    },
		}, "<50%");

		graph_tl.set(moving_line, {
	  	autoAlpha: 1,
	    duration: 0,
	  });

		graph_tl.to("#myMask rect", {
	    width: "100%",
	    duration: 20,
	    ease: "none",
	    onStart: function (argument) {
	    	// console.log("mask animation started")
	    },
	    onUpdate: function () {

	      let progress_value = parseFloat(this.progress().toFixed(2));

	      if (progress_value >= 0 && progress_value < 0.16 && !part1Logged) {

		      console.log("1st part //	A L L (Average, Low. Low)");
	      	let part0_tl = gsap.timeline();
      		part0_tl.to(["#Status_Box_1 .avrg_indicator", "#Status_Box_2 .low_indicator", "#Status_Box_3 .low_indicator"], {
		    		autoAlpha: 1,
		    		scale: 1,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		      part1Logged = true;

		    } else if (progress_value >= 0.1 && progress_value < 0.3 && !part2Logged) {

		      console.log("2nd part //	A L H (Average, Low, High)");
	      	let part1_tl = gsap.timeline();
	      	part1_tl.to(["#Status_Box_1 .avrg_indicator", "#Status_Box_2 .low_indicator", "#Status_Box_3 .low_indicator"], {
		    		autoAlpha: 0,
		    		scale: 0.8,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		    	part1_tl.to(["#Status_Box_1 .avrg_indicator", "#Status_Box_2 .low_indicator", "#Status_Box_3 .high_indicator"], {
		    		autoAlpha: 1,
		    		scale: 1,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		      part2Logged = true;

		    } else if (progress_value >= 0.3 && progress_value < 0.48 && !part3Logged) {

		      console.log("3rd part //	A A A (Average, Average, Average)");
	      	let part2_tl = gsap.timeline();
	      	part2_tl.to(["#Status_Box_1 .avrg_indicator", "#Status_Box_2 .low_indicator", "#Status_Box_3 .high_indicator"], {
		    		autoAlpha: 0,
		    		scale: 0.8,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
	      	part2_tl.to(["#Status_Box_1 .avrg_indicator", "#Status_Box_2 .avrg_indicator", "#Status_Box_3 .avrg_indicator"], {
		    		autoAlpha: 1,
		    		scale: 1,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		      part3Logged = true;

		    } else if (progress_value >= 0.48 && progress_value < 0.58 && !part4Logged) {

		      console.log("4th part //	H A L (High, Average, Low)");
	      	let part3_tl = gsap.timeline();
	      	part3_tl.to(["#Status_Box_1 .avrg_indicator", "#Status_Box_2 .avrg_indicator", "#Status_Box_3 .avrg_indicator"], {
		    		autoAlpha: 0,
		    		scale: 0.8,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		    	part3_tl.to(["#Status_Box_1 .high_indicator", "#Status_Box_2 .avrg_indicator", "#Status_Box_3 .low_indicator"], {
		    		autoAlpha: 1,
		    		scale: 1,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		      part4Logged = true;

		    } else if (progress_value >= 0.58 && progress_value < 0.72 && !part5Logged) {

		      console.log("5th part // H H L (High, High, Low)");
	      	let part4_tl = gsap.timeline();
	      	part4_tl.to(["#Status_Box_1 .high_indicator", "#Status_Box_2 .avrg_indicator", "#Status_Box_3 .low_indicator"], {
		    		autoAlpha: 0,
		    		scale: 0.8,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		    	part4_tl.to(["#Status_Box_1 .high_indicator", "#Status_Box_2 .high_indicator", "#Status_Box_3 .low_indicator"], {
		    		autoAlpha: 1,
		    		scale: 1,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		      part5Logged = true;

		    }  else if (progress_value >= 0.72 && progress_value < 0.9 && !part6Logged) {

		      console.log("6th part //	A A L (Average, Average, Low)");
	      	let part5_tl = gsap.timeline();
	      	part5_tl.to(["#Status_Box_1 .high_indicator", "#Status_Box_2 .high_indicator", "#Status_Box_3 .low_indicator"], {
		    		autoAlpha: 0,
		    		scale: 0.8,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		    	part5_tl.to(["#Status_Box_1 .avrg_indicator", "#Status_Box_2 .avrg_indicator", "#Status_Box_3 .low_indicator"], {
		    		autoAlpha: 1,
		    		scale: 1,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		      part6Logged = true;

		    }  else if (progress_value >= 0.9 && progress_value <= 1 && !part7Logged) {

		      console.log("7th part //	L L L (Low, Low, Low)");
	      	let part6_tl = gsap.timeline();
	      	part6_tl.to(["#Status_Box_1 .avrg_indicator", "#Status_Box_2 .avrg_indicator", "#Status_Box_3 .low_indicator"], {
		    		autoAlpha: 0,
		    		scale: 0.8,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    },
		    	});
		    	part6_tl.to(["#Status_Box_1 .low_indicator", "#Status_Box_2 .low_indicator", "#Status_Box_3 .low_indicator"], {
		    		autoAlpha: 1,
		    		scale: 1,
		    		transformOrigin: "50% 50%",
		    		duration: 0.2,
		    		stagger: {
				      each: 0.05,
				    }
		    	});
		      part7Logged = true;
		    }
	    
	    },
	  });

	  graph_tl.to(moving_line, {
	  	attr: { x: "100%" },
	    duration: 20,
	    ease: "none",
	    onComplete: function () {
	    	gsap.to(["#Status_Box_1 .low_indicator", "#Status_Box_2 .low_indicator", "#Status_Box_3 .low_indicator"], {
	    		autoAlpha: 0,
	    		scale: 0.8,
	    		duration: 0,
	    	});

	    	part1Logged = false;
				part2Logged = false;
				part3Logged = false;
				part4Logged = false;
				part5Logged = false;
				part6Logged = false;
				part7Logged = false;
	    }
	  }, "<");






	  



	  //	Enter to pause animation	//
	  // Track whether the timeline is playing or paused
			let isPlaying = true;

		// Add an event listener for the Enter key
			document.addEventListener("keydown", (event) => {
			  if (event.code === "Enter") { // Check if the Enter key is pressed
			  	// console.log("ENTER")
			    if (isPlaying) {
			      graph_tl.pause();
			    } else {
			      graph_tl.play();
			    }
			    isPlaying = !isPlaying; // Toggle the play state
			  }
			});


		

	



  })();