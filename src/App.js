import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPhoto} from './redux/reducer'

import Map from './components/Map';
import RandomPic from './components/RandomPic';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="parent">
          <div>
            <h1>Ah, a beautiful picture. </h1>
            <RandomPic />
          </div>

          <div>
            {this.props.location === '560+S+100+W+St,+Provo,+UT+84601' ?
                <div>
                <h1>We couldnt find where the photo came from</h1>
                <h2>Instead here you are</h2>
                </div>
                :
                <h1>Here's where that image was taken</h1>}
            <Map />
            <h5>I guess Google really does know all</h5>
          </div>
        </div>
        <button onClick={() => this.props.getPhoto()}>Want a new photo?</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {location: state.photoLocation}
}

export default connect(mapStateToProps, {getPhoto})(App);
