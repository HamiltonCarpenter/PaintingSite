import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import dreadImage from '../../resources/dreadnaut_frontal.jpg';
import lessonImage from '../../resources/paintinglessons.jpeg';
import ttsImage from '../../resources/ttsmodels.jpg';

const Posts = () => {
  const blogPosts = [
    {
      title: "Comissioning An Army",
      body: `Assembling and painting models takes time and painstaking effort. 
      You can save dozens of hours and represent your army with professional skill. 
      Whether it's a hundred grunts, or one intracate centerpiece, Benji has you covered.`,
      author: "Nishant Singh ",
      imgUrl: dreadImage,
        /*"/home/ham/Documents/NodeProjects/blog_site/resources/dreadnaut_frontal.jpg",*/
    },
    {
      title: "Digital Artwork",
      body: `A lot of modern wargamming happens on Tabletop Simulator. You can easily play games with people from 
      around the world without ever leaving your house. The downside is that everyone's models look the same, 
      except for yours!  `,
      author: "Monu Kr",
      imgUrl:
        ttsImage,
    },
    {
      title: "Lessons ",
      body: `You might prefer to learn how to paint better or how to work with digital modeling sofware. 
      These skills will last a lifetime and provide you with a relaxing hobby. Luckily for you, Benji is 
      a professional teacher in addition to an award winning artist!`,
      author: "Suresh Kr",
      imgUrl:
        lessonImage,
    },
    /*{
      title: "Free Consultations",
      body: `The price for each contract depends on the complexity of the model, the complexity of the desired paint job, 
      as well as the quanity and size of the figures to be painted. To get an idea of when `, 
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },*/
  ];
  
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default Posts;