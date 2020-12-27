import { Container } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/MyFooter';

function Etec() {
    return <div>
        <Header />
        <Container>
            <h1>Etec</h1>
            <h3>Etec Pedro Ferreira Alves </h3>
            <div style={{ display: 'block', margin: '0 auto', padding: '10px', width: '18rem' }}>
                <img style={{ borderRadius: '50%' }} className="card-img-top" alt="Foto do Maromo" src='http://majuconfeccoes.com.br/wp-content/uploads/2019/08/ETEC.png' />
            </div>
            <Container>
            <p>
                Em 27 de junho de 1892, na cidade de Mogi Mirim, nascia Pedro Ferreira Alves, 
                segundo filho do Coronel Venâncio Ferreira Alves Adorno. Zizinho, era assim que 
                Pedro era chamado em sua infância e foi neste momento que encantou-se com 
                o futebol, um esporte que iniciava-se no Brasil. Em 1910 destacou-se no 
                Futebol amador ao mesmo tempo que estudava farmácia. Logo depois casou-se 
                com sua primeira esposa e teve quatro filhos com ela.
            </p>
            <p>
                Em 1919 a habilidade com a bola o destacou entre os atletas do Mogi Mirim Esporte Clube. Popular por ser bom jogador elegeu-se vereador em 1925.  O curioso é que os prefeitos desta época eram eleitos pelos vereadores. Pedro Ferreira Alves é escolhido por seus pares para ser prefeito em seu primeiro mandato no biênio 1926/1927. Em 1927 também perde sua esposa para Febre Tifoide.
            </p>

            <p>
                No ano de 1930 funda o Banco da Lavoura de Mogi Mirim, mas seu engajamento político fala mais alto em 1935 vende o banco e transfere-se para capital paulista, permanece por lá até 1943. Volta a Mogi Mirim para seu 2° mandato como prefeito nomeado pelo então governador Fernando Costa. É o momento que inicia-se a construção das grandes galerias de esgoto. Solicita também ao governo estadual a construção de um ginásio industrial.
            </p>

            <p>
                Após anos de viuvez em 1945 casa-se novamente com a professora de 1° grau Lucia de Campos Ferreira Alves e no ano seguinte 1946 deixa a prefeitura, mas é nomeado para o cargo de inspetor de menores.
            </p>

            <p>
                No ano de 1950 é novamente eleito para vereador para biênio 1951/1952. Com o final do seu mandato de vereador aposenta-se compulsoriamente.
            </p>

            <p>
                Vitimado por infarto, falece em 19 de abril de 1962.  Não demora e logo é feita uma homenagem a essa figura ilustríssima da cidade, dá-se o seu nome a escola que passa a ser conhecida por “Ginásio Industrial Pedro Ferreira Alves”, atualmente mais conhecida   por “Etec Pedro Ferreira Alves”.
            </p>

            <p>
                Conheça um pouco mais sobre a história da escola clicando aqui.
            
            </p>
            </Container>
        </Container>
        <Footer />
   </div>
}

export default Etec