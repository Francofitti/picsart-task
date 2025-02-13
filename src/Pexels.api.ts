import useSWRInfinite from 'swr/infinite'
 
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
  
const fetcher = (url: string) => {
return fetch(url, {
    method: 'GET',
    headers: {
    'Authorization': `${import.meta.env.VITE_API_KEY}`, // Replace with your actual token
    'Content-Type': 'application/json',
    },
}).then((res) => res.json());
};

export const usePexelsAPI = (query: string, perPage = 40) =>  {

    const { data, error, isLoading, setSize, size } = useSWRInfinite(
        (pageIndex, previousPageData) => {
            if (previousPageData && !previousPageData.photos.length) return null //reached end
            return `/api/v1/search?query=${query}&page=${pageIndex + 1}&per_page=${perPage}`
        }
            , 
        fetcher,
        {
            revalidateFirstPage: false
        }
        
    )

    return {
      data: data,
      isLoading,
      isError: JSON.stringify(error), 
      setSize, 
      size
    }
  }