'use client';

import Contact from '@/shared/components/Contact';
import style from './style.min.module.css';
import { useRef } from 'react';
import Button from '@/shared/components/buttons/Button';
import Link from 'next/link';
import { vitrine } from '@/shared/database';

type TCarrossel = {
  id: string;
  typeModa: string;
  imgsCardVitrine: string[];
};

const Vitrine = () => {
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
        {vitrine &&
          vitrine.map((moda, idx) => {
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
