import styled from 'styled-components';

export const WrapperInput = styled.main`
  .botaoEnviar {
    margin-right: 1rem;
  }

  table {
    width: 100%;
    margin-bottom: 2rem;
    text-align: left;
  }

  table tr:nth-child(odd) {
    background-color: #e3e3e4;
  }

  table tr:first-child {
    background-color: white;
    border: none;
  }

  table th {
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
  }
`;

export const TitleWrapper = styled.h1`
  font-size: 3rem;
  color: #21afe5;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
`;

export const PlusButton = styled.button`
  border: none;
  height: 5rem;
  width: 5rem;
  display: block;
  border-radius: 50%;
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: gray;
  color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const InputsWrapper = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const SelectFoodWrapper = styled.div`
  width: 55%;
  margin-bottom: 1rem;
`;

export const SelectQuantidadeWrapper = styled.div`
  width: 15%;
  margin-bottom: 1rem;
`;

export const DeleteWrapper = styled.div`
  width: 10%;
  margin-bottom: 1rem;
  margin-left: 2rem;
`;

export const SelectFood = styled.select`
  padding: 1rem;
  width: 95%;
  border-radius: 1rem;
  border: 1px solid lightgray;
`;

export const SelectQuantidade = styled.input`
  padding: 1rem;
  width: 100%;
  border-radius: 1rem;
  border: 1px solid lightgray;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  display: block;
  margin-bottom: 1.8rem;
`;

export const Tr = styled.tr`
  width: 100%;
  border: 1px solid #e3e3e4;
  padding: 1.7rem;
  display: flex;
`;

export const Td = styled.td`
  font-size: 1.6rem;
  flex: 1;
`;
