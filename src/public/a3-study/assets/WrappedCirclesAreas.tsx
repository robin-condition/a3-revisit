import { CirclesAreas } from './components/CirclesAreas';

function WrappedCirclesAreas({
  parameters,
}: {
  parameters: { data: number[]; tags: [number, number] };
}) {
  const mydatamax = Math.max(...parameters.data) * 1.4;
  const mydata = parameters.data.map((d) => d / mydatamax);
  return (
    <div style={{ overflow: 'scroll' }}>
      <CirclesAreas
        data={mydata}
        tags={parameters.tags}
        height={200}
      />
    </div>
  );
}

export default WrappedCirclesAreas;
