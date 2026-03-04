import * as d3 from "d3";
import { useEffect, useRef } from "react";

type BarplotProps = {
  width: number;
  height: number;
  tags: [number, number];
  data: number[];
};

export function BarChart({ tags, width, height, data }: BarplotProps) {
  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map((_: number, i: number) => i.toString()))
    .padding(0.2);

  const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

  const x_a = useRef<React.SVGProps<SVGGElement>>(undefined);
  const y_a = useRef<React.SVGProps<SVGGElement>>(undefined);

  useEffect(() => {
    // @ts-ignore
    // d3.select(x_a.current).call(d3.axisBottom(x));
    // @ts-ignore
    // d3.select(y_a.current).call(d3.axisLeft(y));
  }, [x_a, y_a]);

  const offset = 20;

  const y_a_e = (
    // @ts-ignore
    <g transform={`translate(${offset}, ${-offset})`} ref={y_a}></g>
  );
  const x_a_e = (
    // @ts-ignore
    <g ref={x_a} transform={`translate(${offset}, ${height - offset} )`}></g>
  );

  return (
    <svg
      width={width + offset}
      height={height + offset}
      style={{ display: "inline-block" }}
    >
      {x_a_e}
      {y_a_e}
      {data.map((d, i) => (
        <g key={i}>
          {tags.indexOf(i) >= 0 && (
            <circle
              r={3}
              cx={x.bandwidth() / 2 + (x(i.toString()) ?? 0) + offset}
              cy={height - height * d - 20 - offset}
              fill="black"
            />
          )}
          <rect
            // fill={colors[i]}
            strokeWidth={2}
            stroke="black"
            fill="none"
            y={height - height * d - offset}
            x={(x(i.toString()) ?? 0) + offset}
            width={x.bandwidth()}
            height={height * d}
          />
        </g>
      ))}
    </svg>
  );
}
