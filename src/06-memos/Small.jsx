import { memo } from "react"

export const Small = memo (({value}) => {
    // Memo es una funcion que se encarga de memorizar un componente
    // y solo se va a disparar si las propiedades cambian

    console.log('Me volvi a llamar :(')
  return (
    <small>{value}</small>
  )
}) 
