import React, {useState} from 'react';
import classNames from 'classnames'
import Chart from "react-google-charts";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isHovering: {
    cursor: 'pointer'
  },
}))

function Sankey({data, nodeName, setNodeName}) {
  const theme = useTheme();
  const [isHovering, setIsHovering] = useState(false)
  const classes = useStyles()

  return(
    <div className={classNames(
      classes.root,
      {
        [classes.isHovering]: isHovering,
      }
    )}>
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
          },
          {
            eventName: "ready",
            callback: ({ chartWrapper, google }) => {
              const chart = chartWrapper.getChart();
              google.visualization.events.addListener(
                chart,
                "onmouseover",
                e => {
                  const {name} = e
                  if (name && name !== nodeName) {
                    setIsHovering(true)
                  }
                }
              );
              google.visualization.events.addListener(
                chart,
                "onmouseout",
                () => {
                  setIsHovering(false)
                }
              );
            }
          }
        ]}
      />
    </div>
  )
}

export default Sankey
