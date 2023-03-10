import { URL } from "./api_endpoint";

export const userRegister= async(data)=>{
    const requestOption={
        headers:{
            Accept: 'application/json',
            "Content-Type":'application/json'
        },
        mode:'cors',
        method: 'POST',
        body: JSON.stringify(data)
    };

    try {
        const response= await fetch(`${URL}auths/signup`,requestOption);
        const result= await response.json();

        if(!response.ok) throw new Error(result.message);

        return result;
    } catch (error) {
        throw error;
    }
}

export const userLogin= async(data)=>{
    const requestOption={
        headers:{
            Accept: 'application/json',
            "Content-Type":'application/json'
        },
        mode:'cors',
        method: 'POST',
        body: JSON.stringify(data)
    };

    try {
        const response= await fetch(`${URL}auths/signin`,requestOption);
        const result= await response.json();

        if(!response.ok) throw new Error(result.message);

        return result;
    } catch (error) {
        throw error;
    }
}

