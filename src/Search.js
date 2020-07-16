import React, {useState} from 'react'
import styled from 'styled-components'

import AppService from './app.service'

const StyledSearch = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  box-shadow: none;
  border: 1px solid #758299;
  margin-bottom: 1rem;
  border-radius: 3px;
  font-size: 1rem;
  padding: 0.5rem;

  ::placeholder {
    color: #758299;
  }
`

const StyledResults = styled.div`
  position: absolute;
  top: calc(3rem + 2px);
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  background-color: white;
  z-index: 1000;
  border: 1px solid #758299;
  border-radius: 3px;
`

const StyledSearchResult = styled.button`
  display: block;
  width: 100%;
  height: 3rem;
  font-weight: bold;
  padding: 1rem;
  margin: 0;
  border: 0;
  font-size: 1rem;
  text-align: left;

  &:hover {
    background-color: #f2f2f5;
    cursor: pointer;
  }
`

function Search({setNodeName}) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  return (
    <StyledSearch>
      <StyledInput type="text" value={query} placeholder="Find a node" onChange={e => {
        setQuery(e.target.value)
        setResults(AppService.getResults(e.target.value))
      }} />
      
      {results.length > 0 && (
        <StyledResults>
          {results.map(result => (
            <StyledSearchResult key={result} onClick={() => {
              setNodeName(result)
              setResults([])
              setQuery('')
            }}>{result}</StyledSearchResult>
          ))}
        </StyledResults>
      )}
    </StyledSearch>
  );
}

export default Search
