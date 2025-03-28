import styled from 'styled-components';

export const Button = styled.button<{ 
    variant: 'primary' | 'secondary', 
    fullWidth?: boolean }>`
  padding: 0.7rem;
  background-color: ${({ variant }) => (variant === 'primary' ? 'var(--dark-purple)' : 'none')};
  color: ${({ variant }) => (variant === 'primary' ? 'var(--white)' : 'var(--dark-purple)')};
  border: ${({ variant }) => (variant === 'primary' ? 'none' : '1px solid var(--dark-purple)')};
  border-radius: 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: filter 0.2s;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  &:hover {
    filter: brightness(0.9);
  }
`