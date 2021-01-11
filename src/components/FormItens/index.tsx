import * as S from './styled'
import React, { useState, useEffect } from "react"
import ItemInput from "../ItemInput"
import Button from "../Button"


const FormItens = ({ dateCalendar, categoria, imagemCategoria, alimentos, alimentacao, idDia }: any) => {
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  if (alimentacao.quantidadeAlimento != undefined) {
    const todos = alimentacao.quantidadeAlimento.filter((item: any) => {
      return item.alimento.categoria.nome === categoria
    })




    useEffect(() => {
      setList(todos || [])
    }, [])
  }

  const allAlimentosDia = alimentacao.quantidadeAlimento || []
  const verAlimentos = allAlimentosDia.map((item: any) => {
    return item
  })

  const todosDiferentes = allAlimentosDia.filter((item: any) => {
    return item.alimento.categoria.nome !== categoria
  })
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <S.Icone src={imagemCategoria} />
      </S.IconWrapper>

      {list.length > 0 && !isEditing && (
        < ItemInput titulo={categoria} setIsEditing={setIsEditing} isEditing={isEditing} dateCalendar={dateCalendar} alimentosCategorias={alimentos} alimentosDia={list} idDia={idDia} verAlimentos={verAlimentos} todosDiferentes={todosDiferentes} />
      )}

      {!list.length && !isEditing && (
        < ItemInput titulo={categoria} texto="Clique em editar para adicionar o alimento consumido." setIsEditing={setIsEditing} isEditing={isEditing} dateCalendar={dateCalendar} alimentosCategorias={alimentos} idDia={idDia} verAlimentos={verAlimentos} todosDiferentes={todosDiferentes} />
      )
      }

      {isEditing && (
        < ItemInput titulo={categoria} setIsEditing={setIsEditing} isEditing={isEditing} dateCalendar={dateCalendar} alimentosCategorias={alimentos} alimentosDia={list} idDia={idDia} verAlimentos={verAlimentos} todosDiferentes={todosDiferentes} />
      )}
    </S.Wrapper>
  )
}

export default FormItens