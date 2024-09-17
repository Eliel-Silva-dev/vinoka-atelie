'use client';

import Contact from '@/shared/components/Contact';
import style from './style.min.module.css';
import { useEffect, useRef, useState } from 'react';
import Button from '@/shared/components/buttons/Button';
import Link from 'next/link';
import { VitrineServices } from '@/shared/services/api';
import { IListagemVitrine } from '@/shared/services/api/vitrine/VitrineServices';

type TCarrossel = {
  id: string;
  typeModa: string;
  imgsCardVitrine: string;
};

const Vitrine = () => {
  const [vitrineFeminina, setVitrineFeminina] = useState<IListagemVitrine[]>();
  const [vitrineMasculina, setVitrineMasculina] =
    useState<IListagemVitrine[]>();
  const [vitrineInfantiu, setVitrineInfantiu] = useState<IListagemVitrine[]>();

  useEffect(() => {
    VitrineServices.getAllImoveis(1, 'feminina').then((result) => {
      if (result instanceof Error) {
        alert('Não foi possível consultar os dados');
      } else {
        console.log(result.data);
        setVitrineFeminina(result.data);
      }
    });

    VitrineServices.getAllImoveis(1, 'masculina').then((result) => {
      if (result instanceof Error) {
        alert('Não foi possível consultar os dados');
      } else {
        console.log(result.data);
        setVitrineMasculina(result.data);
      }
    });

    VitrineServices.getAllImoveis(1, 'infantiu').then((result) => {
      if (result instanceof Error) {
        alert('Não foi possível consultar os dados');
      } else {
        console.log(result.data);
        setVitrineInfantiu(result.data);
      }
    });
  }, []);

  const Carrossel = ({ typeModa, id, imgsCardVitrine }: TCarrossel) => {
    const contCarrossel = useRef({} as HTMLDivElement);

    const nextCard = () => {
      contCarrossel.current.scrollLeft =
        +contCarrossel.current.scrollLeft + 315;
    };

    const previoustCard = () => {
      contCarrossel.current.scrollLeft =
        +contCarrossel.current.scrollLeft - 315;
    };
    return (
      <section className={style.sect_carrossel}>
        <h2>Moda {typeModa}</h2>
        <div ref={contCarrossel} className={style.container_carrossel}>
          {imgsCardVitrine.map((imgCard, idx) => {
            return (
              <div key={idx} className={style.carrossel}>
                <img src={imgCard} alt="imagem de trabalho desenvolvido" />
                <Button>
                  <Link
                    href={{
                      pathname: '/',
                      query: { id: id },
                    }}
                  >
                    Conhecer o trabalho
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
        <div className={style.controls_carrossel}>
          <span onClick={previoustCard} className={style.controls_btn}>
            {'<'}
          </span>
          <span onClick={nextCard} className={style.controls_btn}>
            {'>'}
          </span>
        </div>
      </section>
    );
  };

  return (
    <>
      <main className={style.main_vitrine}>
        <h2>Vitrine de trabalhos</h2>
        {vitrineFeminina &&
          vitrineFeminina.map((moda, idx) => {
            return (
              <Carrossel
                key={idx}
                id={moda.id}
                typeModa={moda.typeModa}
                imgsCardVitrine={moda.imgsCardVitrine}
              />
            );
          })}

        {vitrineMasculina &&
          vitrineMasculina.map((moda, idx) => {
            return (
              <Carrossel
                key={idx}
                id={moda.id}
                typeModa={moda.typeModa}
                imgsCardVitrine={moda.imgsCardVitrine}
              />
            );
          })}

        {vitrineInfantiu &&
          vitrineInfantiu.map((moda, idx) => {
            return (
              <Carrossel
                key={idx}
                id={moda.id}
                typeModa={moda.typeModa}
                imgsCardVitrine={moda.imgsCardVitrine}
              />
            );
          })}
      </main>
      <Contact />
    </>
  );
};

export default Vitrine;
