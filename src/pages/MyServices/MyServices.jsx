import React from 'react'
import { use } from 'react'
import AuthContext from '../../context/AuthContext'
import { useEffect } from 'react'
import { useState } from 'react'
import ProviderServiceCard from '../../components/Navbar/ProviderServiceCard'

const MyServices = () => {

  const {user} = use(AuthContext)
  const [providerServices, setProviderServices] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/my-services?email=${user.email}`)
    .then(res => {return res.json()})
    .then(data => {
      console.log(data.result)
      setProviderServices(data.result)
    })
    .catch(error => console.log(error.message))
  },[user?.email])
  return (
    <div className='mt-10 max-w-200 mx-auto space-y-4'>
      {providerServices.map((service, index) => <ProviderServiceCard service={service} key={index}></ProviderServiceCard>)}
    </div>
  )
}

export default MyServices