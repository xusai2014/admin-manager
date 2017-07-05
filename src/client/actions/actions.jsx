
export function setNameActionCreator (name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}

export function httpRqActionn(data) {

    return{
        types:['REQUEST', 'SUCCESS', 'FAILURE'],
        data:data,
        promise:()=>{
            return new Promise((resolve, reject) => {
                var req = new Request("/data/orgnization.json");
                fetch(req).then(function(response) {
                    response.json().then(function(data) {
                        resolve({data:data.orgnizations})
                    });
                }).catch(function(err) {
                    reject({err:err})
                });
            })
        }
    }

}
