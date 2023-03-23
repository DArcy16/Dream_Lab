import React from 'react'
import { useParams } from 'react-router-dom'
import Chapter from './Chapter';

const UpdataBook = () => {
    const {id} = useParams();
  return (
		<>
			<div>UpdataBook {id}</div>
      <hr className='my-4' />
      <Chapter />
		</>
	);
}

export default UpdataBook;