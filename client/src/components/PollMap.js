import {connect} from 'react-redux'
import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import {MAPBOXGL_ACCESS_TOKEN as accessToken} from './secrets'
import axios from 'axios'
import key from './secrets'
import {setLocation} from '../store/poll'
mapboxgl.accessToken = accessToken

class PollMap extends Component {
    constructor() {
        super()
        this.state = {
            coords: [],
            zoom: 14.5
        }
    }
    
    async componentDidMount() {
        this.props.setLoc(this.props.address)
        const address = await this.getGeocode(this.props.address)
        const coords = [address.longitude, address.latitude]
        this.setState({currentLocation: coords})
        const mapOptions = {
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: (this.state.coords.length === 2) ? this.state.coords : coords,
            zoom: this.state.zoom
        }
        this.map = new mapboxgl.Map(mapOptions)
        this.map.on('move', () => {
            const { lng, lat } = this.map.getCenter()
            const zoom = this.map.getZoom().toFixed(2)
            const coords = [lng.toFixed(4), lat.toFixed(4)]
            this.setState({coords, zoom})
            console.log('new coords:', coords)
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

const mapDispatch = dispatch => {
    return {
        setLoc: (location) => dispatch(setLocation(location))
    }
}


export default connect(mapState, mapDispatch)(PollMap)
