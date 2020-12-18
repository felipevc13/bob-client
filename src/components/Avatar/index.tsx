import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
  query {
    avatarImage: file(relativePath: {eq: "bob.png"}) {
      childImageSharp{
        fluid(maxWidth: 80) {
          base64
          aspectRatio 
          src
          srcSet
          sizes
          originalImg
        }
      }
    }
  }
  
  `)
  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar