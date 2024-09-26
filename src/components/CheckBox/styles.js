import styled from "styled-components";

export const CheckboxContainer = styled.div`
  margin-top: auto;
  margin-bottom:auto;
  padding-left: 5px;
  padding-right: 5px;
  width: 32px;
  height: 20px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 0.15em;
  margin-right: 0.5em;
  outline: none;
  cursor: pointer;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? '#27ae60' : 'inherit')};
  border-radius: 4px;
  transition: all 150ms;
  border: 2px solid #2c3e50;
  position: relative;

  &:hover {
    border-color: rgb(35, 131, 226);
  }

  /* Adiciona o ícone de check */
  &::after {
    content: '';
    position: absolute;
    display: ${props => (props.checked ? 'block' : 'none')};
    left: 5px;
    bottom: 4px;
    width: 8px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(40deg);
    flex-shrink: 0;
    pointer-events: none;
  }
`;
