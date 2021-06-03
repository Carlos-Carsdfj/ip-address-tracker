import {renderMap,upgradeMap } from './MapRender/map.js'
import {getServer,filterSearch} from './ApiSearch/searchServer.js'

const search = document.querySelector('#search')
const form = document.querySelector('#form-search')
const address = document.querySelector('#address')
const location = document.querySelector('#location')
const timeZone = document.querySelector('#time-zone')
const isp = document.querySelector('#isp')
const address2 = document.querySelector('#address2')
const location2 = document.querySelector('#location2')
const timeZone2 = document.querySelector('#time-zone2')
const isp2 = document.querySelector('#isp2')


address.textContent = '142.250.72.163'
location.textContent = 'Los Angeles'
timeZone.textContent ='-07:00'
isp.textContent = 'Google LLC'
address2.textContent = '142.250.72.163'
location2.textContent = 'Los Angeles'
timeZone2.textContent ='-07:00'
isp2.textContent = 'Google LLC'


renderMap()

form.addEventListener('submit',(ev)=>{
    ev.preventDefault()

    search.disabled = true
    
    const valFilter  = filterSearch(search.value.trim())
     
    console.log(valFilter)
    search.disabled = false
    
     
    if(valFilter){

        getServer(valFilter)
       .then(data => {
         
        address.textContent = data.ip
        location.textContent =data.location.city
        timeZone.textContent =data.location.timezone
        isp.textContent = data.isp
        address2.textContent = data.ip
        location2.textContent =data.location.city
        timeZone2.textContent =data.location.timezone
        isp2.textContent = data.isp

        upgradeMap(data.location)
        console.log(data)
    })
    }

})
