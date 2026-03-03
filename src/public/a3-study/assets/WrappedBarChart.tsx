import { BarChart } from './components/BarChart';

function WrappedBarChart({ parameters }: {parameters: {data: number[], tags: [number, number]}}) {
  return <BarChart data={parameters.data} width={400} height={800} tags={parameters.tags} />;
}

export default WrappedBarChart;
