import { SquareAreas } from './components/SquareAreas';

function WrappedSquareAreaChart({
  parameters,
}: {
  parameters: { data: number[]; tags: [number, number] };
}) {
  return (
    <div style={{ overflow: 'scroll' }}>
      <SquareAreas
        data={parameters.data}
        height={200}
        tags={parameters.tags}
      />
    </div>
  );
}

export default WrappedSquareAreaChart;
