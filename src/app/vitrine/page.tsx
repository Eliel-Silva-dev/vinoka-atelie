'use client';

import Link from 'next/link';
import style from './style.min.module.css';
import Contact from '@/shared/components/Contact';
import { useEffect, useRef, useState } from 'react';
import Button from '@/shared/components/buttons/Button';
import { VitrineServices } from '@/shared/services/api';
import { IListagemVitrine } from '@/shared/services/api/vitrine/VitrineServices';

type TCarrossel = {
  typeModa: string;
  children: React.ReactNode;
};

type TCardmoda = {
  id: string;
  imgCard: string;
};

const Vitrine = () => {
  const [vitrineFeminina, setVitrineFeminina] = useState<IListagemVitrine[]>();
  const [vitrineMasculina, setVitrineMasculina] =
    useState<IListagemVitrine[]>();
  const [vitrineInfantiu, setVitrineInfantiu] = useState<IListagemVitrine[]>();

  useEffect(() => {
    VitrineServices.getAllModa(1, 'feminina').then((result) => {
      if (result instanceof Error) {
        alert('Não foi possível consultar os dados');
      } else {
        setVitrineFeminina(result.data);
      }
    });

    VitrineServices.getAllModa(1, 'masculina').then((result) => {
      if (result instanceof Error) {
        alert('Não foi possível consultar os dados');
      } else {
        setVitrineMasculina(result.data);
      }
    });

    VitrineServices.getAllModa(1, 'infantil').then((result) => {
      if (result instanceof Error) {
        alert('Não foi possível consultar os dados');
      } else {
        setVitrineInfantiu(result.data);
      }
    });
  }, []);

  const Carrossel = ({ typeModa, children }: TCarrossel) => {
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
          {children}
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

  const CardModa = ({ imgCard, id }: TCardmoda) => {
    return (
      <div className={style.carrossel}>
        <img src={imgCard} alt="imagem de trabalho desenvolvido" />
        <Button>
          <Link
            href={{
              pathname: '/detalheWork',
              query: { id: id },
            }}
          >
            Conhecer o trabalho
          </Link>
        </Button>
      </div>
    );
  };

  return (
    <>
      <main className={style.main_vitrine}>
        <h2>Vitrine de trabalhos</h2>

        {vitrineFeminina && (
          <Carrossel key={1} typeModa={'feminina'}>
            {vitrineFeminina &&
              vitrineFeminina.map((item, idx) => {
                return (
                  <CardModa
                    key={idx}
                    id={item.id}
                    imgCard={item.imgCardVitrine}
                  />
                );
              })}
          </Carrossel>
        )}

        {vitrineMasculina && (
          <Carrossel key={2} typeModa={'masculina'}>
            {vitrineMasculina &&
              vitrineMasculina.map((item, idx) => {
                return (
                  <CardModa
                    key={idx}
                    id={item.id}
                    imgCard={item.imgCardVitrine}
                  />
                );
              })}
          </Carrossel>
        )}

        {vitrineInfantiu && (
          <Carrossel key={3} typeModa={'infantil'}>
            {vitrineInfantiu &&
              vitrineInfantiu.map((item, idx) => {
                return (
                  <CardModa
                    key={idx}
                    id={item.id}
                    imgCard={item.imgCardVitrine}
                  />
                );
              })}
          </Carrossel>
        )}
      </main>
      <Contact />
    </>
  );
};

export default Vitrine;
