import { PieChart } from './components/PieChart';

function WrappedPieChart({ parameters }: {parameters: {data: number[], tags: [number, number]}}) {
  return <PieChart data={parameters.data} width={400} height={400} tags={parameters.tags} />;
}

export default WrappedPieChart;
