import { gql } from 'graphql-request';

const criandoNovo = gql`
  mutation criar(
    $eq: Date!
    $quantidadeAlimento: [ComponentPageQuantidadeInput]!
  ) {
    createAlimentacao(
      input: { data: { data: $eq, quantidadeAlimento: $quantidadeAlimento } }
    ) {
      alimentacao {
        data
        quantidadeAlimento {
          alimento {
            nome
            categoria {
              nome
              limite
            }
          }
          quantidade
        }
      }
    }
  }
`;

export default criandoNovo;
