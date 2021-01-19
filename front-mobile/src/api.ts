import axios from "axios";

const API_URL = 'https://sds2-yasmin.herokuapp.com';

export function fetchOrders(){
    return axios(`${API_URL}/orders`); 
}