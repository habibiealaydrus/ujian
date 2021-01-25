import React, {useState} from 'react'
import CovidList from './covidlist'
import axios from 'axios'

export default function Content() {
    const [Covid,setCovid] = useState([])
    axios.get('https://dekontaminasi.com/api/id/covid19/stats').then(resp => {

    setCovid(resp.data.regions.map(p => 
    <div className='card' >
        <ul>
            <li>{p.name}</li>
        </ul>
        
        
    </div>
    ));
});
    
    return (
        <div className='content'>
            <h1>Data API</h1>
        <CovidList Covid={Covid}/>
        </div>
    )
 }
