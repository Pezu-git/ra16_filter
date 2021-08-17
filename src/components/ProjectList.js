export default function ProjectList(props) {
    console.log(props)
    return (
        <div className='imgItemContainer'>
        {props.images.map(image => (
            <div className='imgItem'>
                <img src={image.img} alt={Math.random()}/>
          </div>
        ))}
      </div>
    )
}