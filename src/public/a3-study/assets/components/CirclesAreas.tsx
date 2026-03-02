type BarplotProps = {
  width: number;
  height: number;
  tags: [number, number];
  data: number[];
};

export function CirclesAreas({ tags, width, height, data }: BarplotProps) {
  return (
    <svg
      width={width * data.length}
      height={height}
      style={{ display: 'inline-block' }}
    >
      {data.map((d, i) => (
        <>
          <circle
            r={(Math.sqrt(d / Math.PI) * height) / 2}
            strokeWidth={2}
            stroke='black'
            fill='none'
            cy={height / 2}
            cx={height / 2 + i * (height / 2)}
          />
          (
          {tags.indexOf(i) >= 0 && (
            <circle r={3} cy={height / 2} cx={height / 2 + i * (height / 2)} />
          )}
          )
        </>
      ))}
    </svg>
  );
}
