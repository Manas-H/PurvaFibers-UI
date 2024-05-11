import  { useState } from 'react';
import { omit } from 'lodash';
// import RegisterationModal from './forms/RegisterationModal'

const useForm = (callback) => {
   //Form values
   const [values, setValues] = useState({});

   //Errors
   const [errors, setErrors] = useState({});

   const validate = (event, name, value) => {
    //A function to validate each input values

    switch (name) {
        case 'username':
            if(value.length <= 4){
                // we will set the error state

                setErrors({
                    ...errors,
                    username:'Username atleast have 5 letters'
                })
            }else{
                // set the error state empty or remove the error for username input

                //omit function removes/omits the value from given object and returns a new object
                let newObj = omit(errors, "username");
                setErrors(newObj);
                
            }
            break;
            case 'tel':
            if(
                !new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/).test(value)
            ){
                setErrors({
                    ...errors,
                    tel:'Enter a correct mobile number'
                })
            }else{

                let newObj = omit(errors, "tel");
                setErrors(newObj);
                
            }
        break;
    
      case 'email':
            if(
                !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
            ){
                setErrors({
                    ...errors,
                    email:'Enter a valid email address'
                })
            }else{

                let newObj = omit(errors, "email");
                setErrors(newObj);
                
            }
        break;
        
        case 'password':
            if(
                !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
            ){
                setErrors({
                    ...errors,
                    password:'Passoword at least 8 Char with Combination'
                })
            }else{

                let newObj = omit(errors, "password");
                setErrors(newObj);
                
            }
        break;
        
        default:
            break;
    }
}


  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);
        //Let's set these values in state

        setValues({
            ...values,   //spread operator to store old values
            [name]:val,
        })

    }

    const handleSubmit = (event) => {
      if(event) event.preventDefault();
      callback();

      if(Object.keys(errors).length === 0 && Object.keys(values).length !==0){
        callback();
      }else{
        alert("There is an error")
      }
    }

  return {
          values,
        errors,
        handleChange,
        handleSubmit,
   }
}

export default useForm