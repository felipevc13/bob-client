import * as S from './styled';
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { useForm, Controller } from 'react-hook-form';
import client from '../../graphql/client';
import criandoNovo from '../../graphql/queries/criandoNovo';
import editando from '../../graphql/queries/editando';
import deletando from '../../graphql/queries/deletarDia';

import { format, subDays, addDays } from 'date-fns';

import id from 'uuid/v1';

// type ItemInputProps = {
//   texto?: string
//   titulo: string
//   setIsEditing: Dispatch<SetStateAction<boolean>>
//   isEditing?: boolean

// }

const ItemInput = ({
  texto = null,
  titulo,
  setIsEditing,
  isEditing,
  dateCalendar,
  alimentosCategorias,
  alimentosDia = [],
  idDia,
  verAlimentos,
  todosDiferentes,
}) => {
  const [data, setData] = useState([
    { id: id(), alimento: '', quantidade: '' },
  ]);
  const { handleSubmit, control } = useForm();

  useEffect(() => {
    if (alimentosDia.length > 0) {
      const alimentosDiaLimpo = alimentosDia.map(
        ({ id, alimento, quantidade }) => {
          return {
            id: id,
            alimento: alimento,
            quantidade: quantidade,
          };
        },
      );
      setData(alimentosDiaLimpo);
    }
  }, []);

  const append = () => {
    setData([...data, { id: id(), alimento: '', quantidade: '' }]);
  };
  const remove = (index) => {
    setData([...data.slice(0, index), ...data.slice(index + 1)]);
  };

  const onSubmit = (data) => {
    if (verAlimentos.length === 0) {
      const Qdsujo = Object.values(data);
      const Qdlimpo = Qdsujo.map(({ alimento, quantidade }) => {
        return {
          alimento: parseInt(alimento),
          quantidade: parseInt(quantidade),
        };
      });
      const dataArrumada = addDays(new Date(dateCalendar), 1);
      const formattedDate = format(dataArrumada, 'yyyy-MM-dd');

      const dados = {
        eq: formattedDate,
        quantidadeAlimento: Qdlimpo,
      };

      novo(dados).catch((error) => console.error(error));
      setIsEditing(false);
    } else {
      const idDay = parseInt(idDia.replace(/([^\d])+/gim, ''));
      const Qdsujo = Object.values(data);
      const Qdlimpo = Qdsujo.map(({ alimento, quantidade, id }) => {
        if (typeof id === 'string') {
          return {
            alimento: parseInt(alimento),
            quantidade: parseInt(quantidade),
          };
        } else {
          return {
            id: id,
            alimento: parseInt(alimento),
            quantidade: parseInt(quantidade),
          };
        }
      });
      const todosDiferentesLimpo = todosDiferentes.map((item) => {
        return {
          id: item.id,
          alimento: parseInt(item.alimento.id),
          quantidade: parseInt(item.quantidade),
        };
      });
      const all = Qdlimpo.concat(todosDiferentesLimpo);

      const dados = {
        where: { id: idDay },
        quantidadeAlimento: all,
      };

      if (idDia != '0' && dados.quantidadeAlimento.length === 0) {
        deletar({
          where: { id: parseInt(idDia.replace(/([^\d])+/gim, '')) },
        });
        setIsEditing(false);
      } else {
        editar(dados).catch((error) => console.error(error));
        setIsEditing(false);
      }
    }
  };

  function handleClickCancel(evt) {
    evt.preventDefault();
    setIsEditing(false);
  }

  return (
    <S.WrapperInput>
      {!!titulo && <S.TitleWrapper>{titulo}</S.TitleWrapper>}
      {!!texto && <S.Text>{texto}</S.Text>}
      {!isEditing && alimentosDia.length > 0 && (
        <table>
          <tbody>
            <S.Tr>
              <S.Td>Alimento</S.Td>
              <S.Td>Quantidade</S.Td>
            </S.Tr>

            {alimentosDia.map((item) => (
              <S.Tr key={item.alimento.nome + id()}>
                <S.Td>{item.alimento.nome}</S.Td>
                <S.Td>{item.quantidade}</S.Td>
              </S.Tr>
            ))}
          </tbody>
        </table>
      )}

      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul>
            <S.InputsWrapper>
              <S.SelectFoodWrapper>
                <S.Label>Alimentos</S.Label>
              </S.SelectFoodWrapper>
              <S.SelectQuantidadeWrapper>
                <S.Label>Quantidade</S.Label>
              </S.SelectQuantidadeWrapper>
            </S.InputsWrapper>

            {data.map((item, index) => (
              <S.InputsWrapper key={item.id}>
                <S.SelectFoodWrapper>
                  <Controller
                    as={<input hidden />}
                    name={`${item.id}.id`}
                    type="number"
                    control={control}
                    defaultValue={item.id || ''}
                  />
                  <Controller
                    as={
                      <S.SelectFood required>
                        <option key="erere" value={''}>
                          Adicione um valor
                        </option>

                        {alimentosCategorias.map(({ nome, id }) => {
                          return (
                            <option key={id + item.id} value={id}>
                              {nome}
                            </option>
                          );
                        })}
                      </S.SelectFood>
                    }
                    name={`${item.id}.alimento`}
                    control={control}
                    defaultValue={item.alimento.id || item.alimento}
                  />
                </S.SelectFoodWrapper>
                <S.SelectQuantidadeWrapper>
                  <Controller
                    as={<S.SelectQuantidade required />}
                    name={`${item.id}.quantidade`}
                    type="number"
                    control={control}
                    defaultValue={item.quantidade || ''}
                  />
                </S.SelectQuantidadeWrapper>
                <S.DeleteWrapper>
                  <Button fullwidth onClick={() => remove(index)}>
                    Delete
                  </Button>
                </S.DeleteWrapper>
              </S.InputsWrapper>
            ))}
          </ul>
          <section>
            <S.PlusButton
              onClick={(evt) => {
                evt.preventDefault();
                append();
              }}
            >
              +
            </S.PlusButton>
          </section>
          <Button type={'submit'} cor={'azul'} className={'botaoEnviar'}>
            Salvar
          </Button>
          <Button cor={'cinza'} onClick={handleClickCancel}>
            Cancelar
          </Button>
        </form>
      )}
      {!isEditing && <Button onClick={() => setIsEditing(true)}>Editar</Button>}
    </S.WrapperInput>
  );

  async function novo(dados) {
    const graphQLClient = client;
    console.log(graphQLClient);
    const data = await graphQLClient.request(criandoNovo, dados);

    console.log(JSON.stringify(data, undefined, 2));
  }

  async function editar(dados) {
    const graphQLClient = client;

    const data = await graphQLClient.request(editando, dados);

    console.log(JSON.stringify(data, undefined, 2));
  }

  async function deletar(dados) {
    const graphQLClient = client;

    const data = await graphQLClient.request(deletando, dados);

    console.log(JSON.stringify(data, undefined, 2));
  }
};

export default ItemInput;
