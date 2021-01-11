import * as S from './styled';
import React, { useState, useEffect } from 'react';
import Tabela from '../Tabela';
import Calendario from '../Calendario';
import FormItens from '../FormItens';
import { graphql } from 'gatsby';
import Layout from '../Layout';

const Refeicoes = ({ data, pageContext, location }) => {
  const [dateCalendar, setDateCalendar] = useState('');
  const dia = dateCalendar.slice(-2);
  const todasDatas = pageContext.todasDatas;
  let state;

  if (Object.keys(location.state || {}).includes('data')) {
    state = location.state.data;
  } else {
    state = new Date();
  }
  // const state = location.state === null || location.state.data === undefined ? new Date() : location.state.data

  let allStrapiAlimentacao;

  if (Object.keys(data.allStrapiAlimentacao.edges[0] || {}).includes('node')) {
    allStrapiAlimentacao = data.allStrapiAlimentacao.edges[0].node;
  } else {
    allStrapiAlimentacao = [];
  }

  // --------------------------------------

  const food = allStrapiAlimentacao.quantidadeAlimento || [];
  const table = food.reduce((obj, item) => {
    const name = item.alimento.categoria.nome;
    const quantity = item.quantidade;
    const limit = item.alimento.categoria.limite;

    if (!obj[name]) {
      obj[name] = {
        name: name,
        quantity: 0,
        ideal: limit,
        difference: limit,
      };
    }
    obj[name].quantity += quantity;
    obj[name].difference -= quantity;
    return obj;
  }, {});

  const dataCategorias = data.allStrapiCategoria.edges;
  const idDia = allStrapiAlimentacao.id || '0';

  return (
    <Layout>
      <S.Wrapper>
        <S.RefeicoesTitle>Refeições</S.RefeicoesTitle>
        <S.ResultWrapper>
          <S.CalendarWrapper>
            <Calendario
              setDateCalendar={setDateCalendar}
              todasDatas={todasDatas}
              state={state}
            />
          </S.CalendarWrapper>
          <S.TableWrapper>
            <Tabela table={table} dia={dia} />
          </S.TableWrapper>
        </S.ResultWrapper>
        {dataCategorias.map(({ node }) => {
          return (
            <S.FormsWrapper key={node.id}>
              <FormItens
                categoria={node.nome}
                alimentos={node.alimentos}
                imagemCategoria={node.Icone.publicURL}
                dateCalendar={dateCalendar}
                alimentacao={allStrapiAlimentacao}
                idDia={idDia}
              />
            </S.FormsWrapper>
          );
        })}
      </S.Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query AlimentacaoDiaria($eq: Date!) {
    allStrapiAlimentacao(filter: { data: { eq: $eq } }) {
      edges {
        node {
          id
          quantidadeAlimento {
            id
            alimento {
              id
              categoria {
                nome
                limite
              }
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
    allStrapiCategoria {
      edges {
        node {
          id
          nome
          limite
          alimentos {
            id
            nome
            categoria
          }
          Icone {
            publicURL
            extension
          }
        }
      }
    }
  }
`;

export default Refeicoes;
