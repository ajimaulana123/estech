import React from 'react'
import CardProject from './CardProject'

const ProjectSection = () => {
  return (
    <section className='container px-5 grid grid-cols-2 gap-5'>
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </section>
  )
}

export default ProjectSection