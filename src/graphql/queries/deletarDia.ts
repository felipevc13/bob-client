import { gql } from 'graphql-request';

const deletando = gql`
  mutation delete($where: InputID!) {
    deleteAlimentacao(input: { where: $where }) {
      alimentacao {
        id
        data
        quantidadeAlimento {
          alimento {
            id
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

export default deletando;
