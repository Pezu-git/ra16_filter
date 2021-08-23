import PropTypes from 'prop-types';

export default function Toolbar(props) {
  if(props.filters.length === 0) {
    return <p>Filters Error</p>
  }
  return (
    <div className="buttonContainer">
      {props.filters.map(filterItem => (
        <button className="button"
          key={Math.random()}
          title={filterItem}
          selected={props.selected}
          onClick={props.onSelectFilter}
        >
          {filterItem}
        </button>
      ))}
    </div>       
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
}