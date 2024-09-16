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
          <Link
            href={
              'https://wa.me/5519993467649?text=Olá,%20olhei%20alguns%20trabalhos%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20orçamento.'
            }
            target="_blank"
          >
            {' '}
            <FaWhatsapp /> Contato
          </Link>
        </Button>
      </h2>
    </section>
  );
};

export default Contact;
