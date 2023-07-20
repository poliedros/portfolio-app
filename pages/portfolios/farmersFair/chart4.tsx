import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { MdLinearScale } from "react-icons/md";

export default function MyD3Component4(props: any) {
  const d3Container = useRef(null);
  useEffect(() => {
    const margin = { top: 0, right: 0, bottom: 30, left: 30 },
      width = 200 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(d3Container.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Labels of row and columns
    const myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const myVars = [
      "v1",
      "v2",
      "v3",
      "v4",
      "v5",
      "v6",
      "v7",
      "v8",
      "v9",
      "v10",
    ];

    // Build X scales and axis:
    const x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.01);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Build X scales and axis:
    const y = d3.scaleBand().range([height, 0]).domain(myVars).padding(0.01);
    svg.append("g").call(d3.axisLeft(y));

    // Build color scale
    const myColor = d3
      .scaleLinear()
      .range(["white", "#a3e635"] as any)
      .domain([1, 100]);

    //Read the data
    d3.csv(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
    ).then(function (data) {
      // create a tooltip
      const tooltip = d3
        .select("#my_dataviz")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "50px")
        .style("padding", "5px");

      // Three function that change the tooltip when user hover / move / leave a cell
      const mouseover = function (event: any, d: any) {
        tooltip.style("opacity", 1);
      };
      const mousemove = function (event: any, d: any) {
        tooltip
          .html("The exact value of<br>this cell is: " + d.value)
          .style("left", event.x / 2 + "px")
          .style("top", event.y / 2 + "px");
      };
      const mouseleave = function (d: any) {
        tooltip.style("opacity", 0);
      };

      // add the squares
      svg
        .selectAll()
        .data(data, function (d: any) {
          return d.group + ":" + d.variable;
        })
        .enter()
        .append("rect")
        .attr("x", function (d: any) {
          return x(d.group) as any;
        })
        .attr("y", function (d: any) {
          return y(d.variable) as any;
        })
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", function (d) {
          return myColor(d.value);
        })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);
    });
  }, []);

  return (
    <svg
      className="!w-[100%] !max-w-[66%]"
      viewBox="0 0 200 200"
      ref={d3Container}
    />
  );
}
