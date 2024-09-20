import Contact from '@/shared/components/Contact';
import style from './style.min.module.css';

const Sobre = () => {
  return (
    <>
      <main className={style.main_sobre}>
        <section>
          <h2>Sobre nós</h2>
          <div>
            <h3>Atelie vinoka campinas</h3>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default Sobre;
