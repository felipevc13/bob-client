import * as S from './styled'
import React from "react"



type Alimentacoes = {
  node: {
    id: string
    quantidadeAlimento: {
      alimento: {
        nome: string
        categoria: {
          nome: string
          limite: number
        }
      }
      quantidade: number
    }
    data: string
  }
}


type TabelaProps = {
  allStrapiAlimentacao: Alimentacoes[]
  dia: string
}

const Tabela = ({ table, dia }: any) => {
  table = Object.values(table)
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

          {table.map((item: any) => {

            return (
              <tr className="itens" key={`meu-${item.quantity}`}>
                <td>{item.name}</td>
                <td>{`${item.quantity}gr`}</td>
                <td>{`${item.ideal}gr`}</td>
                { parseInt(item.difference) > 0 ? <td className="diferencaMaior">{item.difference}</td> : <td className="diferencaMenor">{item.difference}</td>}
              </tr>
            )
          })}


        </tbody>
      </S.Table>
    </S.Wrapper>
  )
}

export default Tabela