import styled from "styled-components";
import React from "react";
import Navbar from "./Navbar/Navbar.js";
import Header from "./HeaderFooter/Header.js";
import Footersection from "./Footer/footer.js";
const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr min-content;
  `;

const SideBar = styled.nav`
  background-color: #263238;
  grid-column: 1/2;
  grid-row: 1/4;
  
  position: sticky;
`;

const HeaderStyle = styled.header`
  background-color: gainsboro;
  box-shadow: 0 2px 6px #0000008a;
  height: 64px;
  grid-column: 2/3;
  grid-row: 1/2;
  position: sticky;
  top:0;
`;

const Main = styled.main`
  grid-column: 2/3;
  grid-row: 2/2;
  
  color: white;
`;

function layout({ children }) {
  return (
    <Grid>
      <Footersection/>
      <SideBar>
        <Navbar />
      </SideBar>
      <HeaderStyle>
        <Header/>

      </HeaderStyle>
      
      <Main>
          {children}
      </Main>
     
    </Grid>
  );
}

export default layout;
