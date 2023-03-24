import { getToken } from "../../utils/getToken"
import { URL } from "./api_endpoint"

const token = getToken();

export const getArticle = async () => {
    const requestOption = {
        headers : {
            Authorization : `Bearer ${token}`,
            Accept : 'application/json'
        },
        mode : 'cors',
        method : 'GET'
    }

    try {   
        const res = await fetch(`${URL}articles`, requestOption);
        const data = await res.json();

        if(!res.ok) throw new Error();

        return data;
    } catch (error) {
        throw error;
    }
}