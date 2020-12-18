import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

import Avatar from "../Avatar"

const Profile = () => {
  const { site: { siteMetadata: { title, nome } }, } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          nome
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.ProfileTitle>{title}</S.ProfileTitle>
      <S.ProfileNome>{nome}</S.ProfileNome>
    </S.ProfileWrapper>
  )
}

export default Profile