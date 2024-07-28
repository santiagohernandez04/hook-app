import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHooks = () => {  
    const {counter, increment, decrement} = useCounter(1)
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    
  return (
     <>
     <h1>Infomacion de pokemons</h1>
     <hr/>
     {isLoading ? <LoadingMessage/> 
     : <PokemonCard 
     id={counter} name={data.name} sprites={[
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny
     ]}
     />
     }
     {/* <pre>{JSON.stringify(data, null, 2 )}</pre> */}
        
    <hr/>
    <button className='btn btn-primary mt-2'
        onClick={() => counter > 1 ? decrement() : null}  >
        Anterior
    </button>
    <button onClick={() => increment()} className='btn btn-primary mt-2'>
        Siguiente
    </button>
    
     </>
  )
}
