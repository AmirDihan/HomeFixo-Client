import React from 'react'
import { useLoaderData } from 'react-router'
import ServicesCard from '../../components/Navbar/servicesCard'

const Services = () => {

  const data = useLoaderData()
  // console.log(data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
      {data.map((service,index) => <ServicesCard key={index} service={service}></ServicesCard>)}
    </div>
  )
}

export default Services