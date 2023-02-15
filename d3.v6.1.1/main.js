
const data = [55000, 48000, 27000, 66000, 90000];

const FRAME_WIDTH = 200;
const MARGINS = {left:50, right:50, top:50, bottom: 50 };


const FRAME1 = 
	d3.select("#frame")

		.append("svg")

			.attr("width", "FRAME WIDTH")

			.attr("class", "frame");


FRAME1.selectAll("points")

	.data(data)
	.enter()
	.append("circle")
			.attr('cx', (d) => {return d;})
			.attr(Math.floor((frame.clientWidth / 10) * point[0]))
			.attr("cy", 0 + MARGINS.top)
			.attr("r", 20)
			.attr("fill", "red")
			.attr("class", "point");