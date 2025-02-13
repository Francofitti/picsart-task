import React, { useState } from "react";
import styled from "styled-components";



const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 16px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  flex: 1;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Search = ({onSearch}: {onSearch: (value: string) => void}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button 
      onClick={() => {
        onSearch(searchValue)
      }}>Search</Button>
    </Container>
  );
};

export default Search;
