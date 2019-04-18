import {FEATCH_PHONES_START, FEATCH_PHONES_SUCCESS, FEATCH_PHONES_FAILURE,
    LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS, LOAD_MORE_PHONES_FAILURE,
    FEATCH_PHONE_BY_ID_START, FEATCH_PHONE_BY_ID_SUCCESS, FEATCH_PHONE_BY_ID_FAILURE,
    SEARCH_PHONE} from './actionTypes'
import {fetchPhonesApi, loadMorePhonesApi, fetchPhoneByIdApi} from '../api/'

export const fetchPhones = () => async dispatch => {
    dispatch({type: FEATCH_PHONES_START})

    try {
        const phones = await fetchPhonesApi()
        dispatch({type: FEATCH_PHONES_SUCCESS, payload: phones})
    } catch (err) {
        dispatch({type: FEATCH_PHONES_FAILURE, payload: err, error: true})
    }
}

export const loadMorePhones = (selected) => async (dispatch, getState) => {
    console.log('From actions', selected)
    dispatch({type: LOAD_MORE_PHONES_START})

    try {
        const phones = await loadMorePhonesApi(selected.selected + 1)
        dispatch({type: LOAD_MORE_PHONES_SUCCESS, payload: phones})
    } catch (err) {
        dispatch({type: LOAD_MORE_PHONES_FAILURE, payload: err, error: true})
    }
}

export const fetchPhoneById = id => async dispatch => {
    dispatch({type: FEATCH_PHONE_BY_ID_START})

    try {
        const phone = await fetchPhoneByIdApi(id)
        dispatch({type: FEATCH_PHONE_BY_ID_SUCCESS, payload: phone})
    } catch (err) {
        dispatch({type: FEATCH_PHONE_BY_ID_FAILURE, payload: err, error: true})
    }
}

export const searchPhone = (text) => dispatch => {
    dispatch({
      type: SEARCH_PHONE,
      payload: text
    })
  }
