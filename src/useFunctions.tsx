import React from 'react';
import { useBlockchainContext } from "./contexts";

const API_KEY = process.env.REACT_APP_API_KEY || '';
const proxy = process.env.REACT_APP_ENDPOINT || ''
const chainId = process.env.REACT_APP_CHAIN_ID || '';

const originalParam = {
  key: API_KEY,
  chain_id: chainId,
}
export const post_request = async (url: string, params?: any): Promise<any | null> => {
  try {
    params = Object.assign(params, originalParam);
    console.log(params);
    const result = await fetch(proxy + `${params.type}/` + url,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: params ? JSON.stringify(params) : null
      });
    return await result.json();
  } catch (error) {
    console.log('IN Post Request \n')
    console.log(error)
  }
  return null
}
export const get_request = async (url: string): Promise<any | null> => {
  try {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => console.log(xhr.responseText);

    // const result = await fetch(url,
    //   {
    //     method: 'GET',
    //     headers: { 'content-type': 'application/json' },
    //   });
    // return await result.json();
  } catch (error) {
    console.log('IN Get Request \n')
    console.log(error)
  }
  return null
}

const useFunctions = () => {
  const [state, { dispatch }] = useBlockchainContext();
  dispatch({ type: 'Loading', payload: true });

  const update = (payload: { [key: string]: any }) => {
    // dispatch(Slice.actions.update(payload))
  }

  React.useEffect(() => {
    const { ethereum } = window;

  })



  // const newNFTContact = async (): Promise<string | undefined> => {

  // }

  return { ...state, update };
}

export default useFunctions
