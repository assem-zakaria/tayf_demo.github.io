/*
	File Name: Vively App Animation
*/


  (function () {

  	console.log("Glucose Vively App Animation");

  	

  	// GSAP Plugin Registeration
  		gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  	//	#Insight_Popup_High_Glucose {opacity: 0; visibility: hidden;}
		//	#Insight_Popup_Walk_Lowered_Glucose {opacity: 0; visibility: hidden;}

    //	#Glucose_Maximum_Indicator {opacity: 0; visibility: hidden;}
    //	#Glucose_Minimum_Indicator {opacity: 0; visibility: hidden;}

    //	#Walking_Symbol {opacity: 0; visibility: hidden;}
    //	#Second_Pear_Symbol {opacity: 0; visibility: hidden;}
    //	#First_Pear_Symbol {opacity: 0; visibility: hidden;}

    //	#Waking_Segment {opacity: 0; visibility: hidden;}


  	//	Variables
  		const anim_el = document.querySelector("#glucose_level_animation");
  		const chickpea_meal_popup = anim_el.querySelector("#Chickpea_Salad_Meal");
  		const sushi_meal_popup = anim_el.querySelector("#Sushi_Meal");

  		const insight_high_glu_popup = anim_el.querySelector("#Insight_Popup_High_Glucose");
  		const insight_walking_lowered_popup = anim_el.querySelector("#Insight_Popup_Walk_Lowered_Glucose");

  		const glu_max_indicator = anim_el.querySelector("#Glucose_Maximum_Indicator");
  		const glu_min_indicator = anim_el.querySelector("#Glucose_Minimum_Indicator");

  		const first_pear_graph_symbol = anim_el.querySelector("#First_Pear_Symbol");
  		const second_pear_graph_symbol = anim_el.querySelector("#Second_Pear_Symbol");
  		const walking_graph_symbol = anim_el.querySelector("#Walking_Symbol");
  		const warning_graph_symbol = anim_el.querySelector("#Warning_Symbol");
  		const safe_graph_symbol = anim_el.querySelector("#Safe_Symbol");

  		

  		const walking_segment_g_el = anim_el.querySelector("#Waking_Segment");

  		const green_curved_path = anim_el.querySelector("#Green_Curved_Line");
  		const yellow_top_curved_path = anim_el.querySelector("#Yellow_Top_Curved_Line path");
  		const yellow_bottom_curved_path = anim_el.querySelector("#Yellow_Bottom_Curved_Line path");
  		const red_curved_path = anim_el.querySelector("#Red_Curved_Line path");

  		const glucose_lines_mask_el = anim_el.querySelector("#glucose_lines_mask rect");

  		const walking_man_el = anim_el.querySelector("#Walking_Man");


  		const top_text_els = anim_el.querySelectorAll("#Top_Text path");
  		const graph_glucose_value_numbers = anim_el.querySelectorAll("#Graph_Numbers_Glucose path");
  		const graph_time_numbers = anim_el.querySelectorAll("#Graph_Numbers_Time path");

  		



  //	GSAP Sets
		// gsap.set([green_curved_path, yellow_top_curved_path, yellow_bottom_curved_path, red_curved_path], { drawSVG: "0% 0%", autoAlpha: 1 });

  	
		gsap.set(graph_glucose_value_numbers, { autoAlpha:0, xPercent: 100 });
		gsap.set(graph_time_numbers, { autoAlpha:0, yPercent: -100 });
		gsap.set(top_text_els, { autoAlpha:0, yPercent: -50 });

		gsap.set(insight_high_glu_popup, { autoAlpha:0, yPercent: -20 });
		gsap.set(insight_walking_lowered_popup, { autoAlpha:0, yPercent: 20 });

		gsap.set(chickpea_meal_popup, { autoAlpha:0, yPercent: -20 });
		gsap.set(sushi_meal_popup, { autoAlpha:0, yPercent: 20 });

		gsap.set(first_pear_graph_symbol, { autoAlpha:0, scale: 0.5, transformOrigin: "center" });
		gsap.set(second_pear_graph_symbol, { autoAlpha:0, scale: 0.5, transformOrigin: "center" });
		gsap.set(walking_graph_symbol, { autoAlpha:0, scale: 0.5, transformOrigin: "center" });
		gsap.set(warning_graph_symbol, { autoAlpha:0, scale: 0.5, transformOrigin: "center" });
		gsap.set(safe_graph_symbol, { autoAlpha:0, scale: 0.5, transformOrigin: "center" });



		
		gsap.set(glu_min_indicator, { autoAlpha:0, scale: 0.5, transformOrigin: "center" });
		gsap.set(glu_max_indicator, { autoAlpha:0, scale: 0.5, transformOrigin: "center" });

		gsap.set(walking_man_el, { autoAlpha:0, x: -20 });



		


	




	//	First Progress Point Timeline
		let first_prog_point_tl = gsap.timeline({ paused: true});

  	first_prog_point_tl.to(first_pear_graph_symbol, {
				autoAlpha: 1,
				scale: 1,
				force3D: true,
				duration: 0.3,
				ease: "power3.inOut"
		});

		first_prog_point_tl.to(chickpea_meal_popup, {
				autoAlpha: 1,
				yPercent: 0,
				force3D: true,
				duration: 0.8,
				ease: "power3.inOut"
		}, "<=10%");

		first_prog_point_tl.to(glu_min_indicator, {
				autoAlpha: 1,
				scale: 1,
				duration: 0.3,
				ease: "power3.inOut"
		}, "<=10%");

	//	Second Progress Point Timeline
		let second_prog_point_tl = gsap.timeline({ paused: true});

  	second_prog_point_tl.to(second_pear_graph_symbol, {
				autoAlpha: 1,
				scale: 1,
				force3D: true,
				duration: 0.3,
				ease: "power3.inOut"
		});

		second_prog_point_tl.to(sushi_meal_popup, {
				autoAlpha: 1,
				yPercent: 0,
				force3D: true,
				duration: 0.8,
				ease: "power3.inOut"
		}, "<=10%");

	//	Third Progress Point Timeline
		let third_prog_point_tl = gsap.timeline({ paused: true});

		third_prog_point_tl.to(warning_graph_symbol, {
				autoAlpha: 1,
				scale: 1,
				force3D: true,
				duration: 0.3,
				ease: "power3.inOut"
		});

  	third_prog_point_tl.to(insight_high_glu_popup, {
				autoAlpha: 1,
				yPercent: 0,
				force3D: true,
				duration: 0.8,
				ease: "power3.inOut"
		}, "<=10%");

  //	Fourth Progress Point Timeline
		let fourth_prog_point_tl = gsap.timeline({ paused: true});

  	fourth_prog_point_tl.to(glu_max_indicator, {
				autoAlpha: 1,
				scale: 1,
				force3D: true,
				duration: 0.3,
				ease: "power3.inOut"
		});

	//	Fifth Progress Point Timeline
		let fifth_prog_point_tl = gsap.timeline({ paused: true});

  	fifth_prog_point_tl.to(walking_graph_symbol, {
				autoAlpha: 1,
				scale: 1,
				force3D: true,
				duration: 0.3,
				ease: "power3.inOut"
		});

		fifth_prog_point_tl.to(walking_man_el, {
				delay: 0.5,
				autoAlpha: 1,
				x: 0,
				force3D: true,
				duration: 1,
				ease: "power3.inOut"
		});

	//	Sixth Progress Point Timeline
		let sixth_prog_point_tl = gsap.timeline({ paused: true});

		sixth_prog_point_tl.to(safe_graph_symbol, {
			autoAlpha: 1,
			scale: 1,
			force3D: true,
			duration: 0.3,
			ease: "power3.inOut"
		});

  	sixth_prog_point_tl.to(insight_walking_lowered_popup, {
			autoAlpha: 1,
			yPercent: 0,
			force3D: true,
			duration: 0.8,
			ease: "power3.inOut"
		}, "<=10%");





		
	//	Re Set Elements on main timeline repeat
		function main_tl_onRepeat_func() {

			first_prog_point_tl.restart();
			first_prog_point_tl.pause();

			second_prog_point_tl.restart();
			second_prog_point_tl.pause();

			third_prog_point_tl.restart();
			third_prog_point_tl.pause();

			fourth_prog_point_tl.restart();
			fourth_prog_point_tl.pause();

			fifth_prog_point_tl.restart();
			fifth_prog_point_tl.pause();

			sixth_prog_point_tl.restart();
			sixth_prog_point_tl.pause();

		}


	//	Progress Points and Triggered Variable
		let progress_points =[0.055, 0.415, 0.690, 0.722, 0.785, 0.940];
		let triggered = new Set();
		let pause_duration = 1.5;


  //	Create Graph Timeline
		const glucose_tl = gsap.timeline({ 
			repeat: -1,
	    onRepeat: function () {
	        triggered.clear();
	        main_tl_onRepeat_func();
	    }
		});

		glucose_tl.to(top_text_els, {
			autoAlpha: 1,
			yPercent: 0,
			force3D: true,
			duration: 0.8,
			ease: "power3.inOut",
			stagger: 0.1
		});

		glucose_tl.to(graph_time_numbers, {
			autoAlpha: 1,
			yPercent: 0,
			force3D: true,
			duration: 0.8,
			ease: "power3.inOut",
			stagger: 0.1
		}, "<");

		glucose_tl.to(graph_glucose_value_numbers, {
			autoAlpha: 1,
			xPercent: 0,
			force3D: true,
			duration: 0.8,
			ease: "power3.inOut",
			stagger: 0.1
		}, "<");

		glucose_tl.to(glucose_lines_mask_el, {
				delay: 1,
				width: 712,
				autoAlpha: 1,
				duration: 12,
				ease: "none",
				onUpdate: function () {

        		let progress = this.progress().toFixed(3);

		        // Point 1
			        if (progress >= progress_points[0] && !triggered.has(progress_points[0])) {

			        	glucose_tl.pause();
	            	gsap.delayedCall(pause_duration, () => glucose_tl.play());

			        	first_prog_point_tl.play();

		            triggered.add(progress_points[0]);

			        }

		        //	Point 2
			        if (progress >= progress_points[1] && !triggered.has(progress_points[1])) {

		        		glucose_tl.pause();
	          		gsap.delayedCall(pause_duration, () => glucose_tl.play());
		            second_prog_point_tl.play();

		            triggered.add(progress_points[1]);

			        }

		        // Point 3
			        if (progress >= progress_points[2] && !triggered.has(progress_points[2])) {

		        		glucose_tl.pause();
	          		gsap.delayedCall(pause_duration, () => glucose_tl.play());
		            third_prog_point_tl.play();

		            triggered.add(progress_points[2]);

			        }

			      // Point 4
			        if (progress >= progress_points[3] && !triggered.has(progress_points[3])) {

		        		// glucose_tl.pause();
	          		// gsap.delayedCall(pause_duration, () => glucose_tl.play());
		            fourth_prog_point_tl.play();

		            triggered.add(progress_points[3]);

			        }

		        // Point 5
			        if (progress >= progress_points[4] && !triggered.has(progress_points[4])) {

		        		glucose_tl.pause();
	          		gsap.delayedCall(pause_duration, () => glucose_tl.play());
		            
		            fifth_prog_point_tl.play();

		            triggered.add(progress_points[4]);

			        }

		        // Point 6
			        if (progress >= progress_points[5] && !triggered.has(progress_points[5])) {

		        		glucose_tl.pause();
	          		gsap.delayedCall(pause_duration, () => glucose_tl.play());
		            
		            sixth_prog_point_tl.play();

		            triggered.add(progress_points[5]);

			        }

		    },
		}, "<");



		









	  //	Enter to pause animation	//

			let isPlaying = true;

			document.addEventListener("keydown", (event) => {
			  if (event.code === "Enter") { // Check if the Enter key is pressed
			  	// console.log("ENTER")
			    if (isPlaying) {
			      glucose_tl.pause();
			    } else {
			      glucose_tl.play();
			    }
			    isPlaying = !isPlaying; // Toggle the play state
			  }
			});


		

	



  })();