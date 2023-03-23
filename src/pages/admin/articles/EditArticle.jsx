import React from 'react'
import { useParams } from 'react-router-dom'

const EditArticle = () => {
    const {id} = useParams();
  return (
    <div>EditArticle {id}</div>
  )
}

export default EditArticle