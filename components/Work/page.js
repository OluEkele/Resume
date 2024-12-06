import "./Works.css";
import Web from "@/public/access/pic.jpg";
import Web2 from "@/public/access/image3.avif";
import Web3 from "@/public/access/image2.jpg";
import Web4 from "@/public/access/image5.jpg";
import Web5 from "@/public/access/image6.png";
import Web6 from "@/public/access/image7.jpg";
import Image from "next/image";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDes">
        I take great pride in paying attention to the smallest details and
        ensuring that my work is pixel-perfect. With a passion for creating
        seamless user experiences, I strive to deliver high-quality projects
        that help businesses achieve their goals and establish a strong online
        presence. I am excited to apply my skills and experience to bring
        innovative solutions to every project I work on.
      </span>
      <div className="worksImgs">
        <Image
          width={300}
          height={300}
          src={Web}
          alt="..."
          className="worksImg"
        />
        <Image
          width={300}
          height={300}
          src={Web2}
          alt="..."
          className="worksImg"
        />
        <Image
          width={300}
          height={300}
          src={Web3}
          alt="..."
          className="worksImg"
        />
        <Image
          width={300}
          height={300}
          src={Web4}
          alt="..."
          className="worksImg"
        />
        <Image
          width={300}
          height={300}
          src={Web5}
          alt="..."
          className="worksImg"
        />
        <Image
          width={300}
          height={300}
          src={Web6}
          alt="..."
          className="worksImg"
        />
      </div>
      <button className="worksBtn">See more</button>
    </section>
  );
};

export default Works;
