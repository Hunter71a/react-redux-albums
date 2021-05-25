import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {artistDetail} from '../store/actions';


class Artist extends Component {

componentDidMount() {
    this.props.dispatch(artistDetail(this.props.match.params.id))
}

artistTemplate = (data) => (
    data.artistData ?
    <div className="artist_view">
    <div className="artist_background"
    style={{
        background:`url(/images/${data.artistData[0].cover})`
    }}
    >
    <Link>
    Back Home
    </Link>
    </div>
    </div>
    : null
)


    render(){
        console.log(this.props)
        return(
            <>
              {this.artistTemplate(this.props.artist)}
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        artistData: state.artist
    }
} 

export default connect( mapStateToProps)(Artist);