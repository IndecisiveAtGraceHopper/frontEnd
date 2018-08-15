import {connect} from 'react-redux'
import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import {MAPBOXGL_ACCESS_TOKEN as accessToken} from './secrets'
mapboxgl.accessToken = accessToken

class PollMap extends Component {
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/almondmilk96/cjkvhicus23172snx1zadgqvj',
            center: [-73.863428, 40.753128],
            zoom: 10.46
        })
    }
  
    componentWillUnmount() {
        this.map.remove()
    }
  
    render() {
        const style = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            height: '400px'
        }
        return <div id='mapbox-map' style={style} ref={el => this.mapContainer = el} />;
    }
  }
  

export default connect(null, null)(PollMap)