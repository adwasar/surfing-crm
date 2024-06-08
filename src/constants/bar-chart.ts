import { ApexOptions } from 'apexcharts';

const yAxisData = [30, 40, 45, 25, 35, 45, 80, 75, 55, 65, 30, 40];
const xAxisData = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const barChartOptions: ApexOptions = {
  dataLabels: { enabled: false },
  colors: ['#EFF4FF'],
  grid: { show: false },
  states: { hover: { filter: { type: 'none' } } },
  chart: {
    id: 'basic-bar',
    toolbar: { show: false },
    fontFamily: 'Roboto',
    redrawOnParentResize: true,
    sparkline: {
      enabled: true,
    },
  },
  title: {
    text: 'Overview',
    align: 'left',
    margin: 0,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: '22px',
      fontWeight: 500,
      color: 'black',
    },
  },
  subtitle: {
    text: 'Monthly Earning',
    align: 'left',
    margin: 0,
    offsetX: 0,
    offsetY: 30,
    floating: false,
    style: {
      fontSize: '12px',
      fontWeight: 400,
      color: '#717171',
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: { position: 'none' },
      columnWidth: '75%',
    },
  },
  xaxis: {
    categories: xAxisData,
    position: 'bottom',
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: false },
  },
  tooltip: {
    followCursor: false,
    theme: 'dark',
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="arrow_box">' +
        '<span>' +
        '🡭' +
        '  ' +
        series[seriesIndex][dataPointIndex] +
        '%' +
        '</span>' +
        '</div>'
      );
    },
  },
};
export const chartSeries = [{ data: yAxisData }];
