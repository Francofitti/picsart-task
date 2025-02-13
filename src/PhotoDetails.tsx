import { Link, useLocation } from "react-router";


export const PhotoDetails = () => {
    const location = useLocation();
    const data = location.state;

    if(!data) {
        return (<Link to="/">Image not found please go back</Link>)
    }
    return (
        <div>
          <h1>{data?.title}</h1>
          <p>Photo by <a href={data?.photographerUrl} target="_blank" rel="noopener noreferrer">{data.photographer}</a></p>
          <img src={data?.src.medium} alt={data?.title} />
          <div/>
          <Link to="/">Back to search</Link>
        </div>
      );
}