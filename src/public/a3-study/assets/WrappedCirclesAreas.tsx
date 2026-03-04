import { CirclesAreas } from './components/CirclesAreas';

function WrappedCirclesAreas({
  parameters,
}: {
  parameters: { data: number[]; tags: [number, number] };
}) {
  return (
    <div style={{ overflow: 'scroll' }}>
      <CirclesAreas
        data={parameters.data}
        tags={parameters.tags}
        height={200}
      />
    </div>
  );
}

export default WrappedCirclesAreas;
