import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vero fugit consequuntur voluptatum animi deserunt necessitatibus nobis modi soluta aperiam adipisci labore blanditiis minima est, nulla beatae accusantium. Deleniti, ea!
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore provident sapiente repudiandae ullam, ratione minus veniam molestiae sed reiciendis, ex ipsam necessitatibus totam incidunt voluptate explicabo, expedita temporibus quam quasi.
            </p>
        </div>
    </div>
  )
}

export default About