import type { Metadata } from "next";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export const metadata: Metadata = {
  title: "Dizas Store - Moda Masculina",
  description: "Aqui na Dizas Store, somos referências em moda masculina em Feira de Santana, então venha aproveitar o máximo da melhor loja de roupa masculina da cidade!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <button className="whatsApp" aria-label="Direcionar para o WhatsApp">
          <a className="whatsApp-link"
            href="https://wa.me/5575983332332?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!">
            <FaWhatsapp className="icon-whats"/>
          </a>
        </button>
        <button className="voltarTopo" aria-label="Voltar para o topo da página">
          <a className="voltarTopo-link"
            href="#home">
            <IoIosArrowUp className="icon-seta"/>
          </a>
        </button>
        {children}
      </body>
    </html>
  );
}
