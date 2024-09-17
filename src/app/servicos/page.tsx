import Contact from '@/shared/components/Contact';
import style from './style.min.module.css';
import { useEffect, useState } from 'react';
import { IListagemServicos } from '@/shared/services/api/servicos/ServicosServices';
import { ServicosServices } from '@/shared/services/api/intex';

type TServiceProps = {
  nomeServico: string;
  imgCardService: string;
  itensServicos: {
    titleServico: string;
    valorServico: string;
  }[];
};

const Servicos = () => {
  const [servicos, setServicos] = useState<IListagemServicos[]>();

  useEffect(() => {
    ServicosServices.getAllImoveis(1).then((result) => {
      if (result instanceof Error) {
        alert('Não foi possível consultar os dados');
      } else {
        console.log(result.data);
        setServicos(result.data);
      }
    });
  }, []);

  const CardServicos = ({
    nomeServico,
    imgCardService,
    itensServicos,
  }: TServiceProps) => {
    return (
      <div className={style.cardService}>
        <div>
          <img src={imgCardService} alt={nomeServico} />
        </div>
        <div>
          <h2>{nomeServico}</h2>
        </div>
        <div className={style.service_container}>
          {itensServicos.map((servico, idx) => {
            return (
              <div className={style.service_iten} key={idx}>
                <span>{servico.titleServico}</span>
                <div></div>
                <span>{servico.valorServico}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <main className={style.main_servicos}>
        <h2>Serviços</h2>
        <p>
          Oferecemos os principais serviços para que as peças se encaixem
          perfeitamente ao seu estilo.
        </p>
        <div className={style.container_servicos}>
          {servicos &&
            servicos.map((servico, idx) => {
              return (
                <CardServicos
                  key={idx}
                  imgCardService={servico.imgCardService}
                  itensServicos={servico.itensServicos}
                  nomeServico={servico.nomeServico}
                />
              );
            })}
        </div>
      </main>
      <Contact />
    </>
  );
};

export default Servicos;
