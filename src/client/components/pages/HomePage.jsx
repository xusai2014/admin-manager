import React from 'react';
import { connect } from 'react-redux';


class HomePage extends React.Component{

    render(){
        return( <div>
                <div className="container">
                   欢迎来到我的地盘！
                </div>

            </div>
        )



    }

}

const mapStateToProps = (state, props) => {
    return {

    }
}

export default connect(mapStateToProps)(HomePage)