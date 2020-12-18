import React from 'react';
import Sidebar from "../Sidebar"
import * as S from "./styled"
import GlobalStyles from "../../styles/global"


type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <S.LayoutWrapper>
        <GlobalStyles />
        <Sidebar />
        <S.LayoutMain>{children}</S.LayoutMain>
      </S.LayoutWrapper>
    </>
  )

}

export default Layout;
