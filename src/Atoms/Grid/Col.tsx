import styled from 'styled-components';

type Props = {
  size: number;
}

const Col = styled.div<Props>`
  flex: ${({ size }) => size || 1 };
`;

export default Col;
