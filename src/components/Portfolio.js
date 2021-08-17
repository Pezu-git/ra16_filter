/* eslint-disable no-unreachable */

import propTypes from 'prop-types'
import { Component } from 'react'
import  data  from '../DisplayData/displayData'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

const filters = 
  ["All", "Websites", "Flayers", "Business Cards"];
  const imageData = data

 class Portfolio extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
      filteredImage: imageData
    }
    this.activeFilter = this.activeFilter.bind(this)
  }

  

  activeFilter(event) {
    console.log(event.target.className)
    const filter = event.target.textContent
    let filteredImage
    if(filter === 'All') {
      filteredImage = imageData
    } else {
      filteredImage = imageData.filter(image => image.category === filter)
    }
    this.setState({filteredImage, selectedFilter: filter})
  }

  render() {
    return (
      <div className='container'>
          <Toolbar
            filters={filters}
            selected={this.state.selectedFilter}
            onSelectFilter={this.activeFilter}
          />
          <div className='imgContainer'>
            <ProjectList images={this.state.filteredImage}/>
          </div>
          
        </div>
    )
  }
}

export default Portfolio
