import * as R from 'ramda'
import requestSuper from 'superagent'
import phones from './mockPhones'
import req from 'axios'

export const fetchPhonesApi = async () => {
    try {
        req.get('https://bikewise.org:443/api/v2/incidents?page=1&per_page=10&incident_type=theft&proximity=Berlin&proximity_square=100')
        .then(response => {
            console.info("headers:", response)
        })
    } catch (error) {
        console.error(error);
    }
    const {body} = await requestSuper.get(
        `https://bikewise.org:443/api/v2/incidents?page=1&per_page=10&incident_type=theft&proximity=Berlin&proximity_square=100`
    )
    return body.incidents
}

export const loadMorePhonesApi = async(page) => {
    const {body} = await requestSuper.get(
        `https://bikewise.org:443/api/v2/incidents?page=${page}&per_page=10&incident_type=theft&proximity=Berlin&proximity_square=100`
    )
    console.log('from api call', body.incidents)
    return body.incidents
}

export const fetchPhoneByIdApi = async id => {
    return new Promise(resolve => {
        const phone = R.find(R.propEq('id', id), phones)
        resolve(phone)
    })
}
