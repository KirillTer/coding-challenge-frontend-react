import React from 'react'
import {compose} from 'recompose';
import {withRouter} from 'react-router'

const Navigation = () => (
    <div className="container">
        <div className="card text-left">
            <div className="card-header">
                <h2>Berlin police department</h2>
                <h4>Stolen bikes</h4>
            </div>
        </div>
    </div>
)

export default compose(withRouter)(Navigation)
