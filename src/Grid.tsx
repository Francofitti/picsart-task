import { styled } from "styled-components";
import { Photo, PhotoResponse } from "./Pexels.api";
import { forwardRef, ReactNode, CSSProperties, HTMLAttributes } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { Link } from "react-router";


// Define types for props
interface ListProps extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
  children: ReactNode;
}


const Item = styled.div`
  padding: 0.5rem;
  width: 33%;
  display: flex;
  flex: none;
  align-content: stretch;
  box-sizing: border-box;
`;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const List = forwardRef<HTMLDivElement, ListProps>(({ style, children, ...props }, ref) => (
    <StyledList ref={ref} style={style} {...props}>
      {children}
    </StyledList>
  ));
  


const gridComponents = {
    List,
    Item
  }
  
  

  const ItemWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border: 1px solid gray;
  white-space: nowrap;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Ensures the image scales nicely */
  }
`;
  
export const Grid = ({ data, onEndReached }: { data: Photo[], onEndReached: ((index: boolean) => void) }) => {
    console.log(data)
    return (
      <>
        <VirtuosoGrid
          style={{ height: 732 }}
          totalCount={data?.length}
          overscan={30}
          atBottomStateChange={onEndReached}
          increaseViewportBy={300}
          components={gridComponents}
          itemContent={(index) => {
            const destination = {
                pathname: `/photo/${data[index].id}`,

              };
          return <ItemWrapper> 
            <Link to={destination} state={data[index]}>
                <img src={data[index].src.small}></img>
            </Link>
            </ItemWrapper>
        }}
        />
      </>
    );
};


