import { Container } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/MyFooter';


function Fatec() {
    return <div>
        <Header />
        <Container>
            <h1>Fatec</h1>
            <h3>Fatec de Mogi Mirim - Arthur de Azevedo</h3>
            <div style={{ display: 'block', margin: '0 auto', padding: '10px', width: '18rem' }}>
                <img style={{ borderRadius: '0%' }} className="card-img-top" alt="Foto da Fatec" src='https://www.infoescola.com/wp-content/uploads/2016/06/logotipo-fatec.jpg' />
            </div>
            <Container>
                <p>
                    Pelo Decreto no. 51.878, de 06/06/2007, criou-se a Faculdade de Tecnologia de Mogi Mirim, como uma unidade de ensino Tecnológico do Centro Estadual de Educação Tecnológica Paula Souza, administração do governo José Serra.
                </p>

                <p>
                    A partir do Convênio de Cooperação Técnico-Educacional celebrado entre o município de Mogi Mirim e o Centro Estadual de Educação Tecnológica Paula Souza, nas pessoas do prefeito Senhor Carlos Nelson Bueno e da Diretora Superintendente, professora Laura M. J. Laganá, em 28/06/2007, foi firmado o contrato entre as partes, governo estadual e municipal, objetivando o desenvolvimento e a expansão da educação profissional gratuita, por meio de cursos de nível superior tecnológico, fomentando a pesquisa e a prestação de serviços à comunidade de Mogi Mirim e seu entorno.
                </p>

                <p>
                    Os primeiros cursos em nível de ensino superior oferecidos pela FATEC Mogi Mirim foram os de Graduação de Tecnologia em Projetos Mecânicos, e Mecânica de Precisão. O primeiro dia de aula ocorreu em 10 de setembro de 2007. Os cursos ficaram distribuídos nos períodos da manhã e noite, Projetos Mecânicos, e no período da tarde, Mecânica de Precisão. No primeiro semestre de 2010, iniciou-se mais um curso de Graduação, o de Tecnologia em Análise e Desenvolvimento de Sistemas, nos períodos da manhã e noite.
                </p>

                <p>
                    Os cursos ministrados por uma FATEC são concebidos, desenvolvidos e ministrados visando a atender segmentos atuais e emergentes do mercado de trabalho. Dada à vocação econômica de uma região, os cursos são propostos, alinhando-se à missão da instituição: "formar a competência profissional adequada às necessidades dos diferentes mercados de trabalho com o propósito de contribuir para a melhoria do padrão de vida do trabalhador e para a elevação da qualidade e produtividade de processos, produtos e serviços".
                </p>
            </Container>
        </Container>
        <Footer />
    </div>
}

export default Fatec