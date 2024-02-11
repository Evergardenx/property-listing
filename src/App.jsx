import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header/Header'
import HouseListing from '../src/components/HouseListing/HouseListing'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  const [selectedData, setSelectData] = useState("")

  const handleSearch = (data) => {
    setSelectData(data)
  }

  return (
    <>
      <Header/>
      <SearchBar onSearch={handleSearch}/>
      <HouseListing data={selectedData}/>
    </>
  )
}

export default App
