

import useSWR from 'swr'


export type Photo = {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: {
      original: string;
      large2x: string;
      large: string;
      medium: string;
      small: string;
      portrait: string;
      landscape: string;
      tiny: string;
    };
    liked: boolean;
    alt: string;
  };

export type PhotoResponse = {
    page: number;
    per_page: number;
    photos: Photo[]; 
    total_results: number;
    next_page: string;
  };
  

const fetcher = ([url, options] :[url: string, options: RequestInit]) => {
    return fetch(url, options).then(res => res.json())}

export const usePexelsAPI = (query: string, page = 0, perPage = 40) =>  {

    const { data, error, isLoading } = useSWR([
        `/api/v1/search?query=${query}&page=${page}&per_page=${perPage}`, 
        { 
            method: "GET",
            headers: {
                'Authorization': `${import.meta.env.VITE_API_KEY}`,
            } 
        }
    ], fetcher)
   
    return {
        data: data as PhotoResponse,
      isLoading,
      isError: JSON.stringify(error)
    }
  }