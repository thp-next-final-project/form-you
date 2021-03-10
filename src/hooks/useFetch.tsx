import { useState } from "react";
import Cookies from 'js-cookie';
import { API_URL, COOKIE_NAME } from '../config/config';
// import { Headers } from "../types/models";

export const useFetch = ( withAuth = false ) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ token, setToken ] = useState(Cookies.get(COOKIE_NAME));
  const [ errors, setErrors] = useState(null);

  const headers:any = { 
    'Content-Type': 'application/json',
    Authorization: null
   };
  if (withAuth) {
    headers.Authorization = token;
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
        method: 'post',
        headers,
        body: JSON.stringify(postData)
      })
				.then((response) => {
          console.log(response.headers.get('Authorization'));
          if ((path === '/api/login' || path === '/api/signup')  && response.status === 200) {
            setToken(response.headers.get('Authorization') || "");
          } 
          return response.json()
        })
				.then((response) => {          
					console.log(response.data)         
					setData(response.data)
				})
        .catch(error => setErrors(error))
        .finally(() => setIsLoading(false))
  };
  
  return {
    isLoading,
    errors,
    data,
    token,
    get,
    post
  };
}