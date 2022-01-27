import ReactApexChart from 'react-apexcharts';
import { useStarWars } from '../../hooks/useStarWars';
import { getGraphXAxis, getGraphYAxis } from '../../utils/graphUtils';

export function Graph() {
  const { selectedEntity, entityType } = useStarWars();
  const state = {
    series: [{
      name: 'Series 1',
      data: getGraphYAxis(entityType, selectedEntity),
    }],
    options: {
      chart: {
        height: 350,
        type: 'radar',
      },
      title: {
        text: selectedEntity?.name,
      },
      xaxis: {
        categories: getGraphXAxis(entityType),
      },
    },
  };

  // @ts-ignore
  return (<ReactApexChart options={state.options} series={state.series} type="radar" height={350} />
  );
}
