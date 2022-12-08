import "./story.css"



function Story({imageId, title}) {
  const defaultImg = "./assets/defaultImg.png";
  const imageURL = "http://127.0.0.1:9000/class/" + imageId;

  return (
    <div style={ { backgroundImage: `url(${imageURL})` } } className='story'>
      
      <h4>{ title }</h4>
    </div>
  )
}

export default Story