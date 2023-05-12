import styled from 'styled-components';
export const Btn = styled.button`
  margin: auto;
  padding: 8px 16px;
  border-radius: 10px;
  background: cornflowerblue;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  transition: transform 250ms ease-out;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 22px;
  font-style: normal;
  font-weight: 500;
  min-width: 200px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  &:hover,
  &:focus {
    background: linear-gradient(
      0deg,
      rgba(147, 161, 29, 1) 25%,
      rgba(76, 81, 145, 1) 85%
    );
  }
`;
