

import Story from '../story/story'
import AddStory from "../addstory/addstory"

import { useState } from "react"
import { useEffect } from "react";

function StoryReel({ fullName }) {
  const defaultAddImg = "./assets/defaultAddImg.jpeg";

  const [storyIds, setStoryIds] = useState([]);
  const [renderReel, setRenderReel] = useState(false);

   useEffect(() =>  {
   fetch("http://localhost:5000/api/v1/employee/story", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(
        obj =>{ 
          console.log("hello");
          setStoryIds(obj);
        }
    );
   }, []);

  return (
    <div className='storyReel'>
      <AddStory
       
        setRenderReel= { setRenderReel }
        renderReel={ renderReel }
      />
     
    <div className='wrapped'>
      { 
        storyIds.map((s) => {
          return  <Story
                    key = {s.key} 
                    imageId = { s.name } 
                    title = { s.number } 
                  />;
        }) 
      }
      </div>
    </div>
  )
}

export default StoryReel