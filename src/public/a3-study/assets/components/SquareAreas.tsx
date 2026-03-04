type BarplotProps = {
  width: number;
  height: number;
  tags: [number, number];
  data: number[];
};

export function SquareAreas({ tags, width, height, data }: BarplotProps) {
  return (
    <svg
      width={120 * data.length}
      height={height}
      style={{ display: "inline-block" }}
    >
      {data.map((d, i) => {
        const cx = height / 2 + i * (height / 2);
        const cy = height / 2;
        const w = (Math.sqrt(d) * height) / 2;

        return (
          <g key={i}>
            <rect
              strokeWidth={2}
              stroke="black"
              fill="none"
              width={w}
              height={w}
              x={cx - w / 2}
              y={cy - w / 2}
            />
            ({tags.indexOf(i) >= 0 && <circle r={3} cy={cy} cx={cx} />})
          </g>
        );
      })}
    </svg>
  );
}
