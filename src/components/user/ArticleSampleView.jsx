import React from 'react'
import { useLocation } from 'react-router-dom'

const ArticleSampleView = ({ name}) => {
  const location = useLocation();

  const prevPath = new URLSearchParams(location.search).get('prevPath');

  
  
  return (
    <div>{name} sample view</div>
  )
}

export default ArticleSampleView