// Reference
// Google docs from Ri Liu:
// https://docs.google.com/document/d/1LcdEOfaCbzTxrY8fMbcVBxqTY0UYgm2v0v4Oq8BURrQ/edit#

// Isakiko's D3 for beginners
// http://isakiko.github.io/D3-visualising-data/08-d3enter.html

var dataUrl = "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json";

d3.json(dataUrl, function(nations) {
	// Select the chart area by ID
	var chart_area = d3.select("#chart_area");
	var frame = chart_area.append("svg");
	// Create canvas inside frame.
	var canvas = frame.append("g");
	// Set margins, width, and height.
	var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
	var frame_width = 960;
	var frame_height = 350;
	var canvas_width = frame_width - margin.left - margin.right;
	var canvas_height = frame_height - margin.top - margin.bottom;
	// Set frame attributes width and height.
	frame.attr("width", frame_width);
	frame.attr("height", frame_height);
	canvas.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// Create a logarithmic scale for the income
	var xScale = d3.scale.log(); // income
	xScale.domain([250, 1e5]); // set minimum and maximum value
	xScale.range([0, canvas_width]); // set minimum and maximum range on the page

	// Create a logarithmic scale for the income
	var yScale = d3.scale.linear(); // income
	yScale.domain([10, 85]); // set minimum and maximum value
	yScale.range([0, canvas_height]); // set minimum and maximum range on the page

	var sqrt = d3.scale.log(); // income

	// Creating the x & y axes.
	var xAxis = d3.svg.axis().orient("bottom").scale(xScale);
	var yAxis = d3.svg.axis().orient("left").scale(yScale);

	// Add the x-axis.
	canvas.append("g")
	    .attr("class", "x axis")
	  .attr("transform", "translate(0," + canvas_height + ")")
	  .call(xAxis);

  	canvas.append("g")
	    .attr("class", "y axis")
	  .attr("transform", "translate("+ canvas_width + ",0)")
	  .call(yAxis);


  	var data_canvas = canvas.append("g")
	  .attr("class", "data_canvas");

	var dot = data_canvas.selectAll(".dot")
	  .data(nations, function(d){return d.name});

	dot.enter().append("circle").attr("class","dot")
	  .attr("cx", function(d) { return xScale(d.income[d.income.length-1]); })
	  .attr("cy", function(d) { return yScale(d.lifeExpectancy[d.lifeExpectancy.length-1]); })
	  .attr("r", 5);

})