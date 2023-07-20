import * as d3 from "d3";
import { sankey, sankeyCenter, sankeyLinkHorizontal } from "d3-sankey";
import { stringify } from "querystring";
import { useEffect, useRef } from "react";
import { MdLinearScale } from "react-icons/md";

export default function MyD3Component5(props: any) {
  const d3Container = useRef(null);
  useEffect(() => {
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 10, bottom: 10, left: 10 },
      width = 300 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    // format variables
    var formatNumber = d3.format(",.0f"), // zero decimal places
      format = function (d: any) {
        return formatNumber(d);
      },
      color = d3.scaleOrdinal(d3.schemeCategory10);

    // append the svg object to the body of the page
    var svg = d3
      .select(d3Container.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Set the sankey diagram properties
    var sankeyV = sankey()
      .nodeWidth(36)
      .nodePadding(40)
      .size([width, height]) as any;

    var path = sankeyV.links();

    // load the data
    d3.json("/sankey.json").then(function (sankeydata) {
      let graph = sankeyV(sankeydata);

      // add in the links
      var link = svg
        .append("g")
        .selectAll(".link")
        .data(graph.links)
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", sankeyLinkHorizontal() as any)
        .attr("stroke-width", function (d: any) {
          return d.width;
        });

      // add the link titles
      link.append("title").text(function (d: any) {
        return d.source.name + " → " + d.target.name + "\n" + format(d.value);
      });

      // add in the nodes
      var node = svg
        .append("g")
        .selectAll(".node")
        .data(graph.nodes)
        .enter()
        .append("g")
        .attr("class", "node");

      // add the rectangles for the nodes
      node
        .append("rect")
        .attr("x", function (d: any) {
          return d.x0;
        })
        .attr("y", function (d: any) {
          return d.y0;
        })
        .attr("height", function (d: any) {
          return d.y1 - d.y0;
        })
        .attr("width", sankeyV.nodeWidth())
        .style("fill", function (d: any) {
          return (d.color = color(d.name.replace(/ .*/, "")));
        })
        .style("stroke", function (d: any) {
          return d3.rgb(d.color).darker(2) as any;
        })
        .append("title")
        .text(function (d: any) {
          return d.name + "\n" + format(d.value);
        });

      // add in the title for the nodes
      node
        .append("text")
        .attr("x", function (d: any) {
          return d.x0 - 6;
        })
        .attr("y", function (d: any) {
          return (d.y1 + d.y0) / 2;
        })
        .attr("dy", "0.35em")
        .attr("text-anchor", "end")
        .text(function (d: any) {
          return d.name;
        })
        .filter(function (d: any) {
          return d.x0 < width / 2;
        })
        .attr("x", function (d: any) {
          return d.x1 + 6;
        })
        .attr("text-anchor", "start")
        .style("fill", function (d: any) {
          return (d.color = color(d.name.replace(/ .*/, "")));
        });
    });
  }, []);

  return (
    <svg
      className="!w-[100%] !max-w-[100%]"
      viewBox="0 0 300 200"
      ref={d3Container}
    />
  );
}
