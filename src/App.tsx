import { useState } from 'react'

import { usePexelsAPI } from './Pexels.api'

import Search from './Search';
import { Grid } from './Grid';




function App() {
  const [search, setSearch] = useState("people")
  const {data, isLoading, size, setSize} = usePexelsAPI(search)

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Search onSearch={(value) => {
        setSearch(value)
      }}/>
      <Grid data={data?.flatMap(it => it.photos) || []} onEndReached={(bottom) => {
        if(bottom)
          setSize(size + 1)
      }} />
    </>
  )
}

export default App
