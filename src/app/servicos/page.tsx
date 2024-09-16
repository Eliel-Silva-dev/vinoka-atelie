import Contact from '@/shared/components/Contact';
import style from './style.min.module.css';
import { servicos } from '@/shared/database';

type TServiceProps = {
  nomeServico: string;
  imgCardService: string;
  itensServicos: {
    nomeServico: string;
    valorServico: string;
  }[];
};
const Servicos = () => {
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
                <span>{servico.nomeServico}</span>
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
