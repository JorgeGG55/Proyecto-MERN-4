import React, { useState } from "react";
import styled from "styled-components";

const InteractiveButton = styled.button`
  background-color: #9b37ff;
  border: 1px solid white;
  color: white;
  text-align: center;
  border-radius: 8px;
  padding: 6px 25px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 5px;
`;

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  max-height: 450px;
  overflow-y: auto;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 5px;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const MainWrapper = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #24252f;
`;

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <MainWrapper>
      <Title>To Do List</Title>
      <InputWrapper>
        <Input type="text" value={inputValue} onChange={handleInputChange} />
        <InteractiveButton onClick={handleAddItem}>Añadir</InteractiveButton>
      </InputWrapper>
      <ListWrapper>
        {items.map((item, index) => (
          <ListItem key={index}>
            {item}
            <InteractiveButton onClick={() => handleRemoveItem(index)}>
              Eliminar
            </InteractiveButton>
          </ListItem>
        ))}
      </ListWrapper>
    </MainWrapper>
  );
};

export default Main;
