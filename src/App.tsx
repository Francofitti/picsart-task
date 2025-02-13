import { useState } from 'react'

import { usePexelsAPI } from './Pexels.api'
import styled from 'styled-components';
import Search from './Search';


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 16px;
  padding: 16px;
`;

const GridRow = styled.div`
  display: contents; /* Ensures it works as a logical grouping and inherits the grid layout */
`;

const GridItem = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [search, setSearch] = useState("people")
  const {data, isLoading, isError} = usePexelsAPI(search)


  return (
    <>
      <Search onSearch={(value) => {
        setSearch(value)
      }}/>
      {isLoading && <div> Loading </div>}
      <GridContainer>
        {data?.photos.map(it => {
          return (<GridItem key={it.id}> <img src={it.src.small}/></GridItem>)
        })}
      </GridContainer>
      <div>{isError}</div>
    </>
  )
}

export default App
