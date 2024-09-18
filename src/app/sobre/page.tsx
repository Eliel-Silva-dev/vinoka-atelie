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
            <p>
              Ateliê Vinoka é uma profissional na arte de corte e costura,
              especialista em dar nova vida a todos os tipos de roupas e tecidos
              para todos estilos e ocasiões. Com anos de experiência em Campinas,
              pode ajudar nos reparos, customizações, confecções entre outros.
            </p>
            <p>Confecção de peças de alto padrão, de acordo com as necessidades do cliente.</p>
            
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default Sobre;
