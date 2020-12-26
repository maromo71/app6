import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';
import Header from '../components/Header';
import Painel from '../components/Painel';

function Home() {
    return <div>
        <Header />
        <Container>
            <p />
            <Container>
                <Painel />
            </Container>
            <p />
            <Container>
                <h1>Home</h1>
                <h3>Página do professor Maromo</h3>
                <p>Nesta página você encontra as principais informações sobre o professor e suas aulas</p>
                <Link href="/sobre">
                    <Button color="primary" >Acessar a página sobre</Button>
                </Link>
            </Container>

        </Container>

    </div>
}

export default Home