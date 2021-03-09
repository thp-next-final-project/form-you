import { useCallback, useEffect, useState } from "react";

export const useFetch = ( url:string ) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState([]);

  const fetchData = useCallback(
    async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
    }, [ url ]);
  
  useEffect( () => {
    fetchData()
    return { isLoading, data };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ url ]);
}