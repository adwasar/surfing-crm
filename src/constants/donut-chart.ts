import { ApexOptions } from 'apexcharts';

const donutColors = {
  series1: '#4C74F6',
  series2: '#FFC045',
  series3: '#826bf8',
  series4: '#1FD5EB',
  series5: '#ffa1a1',
};
export const donutData = [65, 15, 10, 10];
const donutLabels = ['Total New Customers', 'Networking', 'Hiring', 'R&D'];

export const donutChartOptions: ApexOptions = {
  chart: {
    id: 'basic-donut',
    fontFamily: 'Roboto',
    // redrawOnParentResize: false,
  },
  labels: donutLabels,
  colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
  dataLabels: { enabled: false },
  legend: { show: false },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.8,
      opacityTo: 1,
      stops: [10, 80, 100],
    },
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            fontSize: '12px',
            color: '#717171',
          },
          value: {
            fontSize: '24px',
            color: 'black',
            fontWeight: '700',
            formatter(val) {
              return val + '%';
            },
          },
        },
      },
    },
  },
};
