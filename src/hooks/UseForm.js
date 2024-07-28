import { useState } from "react";

export const UseForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setformState({
            ...formState,
            [name]: value
        }); 
       // console.log(formState);
    }
    const onResetForm = () => {
        setformState(initialForm);
    }


  return {
     ...formState,
        formState,
        onResetForm,
        onInputChange
  }
}
