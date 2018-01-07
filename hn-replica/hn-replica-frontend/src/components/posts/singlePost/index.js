import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SinglePost extends Component {
    constructor(props){
        super(props)

        this.propTypes = {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            points: PropTypes.number.isRequired,
            user: PropTypes.string.isRequired,
            noOfComments: PropTypes.number.isRequired,
        }
    }

    render(){
        return(
        <div className="row" style={{ margin: '0', width: '100%', backgroundColor: '#f6f6ef' }}>
            <div className="col-1">
                <p style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'}}>{this.props.id}</p>
            </div>
            <div className="col-1">
                <i className="fa fa-caret-up"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'}}></i>
            </div>
            <div className="col-10">
                <div className='col-12'><p>{this.props.title} ({this.props.source})</p></div>
                <div className='col-12'><p>{this.props.points} points by {this.props.user} | {this.props.noOfComments} comments </p></div>
            </div>
        </div>)
    }
}

export default SinglePost;