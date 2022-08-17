// this file contains global styles
// should be import as gs (global style)

import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Main = styled.main`
  flex-grow: 3;
  flex-basis: 0;
  flex-shrink: 0;
  background-color: #fafafa;
`;

export const Aside = styled.aside`
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
  background-color: #f3f3f3;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  flex: 0;
  border-bottom: solid 1px grey;
  padding: 0 1rem;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
`;

export const Body = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 1rem;
  background-color: #fafafa;
`;
