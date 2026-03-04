import * as d3 from 'd3';
import { SquareColor } from './components/SquareColor';

function WrappedSquareColorChart({ parameters }: {parameters: {data: number[], tags: [number, number]}}) {
  const mydatamax = Math.max(...parameters.data) * 1.3;
  const mydata = parameters.data.map((d) => d / mydatamax);
  return <SquareColor data={mydata} width={400} height={200} tags={parameters.tags} fn={(d) => d3.lch(50, d * 230, 0, 1).toString()} />;
}

export default WrappedSquareColorChart;
