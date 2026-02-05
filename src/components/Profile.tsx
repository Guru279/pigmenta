import React from 'react'
import Artworkcard from './Artworkcard.tsx';
import {profileStats} from '../data/data.ts'
const Profile = () => {
  return (
    <>
  
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-8">Profile</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
       { profileStats.map ((item) => (
        <Artworkcard 
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    />
       ))}
      </div>
    </section> 


    </>
  )
}

export default Profile
