import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faFirstAid, faHeartbeat, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { mainBlogStyles, mainCardStyles, mainSectionStyles, mainTestimonialStyles } from "./main.styles";

export default function Main() {
  return (
    <div className="overflow-x-hidden">
      <section className={`${mainSectionStyles()} flex justify-between`}>
        <div className="flex flex-col justify-center max-w-[598px] gap-5">
          <h1 className="text-2xl lg:text-5xl">
            Inicie <span className="font-bold">seu tratamento</span><br/>com <span className="font-bold text-emerald-600 green-cannect">cannabis medicinal</span>
          </h1>
          <p>A Cannect pode te ajudar em seu caminho para uma vida melhor.
            Cuidamos de você em todo o processo, faça parte da revolução verde!
          </p>
          <div className="flex gap-8">
            <button className="btn btn-secondary">Agende sua consulta</button>
            <button className="btn btn-primary hidden lg:block">Inicie seu tratamento</button>
          </div>
        </div>
        <div className="flex gap-5">
          <Image src={'/banner-image-medium.png'} alt={""} width={338} height={409} className="hidden md:block lg:hidden" />
          <Image src={'/banner-image-1.webp'} alt={""} width={383} height={374} className="mt-[-34px] hidden lg:block" />
          <Image src={'/banner-image-2.webp'} alt={""} width={257} height={374} className="hidden lg:block" />
        </div>
      </section>

      <section className={`${mainSectionStyles()} pr-0`}>
        <h2 className="hidden lg:block font-semibold text-4xl mb-11">Seu caminho<span className="font-normal"> para uma </span>vida melhor:</h2>
        <div className="flex lg:hidden justify-start gap-4">
          <Image src={'/nao-tenho-receita-mobile.png'} className="shrink-0" alt={""} width={126} height={160}/>
          <Image src={'/receita-branca-mobile.png'} className="shrink-0" alt={""} width={126} height={160}/>
          <Image src={'/receita-especial-mobile.png'} className="shrink-0" alt={""} width={126} height={160}/>
        </div>
        <div className="hidden lg:flex justify-between gap-5">
          <Image src={'/nao-tenho-receita.png'} className="shrink-0" alt={""} width={360} height={212}/>
          <Image src={'/receita-branca.png'} className="shrink-0" alt={""} width={360} height={212}/>
          <Image src={'/receita-especial.png'} className="shrink-0" alt={""} width={360} height={212}/>
        </div>
      </section>

      <section className={`${mainSectionStyles()} bg-[url('/background-main.png')] bg-no-repeat	bg-cover text-white min-w-[100vw]`}>
        <div className="flex max-w-[1440px] m-auto">
          <div>
            <h2 className="font-normal text-5xl mb-10">Somos o<span className="font-semibold"> maior ecossistema de cannabis </span>da<span className="font-semibold"> América Latina</span></h2>
            <p className="text-xl">Conectamos centenas de pacientes, médicos, instituições de saúde, pesquisadores e fornecedores todas as semanas para facilitar o acesso à cannabis medicinal e educar para desmistificar o preconceito sobre seu uso.</p>
            <button className="btn btn-primary mt-10">conheça mais</button>
          </div>
          <div className="hidden lg:flex shrink-[0.5]">
            <Image src={'/empresas.png'} alt={""} width={419} height={398} className="m-auto" />
          </div>
        </div>
      </section>

      <section className={`${mainSectionStyles()} overflow-x-auto`}>
        <h2 className="mb-10 text-2xl	">
          Encontre <span className="font-bold text-emerald-600">ciência, saúde e bem-estar</span>
        </h2>
        <div className="flex gap-8">
          <Image src={'/oil.png'} alt={""} width={216} height={276}/>
          <Image src={'/gummy.png'} alt={""} width={216} height={276}/>
          <Image src={'/capsula.png'} alt={""} width={216} height={276}/>
          <Image src={'/topico.png'} alt={""} width={216} height={276}/>
        </div>
      </section>

      <section className={`${mainSectionStyles()} overflow-x-auto`}>
        <h2 className="mb-10 text-2xl	font-bold">
          Cuidamos de você <span className="font-normal">em</span> todo processo:
        </h2>
        <div className="flex gap-8">
          <div className="flex gap-6">
            <div className={mainCardStyles()}>
              <FontAwesomeIcon icon={faReceipt} size="2x" color="#48b791" className="self-baseline" />
              <h3 className="font-bold text-xl">Receita Médica</h3>
              <p>
                O primeiro passo é possuir sua receita médica e você pode contar com a Cannect para encontrar um profissional qualificado ou trazê-la de um médico de sua preferência.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className={mainCardStyles()}>
              <FontAwesomeIcon icon={faFirstAid} size="2x" color="#48b791" className="self-baseline" />
              <h3 className="font-bold text-xl">Receita Médica</h3>
              <p>
                Já tem uma receita? Encontre o produto prescrito pelo seu médico, adicione no carrinho e nos envie a receita e documento. Te ajudaremos em todo o processo.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className={mainCardStyles()}>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#48b791" className="self-baseline" />
              <h3 className="font-bold text-xl">Autorização da ANVISA</h3>
              <p>
                Caso sua receita seja simples (branca) uma autorização da ANVISA será necessária para que seu produto seja liberado em solo brasileiro, aqui você encontra instruções de como obtê-la.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className={mainCardStyles()}>
              <FontAwesomeIcon icon={faHeartbeat} size="2x" color="#48b791" className="self-baseline" />
              <h3 className="font-bold text-xl">Acompanhamento</h3>
              <p>
                Após iniciar seu tratamento, você pode receber acompanhamento de uma equipe de enfermagem especializada através do Cannect Cuida, preparada para tirar suas dúvidas e fornecer apoio assistencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${mainSectionStyles()} flex gap-32`}>
        <div className="font-medium">
          <h2 className="font-bold text-emerald-500 text-2xl lg:text-4xl mb-10">Quebre o tabu sobre Cannabis</h2>
          <h3 className="mb-2">O que é <span className="font-bold">cannabis medicinal?</span></h3>
          <p className="mb-8">A cannabis possui mais de 120 canabinoides – elementos que fazem parte de sua composição – encontrados até o momento. Para o tratamento medicinal, os componentes da cannabis, sobretudo o CDB, podem ser usados no tratamento de algumas doenças crônicas e neurológicas específicas, como: epilepsia, autismo, Alzheimer, dor crônica, Parkinson, insônia, entre outras.</p>
          <h3 className="mb-2">Como a <span className="font-bold">cannabis medicinal age no nosso corpo?</span></h3>
          <p className="mb-8">Os produtos de uso medicinal costumam utilizar dois componentes específicos: a tetra-hidrocanabinol (THC) e o canabidiol (CDB), os dois canabinoides mais abundantes e mais pesquisados até o momento.
            <br/>O THC e o CDB interagem com um sistema sinalizador vital do nosso organismo, denominado sistema endocanabinoide, responsável por regular uma série de funções vitais, como: dor, apetite, humor, memória, sono, ciclos vitais das células e respostas imunológicas.</p>
          <div className="flex flex-col lg:flex-row lg:w-full gap-4 w-64 mt-16">
            <button className="btn btn-secondary">Agende sua consulta</button>
            <button className="btn btn-primary">Inicie seu tratamento</button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={'/info-banner-image.webp'} alt={""} width={523} height={932}/>
        </div>
      </section>

      <section className={`${mainSectionStyles()} pr-0`}>
        <h3 className="font-bold text-4xl mb-11">Histórias reais <span className="font-normal">de quem</span> confia na Cannect</h3>
        <div className="flex gap-8 overflow-x-auto">
          <div className={mainTestimonialStyles()}>
            <Image src={'/julia.jpeg'} className="rounded-3xl object-cover" style={{maxHeight: '275px', minHeight: '275px', maxWidth: '252px', minWidth: '252px'}} alt={""} width={252} height={275}/>
            <h3 className="text-lg ">Júlia Pires</h3>
            <p className="text-ellipsis overflow-hidden">
            Júlia Pires, de 33 anos, sofria com ansiedade e insônia há um tempo. Com o início da pandemia de COVID-19, as coisas pioraram ainda mais. Mesmo fazendo terapia há dois anos, ela ainda teve crises de ansiedade no início do ano passado. Foi então que a sua psiquiatra recomendou a Cannect. Pires t ...</p>
          </div>
          <div className={mainTestimonialStyles()}>
            <Image src={'/elaine.jpeg'} className="rounded-3xl object-cover" style={{maxHeight: '275px', minHeight: '275px', maxWidth: '252px', minWidth: '252px'}} alt={""} width={252} height={275}/>
            <h3 className="text-lg ">Elaine Hansen</h3>
            <p className="text-ellipsis overflow-hidden">
            E laine Hansen, de 46 anos, tinha dores constantes, que afetavam principalmente o estômago. Ela não conseguia dormir direito, tomava uma grande quantidade de remédios e não tinha qualidade de vida. Foi só depois do tratamento com Cannabis Medicinal que tudo começou a mudar. Em poucos meses, as d ...
            </p>
          </div>
          <div className={mainTestimonialStyles()}>
            <Image src={'/soraia.jpeg'} className="rounded-3xl object-cover" style={{maxHeight: '275px', minHeight: '275px', maxWidth: '252px', minWidth: '252px'}} alt={""} width={252} height={275}/>
            <h3 className="text-lg ">Soraia Lopes</h3>
            <p className="text-ellipsis overflow-hidden">
              Soraia Lopes, de 52 anos, já apostava na cannabis bem antes de utilizá-la. Achar a Cannect só foi um facilitador para que ela finalmente fizesse o uso da terapia natural para tratar a fibromialgia.Ela passou a utilizar o óleo em fevereiro. Neste curto período, além das dores, a cannabis auxiliou na ...
            </p>
          </div>
          <div className={mainTestimonialStyles()}>
            <Image src={'/luciana.jpg'} className="rounded-3xl object-cover" style={{maxHeight: '275px', minHeight: '275px', maxWidth: '252px', minWidth: '252px'}} alt={""} width={252} height={275}/>
            <h3 className="text-lg ">Luciana Falcão</h3>
            <p className="text-ellipsis overflow-hidden">
              Luciana Falcão resolveu estudar um pouquinho mais a fundo os efeitos da cannabis para degeneração da mácula e artrose, condições que atingiram a sua mãe, Ila. Descobrir a Cannect para mim foi um “achado”, porque tivemos o atendimento da médica, a autorização da Anvisa e importação, tudo em um s ...
            </p>
          </div>
        </div>
      </section>

      <section className={`${mainSectionStyles()} overflow-x-auto`}>
        <h3 className="font-bold text-4xl mb-20">Parceiros Cannect</h3>
        <Image src={'/logos-parceiros.png'} className="grayscale min-w-[700px]" alt={""} width={1000} height={200}/>
      </section>

      <section className={`${mainSectionStyles()} overflow-x-auto`}>
        <h3 className="font-normal text-4xl mb-20">
          Leia aqui as
          <span className="font-bold"> novidades da </span>
          <span className="font-bold text-emerald-600">#revoluçãoverde</span>
        </h3>
        <div className="flex gap-5">
          <div className={mainBlogStyles()}>
            <Image src={'/blog1.jpg'} className="object-cover rounded-t-2xl" alt={""} width={432} height={283} style={{maxHeight: '283px', minHeight: '283px'}}/>
            <h3 className="text-xl font-bold px-5">O que é canabigerol (CBG) e para quais patologias pode servir?</h3>
            <p className="px-5 text-ellipsis overflow-hidden">O tratamento com cannabis vem se mostrando bastante amplo ao passo que mais estudos vêm sendo publicados. Hoje, sabe-se que a planta conta com mais de 500 substâncias conhecidas pela Ciência e uma destas é o canabigerol (CBG).</p>
          </div>
          <div className={mainBlogStyles()}>
            <Image src={'/blog2.jpg'} className="object-cover rounded-t-2xl" alt={""} width={432} height={283} style={{maxHeight: '283px', minHeight: '283px'}}/>
            <h3 className="text-xl font-bold px-5">Dia do Médico: quantos profissionais prescrevem cannabis no Brasil?</h3>
            <p className="px-5 text-ellipsis overflow-hidden">O Dia do Médico é comemorado em 18 de outubro. Esta data celebra uma profissão que diariamente realiza cuidados de saúde que são essenciais para o tratamento, prevenção e diagnóstico de diversas doenças.</p>
          </div>
          <div className={mainBlogStyles()}>
            <Image src={'/blog3.jpg'} className="object-cover rounded-t-2xl" alt={""} width={432} height={283} style={{maxHeight: '283px', minHeight: '283px'}}/>
            <h3 className="text-xl font-bold px-5">Cannect Ciência: um espaço com centenas de artigos científicos</h3>
            <p className="px-5 text-ellipsis overflow-hidden">Cannect conta com um espaço que reúne diversos estudos científicos nacionais e internacionais sobre cannabis medicinal. Cannect Ciência      é uma plataforma voltada para profissionais de saúde, pesquisadores e pessoas interessadas em evidências científicas sobre o assunto.</p>
          </div>
        </div>
      </section>
    </div>
  )}