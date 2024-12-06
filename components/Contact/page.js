"use client";
import React from "react";
import "./Contact.css";
import { SiWalmart } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import Facebook from "@/public/access/contact1.jpg";
import Youtube from "@/public/access/youtube.webp";
import Instagram from "@/public/access/instagram.png";
import Linkedln from "@/public/access/linkedln.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z8pgi4n",
        "template_wunqe9t",
        form.current,
        "5-LdgElK_DoUGYRWThRLN"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My clients</h1>
        <p className="clientsDesc">
          I have had the opportunity to work with a diverse group of clients,
          including notable companies. This experience has provided me with
          valuable knowledge in project management, work control, and time
          management, allowing me to effectively meet deadlines and deliver
          high-quality results in dynamic environments.
        </p>
        <div className="clientsImages">
          <SiWalmart className="clientImage" />
          <FaMicrosoft className="clientImage Image1" />
          <SiAdobeillustrator className="clientImage Image2" />
          <FaSquareFacebook className="clientImage Image3" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button type="submit" className="submitBtn " value="Send">
            Submit
          </button>
          <div className="links">
            <Link href="https://wwww.facebook.com/ekel.godswill">
              <Image
                width={100}
                height={100}
                alt="..."
                className="link"
                src={Facebook}
              />
            </Link>
            <Link href="https://wwww.youtube.com/@EkeleOlu">
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                width={100}
                height={100}
                alt="..."
                className="link"
                src={Youtube}
              />
            </Link>
            <Link href="https://www.instagram.com/olu5559/profilecard/?igsh=b2R0bTM1M3pjc3k5">
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                width={100}
                height={100}
                alt="..."
                className="link"
                src={Instagram}
              />
            </Link>
            <Link href="https://x.com/ekele_olu?t=UO2CX1fBRVIJTFtb92JXyQ&s=08">
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                width={100}
                height={100}
                alt="..."
                className="link"
                src="/access/twitter2.png"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/ekeleolu">
              <Image
                width={100}
                height={100}
                alt="..."
                className="link"
                src={Linkedln}
              />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
