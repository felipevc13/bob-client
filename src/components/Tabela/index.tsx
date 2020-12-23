import * as S from './styled'
import React from "react"



type Alimentacoes = {
  node: {
    id: string
    quantidadeAlimento: {
      alimento: {
        nome: string
        categoria: string
      }
      quantidade: number
    }
    data: string
  }
}

type Alimento = {
  node: {
    categoria: {
      nome: string
      limite: number
    }
    id: string
  }


}

type TabelaProps = {
  todasAlimentacoes: Alimentacoes[]
  todosAlimentos: Alimento[]
  dia: string
}

const Tabela = ({ todasAlimentacoes, todosAlimentos, dia }: TabelaProps) => {

  return (
    <S.Wrapper>
      <S.Table >
        <tbody>
          <tr>
            <th className="dia">Dia {dia}</th>
            <th>Quantidade Ingerida</th>
            <th>Quantidade Ideal</th>
            <th>Diferença</th>
          </tr>
          {todosAlimentos.map(({ node }) => {

            return (
              <tr className="itens" key={node.id}>
                <td>{node.categoria.nome}</td>
                <td>Lorem ipsum</td>
                <td>{`${node.categoria.limite} gr`}</td>
                <td>Lorem ipsum</td>
              </tr>
            )
          })}


        </tbody>
      </S.Table>
    </S.Wrapper>
  )
}

export default Tabela