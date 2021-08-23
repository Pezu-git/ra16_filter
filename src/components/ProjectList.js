import PropTypes from "prop-types";

export default function ProjectList(props) {
  return (
    <div className="imgItemContainer">
      {props.images.map(image => (
        <div className="imgItem" key={Math.random()}>
          <img src={image.img} alt={image.category}/>
        </div>
      ))}
    </div>
  )
}

ProjectList.propTypes = {
  images: PropTypes.array.isRequired,
}