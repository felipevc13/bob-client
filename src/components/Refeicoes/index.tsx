import * as S from './styled'
import React, { useState } from "react"
import Tabela from "../Tabela"
import Calendario from "../Calendario"
import FormItens from "../FormItens"
import { graphql } from "gatsby";
import Layout from "../Layout"

const Refeicoes = ({ data }: any) => {
  console.log(data)


  const [dateCalendar, setDateCalendar] = useState("");
  const dia = dateCalendar.slice(-2)


  return (
    <Layout>
      <S.Wrapper>
        <S.RefeicoesTitle >Refeições</S.RefeicoesTitle>
        <S.ResultWrapper >
          <S.CalendarWrapper>
            <Calendario setDateCalendar={setDateCalendar} />
          </S.CalendarWrapper>
          <S.TableWrapper>
            <Tabela todasAlimentacoes={[]} todosAlimentos={[]} dia={dia} />
          </S.TableWrapper>
        </S.ResultWrapper>
        <S.FormsWrapper>
          <FormItens />
        </S.FormsWrapper>
      </S.Wrapper>
    </Layout>
  )
}


export const query = graphql`
 query AlimentacaoDiaria($eq: Date!) {
  allStrapiAlimentacaoDiaria(filter: {data: {eq: $eq}}) {
    edges {
      node {
        id
        quantidadeAlimento {
          alimento {
            categoria
            nome
          }
          quantidade
        }
        data
      }
    }
  }
  allStrapiAlimento {
    edges {
      node {
        categoria {
          nome
          limite
        }
        id
      }
    }
  }
}

  `


export default Refeicoes
