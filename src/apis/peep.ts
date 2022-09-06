import { iPeep } from '../store/peeps/Peeps.reducers'

// API interface for leading peeps
export const fetchPeeps = async () => {
    try {
        const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
        if(response.ok) {
            const data: Promise<iPeep[]> = await response.json();
            return data;
        } throw new Error('Request failed');
    } catch (error) {
        console.log(error);
    }
};