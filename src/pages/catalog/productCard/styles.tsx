import styled from 'styled-components';

export const ProductContainer = styled.div`
  flex-basis: 12rem;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f3f3f3;
`;

export const ProductName = styled.h2`
  font-size: 1.1rem;
  height: 3rem;
  cursor: pointer;
  :hover {
    background-color: rgba(20, 20, 20, 0.1);
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bolder;
  font-family: monospace;
`;

type HeartProps = { fav: boolean };
export const Heart = styled.div.attrs((props: HeartProps) => props)`
  margin: 0 0 -6px 10px;
  display: inline-block;
  width: 20px;
  aspect-ratio: 1;
  border-image: radial-gradient(
      ${(props: HeartProps) => (props.fav ? 'red' : 'black')} 69%,
      #0000 70%
    )
    84.5% fill/100%;
  clip-path: polygon(-41% 0, 50% 91%, 141% 0);
`;
