import React from 'react'
import './Intro.css';
import Ekele from '@/public/access/ekele1.jpg'
import hire from '@/public/access/hire.png';
import Image from 'next/image';
// import Link from 'next/link';


const Information = () => {
  return (
    <section id='intro'>
       <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I&apos;m <span className='introName'>Ekele</span><br></br>Website Developer. </span>
            <p className='introPara lg:w-[45%] w-[80%]'>I am a skilled web developer with experience in creating <br></br>visually appealing and user friendly website. I have advance/professional knowledge/experience of HTML, CSS Tailwind, Bootstrap, JavaScript, React, Nextjs, Nodejs, mongoDB and SQL with Mysql  </p>
            {/* <Link href="#"><button className='btn'><Image width={100} height={100} src={hire} alt='hire' className='hire w-[100px]'/>Hire Me</button></Link> */}
        </div> 
       <Image width={500} height={500} src={Ekele} alt='profile' className='bg'/>
    </section>
  )
}

export default Information