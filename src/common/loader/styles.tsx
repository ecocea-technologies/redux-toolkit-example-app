import styled from 'styled-components/macro';

export const RingLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type DivLoaderProps = {
  color?: string;
};

const DivLoader = styled.div.attrs<DivLoaderProps>((props) => ({
	color: props.color
}))<DivLoaderProps>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${(props) => props.color} transparent transparent transparent;
`;

export const FullPageLoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const DivLoader1 = styled(DivLoader)`
  animation-delay: -0.45s;
`;

export const DivLoader2 = styled(DivLoader)`
  animation-delay: -0.3s;
`;

export const DivLoader3 = styled(DivLoader)`
  animation-delay: -0.15s;
`;
