import { useState } from "react";
import Cookies from 'js-cookie';
import { API_URL } from '../../config';
import { Headers } from "../types/models";

export const useFetch = ( withAuth = false ) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState([]);
  const [ errors, setErrors] = useState(null);

  const headers:Headers = { 
    'Content-Type': 'application/json',
    'Authorization': null
   };
  if (withAuth) {
    headers.Authorization = `Bearer ${Cookies.get('auth-token')}`
  }
  const get = (path:string) => {
    setIsLoading(true);
    setErrors(null);
    fetch( API_URL + path,
      {
        method: 'get',
        headers,
      })
				.then((response) => response.json())
				.then ((response) => {
					console.log(response)
					setData(response)
				})
        .catch(error => setErrors(error))
        .finally(() => setIsLoading(false))
  };

  const post = (path:string, postData:Object) => {
    setIsLoading(true);
    setErrors(null);
    fetch( API_URL + path,
      {
        method: 'get',
        headers,
        body: JSON.stringify(postData)
      })
				.then((response) => response.json())
				.then ((response) => {
          if (response.status !== 200) {
            throw new Error(response.message[0].message[0].message || 'unkown error');
          }
					console.log(response)
          if (path === '/api/login' && response.status === 200) {
            Cookies.set('token', response.headers.get('Authorization').split(' ')[1]);
          }          
					setData(response)
				})
        .catch(error => setErrors(error))
        .finally(() => setIsLoading(false))
  };
  
  return {
    isLoading,
    errors,
    data,
    get,
    post
  };
}