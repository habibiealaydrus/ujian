import React, {useState} from 'react'
import PokemonList from './pokemonlist'
import axios from 'axios'

export default function Content() {
    const [pokemon,setPokemon] = useState([])
    axios.get('https://gorest.co.in/public-api/products').then(resp => {

    setPokemon(resp.data.data.map(p => 
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
        <PokemonList pokemon={pokemon}/>
        </div>
    )
 }
