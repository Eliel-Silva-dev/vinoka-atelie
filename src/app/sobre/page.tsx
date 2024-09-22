import Contact from '@/shared/components/Contact';
import style from './style.min.module.css';

const Sobre = () => {
  return (
    <>
      <main className={style.main_sobre}>
        <section>
          <h2>Sobre nós</h2>
          <div>
            <p>
              Vinoka ateliê atua desde 2019. Criado por Valdivina Mota, técnica
              em moda que procura sempre aprender para melhor atender aos
              anseios dos cliente.
            </p>
            <p>
              Trabalha-mos na confecção de peças casuais, sociais, esportivas e
              nos reparos das mesma.
            </p>
            <p>
              Procuramos trabalhar cada peça com cuidado e carinho como se nosso
              fosse, por que cada cliente é especial.
            </p>
            <p className={style.right}>Sejam todos bem vindos!</p>
            <p className={style.right}>Muito obrigado.</p>
            <blockquote>
              <p>
                <cite>
                  Porque Deus amou o mundo de tal maneira, que deu seu filho
                  unigênito, para que todo aquele que nele crer, não pereça mas
                  tenham vida eterna.
                </cite>
              </p>
              <p>
                <cite>João: 3.17</cite>
              </p>
            </blockquote>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default Sobre;
