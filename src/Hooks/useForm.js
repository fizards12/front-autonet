import {useState} from "react";

const useForm = ()=>{
    const [state,setState] = useState({});

    const onChange = (e)=>{
        e.persist();
        setState((prevState)=> ({...prevState , [e.target.name] : e.target.value}))
    }

    return [state,onChange];
}

export default useForm;