import React from 'react';
import Chart from "react-google-charts";
import CircularProgress from '@material-ui/core/CircularProgress';
import {useTheme } from '@material-ui/core/styles';

function Sankey({data, setNodeName}) {
  const theme = useTheme();

  return(
    <Chart
      width={'100%'}
      height={'100%'}
      chartType="Sankey"
      loader={(
        <CircularProgress color="primary" size={100} />
      )}
      data={data}
      options={{
        sankey: {
          node: {
            width: 100,
            interactivity: true,
            colors: theme.palette.colors,
            nodePadding: 16,
            label: {
              fontSize: 16,
              bold: true,
            }
          },
          link: {
            colors: theme.palette.colors,
            colorMode: 'gradient',
            fillOpacity: 0.9,
          }
        }
      }}
      chartEvents={[
        {
          eventName: 'select',
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart()
            const selection = chart.getSelection()
            if (selection.length === 1) {
              const [selectedItem] = selection
              const {name} = selectedItem
              setNodeName(name)
            }
          },
        }
      ]}
    />
  )
}

export default Sankey
