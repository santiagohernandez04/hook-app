
export const PokemonCard = ({id, name, sprites = []}) => {

  return (
    <section className='card ms-3' style={{maxWidth: 540}}>
            <h2 className="text-capitalize">#{id} - {name}</h2>
            <div>
                {
                    sprites.map((sprite) => (
                        <img 
                        key={sprite}
                        src={sprite}
                        alt={name}
                        />
                    ))
                }
            </div> 


    </section>
  )
}
