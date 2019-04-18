import React from 'react'
import {compose, lifecycle} from 'recompose';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Moment from 'react-moment';

import {fetchPhones, loadMorePhones} from '../../actions/'
import {getPhonesSelector} from '../../selectors'

const renderImage = (url) => {
  return (
    <div>
      <img
        className='img-thumbnail'
        src={url}
        alt='noImage'
      />
    </div>
  )
}

const renderDate = (date) => {
  return (
    <Moment format="MMM DD YYYY">
        {new Date(date*1000)}
    </Moment>
    // <span>{(new Date(date*1000)).format('h:i:s')}</span>
    // <span>{(new Date(date*1000)).getMonth()} {(new Date(date*1000)).getDate()} {(new Date(date*1000)).getFullYear()}</span>
  )
}

const renderPhone = (phone, index) => {
  return (
    <div className='col-sm-12 col-md-12 col-lg-12 book-list' key={index}>
      <div className='thumbnail'>
        <div className='row'>
          <div className='col-md-2'>
            {phone.media.image_url ? renderImage(phone.media.image_url) : 'No image'}
          </div>
          <div className='col-md-9'>
            <h4>{phone.title}</h4>
            <p>{phone.description}</p>
            {renderDate(phone.occurred_at)} - <span>{phone.address}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Phones = ({phones, loadMorePhones}) => (
  <div>
    {!phones.length ? <span>Loading...</span> : 
    <div>
      <div className='books row'>
          {phones.map((phone, index) => renderPhone(phone, index))}
      </div>
        <div className='row'>
            <div className='col-md-12'>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={3}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={loadMorePhones}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
            </div>
        </div>
      </div>
    }
  </div>
)

export default compose(
    connect((state: AppState, ownProps) => {
        return ({
            phones: getPhonesSelector(state, ownProps)
        });
    }, {
        fetchPhones,
        loadMorePhones
    }),
  
    lifecycle({
      componentDidMount() {
        const {
            fetchPhones,
        } = this.props
        fetchPhones()
      }
    })
  )(Phones)