import Link from 'next/link';
import style from './style.min.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../buttons/Button';

const Contact = () => {
  return (
    <section className={style.sec_contact}>
      <p>Entre em contato e faça seu orçamento:</p>
      <h2>
        <Button>
          <Link href={'/'}>
            {' '}
            <FaWhatsapp /> Contato
          </Link>
        </Button>
      </h2>
    </section>
  );
};

export default Contact;
