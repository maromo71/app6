import { Container } from 'reactstrap';
import Head from 'next/head';
import Header from '../components/Header';
import Painel from '../components/Panel';
import Footer from '../components/MyFooter';
import styled from '../styles/Home.module.css';


function Home() {
         return <div>
        <Header />
        <Head>
            <title>Site do Maromo</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <p />
            <Container>
                <Painel />
            </Container>
            <p />
            <Container>
                <h1 className={styled.title}>Home</h1>
                <h3>Página do professor Maromo</h3>
                <p>Nesta página você encontra as principais informações sobre o professor e suas aulas</p>
                <p>Esta é a página de discussão de Tecnologia, destinada ao debate sobre melhorias e tarefas relacionadas aos conteúdos de aula do professor. Isto não é um fórum para discussão geral sobre o assunto tratado nele.</p>
                <p> O professor Maromo se dedica ao estudo de Tecnologia da Informação e Comunicação a mais de 20 anos. Tendo lecionado em diversas instituições públicas e privadas.</p>
            </Container>
        </Container>
        <Footer/>
    </div>
}

export default Home