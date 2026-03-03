import * as d3 from 'd3';
import { SquareColor } from './components/SquareColor';

function WrappedSquareColorChart({ parameters }: {parameters: {data: number[], tags: [number, number]}}) {
  return <SquareColor data={parameters.data} width={400} height={400} tags={parameters.tags} fn={(d) => d3.lch(50, d * 230, 0, 1).toString()} />;
}

export default WrappedSquareColorChart;
