import React from 'react';
import { connect } from 'react-redux';
import { FetchAPI } from '../../utils/fetch';

class LoginPage extends React.Component{

    apitest(){
        get('test').then((result)=>{
            debugger;
        });
    }

    apiuser(){
        const myR = new Request('http://172.16.40.209:4000/api/user',{
            method: 'get',
            credentials: 'include',
            mode: "no-cors",
            headers: {
                "Content-Type": ' application/json',
            }
        })
        fetch(myR).then(
                re =>{
                    if(re.ok){
                        re.json()
                    }
                })
              .then(
                re =>{  alert(re)   }
              ).catch((err)=>{alert(err)})
    }


    render(){
        return (
            <div>
                <div className="container">
                    <div className="row ">
                        <div className="col-xs-4">手机号码<input type="text" ref="name"/>
                            <button onClick={()=>{this.apiuser()}}>获取验证码</button>
                        </div>
                        <div className="col-xs-4">验证码<input type="text" ref="verfication"/></div>
                        <div className="col-xs-4"><button onClick={()=>{
                            this.apitest()
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


function get(url,cb) {
    return new Promise((resolve,reject)=>{
        const req = new Request(`/ap/${url}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-Type": ' application/json',
            }
        });
        fetch(req).then(response=>{
            return response.json()
        }).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export default connect(mapStateToProps)(LoginPage)