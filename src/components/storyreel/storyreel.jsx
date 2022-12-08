import "./StoryReel.css"

import Story from '../story/Story'
import AddStory from "../add-story/AddStory"

import { useState } from "react"
import { useEffect } from "react";

function StoryReel({ fullName }) {
  const defaultAddImg = "./assets/defaultAddImg.jpeg";

  const [storyIds, setStoryIds] = useState([]);
  const [renderReel, setRenderReel] = useState(false);

  useEffect(() =>  {
    fetch("http://localhost/api/v1/employee/story", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(
        obj =>{ 
          setStoryIds(obj);
        }
    );
  }, [renderReel]);

  return (
    <div className='storyReel'>
      <AddStory
        fullName={ fullName }
        profileSrc={ defaultAddImg }
        setRenderReel= { setRenderReel }
        renderReel={ renderReel }
      />
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
  )
}

export default StoryReel