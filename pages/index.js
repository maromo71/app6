import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';
import Header from '../components/Header';
import Painel, { MyCarousel } from '../components/Painel';

function Home() {
    return <div>
        <Header />
        <Container style={{maxWidth: '1024px'}}>
            <Painel />
            <h1>Home</h1>
            <h3>Página do professor Maromo</h3>
            <Link href="/sobre">
                <Button color="primary" >Acessar a página sobre</Button>
            </Link>
        </Container>

    </div>
}

export default Home