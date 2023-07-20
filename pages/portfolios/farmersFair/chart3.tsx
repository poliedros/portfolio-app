import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { MdLinearScale } from "react-icons/md";

export default function MyD3Component3(props: any) {
  const d3Container = useRef(null);
  useEffect(() => {
    const add3DBar = (
      parent: any,
      xPos: any,
      yPos: any,
      width: any,
      height: any,
      depth: any,
      duration: any
    ) => {
      const g = parent
        .append("g")
        .attr("transform", `translate(${xPos}, ${yPos})`);

      g.append("path")
        .attr("d", `M 0,0 V ${0} H ${width} V 0 H 0 Z`)
        .style("fill", "#4d7c0f")
        .transition()
        .duration(duration)
        .attr("d", `M 0,0 V ${-height} H ${width} V 0 H 0 Z`);

      g.append("path")
        .attr(
          "d",
          `M 0,${0} L ${depth},${-depth} H ${depth + width} L ${width},0 Z`
        )
        .style("fill", "#bef264")
        .transition()
        .duration(duration)
        .attr(
          "d",
          `M 0,${-height} L ${depth},${-height - depth} H ${
            depth + width
          } L ${width},${-height} Z`
        );

      g.append("path")
        .attr(
          "d",
          `M ${width},0 L ${
            width + depth
          },${-depth}, V ${-depth} L ${width},0 Z`
        )
        .style("fill", "#d9f99d")
        .transition()
        .duration(duration)
        .attr(
          "d",
          `M ${width},0 L ${width + depth},${-depth}, V ${
            -height - depth
          } L ${width},${-height} Z`
        );
    };

    const svg = d3.select(d3Container.current);

    add3DBar(svg, 70, 150, 30, 100, 10, 500);
    add3DBar(svg, 110, 150, 30, 70, 10, 1000);
    add3DBar(svg, 150, 150, 30, 120, 10, 1500);
    add3DBar(svg, 190, 150, 30, 130, 10, 2000);
    // var data = [
    //   {
    //     sale: "202",
    //     year: "2023",
    //   },
    //   {
    //     sale: "215",
    //     year: "2024",
    //   },
    //   {
    //     sale: "179",
    //     year: "2025",
    //   },
    // ] as any;

    // var data2 = [
    //   {
    //     sale: "152",
    //     year: "2023",
    //   },
    //   {
    //     sale: "189",
    //     year: "2024",
    //   },
    //   {
    //     sale: "179",
    //     year: "2025",
    //   },
    // ] as any;

    // var vis = d3.select(d3Container.current),
    //   WIDTH = 300,
    //   HEIGHT = 150,
    //   MARGINS = {
    //     top: 20,
    //     right: 20,
    //     bottom: 20,
    //     left: 50,
    //   },
    //   xScale = d3
    //     .scaleLinear()
    //     .domain([2023, 2025])
    //     .range([MARGINS.left, WIDTH - MARGINS.right]),
    //   yScale = d3
    //     .scaleLinear()
    //     .range([HEIGHT - MARGINS.top, MARGINS.bottom])
    //     .domain([134, 215]),
    //   xAxis: any = d3
    //     .axisBottom(xScale)
    //     .tickValues([2023, 2024, 2025])
    //     .tickFormat(function (d) {
    //       return d3.format(".0f")(d);
    //     }),
    //   yAxis: any = d3.axisLeft(yScale).tickValues([210, 175, 140]);

    // vis
    //   .append("svg:g")
    //   .attr("class", "x axis")
    //   .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    //   .call(xAxis);

    // vis
    //   .append("svg:g")
    //   .attr("class", "y axis")
    //   .attr("transform", "translate(" + MARGINS.left + ",0)")
    //   .call(yAxis);

    // var lineGen = d3
    //   .line()
    //   .x(function (d: any) {
    //     return xScale(d.year);
    //   })
    //   .y(function (d: any) {
    //     return yScale(d.sale);
    //   })
    //   .curve(d3.curveBasis);
    // // .curve(d3.curveLinear);
    // // .interpolate("basis");

    // vis
    //   .append("svg:path")
    //   .attr("d", lineGen(data))
    //   .attr("stroke", "green")
    //   .attr("stroke-width", 1)
    //   .attr("fill", "none");

    // vis
    //   .append("svg:path")
    //   .attr("d", lineGen(data2))
    //   .attr("stroke", "blue")
    //   .attr("stroke-width", 1)
    //   .attr("fill", "none");
  }, []);

  return (
    <svg
      className="!w-[100%] !max-w-[100%]"
      viewBox="0 0 300 150"
      ref={d3Container}
    />
  );
}
