import React from "react";
import "./Intro.css";
import Ekele from "@/public/access/ekele1.jpg";
import hire from "@/public/access/hire.png";
import Image from "next/image";
// import Link from 'next/link';

const Information = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I&apos;m <span className="introName">Ekele</span>
          <br></br>Website Developer.{" "}
        </span>
        <p className="introPara lg:w-[45%] w-[80%]">
          I am a skilled web developer with expertise in creating visually
          appealing and user-friendly websites. With advanced knowledge in HTML,
          CSS, Tailwind, Bootstrap, JavaScript, React, Next.js, Node.js,
          MongoDB, and SQL (MySQL), I have the experience needed to build
          robust, scalable web applications. My focus is on delivering
          high-quality solutions that provide a seamless user experience, and I
          am always eager to expand my skills and stay current with industry
          trends.
        </p>
        {/* <Link href="#"><button className='btn'><Image width={100} height={100} src={hire} alt='hire' className='hire w-[100px]'/>Hire Me</button></Link> */}
      </div>
      <Image
        width={500}
        height={500}
        src={Ekele}
        alt="Ekele React Developer Portfolio"
        className="bg"
      />
    </section>
  );
};

export default Information;
