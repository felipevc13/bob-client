import { gql } from 'graphql-request';

const editando = gql`
  mutation update(
    $where: InputID!
    $quantidadeAlimento: [editComponentPageQuantidadeInput]!
  ) {
    updateAlimentacao(
      input: {
        where: $where
        data: { quantidadeAlimento: $quantidadeAlimento }
      }
    ) {
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

// {
//   "where": {"id": 77},
//   "quantidadeAlimento": [{"id": 34, "alimento": 2, "quantidade": 57 },
//   { "alimento": 2, "quantidade": 57 }
//   ]

// }

export default editando;
