import React from 'react'
import { useParams } from 'react-router-dom'

const UpdataBook = () => {
    const {id} = useParams();
  return (
    <div>UpdataBook {id}</div>
  )
}

export default UpdataBook