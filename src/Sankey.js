import React from 'react';
import Chart from "react-google-charts";

const colors = [
  '#5051DB',
  '#05bfe0',
  '#1463b0',
  '#33d1bf',
  '#0a7387',
  '#33f5f5',
]

function Sankey({data, setNodeName}) {
  return(
    <Chart
      width={'100%'}
      height={'100%'}
      chartType="Sankey"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        sankey: {
          node: {
            width: 100,
            interactivity: true,
            colors,
            nodePadding: 16,
            label: {
              fontSize: 16,
              bold: true,
            }
          },
          link: {
            colors,
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
