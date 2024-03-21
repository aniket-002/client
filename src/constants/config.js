export const API_NOTIFICATION_MESSAGE = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, please wait a moment..'
    },
    success: {
        title: 'Success',
        message: 'Data Successfully loaded'
    },
    responseFailure:{
        title: 'Error',
        message: 'An error occured while fetching response from the server. Please try again!!'
    },
    requestFailure:{
        title:'Error',
        message: 'An error occured while parsing request data'
    },
    networkError:{
        title: 'Error',
        message: 'unable to connect with the server. Pleqase check internet connectivity and try again later'
    }
}


export const SERVICE_URLS = {
    userSignup: {url:'/signup', method: 'POST'}
}