/*
Copyright (c) 2018 Health Care HTML Template
------------------------------------------------------------------
[Master Javascript]

Project:	Health Care HTML Template

-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var healthcare = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- healthcare Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.opne_form();
			this.home_slider();
			this.upcmslider();
			this.testimonialslider();
			this.vdopopup();
			this.RTL();
			this.Navigation();
			this.Search_box();
			this.Smooth_scroll();
			this.Main_slider();
			this.Single_page();
			this.Accordion();
			this.Style_switcher();
			this.Submenu_icon();
			this.Portfolio();
			this.Sidebar_category();
			this.Sidebar_latestpost_tab();
			this.Slider_all();
			this.Mail_function();
			
		},
		
		/*-------------- healthcare Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		opne_form: function (){
			$('.hlt_openclick').on("click", function(e) {
				$('.hlt_appointment, .hlt_openclick').addClass('hlt_openbox');
				e.stopPropagation(); 
			});
			$('.hlt_closer').on("click", function(e) {
				$('.hlt_appointment, .hlt_openclick').removeClass('hlt_openbox');
				e.stopPropagation(); 
			});
		},		
		
		home_slider: function (){
		$('.health_slider .owl-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayHoverPause:true,
			margin:10,
			dots:false,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})
		},
		
		upcmslider: function (){
		$('.hlt_upcmslider .owl-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayHoverPause:true,
			margin:30,
			dots:true,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				991:{
					items:3
				},
				1000:{
					items:3
				}
			}
		})
		},
		
		testimonialslider: function (){
		$('.hlt_testimonialslider .owl-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayHoverPause:true,
			margin:30,
			dots:true,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:2
				}
			}
		})
		},
		
		
		vdopopup: function() {
			if($('.popup-youtube').length){
				$('.popup-youtube').magnificPopup({
					disableOn: 0,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});
			}
		},
		
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		
		Preloader: function () {
			jQuery("#status").fadeOut();
			jQuery("#preloader").delay(350).fadeOut("slow");	
		},
		
		Navigation: function(){
			// fixed menu on scroll
			var hig = window.innerHeight - 130;
			$(window).bind('scroll', function() {
				//one page fixed header on scroll
				if ($(window).scrollTop() > hig) {
					$('.hc_fixed_header').addClass('fixed');
				}
				else {
					$('.hc_fixed_header').removeClass('fixed');
				}
				
				// multipage header fixed on scroll
				if ($(window).scrollTop() > 100) {
					$('#hs_header').addClass('fixed');
				}
				else {
					$('#hs_header').removeClass('fixed');
				}
				
			});
			
		
		},
		
		Search_box: function(){
			// search box
			var searchPopup = $('.hs_search_box');
			searchPopup.isShowed = false;

			$('#hs_search').hover(function(event) {
				showSearchPopup();
			}, function(event) {
				hideSearchPopup();
			});

			function showSearchPopup(){
				searchPopup.stop(true, true);
				searchPopup.isShowed = true;
				searchPopup.slideDown('normal');
			}

			function hideSearchPopup(){
				var divHovered = '0';
				$('.hs_search_box').hover(function(event) {
					divHovered = '1';
					showSearchPopup();
				}, function(event) {
					searchPopup.stop(true, true);
					searchPopup.delay(200).slideUp('fast', function() {
						searchPopup.isShowed = false;
					});
				});

				if (divHovered == '0'){
					searchPopup.stop(true, true);
					searchPopup.delay(200).slideUp('fast', function() {
						searchPopup.isShowed = false;
					});
				}
			}	
								
		},
		
		Smooth_scroll: function(){
			//smooth scrolling
			$.smoothScroll();
		},
		
		Main_slider: function(){
			// main slider 
			$('.carousel').carousel({
				interval: 5000,
				pause: "false"
			});
		}, 
		
		Single_page: function(){
			// single page
			$("#hc_single").single({
				speed: 1000
			});
		},
		
		Accordion: function (){
			//accordion
			jQuery(function ($) {
				var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
				$active.find('a').prepend('<i class="glyphicon glyphicon-minus"></i>');
				$('#accordion .panel-heading').not($active).find('a').prepend('<i class="glyphicon glyphicon-plus"></i>');
				$('#accordion').on('show.bs.collapse', function (e) {
					$('#accordion .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
					$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
				})
			});
		},
		
		Style_switcher: function (){
			$("#style-switcher .bottom a.settings").on('click', function(e){
				e.preventDefault();
				var div = $("#style-switcher");
				if (div.css("left") === "-200px") {
					$("#style-switcher").animate({
						left: "0px"
					}); 
				} else {
					$("#style-switcher").animate({
						left: "-200px"
					});
				}
			});
			
			//color change
			$('.colorchange').click(function(){
			var color_name=$(this).attr('id');
			var new_style='css/color/'+color_name+'.css';
			$('#theme-color').attr('href',new_style);
			});
			//pattern change
			$('.pattern_change').click(function(){
			var name=$(this).attr('id');
			var new_style='css/pattern/'+name+'.css';
			$('#theme-pattern').attr('href',new_style);
			});
			
		},
		
		Submenu_icon: function(){
			//sub of sub menu right icon
			$('.hs_menu li > ul > li').hover(function(){
				$(this).children('ul').children('li:first-child').addClass('fa fa-angle-right');
			});
		},
		
		Portfolio: function(){
			/* Portfolio */
			if ($.fn.mixitup) {
				$('#grid').mixitup({
					filterSelector: '.filter-item'
				});
				$(".filter-item").click(function(e) {
					e.preventDefault();
				})
			}
		
		},
		
		Sidebar_category: function(){
			//sidebar categories
			$('.hs_sidebar_categories ul li').click(function(){
				$(this).children('ul').slideToggle(500);
			});
		},
		
		Sidebar_latestpost_tab: function(){
			//sidebar latest post tab	  
			$('.hs_post_tab > ul').each(function(){
				var $active, $content, $links = $(this).find('a');
				$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
				$active.addClass('active');
				$content = $($active[0].hash);
				$links.not($active).each(function () {
					$(this.hash).hide();
				});
				$(this).on('click', 'a', function(e){
					$active.removeClass('active');
					$content.hide();
					$active = $(this);
					$content = $(this.hash);
					$active.addClass('active');
					$content.fadeIn(500);
					e.preventDefault();
				});
			});	
		  
		},
	
		Slider_all: function(){
			//Up Coming Events slider  
			if($('#up_coming_events_slider').length > 0){
				var event_owl = $('#up_coming_events_slider');
				event_owl.owlCarousel({
					autoplay:true,
					loop:true,
					autoplayTimeout:4000,
					items:3,
					dots:true,
					margin:30,
					stagePadding:0,
					smartSpeed:450,
					responsive:{
						0:{
							items:1
						},
						580:{
							items:2
						},
						700:{
							items:2
						},
						1024:{
							items:3
						},
						1200:{
							items:3
						},
						1480:{
							items:3
						}
					}
				});
				
				// Custom Navigation Events
				$(".up_coming_events > .customNavigation > .next").click(function(){
					event_owl.trigger('next.owl.carousel');
				});
				$(".up_coming_events > .customNavigation > .prev").click(function(){
					event_owl.trigger('prev.owl.carousel');
				});
				
			}
			
			//Happy Patients testimonial
			$('.bxslider').bxSlider({
				pagerCustom: '#bx-pager',
				mode: 'vertical',
				slideMargin: 3,
				auto:true,
				autoDirection: 'back',
				controls: false,
			});

			//Happy Patients testimonial
			$('.testimonial_slider').bxSlider({
				pagerCustom: '#bx-pager',
				mode: 'vertical',
				slideMargin: 0,
				auto:true,
				autoDirection: 'back',
				controls: false,
			});
			
			//Our Doctor Team slider
			if($('#our_doctor_team_slider').length > 0){
				var do_team_owl = $("#our_doctor_team_slider");
				do_team_owl.owlCarousel({
					autoplay:false,
					loop:true,
					autoplayTimeout:4000,
					items:3,
					dots:true,
					margin:30,
					stagePadding:0,
					smartSpeed:450,
					responsive:{
						0:{
							items:1
						},
						580:{
							items:2
						},
						700:{
							items:2
						},
						1024:{
							items:3
						},
						1200:{
							items:3
						},
						1480:{
							items:3
						}
					}
				});
				
				// Custom Navigation Events
				$(".our_doctor_team > .customNavigation > .next").click(function(){
					do_team_owl.trigger('next.owl.carousel');
				});
				$(".our_doctor_team > .customNavigation > .prev").click(function(){
					do_team_owl.trigger('prev.owl.carousel');
				});
				
			}
			
			//Meet Our Partners slider
			if($('#our_partners_slider').length > 0){
				var partners_owl = $("#our_partners_slider");
				partners_owl.owlCarousel({
					autoplay:true,
					loop:true,
					autoplayTimeout:4000,
					items:4,
					dots:false,
					margin:30,
					stagePadding:0,
					smartSpeed:450,
					responsive:{
						0:{
							items:1
						},
						580:{
							items:2
						},
						700:{
							items:3
						},
						1024:{
							items:4
						},
						1200:{
							items:4
						},
						1480:{
							items:4
						}
					}
				});
				
				// Custom Navigation Events
				$(".our_partners > .customNavigation > .next").click(function(){
					partners_owl.trigger('next.owl.carousel');
				});
				$(".our_partners > .customNavigation > .prev").click(function(){
					partners_owl.trigger('prev.owl.carousel');
				});
				
			}
			
			//Health Care Team slider
			if($('#health_care_team_slider').length > 0){
				var team_owl = $("#health_care_team_slider");
				team_owl.owlCarousel({
					autoplay:true,
					loop:true,
					autoplayTimeout:4000,
					items:4,
					dots:false,
					margin:30,
					stagePadding:0,
					smartSpeed:450,
					responsive:{
						0:{
							items:1
						},
						580:{
							items:2
						},
						700:{
							items:3
						},
						1024:{
							items:4
						},
						1200:{
							items:4
						},
						1480:{
							items:4
						}
					}
				});
				
				// Custom Navigation Events
				$(".our_doctor_team > .customNavigation > .next").click(function(){
					team_owl.trigger('next.owl.carousel');
				});
				$(".our_doctor_team > .customNavigation > .prev").click(function(){
					team_owl.trigger('prev.owl.carousel');
				});
				
			}
			
			//Releted Post slider
			if($('#releted_post_slider').length > 0){
				var releted_owl = $("#releted_post_slider");
				releted_owl.owlCarousel({
					autoplay:false,
					loop:false,
					autoplayTimeout:4000,
					items:3,
					dots:false,
					margin:20,
					stagePadding:0,
					smartSpeed:450,
					responsive:{
						0:{
							items:1
						},
						580:{
							items:1
						},
						700:{
							items:2
						},
						1024:{
							items:2
						},
						1200:{
							items:3
						},
						1480:{
							items:3
						}
					}
				});
				
				// Custom Navigation Events
				$(".releted_post > .customNavigation > .next").click(function(){
					releted_owl.trigger('next.owl.carousel');
				});
				$(".releted_post > .customNavigation > .prev").click(function(){
					releted_owl.trigger('prev.owl.carousel');
				});
				
			}
			
			//Post by slider
			if($('#post_by_slider').length > 0){
				var post_owl = $("#post_by_slider");
				post_owl.owlCarousel({
					autoplay:false,
					loop:false,
					autoplayTimeout:4000,
					items:4,
					dots:false,
					margin:20,
					stagePadding:0,
					smartSpeed:450,
					responsive:{
						0:{
							items:1
						},
						580:{
							items:2
						},
						700:{
							items:3
						},
						1024:{
							items:3
						},
						1200:{
							items:4
						},
						1480:{
							items:4
						}
					}
				});
				
				// Custom Navigation Events
				$(".post_by > .customNavigation > .next").click(function(){
					post_owl.trigger('next.owl.carousel');
				});
				$(".post_by > .customNavigation > .prev").click(function(){
					post_owl.trigger('prev.owl.carousel');
				});
				
			}
						
			//Patients Testimonials slider
			if($('#patients_testimonials_slider').length > 0){
				var testimonial_owl = $("#patients_testimonials_slider");
				testimonial_owl.owlCarousel({
					autoplay:false,
					loop:false,
					autoplayTimeout:4000,
					items:4,
					dots:false,
					margin:20,
					stagePadding:0,
					smartSpeed:450,
					responsive:{
						0:{
							items:1
						},
						580:{
							items:1
						},
						700:{
							items:1
						},
						1024:{
							items:2
						},
						1200:{
							items:2
						},
						1480:{
							items:2
						}
					}
				});
				
				// Custom Navigation Events
				$(".patients_testimonials > .customNavigation > .next").click(function(){
					testimonial_owl.trigger('next.owl.carousel');
				});
				$(".patients_testimonials > .customNavigation > .prev").click(function(){
					testimonial_owl.trigger('prev.owl.carousel');
				});
				
			}
			
		
		},
	
		Mail_function: function(){
			// contact page mail function
			$('#em_sub').click(function(){
			var un=$('#uname').val();
			var em=$('#uemail').val();
			var meesg=$('#message').val();

			if($("#hs_checkbox:checked").length == 1)
				var check='1';
			else
				var check='0';
				$.ajax({
					type: "POST",
					url: "ajaxmail.php",
					data: {
						'username':un,
						'useremail':em,
						'mesg':meesg,
						'check':check,
						},
					success: function(msg) {
					var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#uname').val("");
							$('#uemail').val("");
							$('#message').val("");
							$('#err').html( full_msg[1] );
						}
						else{
							$('#uname').val(un);
							$('#uemail').val(em);
							$('#message').val(meesg);
							$('#err').html( full_msg[1] );
						}
					}
				});
			});
			
			
			/* mail function for appointment */
			$('#slider_book_apo').click(function(){
				var depart=$('#slider_select_dep').val();
				var book_apo_un=$('#slider_fname').val();
				var book_apo_ph=$('#slider_phone').val();
				var book_apo_em=$('#slider_email').val();
				var book_apo_date=$('#slider_date').val();

				$.ajax({
					type: "POST",
					url: "appointment.php",
					data: {
						'department':depart,
						'appointer_name':book_apo_un,
						'appointer_phone':book_apo_ph,
						'appointer_email':book_apo_em,
						'appointment_date':book_apo_date,
						},
					success: function(msg) {
						var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#slider_select_dep').val("");
							$('#slider_fname').val("");
							$('#slider_phone').val("");
							$('#slider_email').val();
							$('#slider_date').val();
							$('#appointment_err').html( full_msg[1] );
						}
						else{
							$('#slider_select_dep').val(depart);
							$('#slider_fname').val(book_apo_un);
							$('#slider_phone').val(book_apo_ph);
							$('#slider_email').val(book_apo_em);
							$('#slider_date').val(book_apo_date);
							$('#appointment_err').html( full_msg[1] );
						}
					}
				});
			});		

		}
	
	};

	healthcare.init();

	// Load Event
	$(window).on('load', function() {
		healthcare.Preloader();
	});

	// Scroll Event
	$(window).on('scroll', function () {
	
	});
	
	// ready function
	$(document).ready(function() {
		
	});
	

})(jQuery);