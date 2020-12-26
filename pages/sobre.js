import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';
import Header from '../components/Header';

function Sobre() {
    return <div >
        <Header />
        <Container>
            <h1>Sobre</h1>
            <h3>Quem é o Maromo? </h3>
            <div style={{display: 'block', margin: '0 auto', padding: '10px',  width: '18rem'}}>
                <img  style={{borderRadius: '50%'}} className="card-img-top" alt="Foto do Maromo" src='https://avatars2.githubusercontent.com/u/9035218?s=460&amp;u=589efdc362df4e01493e17a576ea01574f4a2e10&amp;v=4' />

            </div>

            <p>
                O professor Marcos Roberto de Moraes, <strong>o Maromo</strong>, possui graduação 
                em Tecnologia Em Processamento de Dados pela Fundação Pinhalense de
                Ensino (1995), mestrado em Educação pelo Centro Universitário Salesiano São Paulo (2009),
                especialização em Administração de Sistemas de Informação.
                Atualmente é professor e coordenador no Curso Superior de Análise e Desenvolvimento de
                Sistemas do Centro Estadual de Educação Tecnológica Paula Souza (FATEC),
                professor da Associação Educacional e Assistencial Santa Lúcia no Curso Superior de
                Engenharia da Computação e professor Nível III do Centro Estadual de Educação Tecnológica
                Paula Souza (ETEC). Tem experiência na área de Ciência da Computação
       </p>
            <Link href="/">
                <Button color="primary">Acessar a página home</Button>
            </Link>
        </Container>

    </div>
}

export default Sobre