"use client"
import Header from '../Header';
import './style.css'
import Image, { StaticImageData } from 'next/image';
import bannerLado from '../../assets/fachada__lado.jpg'
import Accordion from 'react-bootstrap/Accordion';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaDotCircle } from "react-icons/fa";
import logoHome from '../../assets/logo__dizas.webp';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ElfsightWidget from '../Avaliacoes/index'
import { FaGoogle } from "react-icons/fa";
import { BsShop } from "react-icons/bs"; 
import { RiDiscountPercentLine } from "react-icons/ri"; 
import { MdBusinessCenter } from "react-icons/md"; 
import { GiClothes } from "react-icons/gi";

import camisa1 from '../../assets/camisas/camisa1.jpg';
import camisa2 from '../../assets/camisas/camisa2.jpg';
import camisa3 from '../../assets/camisas/camisa3.jpg';
import camisa4 from '../../assets/camisas/camisa4.jpg';
import camisa5 from '../../assets/camisas/camisa5.jpg';
import camisa6 from '../../assets/camisas/camisa6.jpg';
import camisa7 from '../../assets/camisas/camisa7.jpg';
import camisa8 from '../../assets/camisas/camisa8.jpg';
import camisa9 from '../../assets/camisas/camisa9.jpg';
import camisa10 from '../../assets/camisas/camisa10.jpg';
import camisa11 from '../../assets/camisas/camisa11.jpg';
import camisa12 from '../../assets/camisas/camisa12.jpg';
import camisa13 from '../../assets/camisas/camisa13.jpg';
import camisa14 from '../../assets/camisas/camisa14.jpg';
import camisa15 from '../../assets/camisas/camisa15.jpg';
import camisa16 from '../../assets/camisas/camisa16.jpg';
import camisa17 from '../../assets/camisas/camisa17.jpg';
import camisa18 from '../../assets/camisas/camisa18.jpg';
import camisa19 from '../../assets/camisas/camisa19.jpg';
import camisa20 from '../../assets/camisas/camisa20.jpg';
import camisa21 from '../../assets/camisas/camisa21.jpg';
import camisa22 from '../../assets/camisas/camisa22.jpg';

import calca1 from '../../assets/calcas/calca1.jpg';
import calca2 from '../../assets/calcas/calca2.jpg';
import calca3 from '../../assets/calcas/calca3.jpg';
import calca4 from '../../assets/calcas/calca4.jpg';
import calca5 from '../../assets/calcas/calca5.jpg';

import bermuda1 from '../../assets/bermudas/bermuda1.jpg';
import bermuda2 from '../../assets/bermudas/bermuda2.jpg';
import bermuda3 from '../../assets/bermudas/bermuda3.jpg';
import bermuda4 from '../../assets/bermudas/bermuda4.jpg';
import bermuda5 from '../../assets/bermudas/bermuda5.jpg';
import bermuda6 from '../../assets/bermudas/bermuda6.jpg';
import bermuda7 from '../../assets/bermudas/bermuda7.jpg';
import bermuda8 from '../../assets/bermudas/bermuda8.jpg';

import sapato1 from '../../assets/sapatos/sapato1.jpg';
import sapato2 from '../../assets/sapatos/sapato2.jpg';
import sapato3 from '../../assets/sapatos/sapato3.jpg';
import sapato4 from '../../assets/sapatos/sapato4.jpg';
import sapato5 from '../../assets/sapatos/sapato5.jpg';
import sapato6 from '../../assets/sapatos/sapato6.jpg';
import sapato7 from '../../assets/sapatos/sapato7.jpg';
import sapato9 from '../../assets/sapatos/sapato9.jpg';
import sapato10 from '../../assets/sapatos/sapato10.jpg';

import sueter1 from '../../assets/sueteres/sueter1.jpg';
import sueter2 from '../../assets/sueteres/sueter2.jpg';
import sueter3 from '../../assets/sueteres/sueter3.jpg';
import sueter4 from '../../assets/sueteres/sueter4.jpg';
import sueter5 from '../../assets/sueteres/sueter5.jpg';
import sueter6 from '../../assets/sueteres/sueter6.jpg';

import blazer1 from '../../assets/blazers/blazer1.jpg';
import blazer2 from '../../assets/blazers/blazer2.jpg';
import blazer3 from '../../assets/blazers/blazer3.jpg';
import blazer4 from '../../assets/blazers/blazer4.jpg';

interface CardRoupa {
    imagem: string | StaticImageData;
    nome: string;
}

interface InstagramPost {
    id: string;
    caption: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    timestamp: string;
}

const Main = () => {
    const camisas: CardRoupa[] = [
        { imagem: camisa1, nome: 'Camiseta Básica Verde' },
        { imagem: camisa2, nome: 'Camisa De Botão Salmão' },
        { imagem: camisa3, nome: 'Camiseta Básica Cinza' },
        { imagem: camisa4, nome: 'Camiseta Wafer Preta  ' },
        { imagem: camisa5, nome: 'Camisa Polo Salmão' },
        { imagem: camisa6, nome: 'Camiseta Básica Azul' },
        { imagem: camisa7, nome: 'Camiseta Wafer Branca' },
        { imagem: camisa8, nome: 'Camisa de Botão Branca' },
        { imagem: camisa9, nome: 'Camiseta Básica Azul' },
        { imagem: camisa10, nome: 'Camiseta Básica Marrom' },
        { imagem: camisa11, nome: 'Camisa Polo Branca' },
        { imagem: camisa12, nome: 'Camiseta Básica Preta' },
        { imagem: camisa13, nome: 'Camiseta Básica Rosa' },
        { imagem: camisa14, nome: 'Camisa De Botão Branca' },
        { imagem: camisa15, nome: 'Camisa Gola Padre Preta' },
        { imagem: camisa16, nome: 'Camiseta Básica Salmão' },
        { imagem: camisa17, nome: 'Camisa Social Azul' },
        { imagem: camisa18, nome: 'Camiseta Básica Laranja' },
        { imagem: camisa19, nome: 'Camiseta Básica Branca ' },
        { imagem: camisa20, nome: 'Camiseta Regata Machão Branca' },
        { imagem: camisa21, nome: 'Camiseta Listrada Branca' },
        { imagem: camisa22, nome: 'Camiseta Regata Branca' },
    ]
    const calcas: CardRoupa[] = [
        { imagem: calca1, nome: 'Calça De Alfaiataria Bege' },
        { imagem: calca2, nome: 'Calça De Alfaiataria Bege Claro' },
        { imagem: calca3, nome: 'Calça De Alfaiataria Marrom Claro' },
        { imagem: calca4, nome: 'Calça De Alfaiataria Preta' },
        { imagem: calca5, nome: 'Calça De Alfaiataria Bege' },
        
    ]
    const bermudas: CardRoupa[] = [
        { imagem: bermuda1, nome: 'Bermuda Chino Cáqui' },
        { imagem: bermuda2, nome: 'Bermuda Chino Marrom' },
        { imagem: bermuda3, nome: 'Bermuda Casual' },
        { imagem: bermuda4, nome: 'Bermuda Casual ' },
        { imagem: bermuda5, nome: 'Bermuda Casual Verde-Claro ' },
        { imagem: bermuda6, nome: 'Bermuda Chino Azul' },
        { imagem: bermuda7, nome: 'Bermuda Casual Rosa' },
        { imagem: bermuda8, nome: 'Bermuda Chino Bege' },
    ]
    const sapatos: CardRoupa[] = [
        { imagem: sapato1, nome: 'Slip-On Couro Bicolor' },
        { imagem: sapato2, nome: 'Sapato Em Couro Marrom' },
        { imagem: sapato3, nome: 'Slip-on Em Couro Preto' },
        { imagem: sapato4, nome: 'Tenis Casual Preto' },
        { imagem: sapato5, nome: 'Slip-On Em Camurça Marrom' },
        { imagem: sapato6, nome: 'Tenis Casual Bege' },
        { imagem: sapato7, nome: 'Slip-On Em Couro Marrom' },
        { imagem: sapato9, nome: 'Tenis Casual Branco' },
        { imagem: sapato10, nome: 'Slip-On em camurça Verde ' },
    ]
    const sueteres: CardRoupa[] = [
        { imagem: sueter1, nome: 'Exemplo titulo item' },
        { imagem: sueter2, nome: 'Sueter Azul Com Listras' },
        { imagem: sueter3, nome: 'Sueter Verde Com Listras ' },
        { imagem: sueter4, nome: 'Sueter Cor Telha ' },
        { imagem: sueter5, nome: 'Sueter Azul E Branco Bicolor' },
        { imagem: sueter6, nome: 'Sueter ' },
    ]
    const blazers: CardRoupa[] = [
        { imagem: blazer1, nome: 'Blazer Slim Fit Preto' },
        { imagem: blazer2, nome: 'Blazer Slim Fit Cinza ' },
        { imagem: blazer3, nome: 'Blazer Slim Fit Bege' },
        { imagem: blazer4, nome: 'Blazer Slim Fit Marrom' },
    ]

    const [show, setShow] = useState(false);
    const [showCamisas, setShowCamisas] = useState(false);
    const [showCalcas, setShowCalcas] = useState(false);
    const [showBermudas, setShowBermudas] = useState(false);
    const [showSapatos, setShowSapatos] = useState(false);
    const [showSueteres, setShowSueteres] = useState(false);
    const [showBlazers, setShowBlazers] = useState(false);
    const handleClose = (modalType: string) => {
        switch (modalType) {
            case 'camisas': setShowCamisas(false); break;
            case 'calcas': setShowCalcas(false); break;
            case 'bermudas': setShowBermudas(false); break;
            case 'sapatos': setShowSapatos(false); break;
            case 'sueteres': setShowSueteres(false); break;
            case 'blazers': setShowBlazers(false); break;
        }
    };

    const handleShow = (modalType: string) => {
        switch (modalType) {
            case 'camisas': setShowCamisas(true); break;
            case 'calcas': setShowCalcas(true); break;
            case 'bermudas': setShowBermudas(true); break;
            case 'sapatos': setShowSapatos(true); break;
            case 'sueteres': setShowSueteres(true); break;
            case 'blazers': setShowBlazers(true); break;
        }
    };

    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
    useEffect(() => {
        async function fetchInstagramPosts() {
            try {
                const response = await fetch('https://dizas-7odici6w9-arturjansens-projects.vercel.app/api/instagram');
                const data = await response.json();
                setInstagramPosts(data.data);
            } catch (error) {
                console.error('Erro ao buscar publicações do Instagram:', error);
            }
        }

        fetchInstagramPosts();
    }, []);

    const recentVideoPost = (instagramPosts || [])
        .filter(post => post.media_type === 'VIDEO')
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 1);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Header></Header>
            <section id='home' className='home'>
                <h1 className='home__titulo'>BEM-VINDO QUERIDO CLIENTE</h1>
                <Image className='home__logo-dizas' src={logoHome} alt='Logo da Dizas Store'></Image>
                <div className='home__container-texto'>
                    <h2 className='home__container-texto-titulo'>Vista-se com a Confiança que Você Merece.</h2>
                    <p className='home__container-texto-p'>Acreditamos que a roupa certa pode transformar a maneira como você se sente. Na Dizas Stories, você encontra peças que elevam sua autoestima e te inspiram a expressar sua individualidade com autenticidade. Do casual ao formal, descubra o seu estilo e vista-se de autoconfiança.</p>
                </div>
                <div className='home__container-btn'>
                    <button className='home__btn-contato'><a className='home__btn-contato-link' href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!">Entre Em Contato <FaWhatsapp /></a></button>
                    <button className='home__btn-site'><a className='home__btn-site-link' href="#sobre">Explore A Loja <TiShoppingCart /></a></button>
                </div>
            </section>
            <section id='sobre' className='sobre'>
                <h2 className='sobre__titulo'>Conheça a Dizas</h2>
                <div className='sobre__container'>
                    <div className='sobre__container-cima'>
                        {recentVideoPost.map((post) => (
                            <div key={post.id} className="instagram-reel">
                                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                                    {post.media_type === 'VIDEO' && <video className='instagram-post-reel' controls src={post.media_url}></video>}
                                </a>
                            </div>
                        ))}
                        <Accordion className='accordion' defaultActiveKey="0">
                            <Accordion.Item className='accordion__item' eventKey="0">
                                <Accordion.Header className='accordion__header'>Nossa Missão</Accordion.Header>
                                <Accordion.Body className='accordion__body'>
                                    Transformar a experiência de vestir do homem moderno, oferecendo roupas que aliam estilo, qualidade e personalidade, ajudando nossos clientes a se sentirem confiantes em qualquer ocasião.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='accordion__item' eventKey="1">
                                <Accordion.Header className='accordion__header'>Valores da Dizas</Accordion.Header>
                                <Accordion.Body className='accordion__body'>
                                    A excelência é nosso compromisso com a qualidade em cada detalhe, desde o atendimento até o produto final. Valorizamos a autenticidade, oferecendo peças que refletem o estilo único de cada cliente e traduzem sua personalidade. A confiança é a base das nossas relações, construindo laços transparentes e sólidos com nossos clientes e parceiros. Além disso, buscamos sempre a inovação, estando à frente das tendências e oferecendo soluções que atendem às necessidades do homem moderno.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='accordion__item' eventKey="2">
                                <Accordion.Header className='accordion__header'>Nosso Objetivo</Accordion.Header>
                                <Accordion.Body className='accordion__body'>
                                    Há seis anos, o que parecia um sonho se tornou realidade. Eram só planos, vontades e pensamentos em trazer para a cidade um novo conceito de padaria, e assim aconteceu. Em 2017, nasce um projeto com grandes perspectivas e as melhores intenções. O povo conjacuípense merecia nosso projeto e assim fizemos!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='accordion__item' eventKey="3">
                                <Accordion.Header className='accordion__header'>O Que Há de Melhor</Accordion.Header>
                                <Accordion.Body className='accordion__body'>
                                    Na nossa loja, oferecemos uma ampla variedade de roupas e acessórios para atender ao estilo e necessidades do homem moderno. Temos camisas, calças, bermudas, blazers, suéteres, jaquetas, sapatos e muito mais, com peças que combinam conforto, qualidade e elegância. Cada item é cuidadosamente selecionado para proporcionar o melhor em moda, garantindo opções versáteis e de alta qualidade para todas as ocasiões.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='sobre__container-baixo'>
                        <h3>Nossas Redes</h3>
                        <div className="sobre__galeria-fotos">
                        {(instagramPosts || []).slice(0, 4).map((post) => (
                                <div key={post.id} className="instagram-post">
                                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                                        {post.media_type === 'IMAGE' && <img className='instagram-post-feed' src={post.media_url} alt={post.caption} />}
                                        {post.media_type === 'CAROUSEL_ALBUM' && <img className='instagram-post-feed' src={post.media_url} alt={post.caption} />}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="vantagens">
                <div className="vantagens__container">
                    <div className="vantagens__item">
                        <BsShop className='vantagens__item-icon'/>
                        <h4>Ambiente Agradável</h4>
                        <p>Em nossa loja, você encontra um ambiente acolhedor, além de uma localização privilegiada para facilitar sua visita. Venha se sentir bem e encontrar as peças perfeitas para o seu estilo.</p>
                    </div>
                    <div className="vantagens__item">
                        <MdBusinessCenter className='vantagens__item-icon'/>
                        <h4>Consultoria Especializada</h4>
                        <p>Vista-se com segurança e estilo! Nossa consultoria te ajuda a descobrir o que te veste melhor, elevando sua autoestima e autoconfiança. Agende sua consultoria na loja e sinta a diferença.</p>
                    </div>
                    <div className="vantagens__item">
                        <RiDiscountPercentLine className='vantagens__item-icon'/>
                        <h4>10% Off</h4>
                        <p>Não perca tempo! Garanta 10% de desconto em sua primeira compra e comece a economizar agora mesmo. Aproveite essa oportunidade única e renove seu estilo.</p>
                    </div>
                    <div className="vantagens__item">
                         <GiClothes className='vantagens__item-icon'/>
                        <h4>Tendencias 2024</h4>
                        <p>Simplifique suas escolhas com peças casuais versáteis e estilosas. Trazemos opções para todos os momentos, do trabalho ao happy hour! Desde camisas básicas até camisas polo e calças chino!</p>
                    </div>
                </div>
                <button className='vantagens__btn-contato'><a className='vantagens__btn-contato-link' href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!">Entre Em Contato <FaWhatsapp /></a></button>
            </div>
            <section id='colecao' className='colecao'>
                <h2 className='colecao__titulo'>Nossa Coleção</h2>
                <div className='container__colecao'>
                    <div className='colecao__item cdp-item1'>
                        <div className="colecao__div-titulo">
                            <h3 className="colecao__item-titulo">Camisas</h3>
                        </div>
                        <Button className='colecao__btn' variant="primary" onClick={() => handleShow('camisas')}>Saiba Mais</Button>
                    </div>
                    <div className='colecao__item cdp-item2'>
                        <div className="colecao__div-titulo">
                            <h3 className="colecao__item-titulo">Calças</h3>
                        </div>
                        <Button className='colecao__btn' variant="primary" onClick={() => handleShow('calcas')}>Saiba Mais</Button>
                    </div>
                    <div className='colecao__item cdp-item3'>
                        <div className="colecao__div-titulo">
                            <h3 className="colecao__item-titulo">Bermudas</h3>
                        </div>
                        <Button className='colecao__btn' variant="primary" onClick={() => handleShow('bermudas')}>Saiba Mais</Button>
                    </div>
                    <div className='colecao__item cdp-item4'>
                        <div className="colecao__div-titulo">
                            <h3 className="colecao__item-titulo">Sapatos</h3>
                        </div>
                        <Button className='colecao__btn' variant="primary" onClick={() => handleShow('sapatos')}>Saiba Mais</Button>
                    </div>
                    <div className='colecao__item cdp-item5'>
                        <div className="colecao__div-titulo">
                            <h3 className="colecao__item-titulo">Suéteres</h3>
                        </div>
                        <Button className='colecao__btn' variant="primary" onClick={() => handleShow('sueteres')}>Saiba Mais</Button>
                    </div>
                    <div className='colecao__item cdp-item7'>
                        <div className="colecao__div-titulo">
                            <h3 className="colecao__item-titulo">Blazers</h3>
                        </div>
                        <Button className='colecao__btn' variant="primary" onClick={() => handleShow('blazers')}>Saiba Mais</Button>
                    </div>
                </div>
                <Modal className='colecao__modal' show={showCamisas} onHide={() => handleClose('camisas')}>
                    <Modal.Header className='colecao__modal-header' closeButton>
                        <Modal.Title className='colecao__modal-titulo'>NOSSAS CAMISAS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='colecao__modal-container'>
                        {camisas.map((camisa, index) => (
                            <div key={index} className='colecao__modal-container-card'>
                                <Image className='colecao__modal-container-card-imagem' src={camisa.imagem} alt='Imagem de Camisa'></Image>
                                <h4 className='colecao__modal-container-card-titulo'>{camisa.nome}</h4>
                                <button className='colecao__modal-container-card-btn'>
                                    <a className='colecao__modal-container-card-btn-link' href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!">QUERO COMPRAR</a>
                                </button>
                            </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose('camisas')}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='colecao__modal' show={showCalcas} onHide={() => handleClose('calcas')}>
                    <Modal.Header className='colecao__modal-header' closeButton>
                        <Modal.Title className='colecao__modal-titulo'>NOSSAS CALÇAS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='colecao__modal-container'>
                        {calcas.map((calca, index) => (
                            <div key={index} className='colecao__modal-container-card'>
                                <Image className='colecao__modal-container-card-imagem' src={calca.imagem} alt='Imagem de Calça'></Image>
                                <h4 className='colecao__modal-container-card-titulo'>{calca.nome}</h4>
                                <button className='colecao__modal-container-card-btn'>
                                    <a className='colecao__modal-container-card-btn-link' href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!">QUERO COMPRAR</a>
                                </button>
                            </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose('calcas')}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='colecao__modal' show={showBermudas} onHide={() => handleClose('bermudas')}>
                    <Modal.Header className='colecao__modal-header' closeButton>
                        <Modal.Title className='colecao__modal-titulo'>NOSSAS BERMUDAS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='colecao__modal-container'>
                        {bermudas.map((bermuda, index) => (
                            <div key={index} className='colecao__modal-container-card'>
                                <Image className='colecao__modal-container-card-imagem' src={bermuda.imagem} alt='Imagem de Bermuda'></Image>
                                <h4 className='colecao__modal-container-card-titulo'>{bermuda.nome}</h4>
                                <button className='colecao__modal-container-card-btn'>
                                    <a className='colecao__modal-container-card-btn-link' href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!">QUERO COMPRAR</a>
                                </button>
                            </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose('bermudas')}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal >
                <Modal className='colecao__modal' show={showSapatos} onHide={() => handleClose('sapatos')}>
                    <Modal.Header className='colecao__modal-header' closeButton>
                        <Modal.Title className='colecao__modal-titulo'>NOSSOS SAPATOS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='colecao__modal-container'>
                        {sapatos.map((sapato, index) => (
                            <div key={index} className='colecao__modal-container-card'>
                                <Image className='colecao__modal-container-card-imagem' src={sapato.imagem} alt='Imagem de Sapato'></Image>
                                <h4 className='colecao__modal-container-card-titulo'>{sapato.nome}</h4>
                                <button className='colecao__modal-container-card-btn'>
                                    <a className='colecao__modal-container-card-btn-link' href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!">QUERO COMPRAR</a>
                                </button>
                            </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose('sapatos')}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal >
                <Modal className='colecao__modal' show={showSueteres} onHide={() => handleClose('sueteres')}>
                    <Modal.Header className='colecao__modal-header' closeButton>
                        <Modal.Title className='colecao__modal-titulo'>NOSSOS SUÉTERES</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='colecao__modal-container'>
                        {sueteres.map((sueter, index) => (
                            <div key={index} className='colecao__modal-container-card'>
                                <Image className='colecao__modal-container-card-imagem' src={sueter.imagem} alt='Imagem de Suéter'></Image>
                                <h4 className='colecao__modal-container-card-titulo'>{sueter.nome}</h4>
                                <button className='colecao__modal-container-card-btn'>
                                    <a className='colecao__modal-container-card-btn-link' href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!">QUERO COMPRAR</a>
                                </button>
                            </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose('sueteres')}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='colecao__modal' show={showBlazers} onHide={() => handleClose('blazers')}>
                    <Modal.Header className='colecao__modal-header' closeButton>
                        <Modal.Title className='colecao__modal-titulo'>NOSSOS BLAZERS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='colecao__modal-container'>
                        {blazers.map((blazer, index) => (
                            <div key={index} className='colecao__modal-container-card'>
                                <Image className='colecao__modal-container-card-imagem' src={blazer.imagem} alt='Imagem de Blazer'></Image>
                                <h4 className='colecao__modal-container-card-titulo'>{blazer.nome}</h4>
                                <button className='colecao__modal-container-card-btn'>
                                    <a className='colecao__modal-container-card-btn-link' href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!">QUERO COMPRAR</a>
                                </button>
                            </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose('blazers')}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section >
            <section id='depoimentos' className='depoimentos'>
                <h2 className='depoimentos__titulo'>Depoimentos dos clientes</h2>
                <div className="depoimentos__container">
                    <div className="elfsight-app-47faf601-94f1-4bc1-86bd-53d7dc3e70b5" data-elfsight-app-lazy></div>
                    <button className='depoimentos__button-avaliacao'><a className='depoimentos__button-avaliacao-link' href="https://www.google.com/maps/place/Dizas+store+-+Moda+masculina/@-12.2429157,-38.9538725,17z/data=!4m8!3m7!1s0x71439252bae8799:0x9058203ec1ccff00!8m2!3d-12.2429157!4d-38.9512976!9m1!1b1!16s%2Fg%2F11j8tnjpkw?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D">Deixar Uma Avaliação <FaGoogle className='depoimentos__button-avaliacao-link-icon'/></a></button>
                </div>
            </section>
            <section id='localizacao' className='localizacao'>
                <h2 className='localizacao__titulo'>Onde nos encontrar</h2>
                <div className="localizacao__container">
                    <div className="localizacao-subcontainer">
                        <Image className='localizacao__banner' src={bannerLado} alt={'Foto da fachada da padaria'}></Image>
                        <div className="localizacao__infos">
                            <div className='localizacao__infos-p'>
                                <p className='localizacao__infos-p-texto'><FaDotCircle className='localizacao__infos-pontos' />Feira de Santana - Bahia</p>
                                <div className='localizacao__endereco'>
                                    <p className='localizacao__infos-p-texto'>
                                        <FaDotCircle className='localizacao__infos-pontos' />
                                        Rua Juarez Távora, 60 - Cel. Jose Pinto, 44051-472
                                    </p>
                                    <strong className='localizacao__infos-strong'> (<span className='localizacao__infos-span'>Atrás do shopping boulevard</span>)</strong>
                                </div>
                                <div className='localizacao__horarios'>
                                    <p className='localizacao__infos-p-texto'><FaDotCircle className='localizacao__infos-pontos' /> Na semana: 08:00 - 19:40</p>
                                    <p className='localizacao__infos-p-texto'>Aos Sábados: 08:00 - 17:40</p>
                                    <p className='localizacao__infos-p-texto'>Aos Domingos: 08:00 - 12:40</p>
                                </div>
                                <p className='localizacao__infos-p-texto'><FaDotCircle className='localizacao__infos-pontos' /> (75) 98333-2332</p>
                                <p className='localizacao__infos-p-texto'><FaDotCircle className='localizacao__infos-pontos' /> xxxxx@gmail.com</p>
                            </div>
                            <iframe className='localizacao__mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19739.08856260243!2d-38.96975150600157!3d-12.242915084135445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439252bae8799%3A0x9058203ec1ccff00!2sDizas%20store%20-%20Moda%20masculina!5e1!3m2!1spt-BR!2sbr!4v1732882225712!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='localizacao__subcontainer-redes'>
                        <h3>Redes Sociais</h3>
                        <div className='container__redes-icons'>
                            <a href="https://www.instagram.com/dizas_store/"><FaInstagram className='contato__redes-icon' /></a>
                            <a href="https://www.facebook.com/dizasstoree"><FaFacebookF className='contato__redes-icon' /></a>
                            <a href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!"><FaWhatsapp className='contato__redes-icon' /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;