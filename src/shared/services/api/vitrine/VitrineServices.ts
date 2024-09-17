import { Environment } from '@/shared/environment';
import { Api } from '../axios-config';

export interface IListagemVitrine {
  id: string;
  typeModa: string;
  imgCardVitrine: string;
  description: string;
  imgsCarrossel: string[];
}

export interface IDetalheVitrine {
  id: string;
  typeModa: string;
  imgCardVitrine: string;
  description: string;
  imgsCarrossel: string[];
}

type TVitrineComTotalCount = {
  data: IListagemVitrine[];
  totalCount: number;
};

const getAllModa = async (
  page = 1,
  filter = '',
  id = '',
): Promise<TVitrineComTotalCount | Error> => {
  try {
    const urlRelativa = `/vitrine?_page=${page}&_limit=${Environment.LIMITE_BUSCA_API}&typeModa=${filter}&id_like=${id}`;
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

const getModaById = async (id: string): Promise<IDetalheVitrine | Error> => {
  try {
    const { data } = await Api.get<IDetalheVitrine>(`/vitrine/${id}`);
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

export { getAllModa, getModaById };
