import { BarChart } from './components/BarChart';

function WrappedBarChart({
  parameters,
}: {
  parameters: { data: number[]; tags: [number, number] };
}) {
  const mydatamax = Math.max(...parameters.data);
  const mydata = parameters.data.map((d) => d / mydatamax);
  return (
    <BarChart
      data={mydata}
      width={400}
      height={400}
      tags={parameters.tags}
    />
  );
}

export default WrappedBarChart;
