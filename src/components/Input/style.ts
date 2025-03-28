import styled from 'styled-components';

export const Label = styled.label`
  color: var(--light-gray);
  font-size: 0.8rem;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--lighter-gray);
  border-radius: 0.8rem;
  font-size: 1rem;
  width: 100%;

  &:focus {
    border: 2px solid var(--dark-purple);
    outline: none;
  }
`

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--lighter-gray);
  font-size: 0.9rem;
`;