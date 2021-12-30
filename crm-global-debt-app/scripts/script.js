$(document).ready(function(){
	
	window.onload = function(){
		
		
		
	//get svg object, like a jquery object
	
	
	 var svg = $("#chart");
		  
		  console.log("aaaaaaaaaa11111aaaa");
    //use jquery functions to do some thing
/*
    svg.find("g#risk-1").on("click",function(e){
	    console.log(e);
	    console.log("clicked on Risk 1");
    });
    svg.find("g#risk-2").click(function(e){
	    console.log(e);
	    console.log("clicked on Risk 2");
    });
    svg.find("g#risk-3").click(function(e){
	    console.log(e);
	    console.log("clicked on Risk 3");
    });
*/
/*
    svg.find("g#risk-4").click(function(e){
	    console.log(e);
	    console.log("clicked on Risk 4");
    });
*/

    svg.find("#risk-1").click(function(e){
	    console.log(e);
	    console.log("clicked on Red Line 111111111111111");
    });
    
    svg.find("#trigger-legend-2").click(function(e){
	    console.log(e);
	    console.log("clicked on RED PULSE 111111111111111");
    });
    
    $("#trigger-legend-1").click(function(){
	    console.log("NP HERE");
	   
    });
    
    $(".hide").click(function(){
	    console.log("hide");
	    $("#chart").fadeOut();
	    $("#np").fadeOut();
    });
    $(".show").click(function(){
	    $("#chart").fadeIn();
	    $("#np").fadeIn();
	    setTimeout(function(){
		    var svg = $("#chart").getSVG();
		    console.log("Loaded Again");
    //use jquery functions to do some thing
    svg.find("g#risk-1").on("click",function(e){
	    console.log(e);
	    console.log("clicked on Risk 1");
    });
    svg.find("g#risk-2").click(function(e){
	    console.log(e);
	    console.log("clicked on Risk 2");
    });
    svg.find("g#risk-3").click(function(e){
	    console.log(e);
	    console.log("clicked on Risk 3");
    });
    svg.find("g#risk-4").click(function(e){
	    console.log(e);
	    console.log("clicked on Risk 4");
    });
	    }, 1500);
    });
	};
});