import { getToken } from "../../utils/getToken"

export const fetchSubscription = async () => {
    const token = getToken();
    const requestOption = {
        headers : {
            Authorization : `Bearer ${token}`,
        },
        mode : 'cors',
        method : 'GET'
    }

    try {
        const res = await fetch(`${URL}plans` ,requestOption);
        const result = await res.json();

        if(!res.ok) throw new Error(result.message);
        return result;
    } catch (error) {
        throw error;
    }
}