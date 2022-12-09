import './addstory.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useState } from 'react';

function AddStory({ profileSrc, setRenderReel }) {
  const [file, setFile] = useState(null);

  const onSubmit = () => {
    const data = new FormData();
    data.append('image', file);
    data.append('number',localStorage.getItem('number'));
    if(file==null)
      return;
    
    fetch("http://localhost:5000/api/v1/employee/story", {
      
      method: "POST",
      body: data,
    }).then(response => response.json()).then(
      obj => {
        // postImageID(obj.fileId);
        console.log(obj);
      });
  }

  
  return (
    <div className="addStoryWrapper">
      <div className='addstory' style={{backgroundImage:`url(${profileSrc})`}}>
        <button 
          className='addBtn'
          onClick={ onSubmit }
        >
          <AddCircleIcon/>
        </button>
        <h4>Add Story</h4>
      </div>
      <input 
        type="file" 
        name="avatar" 
        onChange={ event => {
          const file = event.target.files[0];
          if(file!=null){
          setFile(file)}
        }}
      />
    </div>
  ); 
}

export default AddStory