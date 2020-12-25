import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';
import Header from '../components/Header';

function Sobre() {
    return <div >
        <Header/>
        <Container>
        <h1>Sobre</h1>
       <h3>Quem é o Maromo? </h3>
       <p>
           Professor da Escola Técnica Estadual Pedro Ferreira Alves, da Faculdade de Tecnologia 
           de Mogi Mirim e da Faculdade Santa Lúcia de Engenharia da Computação.
       </p>
       <Link href="/">
            <Button color="primary">Acessar a página home</Button>
       </Link>
        </Container>
       
    </div>
}

export default Sobre