import { SquareAreas } from './components/SquareAreas';

function WrappedSquareAreaChart({
  parameters,
}: {
  parameters: { data: number[]; tags: [number, number] };
}) {
  const mydatamax = Math.max(...parameters.data) * 1.2;
  const mydata = parameters.data.map((d) => d / mydatamax);
  return (
    <div style={{ overflow: 'scroll' }}>
      <SquareAreas
        data={mydata}
        height={200}
        tags={parameters.tags}
      />
    </div>
  );
}

export default WrappedSquareAreaChart;
