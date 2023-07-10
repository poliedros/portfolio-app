import * as d3 from "d3";
import { useEffect, useRef } from "react";

// interface IProps {
//   data?: number[];
// }

/* Component */
export default function MyD3Component(props: any) {
  const d3Container = useRef(null);
  /* The useRef Hook creates a variable that "holds on" to a value across rendering
     passes. In this case it will hold our component's SVG DOM element. It's
     initialized null and React will assign it later (see the return statement) */

  /* The useEffect Hook is for running side effects outside of React,
     for instance inserting elements into the DOM using D3 */
  useEffect(
    () => {
      // if (props.data && d3Container.current) {
      const svg = d3
        .select(d3Container.current)
        .attr("width", "100%")
        .attr("height", "100%")
        .append("g")
        .attr("transform", "translate(50, 50)");
      // .attr("transform", "translate(" + 300 / 2 + "," + 200 / 2 + ")");
      // d3
      //   .select("body")
      //   .append("svg")
      //   .attr("width", 300)
      //   .attr("height", 200)
      //   .append("g")
      //   .attr("transform", "translate(" + 300 / 2 + "," + 200 / 2 + ")");

      var pie = d3.pie().sort(null);
      var arc: any = d3.arc().innerRadius(50).outerRadius(25);

      // Bind D3 data
      let path = svg.selectAll("path").data(pie([45, 30, 18, 7]));
      // const update = svg.append("g").selectAll("text").data([1, 2, 4]);

      var pathEnter = path
        .enter()
        .append("path")
        .attr("fill", function (d: any, i: any) {
          return ["#ecffcb", "#bef264", "#84cc16", "#4d7c0f"][i];
        })
        .attr("d", arc);
      var pathUpdate = path.attr("d", arc);

      // // Enter new D3 elements
      // update
      //   .enter()
      //   .append("text")
      //   .attr("x", (d, i) => i * 25)
      //   .attr("y", 40)
      //   .style("font-size", 24)
      //   .text((d: number) => d);

      // // Update existing D3 elements
      // update.attr("x", (d, i) => i * 40).text((d: number) => d);

      // // Remove old D3 elements
      // update.exit().remove();
      // }
    },

    /*
          useEffect has a dependency array (below). It's a list of dependency
          variables for this useEffect block. The block will run after mount
          and whenever any of these variables change. We still have to check
          if the variables are valid, but we do not have to compare old props
          to next props to decide whether to rerender.
      */
    [] //props.data, d3Container.current
  );

  return <svg viewBox="0 0 100 100" ref={d3Container} />;
}

/* App */
// function Chart() {
//   return (
//     <div>
//       <MyD3Component />
//     </div>
//   );
// };
