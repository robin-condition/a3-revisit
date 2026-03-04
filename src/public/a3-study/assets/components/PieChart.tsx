import { useMemo } from 'react';
import * as d3 from 'd3';

type PieChartProps = {
  width: number;
  height: number;
  data: number[];
  tags: [number, number];
};

const MARGIN = 30;

export function PieChart({
  tags, width, height, data,
}: PieChartProps) {
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pieGenerator = d3.pie<any, number>().value((d) => d);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    return pie.map((p) => ({
      path: arcPathGenerator({
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      }),
      cen: arcPathGenerator.centroid({
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      }),
    }));
  }, [radius, pie]);

  return (
    <svg width={width} height={height} style={{ display: 'inline-block' }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => (
          <>
            {tags.indexOf(i) >= 0 && (
              <circle
                r={3}
                transform={`translate(${arc.cen})`}
                fill="black"
              />
            )}
            <path
              key={i}
              d={arc.path ?? ''}
              strokeWidth={2}
              stroke="black"
              fill="none"
            />
          </>
        ))}
      </g>
    </svg>
  );
}
