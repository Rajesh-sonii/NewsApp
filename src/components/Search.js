import React from 'react'
import { useLocation } from 'react-router-dom'

import NewsSection from './NewsSection'
function Search(props) {
    const location = useLocation();
  return (
    <NewsSection setProgress={props.setProgress} api_key={props.api_key} key='sports' category='sports' pageSize={10} country={`q=${location.value}`} />
  )
}

export default Search
