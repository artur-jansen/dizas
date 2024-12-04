import './style.css'
import logoFooter from '../../assets/logo__dizas.webp';
import Image from 'next/image';
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import LogoDoisDev from "../../assets/logo__footer.webp"

const Footer = () => {
    return (
        <footer>
            <div className='footer__cima'>
                <div className='footer__item'>
                    <Image className='img__logo-footer' src={logoFooter} alt="Logo da Dizas Store"/>
                    <p>Excelência e estilo você só encontra aqui, na melhor loja de moda masculina de Feira de Santana.</p>
                    <div className='contato__redes'>
                        <a href="http://instagram.com"><FaInstagram className='contato__redes-icon'/></a>
                        <a href="http://facebook.com"><FaFacebookF className='contato__redes-icon'/></a>
                        <a href="http://wa.me"><FaWhatsapp className='contato__redes-icon'/></a>
                    </div>
                </div>
                <div className='footer__item'>
                    <h2>Menu</h2>
                    <div className="footer__item-menu">
                        <a href="#home" className='menu__link'>Home</a>
                        <a href="#sobre" className='menu__link'>Sobre Nós</a>
                        <a href="#colecao" className='menu__link'>Nossa Coleção</a>
                        <a href="#depoimentos" className='menu__link'>Depoimentos</a>
                        <a href="#localizacao" className='menu__link'>Onde Nos Encontrar</a>
                    </div>
                </div>
                <div className='footer__item'>
                    <h2>Contato</h2>
                    <div className="footer__item-contato">
                        <div><MdOutlineLocalPhone className='contato__icon'/><p>(75) 98333-2332</p></div>
                        <div><CiMail className='contato__icon'/><p>xxxxx@gmail.com</p></div>
                    </div>
                </div>
                <iframe className='localizacao__mapa-footer' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19739.08856260243!2d-38.96975150600157!3d-12.242915084135445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439252bae8799%3A0x9058203ec1ccff00!2sDizas%20store%20-%20Moda%20masculina!5e1!3m2!1spt-BR!2sbr!4v1732882225712!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='footer__baixo'>
                <p>&copy; Dizas Store Ltda. Todos os direitos reservados.</p>
                 <div><p>Feito e idealizado por</p> <a className='footer__baixo-link' href="https://www.doisdev.com.br"><Image className='footer__baixo-img' src={LogoDoisDev} alt='Logo da Agência DoisDev'></Image></a></div>
            </div>
        </footer>
    );
}

export default Footer;