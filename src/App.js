import React, {useState, useEffect} from 'react';

import AppService from './app.service'
import './App.css'
import Search from './Search'
import Sankey from './Sankey'

const colors = [
  '#5051DB',
  '#05bfe0',
  '#1463b0',
  '#33d1bf',
  '#0a7387',
  '#33f5f5',
]

function App() {
  const [nodeName, setNodeName] = useState('Visit List')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    AppService
      .getDataForNode(nodeName)
      .then(response => setData(response))
      .catch((message => setError(message)))
      .finally(() => setIsLoading(false))
  }, [nodeName])

  return (
    <div className="App">
      {data && (
        <>
          <Sankey data={data} setNodeName={setNodeName} />
        </>
      )}
      {error && (
        <div>There was an error.</div>
      )}
      {isLoading && (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
