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


import camisa1 from '../../assets/camisas/camisa1.webp';
import camisa2 from '../../assets/camisas/camisa2.webp';
import camisa3 from '../../assets/camisas/camisa3.webp';
import camisa4 from '../../assets/camisas/camisa4.webp';
import camisa5 from '../../assets/camisas/camisa5.webp';
import camisa6 from '../../assets/camisas/camisa2.webp';
import camisa7 from '../../assets/camisas/camisa3.webp';
import camisa8 from '../../assets/camisas/camisa4.webp';
import camisa9 from '../../assets/camisas/camisa5.webp';
import camisa10 from '../../assets/camisas/camisa1.webp';
import camisa11 from '../../assets/camisas/camisa2.webp';
import camisa12 from '../../assets/camisas/camisa3.webp';
import camisa13 from '../../assets/camisas/camisa4.webp';
import camisa14 from '../../assets/camisas/camisa5.webp';
import camisa15 from '../../assets/camisas/camisa1.webp';
import camisa16 from '../../assets/camisas/camisa2.webp';
import camisa17 from '../../assets/camisas/camisa3.webp';
import camisa18 from '../../assets/camisas/camisa4.webp';
import camisa19 from '../../assets/camisas/camisa5.webp';

import calca1 from '../../assets/calcas/calca1.webp';

import bermuda1 from '../../assets/bermudas/bermuda1.webp';
import bermuda2 from '../../assets/bermudas/bermuda2.webp';
import bermuda3 from '../../assets/bermudas/bermuda3.webp';
import bermuda4 from '../../assets/bermudas/bermuda4.webp';
import bermuda5 from '../../assets/bermudas/bermuda5.webp';
import bermuda6 from '../../assets/bermudas/bermuda6.webp';

import sapato1 from '../../assets/sapatos/sapato1.webp';

import blazer1 from '../../assets/blazers/blazer1.webp';
import blazer2 from '../../assets/blazers/blazer2.webp';

interface CardRoupa {
    imagem: StaticImageData;
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
        { imagem: camisa1, nome: 'Exemplo titulo item' },
        { imagem: camisa2, nome: 'Exemplo titulo item' },
        { imagem: camisa3, nome: 'Exemplo titulo item' },
        { imagem: camisa4, nome: 'Exemplo titulo item' },
        { imagem: camisa5, nome: 'Exemplo titulo item' },
        { imagem: camisa6, nome: 'Exemplo titulo item' },
        { imagem: camisa7, nome: 'Exemplo titulo item' },
        { imagem: camisa8, nome: 'Exemplo titulo item' },
        { imagem: camisa9, nome: 'Exemplo titulo item' },
        { imagem: camisa10, nome: 'Exemplo titulo item' },
        { imagem: camisa11, nome: 'Exemplo titulo item' },
        { imagem: camisa12, nome: 'Exemplo titulo item' },
        { imagem: camisa13, nome: 'Exemplo titulo item' },
        { imagem: camisa14, nome: 'Exemplo titulo item' },
        { imagem: camisa15, nome: 'Exemplo titulo item' },
        { imagem: camisa16, nome: 'Exemplo titulo item' },
        { imagem: camisa17, nome: 'Exemplo titulo item' },
        { imagem: camisa18, nome: 'Exemplo titulo item' },
        { imagem: camisa19, nome: 'Exemplo titulo item' },
    ]
    const calcas: CardRoupa[] = [
        { imagem: calca1, nome: 'Exemplo titulo item' },
    ]
    const bermudas: CardRoupa[] = [
        { imagem: bermuda1, nome: 'Exemplo titulo item' },
        { imagem: bermuda2, nome: 'Exemplo titulo item' },
        { imagem: bermuda3, nome: 'Exemplo titulo item' },
        { imagem: bermuda4, nome: 'Exemplo titulo item' },
        { imagem: bermuda5, nome: 'Exemplo titulo item' },
        { imagem: bermuda6, nome: 'Exemplo titulo item' },
    ]
    const sapatos: CardRoupa[] = [
        { imagem: sapato1, nome: 'Exemplo titulo item' },
    ]
    const blazers: CardRoupa[] = [
        { imagem: blazer1, nome: 'Exemplo titulo item' },
        { imagem: blazer2, nome: 'Exemplo titulo item' },
    ]

    const [show, setShow] = useState(false);
    const [showCamisas, setShowCamisas] = useState(false);
    const [showCalcas, setShowCalcas] = useState(false);
    const [showBermudas, setShowBermudas] = useState(false);
    const [showSapatos, setShowSapatos] = useState(false);
    const [showBlazers, setShowBlazers] = useState(false);
    const handleClose = (modalType: string) => {
        switch (modalType) {
            case 'camisas': setShowCamisas(false); break;
            case 'calcas': setShowCalcas(false); break;
            case 'bermudas': setShowBermudas(false); break;
            case 'sapatos': setShowSapatos(false); break;
            case 'blazers': setShowBlazers(false); break;
        }
    };

    const handleShow = (modalType: string) => {
        switch (modalType) {
            case 'camisas': setShowCamisas(true); break;
            case 'calcas': setShowCalcas(true); break;
            case 'bermudas': setShowBermudas(true); break;
            case 'sapatos': setShowSapatos(true); break;
            case 'blazers': setShowBlazers(true); break;
        }
    };

    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
    useEffect(() => {
        async function fetchInstagramPosts() {
            const accessToken = 'IGQWRQM3JNYUZApQzE4eXc1Umgtd2d1Q2ZACTm9kNjV6ME1Sc0tGdE1MQlRIel8xeko5UkZAKZADlVM3NGZAEF1WWxJOTFOSzV5dHpaeTY5WVp0dnNPOHRpRndZAN3FNWlgtV1pJQ085am9FR21Xc1N0Qk9OSnhsdmpCcTAZD';
            try {
                const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`);
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
                                <Accordion.Header className='accordion__header'>Missão e Valores</Accordion.Header>
                                <Accordion.Body className='accordion__body'>
                                    Oferecer à nossa cidade um ambiente agradável, com produtos de qualidade e atendimento diferenciado. Honrar nossos princípios, respeitando a todos, independentemente de cor, raça e etnia. Ter um olhar humano de forma holística.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='accordion__item' eventKey="1">
                                <Accordion.Header className='accordion__header'>Onde Atendemos</Accordion.Header>
                                <Accordion.Body className='accordion__body'>
                                    Além de Conceição do Jacuípe, atendemos em Coração de Maria, Teodoro Sampaio, Lustosa, Terra Nova, dentre outras cidades... Consulte com nossa equipe via WhatsApp!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='accordion__item' eventKey="2">
                                <Accordion.Header className='accordion__header'>Nossa História</Accordion.Header>
                                <Accordion.Body className='accordion__body'>
                                    Há seis anos, o que parecia um sonho se tornou realidade. Eram só planos, vontades e pensamentos em trazer para a cidade um novo conceito de padaria, e assim aconteceu. Em 2017, nasce um projeto com grandes perspectivas e as melhores intenções. O povo conjacuípense merecia nosso projeto e assim fizemos!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='accordion__item' eventKey="3">
                                <Accordion.Header className='accordion__header'>O Que Oferecemos de Melhor</Accordion.Header>
                                <Accordion.Body className='accordion__body'>
                                    Oferecemos diversos tipos de pães, desde massas comuns a massas especiais, deliciosos lanches, sobremesas, buffet de café da manhã, sopas, caldos, mingaus, bebidas, sorvetes, picolés e itens de bomboniere.
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
                        <p>Em nossa loja, você encontra um ambiente acolhedor, com café, biscoitinhos e ar condicionado, além de uma localização privilegiada para facilitar sua visita. Venha se sentir bem e encontrar as peças perfeitas para o seu estilo.</p>
                    </div>
                    <div className="vantagens__item">
                        <MdBusinessCenter className='vantagens__item-icon'/>
                        <h4>Consultoria Especializada</h4>
                        <p>Vista-se com segurança e estilo! Nossa consultoria te ajuda a descobrir o que te veste melhor, elevando sua autoestima e autoconfiança. Agende sua consultoria na loja e sinta a diferença.</p>
                    </div>
                    <div className="vantagens__item">
                        <RiDiscountPercentLine className='vantagens__item-icon'/>
                        <h4>10% Off</h4>
                        <p>Não perca tempo! Garanta 10% de desconto em sua primeira compra e comece a economizar agora mesmo. Aproveite essa oportunidade única e renove seu estilo.</p>
                    </div>
                    <div className="vantagens__item">
                         <GiClothes className='vantagens__item-icon'/>
                        <h4>Tendencias 2024</h4>
                        <p>Simplifique suas escolhas com peças casuais versáteis e cheias de estilo. Nossa coleção traz opções para todos os momentos, do trabalho ao happy hour. Encontre desde camisetas básicas até camisas polo e calças chino que combinam com tudo, Confira!</p>
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