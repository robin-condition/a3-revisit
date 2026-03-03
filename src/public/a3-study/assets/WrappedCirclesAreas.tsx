import { CirclesAreas } from './components/CirclesAreas';

function WrappedCirclesAreas({ parameters }: {parameters: {data: number[], tags: [number, number]}}) {
  return <CirclesAreas data={parameters.data} tags={parameters.tags} width={400} height={400} />;
}

export default WrappedCirclesAreas;
