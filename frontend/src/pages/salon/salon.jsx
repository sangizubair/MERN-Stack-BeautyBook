import React from 'react'
import SalonCard from '../../components/Salon/SalonCards'
import salons from '../../assets/data/salon'
import { Link } from 'react-router-dom'

const salon = () => {
  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Salon</h2>
          <div className='max-w-[570px] mt-[30px] bg-[#0066ff2c] mx-auto rounded-md flex items-center  justify-center  '>
            <input type="text" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='search salon..' />
            <button className='bg-btnColor btn mt-0 rounded-[0px] rounded-r-md'>
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1'>
            {salons.map((salon) => (
              <Link key={salon.id} to={`/salonDetail/${salon.id}`}>
                <div className='px-5 py-5'>
                  <SalonCard key={salon.id} salon={salon} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default salon