import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setformState] = useState(
        {
            username: 'dam2',
            email: 'shdez726@gmail.com'
        }
    );

    const {username, email} = formState;
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setformState({
            ...formState,
            [name]: value
        }); 
       // console.log(formState);
    }

    useEffect(() => {
       // console.log('hey') 
      }, [formState])
  
      useEffect(() => {
         // console.log('hey') 
        }, [email])

  return (
   <>
   <h1>useEffect</h1>
    <hr/>
    <input 
    type='text'
    className='form-control'
    placeholder='Username'
    name='username'
    value={username}
    onChange={onInputChange}
    />
    <input 
    type='email'
    className='form-control mt-2'
    placeholder='shdez726@gmail.com'
    name='email'
    value={email}
    onChange={onInputChange}
    />
    {
        (username === 'dam') && <Message />
    }
   </>
  )
}
