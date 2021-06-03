const apiKey ='at_W4em6A35gqtFRgefRhiBCfScADYTa'
const  ipRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
const domainRegex = /^(?!(https:\/\/|http:\/\/|www\.|mailto:|smtp:|ftp:\/\/|ftps:\/\/))(((([a-zA-Z0-9])|([a-zA-Z0-9][a-zA-Z0-9\-]{0,86}[a-zA-Z0-9]))\.(([a-zA-Z0-9])|([a-zA-Z0-9][a-zA-Z0-9\-]{0,73}[a-zA-Z0-9]))\.(([a-zA-Z0-9]{2,12}\.[a-zA-Z0-9]{2,12})|([a-zA-Z0-9]{2,25})))|((([a-zA-Z0-9])|([a-zA-Z0-9][a-zA-Z0-9\-]{0,162}[a-zA-Z0-9]))\.(([a-zA-Z0-9]{2,12}\.[a-zA-Z0-9]{2,12})|([a-zA-Z0-9]{2,25}))))$/;
 

export function filterSearch(value = ''){

    if(ipRegex.test(value)){

        return {ip:value}
    }

    if(domainRegex.test(value)){

        return {domain:value}
    }else(
        alert('sorry the value to find is not an accepted value')
    )



}




export  function getServer({ip = '', domain =''}){
    console.log('ip:',ip)

    const url = `
    https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}&domain=${domain}
    `;
    console.log(url)
    return fetch(url)
    .then(data =>data.json() )
    .catch(error => console.log(error))
}