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
})