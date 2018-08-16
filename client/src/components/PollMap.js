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
            currentLocation: ''
        }
    }

    async componentDidMount() {
        this.props.setLoc(this.props.address)
        const address = await this.getGeocode(this.props.address)
        const coords = [address.longitude, address.latitude]
        const mapOptions = {
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: coords,
            zoom: 14.5
        }
        this.map = new mapboxgl.Map(mapOptions)
        this.map.on('load', () => {
            this.map.loadImage('https://i.imgur.com/MK4NUzI.png', (error, image) => {
                if (error) throw error
                this.map.addImage('custom-marker', image)
                this.map.addLayer({
                    id: 'markers',
                    type: 'symbol',
                    source: {
                        type: 'geojson',
                        date: {
                            type: 'FeatureCollection',
                            features:[{'type':'Feature','geometry':{'type':'Point','coordinates':coords}}]}
                    },
                    layout: {
                        'icon-image': 'custom-marker',
                    }
                })
            })
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
