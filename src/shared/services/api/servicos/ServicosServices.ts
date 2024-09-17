import { Environment } from '@/shared/environment';
import { Api } from '../axios-config';

export interface IListagemServicos {
  nomeServico: string;
  imgCardService: string;
  itensServicos: {
    titleServico: string;
    valorServico: string;
  }[];
}

export interface IDetalheServicos {
  nomeServico: string;
  imgCardService: string;
  itensServicos: {
    titleServico: string;
    valorServico: string;
  }[];
}

type TServicosComTotalCount = {
  data: IListagemServicos[];
  totalCount: number;
};

const getAllImoveis = async (
  page = 1,
): Promise<TServicosComTotalCount | Error> => {
  try {
    const urlRelativa = `/servicos?_page=${page}&_limit=${Environment.LIMITE_BUSCA_API}`;
    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Environment.LIMITE_BUSCA_API,
        ),
      };
    }

    return new Error('Erro ao listar os registro');
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros',
    );
  }
};

const getImovelById = async (id: string): Promise<IDetalheServicos | Error> => {
  try {
    const { data } = await Api.get<IDetalheServicos>(`/servicos/${id}`);
    if (data) {
      return data;
    }

    return new Error('Erro ao consultar o registro');
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Erro ao consultar o registro',
    );
  }
};

export { getAllImoveis, getImovelById };
