'use client';

import style from './style.min.module.css';
import Contact from '@/shared/components/Contact';
import { useEffect, useRef, useState } from 'react';
import { VitrineServices } from '@/shared/services/api';
import { IDetalheVitrine } from '@/shared/services/api/vitrine/VitrineServices';
import { useSearchParams } from 'next/navigation';

const Vitrine = () => {
  const [trabalho, setTrabalho] = useState<IDetalheVitrine>();
  const contCarrossel = useRef({} as HTMLDivElement);

  const search = useSearchParams();
  const id = search.get('id') || '';

  const nextCard = () => {
    contCarrossel.current.scrollLeft = +contCarrossel.current.scrollLeft + 515;
  };

  const previoustCard = () => {
    contCarrossel.current.scrollLeft = +contCarrossel.current.scrollLeft - 515;
  };

  useEffect(() => {
    VitrineServices.getModaById(id).then((result) => {
      if (result instanceof Error) {
        alert('Não foi possível consultar os dados');
      } else {
        setTrabalho(result);
      }
    });
  }, []);

  return (
    <>
      <main className={style.main_descript}>
        <h2>{trabalho && trabalho.description}</h2>
        <section className={style.sect_carrossel}>
          <div ref={contCarrossel} className={style.container_carrossel}>
            {trabalho &&
              trabalho.imgsCarrossel.map((imgs, idx) => {
                return <img key={idx} src={imgs} alt="detalhe de imgs" />;
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
      </main>
      <Contact />
    </>
  );
};

export default Vitrine;
