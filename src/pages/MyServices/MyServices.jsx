import React from 'react'
import { use } from 'react'
import AuthContext from '../../context/AuthContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { DotLoader } from 'react-spinners';
import ProviderServiceCard from '../../components/Navbar/ProviderServiceCard';
import { toast } from 'react-toastify';

const MyServices = () => {

  const {user} = use(AuthContext)
  const [providerServices, setProviderServices] = useState([])
  const [loader, sertLoader] = useState(true)
  useEffect(() => {
    fetch(`https://home-fixo-server.vercel.app/my-services?email=${user.email}`)
    .then(res => {return res.json()})
    .then(data => {
      // console.log(data.result)
      setProviderServices(data.result)
      sertLoader(false)
    })
    .catch(error => {
      toast.error(error)
      sertLoader(false)
    })
  },[user?.email])

  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-75">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }
  return (
    <div className='max-w-200 mx-auto space-y-6'>
      {providerServices.map((service, index) => <ProviderServiceCard service={service} key={index}></ProviderServiceCard>)}
    </div>
  )
}

export default MyServices