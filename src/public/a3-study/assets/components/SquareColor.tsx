import * as d3 from 'd3';

type BarplotProps = {
  width: number;
  height: number;
  tags: [number, number];
  data: number[];
  fn: (d: number) => string;
};

const padding = 0.2;

export function SquareColor({ fn, tags, width, height, data }: BarplotProps) {
  var x = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map((_: number, i: number) => i.toString()))
    .padding(padding);

  return (
    <svg
      width={width + x.bandwidth() + padding * 2}
      height={height}
      style={{ display: 'inline-block' }}
    >
      <rect
        fill={fn(0)}
        y={0}
        x={0}
        width={x.bandwidth()}
        height={height / 2}
      />
      <rect
        fill={fn(1)}
        y={height / 2}
        x={0}
        width={x.bandwidth()}
        height={height / 2}
      />
      {data.map((d, i) => (
        <>
          <rect
            fill={fn(d)}
            y={10}
            x={x.bandwidth() + padding + (x(i.toString()) ?? 0)}
            width={x.bandwidth()}
            height={height}
          />
          (
          {tags.indexOf(i) >= 0 && (
            <circle
              cy={height / 2}
              cx={
                x.bandwidth() +
                padding +
                x.bandwidth() / 2 +
                (x(i.toString()) ?? 0)
              }
              r={3}
              fill={'black'}
            />
          )}
          )
        </>
      ))}
    </svg>
  );
}
