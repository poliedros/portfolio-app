import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { MdLinearScale } from "react-icons/md";

export default function MyD3Component2(props: any) {
  const d3Container = useRef(null);
  useEffect(() => {
    // var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    //   width = 480 - margin.left - margin.right,
    //   height = 250 - margin.top - margin.bottom;
    // // parse the date / time
    // var parseTime = d3.timeParse("%d-%b-%y");
    // // set the ranges
    // var x = d3.scaleTime().range([0, width]);
    // var y = d3.scaleLinear().range([height, 0]);
    // // define the 1st line
    // var valueline = d3
    //   .line()
    //   .x(function (d: any) {
    //     return x(d.date);
    //   })
    //   .y(function (d: any) {
    //     return y(d.close);
    //   });
    // // define the 2nd line
    // var valueline2 = d3
    //   .line()
    //   .x(function (d: any) {
    //     return x(d.date);
    //   })
    //   .y(function (d: any) {
    //     return y(d.open);
    //   });
    // // append the svg obgect to the body of the page
    // // appends a 'group' element to 'svg'
    // // moves the 'group' element to the top left margin
    // var svg = d3
    //   .select(d3Container.current)
    //   .append("svg")
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // // Get the data
    // d3.csv("/data2.csv").then(function (data) {
    //   // format the data
    //   data.forEach(function (d: any) {
    //     d.date = parseTime(d.date) as any;
    //     d.close = +d.close as any;
    //     d.open = +d.open as any;
    //   });
    //   // Scale the range of the data
    //   x.domain(
    //     d3.extent(data, function (d: any) {
    //       return d.date;
    //     }) as any
    //   );
    //   y.domain([
    //     0,
    //     d3.max(data, function (d: any) {
    //       return Math.max(d.close, d.open);
    //     }),
    //   ] as any);
    //   // Add the valueline path.
    //   svg
    //     .append("path")
    //     .data([data])
    //     .attr("class", "line")
    //     .attr("d", valueline as any);
    //   // Add the valueline2 path.
    //   svg
    //     .append("path")
    //     .data([data])
    //     .attr("class", "line")
    //     .style("stroke", "red")
    //     .attr("d", valueline2 as any);
    //   // Add the X Axis
    //   svg
    //     .append("g")
    //     .attr("transform", "translate(0," + height + ")")
    //     .call(d3.axisBottom(x));
    //   // Add the Y Axis
    //   svg.append("g").call(d3.axisLeft(y));
    // });
    // console.log(d3.csv);

    var data = [
      {
        sale: "202",
        year: "2023",
      },
      {
        sale: "215",
        year: "2024",
      },
      {
        sale: "179",
        year: "2025",
      },
    ] as any;

    var data2 = [
      {
        sale: "152",
        year: "2023",
      },
      {
        sale: "189",
        year: "2024",
      },
      {
        sale: "179",
        year: "2025",
      },
    ] as any;

    var vis = d3.select(d3Container.current),
      WIDTH = 300,
      HEIGHT = 150,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50,
      },
      xScale = d3
        .scaleLinear()
        .domain([2023, 2025])
        .range([MARGINS.left, WIDTH - MARGINS.right]),
      yScale = d3
        .scaleLinear()
        .range([HEIGHT - MARGINS.top, MARGINS.bottom])
        .domain([134, 215]),
      xAxis: any = d3
        .axisBottom(xScale)
        .tickValues([2023, 2024, 2025])
        .tickFormat(function (d) {
          return d3.format(".0f")(d);
        }),
      yAxis: any = d3.axisLeft(yScale).tickValues([210, 175, 140]);

    vis
      .append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);

    vis
      .append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + MARGINS.left + ",0)")
      .call(yAxis);

    var lineGen = d3
      .line()
      .x(function (d: any) {
        return xScale(d.year);
      })
      .y(function (d: any) {
        return yScale(d.sale);
      })
      .curve(d3.curveBasis);
    // .curve(d3.curveLinear);
    // .interpolate("basis");

    vis
      .append("svg:path")
      .attr("d", lineGen(data))
      .attr("stroke", "green")
      .attr("stroke-width", 1)
      .attr("fill", "none");

    vis
      .append("svg:path")
      .attr("d", lineGen(data2))
      .attr("stroke", "blue")
      .attr("stroke-width", 1)
      .attr("fill", "none");
  }, []);

  return (
    <svg
      className="!w-[100%] !max-w-[100%]"
      viewBox="0 0 300 150"
      ref={d3Container}
    />
  );
}
