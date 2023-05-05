import "./AboutUs.scss";
import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";

function AboutUsPage() {
  const Members = [
    {
      imageSrc: "https://i.postimg.cc/R02gGKCs/photo-anne.jpg",
      name: "Anne MARCHASSON",
      description:
        "Pure northerner, I am the youngest of a large family, so I am nicknamed Titanne. Formerly a graphic designer, I am in conversion to become a front-end web developer. Some passions: conference, cinema, painting, sculpture, Harry Potter.",
      linkedin: "https://www.linkedin.com/in/anne-marchasson/",
    },
    {
      imageSrc: "https://i.postimg.cc/j5jFkty2/photo-ambre.jpg",
      name: "Ambre HENNO",
      description:
        "Passionate about computers and new technologies since my teen years, discovering a real passion for development and design. I am currently in training a web developer at the Wild Code School.Some hobbies :music, cinema, video games, fashion and design.",
      linkedin: "https://www.linkedin.com/in/h-ambre/",
    },
    {
      imageSrc: "https://i.postimg.cc/ryN9Rv4Y/photo-anthony.jpg",
      name: "Anthony SENECHAL",
      description:
        "Southerner of origin (NARBONNE), and second of the family. Formerly a warehouse operator, I'm in reconversion to become a FullStack web developer. Some passions: sport, cinema, car, motorcycle, mangas.",
      linkedin: "https://www.linkedin.com/in/anthony-senechal-1b0928265/",
    },
    {
      imageSrc: "https://i.postimg.cc/mDbtv6rt/photo-mohamed.jpg",
      name: "Mohamed AIT AMAR",
      description:
        "After choosing to retrain professionally, I finally found my way. The field of web development fascinates me and motivates me to provide the best of myself.",
      linkedin: "https://www.linkedin.com/in/mohamed-ait-amar/",
    },
    {
      imageSrc: "https://i.postimg.cc/1zdHqkHz/photo-alex.jpg",
      name: "Alexandre ROUZIERE",
      description:
        "Originally from Bretagne, I'am the understudy of Stephane Plaza, I decided to get out of the shadows and become a full stack web developer. I love soccer and more especially PSG. I also like to go to restaurants and travel as many times as possible.",
      linkedin: "https://www.linkedin.com/in/alexandre-rouziere-2b6833217/",
    },
  ];

  return (
    <div className="test2">
      {Members.map((people) => (
        <AboutUs
          imageSrc={people.imageSrc}
          name={people.name}
          description={people.description}
          linkedin={people.linkedin}
        />
      ))}
    </div>
  );
}
export default AboutUsPage;
