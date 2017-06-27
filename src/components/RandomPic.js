import React, {Component} from 'react';
import {getPhoto} from '../redux/reducer';
import { connect } from 'react-redux';



class RandomPic extends Component {

  componentDidMount(){
    this.props.getPhoto();
  }
  render(){
    return (
      <div>

        <img src={this.props.photoUrl}>
        </img>
        <h5>Photo By: <a href={this.props.photoCreditUrl} target="_blank">{this.props.photoCreditName }</a></h5>

      </div>
    )
  }
}

function mapStateToProps(state){
    return{
      photoUrl: state.photoUrl,
      photoCreditName: state.photoCreditName,
      photoCreditUrl: state.photoCreditUrl,
      photoLocation: state.photoLocation,
      loading: state.loading,
    }
}

export default connect(mapStateToProps, {getPhoto} )(RandomPic);
