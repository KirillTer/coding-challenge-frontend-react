import React from 'react'
import {compose, withStateHandlers} from 'recompose';
import {connect} from 'react-redux';
import {searchPhone} from '../../actions/'

const handleSubmit = (event, value, searchPhone) => {
    event.preventDefault();
    searchPhone(value)
}

const Search = withStateHandlers(
    ({ initialValue = '' }) => ({
        value: initialValue,
      }),
      {
        setSearchValue: ({value}) => (val) => ({
            value: val.target.value,
        }),
      })(
    ({value, setSearchValue, searchPhone}) => {
    return (
        <div className='container'>
            <div className='well blosd'>
                <div className='form-group'>
                    <form onSubmit={(event) => handleSubmit(event, value, searchPhone)} className="form-inline">
                        <input
                            onChange={(event) => setSearchValue(event)}
                            type='text'
                            placeholder='Search case description'
                            className='form-control col-md-3'
                        />
                        <input
                            type='text'
                            placeholder='from'
                            className='form-control col-md-2 offset-md-1'
                        />
                        <input
                            type='text'
                            placeholder='to'
                            className='form-control col-md-2 offset-md-1'
                        />
                        <button type="submit" className="btn btn-primary mb-1  offset-md-1">Find cases</button>
                    </form>
                </div>
                <p className="offset-md-10">Total count</p>
            </div>
        </div>
    )
})

export default compose(
    connect((state: AppState) => {
        return ({

        });
    }, {
        searchPhone
    }),
)(Search)
