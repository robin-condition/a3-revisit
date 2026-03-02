import { SquareAreas } from './components/SquareAreas';

function WrappedSquareAreaChart({ parameters }: {parameters: {data: number[], tags: [number, number]}}) {
  return <SquareAreas data={parameters.data} width={400} height={200} tags={parameters.tags}/>;
}

export default WrappedSquareAreaChart;
