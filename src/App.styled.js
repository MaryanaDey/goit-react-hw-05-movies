import styled from 'styled-components';
import { theme } from './contacts/Theme';

const {
  colors: { accentColor, primaryColor, outlineColor, backgroundColor },
  transition: { timing, timingFunction },
  spacing,
} = theme;

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  border-radius: ${spacing(2)};
  color: ${primaryColor};
  background-color: ${backgroundColor};
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${spacing(4)};
  font-size: 1.5em;
`;

export const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: ${theme.spacing(4)};
  font-size: 1.3em;
`;

export const Message = styled.p`
  text-align: center;
`;

export const Label = styled.label`
  margin-bottom: ${spacing(1)};
`;

export const Input = styled.input`
  padding: ${spacing(2)} ${spacing(3)};
  margin-bottom: ${spacing(4)};
  border: none;
  border-radius: ${spacing(2)};
  transition: outline ${timing} ${timingFunction};
  &:hover,
  &:focus {
    outline: 2px solid ${outlineColor};
  }
`;

export const Button = styled.button`
  padding: ${spacing(1)} ${spacing(2)};
  border: none;
  border-radius: ${spacing(2)};
  font-weight: 700;
  color: inherit;
  outline: 1px solid ${primaryColor};
  transition: color ${timing} ${timingFunction}, background-color ${timing} ${timingFunction};
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${accentColor};
    background-color: ${primaryColor};
  }
`;

export const List = styled.ul`
  margin-bottom: ${spacing(4)};
  padding-left: ${spacing(3)};
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${spacing(2)};
  }
`;
