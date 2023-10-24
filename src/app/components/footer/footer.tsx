import Image from "next/image";
import { footerStyles, footerContainerStyles } from "./footer.styles";

export default function Footer({...props}) {
  return (
    <footer {...props} className={footerStyles()}>
      <div className={footerContainerStyles()}>
        <Image src={'/cannect-branco.png'} alt={""} width={203} height={34} style={{maxHeight: '34px'}}/>
        <div>
          <h3 className="text-xl font-semibold mb-10">Acesso rápido:</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <p>Sobre nós</p>
            <p>Cannabis Medicinal</p>
            <p>Produtos</p>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Profissionais da saúde</p>
            <p>Parceiros</p>
            <p>Políticas de privacidade</p>
            <p>Políticas de agendamento</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-10">Fale conosco</h3>
          <p>faleconosco@cannect.com.br</p>
        </div>
      </div>
      <div className="mt-14">
        <p>CANNECT SERVIÇOS DE INTERNET S/A - CNPJ: 41.418.943/0001-16 R. Dr. Renato Paes de Barros, 33 - Itaim Bibi, São Paulo - SP, 04530-000</p>
      </div>
    </footer>
  )}