import * as R from 'ramda'
// import { createSelector } from "reselect";

export const getPhoneByIdSelector = (state, id) => R.prop(id, state.phones)

// export const getPhonesSelector = createSelector(getPhoneByIdSelector, state =>
//     R.map(id => getPhoneByIdSelector(state, id), state.phonesPage.ids)
// );

export const getPhonesSelector = (state, ownProps) => {

    const applySearch = item => R.contains(
      state.phonesPage.search,
      R.prop('title', item)
    )

    const phones = R.compose(
      R.filter(applySearch),
      R.map(id => getPhoneByIdSelector(state, id))
    )(state.phonesPage.ids)
  
    return phones
  }
  
export const getRenderedPhonesSelector = state => R.length(state.phonesPage.ids)

