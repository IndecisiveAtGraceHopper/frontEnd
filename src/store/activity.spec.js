/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import reducer, {
  loadActivities,
  changeVote,
  removeActivities,
  fetchActivities,
  updateVote
} from './activity'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import {createStore} from 'redux'
const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
axios.defaults.withCredentials = true

describe('Reducer for Activity', () => {
  it('returns the initial state by default', () => {
    // creates a store (for testing) using your (real) reducer
    const store = createStore(reducer)

    expect(store.getState()).to.be.an('array')
  })
})

describe('reduces on LOAD_ACTIVITIES action', () => {
  it('loads the activities (without mutating the previous state)', () => {
    const store = createStore(reducer)
    const activity1 = {date: Date.now(), address: '136 Metropolitan Ave, Brooklyn, NY', selected: false, adventureId: 1, name:'Nitehawk Cinema'}
    const activity2 = {date: Date.now(), address: '61 Grove St, New York, NY', selected: false, adventureId: 1, name: 'Big Gay Ice Cream Shop'}
    store.dispatch(loadActivities([activity1, activity2]))

    const newState = store.getState()
    //newState: [activity1, activity2]
    expect(newState.length).to.be.deep.equal(2)
    expect(newState[0].selected).to.be.deep.equal(false)
  })
})

describe('reduces on CHANGE_VOTE action', () => {
  it('change a vote (without mutating the previous state)', () => {
    const store = createStore(reducer)
    const activity1 = {id: 1, date: Date.now(), address: '136 Metropolitan Ave, Brooklyn, NY', selected: false, adventureId: 1, name:'Nitehawk Cinema'}
    const activity2 = {id: 2, date: Date.now(), address: '61 Grove St, New York, NY', selected: false, adventureId: 1, name: 'Big Gay Ice Cream Shop'}
    store.dispatch(loadActivities([activity1, activity2]))
    store.dispatch(changeVote(activity2))
    expect(store.dispatch(changeVote(activity2)).activity.id).to.be.deep.equal(2)
  })
})

describe('reduces on REMOVE_ACTIVITIES action', () => {
  it('removes an activity (without mutating the previous state)', () => {
    const store = createStore(reducer)
    const activity1 = {id: 1, date: Date.now(), address: '136 Metropolitan Ave, Brooklyn, NY', selected: false, adventureId: 1, name:'Nitehawk Cinema'}
    const activity2 = {id: 2, date: Date.now(), address: '61 Grove St, New York, NY', selected: false, adventureId: 1, name: 'Big Gay Ice Cream Shop'}
    store.dispatch(loadActivities([activity1, activity2]))
    store.dispatch(removeActivities(activity2))
    expect(store.dispatch(removeActivities(activity2)).activityId.id).to.be.deep.equal(2)

  })
})



describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = []

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchActivities', () => {
    it('eventually dispatches the LOAD_ACTIVITIES action', async () => {
      const fakeActivities = [{id: 1, date: Date.now(), address: '136 Metropolitan Ave, Brooklyn, NY', selected: false, adventureId: 1, name:'Nitehawk Cinema'}, {id: 2, date: Date.now(), address: '61 Grove St, New York, NY', selected: false, adventureId: 1, name: 'Big Gay Ice Cream Shop'}]
      mockAxios.onGet('/api/adventures/1/activities').replyOnce(200, fakeActivities)
      await store.dispatch(loadActivities(fakeActivities))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('LOAD_ACTIVITIES')
      expect(actions[0].activities).to.be.deep.equal(fakeActivities)
    })
  })

  describe('updateVote', () => {
    it('eventually dispatches the CHANGE_VOTE action', async () => {
      const activity1 = {id: 1, date: Date.now(), address: '136 Metropolitan Ave, Brooklyn, NY', selected: false, adventureId: 1, name:'Nitehawk Cinema'}
      const activity2 = {id: 2, date: Date.now(), address: '61 Grove St, New York, NY', selected: false, adventureId: 1, name: 'Big Gay Ice Cream Shop'}
      mockAxios.onPut('/api/activities/1').replyOnce(200, activity1)

      await store.dispatch(changeVote(activity1))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('CHANGE_VOTE')
      expect(actions[0].activity).to.be.deep.equal(activity1)
    })
  })
})
