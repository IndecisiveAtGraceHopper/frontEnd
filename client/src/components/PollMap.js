import {connect} from 'react-redux'
import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import {MAPBOXGL_ACCESS_TOKEN as accessToken} from './secrets'
import axios from 'axios'
import key from './secrets'
mapboxgl.accessToken = accessToken

class PollMap extends Component {
    constructor() {
        super()
        this.state = {
            currentLocation: ''
        }
    }

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

    getGeocode = async(evt) => {
        const location= evt.split().join("+")
        const {data} = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`)
        const latitude = data.results[0].geometry.location.lat
        const longitude = data.results[0].geometry.location.lng
        return {latitude, longitude}
    }

    render() {
        console.log('location', this.props.location)
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

const mapState = state => {
    return {
        address: state.user.address
    }
}
  

export default connect(mapState, null)(PollMap)