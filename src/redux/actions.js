export const removeBusiness = (index) => {
    return {
         type: 'REMOVE_BUSINESS',
         value: index
    }
}

export const addBusiness = (business) => {
    return {
         type: 'ADD_BUSINESS',
         value: business
    }
}

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        value: user
    }
}

export const LogIn = () => {
    return {
         type: 'LOG_IN'
    }
}

export const LogOut = () => {
    return {
         type: 'LOG_OUT'
    }
}
