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
            <a href="#">Sobre nós</a>
            <a href="#">Cannabis Medicinal</a>
            <a href="#">Produtos</a>
            <a href="#">Blog</a>
            <a href="#">FAQ</a>
            <a href="#">Profissionais da saúde</a>
            <a href="#">Parceiros</a>
            <a href="#">Políticas de privacidade</a>
            <a href="#">Políticas de agendamento</a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-10">Fale conosco</h3>
          <p>faleconosco@cannect.com.br</p>
          <h3 className="text-xl font-semibold my-10">Redes sociais:</h3>
          <div className="flex gap-6">
            <a href="#"><Image src={'/facebook.svg'} alt={""} width={35} height={42}/></a>
            <a href="#"><Image src={'/instagram.svg'} alt={""} width={35} height={42}/></a>
            <a href="#"><Image src={'/twitter.svg'} alt={""} width={35} height={42}/></a>
            <a href="#"><Image src={'/linkedin.svg'} alt={""} width={35} height={42}/></a>
            <a href="#"><Image src={'/youtube.svg'} alt={""} width={35} height={42}/></a>
          </div>

        </div>
      </div>
      <div className="mt-14 flex gap-10">
        <div>
          <p>CANNECT SERVIÇOS DE INTERNET S/A - CNPJ: 41.418.943/0001-16 <br />  R. Dr. Renato Paes de Barros, 33 - Itaim Bibi, São Paulo - SP, 04530-000</p>
        </div>
        <div>
          <p>Meios de pagamento:</p>
          <Image src={'/payment.png'} alt={""} width={314} height={24}/>
        </div>
        <div>
          <p>Fazemos parte do programa</p>
          <Image src={'/endeavor.png'} alt={""} width={145} height={51}/>
        </div>
      </div>
    </footer>
  )}