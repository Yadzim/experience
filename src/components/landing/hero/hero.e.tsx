import styled from 'styled-components';
import { ISWrapper } from './hero.t';
export const Wrapper = styled.div<ISWrapper>`
  display: ${({ isNone }) => (isNone ? 'none' : 'block')};
`;
