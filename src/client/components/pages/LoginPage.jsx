import React from 'react';
import { connect } from 'react-redux';
class LoginPage extends React.Component{


    render(){
        return (
            <div>
                <div className="container">
                    <div className="row ">
                        <div className="col-xs-4">手机号码<input type="text" ref="name"/>
                            <button onClick={()=>{}}>获取验证码</button>
                        </div>
                        <div className="col-xs-4">验证码<input type="text" ref="verfication"/></div>
                        <div className="col-xs-4"><button onClick={()=>{

                        }}>登陆</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        token: state.userReducer.token,
    }
}

export default connect(mapStateToProps)(LoginPage)