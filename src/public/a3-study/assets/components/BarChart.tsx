import * as d3 from 'd3';

type BarplotProps = {
  width: number;
  height: number;
  tags: [number, number];
  data: number[];
};

export function BarChart({
  tags, width, height, data,
}: BarplotProps) {
  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map((_: number, i: number) => i.toString()))
    .padding(0.2);

  const offset = 20;

  return (
    <svg
      width={width + offset}
      height={height + offset}
      style={{ display: 'inline-block' }}
    >
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
