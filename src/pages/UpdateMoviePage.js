import React from 'react'
import { useParams } from 'react-router-dom';

const UpdateMoviePage = () => {
  // const params = useParams();
  const { id, slug } = useParams();
  return (
    <div>
      { id } - { slug }
    </div>
  )
}

export default UpdateMoviePage
