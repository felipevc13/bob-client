import * as S from './styled'
import React, { useState } from "react"
import Proteina from "../Icones/Proteina"
import ItemInput from "../ItemInput"


const FormItens = () => {
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <S.Wrapper>
      <Proteina height={"17rem"} />
      {!list.length && < ItemInput />}
    </S.Wrapper>
  )
}

export default FormItens