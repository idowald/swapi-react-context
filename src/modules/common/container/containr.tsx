import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledContainer = styled.div`
background:#F5F5F5; border-radius: 5px;
  padding-bottom:24px;
  padding-left:24px;
`;

export function Container({ children }: {children:ReactNode}) {
  return <StyledContainer>{children}</StyledContainer>;
}
