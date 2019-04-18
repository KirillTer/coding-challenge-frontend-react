import React from 'react'
import Navigation from '../../components/navigation/'
import Search from '../../components/search'

const Layout = ({children}) => (<>
    <Navigation />
    <Search />
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    {children}
                </div>
            </div>
        </div>
    </div>
</>)

export default Layout