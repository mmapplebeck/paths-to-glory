import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AppService, {stripCycleSuffix} from './app.service'
import './App.css'
import Sankey from './Sankey'
import Header from './Header'
import errorImage from './images/error.png';

const colors = [
  '#5051DB',
  '#05bfe0',
  '#1463b0',
  '#33d1bf',
  '#0a7387',
  '#33f5f5',
]

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5051DB',
    },
    colors,
  },
});

const StyledMain = styled.main`
  padding: 1rem;
  padding-top: calc(4rem + 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`

const StyledLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  text-align: center;
`

const StyledErrorImage = styled.img`
  max-width: 40%;
  margin-bottom: 1rem;
`

function App() {
  const [nodeName, setNodeName] = useState('Visit List')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    AppService
      .getDataForNode(nodeName)
      .then(response => {
        setData(response)
        setError(null)
      })
      .catch(err => {
        console.log(error)
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [nodeName])

  const handleSetNodeName = nodeName => {
    setNodeName(stripCycleSuffix(nodeName))
  }

  return (
    <ThemeProvider theme={theme}>
      <Header setNodeName={handleSetNodeName} />
      <StyledMain>
        {data && !error && (
          <>
            <Sankey data={data} nodeName={nodeName} setNodeName={handleSetNodeName} />
          </>
        )}
        {error && (
          <StyledError>
            <StyledErrorImage src={errorImage} alt="error" />
            <Typography variant="h6">
              {error}
            </Typography>
          </StyledError>
        )}
        {isLoading && (
          <StyledLoading>
            <CircularProgress color="primary" size={100} />
          </StyledLoading>
        )}
      </StyledMain>
    </ThemeProvider>
  );
}

export default App;
