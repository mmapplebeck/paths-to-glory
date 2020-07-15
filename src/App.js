import React, {useState} from 'react';
import Chart from "react-google-charts";

import {getPaths, getResults} from './chart.service'

function App() {
  const [data, setData] = useState(getPaths('Demographics'))
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  return (
    <div className="App">
      Search
      <input type="text" value={query} onChange={e => {
        setQuery(e.target.value)
        setResults(getResults(e.target.value))
      }} />
      {results.length > 0 && (
        <div>
          Results
          {results.map(result => (
            <div>
              <button key={result} onClick={() => {
                setData(getPaths(result))
                setResults([])
                setQuery('')
              }}>{result}</button>
            </div>
          ))}
        </div>
      )}
      
      <Chart
        width={600}
        height={'300px'}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          sankey: {
            node: {
              interactivity: true
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
                setData(getPaths(name))
              }
            },
          }
        ]}
      />
    </div>
  );
}

export default App;
