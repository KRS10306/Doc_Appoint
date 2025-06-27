import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const About = () => {

  const {assets} = useContext(AppContext)

  return (
    <div>
      <h1 className='text-center text-2xl m-10'>ABOUT US</h1>
      <div className='flex gap-10'>

        <div>
          <img className='max-w-80' src={assets.about_image} alt="" />
        </div>

        <div className=' text-gray-500'>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime voluptates ab, vel, magnam accusantium accusamus culpa sequi quis corrupti illum non neque officia excepturi quas. Ab labore temporibus natus?
      Repudiandae fuga, modi eum iste quis quod culpa <br /> <br /> illo amet nostrum numquam vero illum, officia aliquid aut voluptas soluta impedit repellat sit animi vitae. Animi et possimus tempora cum illo!
      Commodi quia id odio repellat, maxime illum. Nihil, voluptas ipsum! Numquam sequi magni veniam ex possimus inventore, dicta, repudiandae et nisi assumenda quo deleniti voluptatem, eius tempore at placeat dolorem!
      Lorem ipsum dolor sit amet consectetur, adipisicingus <br /><br />delectus asperiores! Provident sequi nulla, et excepturi voluptates ullam expedita odio nostrum dolor nesciunt, natus vel, accusamus repellat dolorum soluta libero!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium dolores veniam quidem et, ipsa nisi officia facilis rem architecto, fugiat quaerat, dolorem sapiente quasi maiores. Atque quae quas sequi?
      </p>
      </div>
      </div>
      <div className='my-20'>
        <h1 className='mb-10 font-semibold text-xl text-gray-500'>WHY <span className='text-black'>CHOOSE US</span> </h1>
        <table>
          <td className='border p-12 pr-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
          <td className='border p-12 pr-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
          <td className='border p-12 pr-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
        </table>
      </div>
    </div>
  )
}

export default About