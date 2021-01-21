import { combineReducers } from 'redux'

const isLoggedIn = (state = false, action) => {
    switch(action.type) {
         case 'LOG_IN':
             return true
          case 'LOG_OUT':
              return false
          default:
              return state
    }
};

const user = (state = null, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return action.value
        default: 
            return state
    }
};

const businesses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            const businesses = [ ...state ]
            businesses.splice(action.value, 1)
            return businesses
        default:
            return state
    }
};

export default combineReducers({ user, isLoggedIn, businesses});