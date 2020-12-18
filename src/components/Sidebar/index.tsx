import React from "react"
import Profile from "../Profile"
import * as S from "./styled"
import MenuLinks from "../MenuLinks"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar