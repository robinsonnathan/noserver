import React, {Component} from 'react';
import {connect} from 'react-redux';
import {gMapsApi} from '../apiKeys';
import {getLocation} from '../redux/reducer';


class Map extends Component{

  render(){
    return(
      <div>

      <iframe className="map" src={`//www.google.com/maps/embed/v1/place?q=+${this.props.location}
      &zoom=15
      &key=${gMapsApi}`}>
      </iframe>


      </div>
    )
  }
}

function mapStateToProps(state){
    return{location: state.photoLocation
    }
}

export default connect(mapStateToProps) (Map)
