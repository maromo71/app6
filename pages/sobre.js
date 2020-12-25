import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sobre() {
    return <div className="container">
       <h1>Sobre</h1>
       <h3>Quem é o Maromo? </h3>
       <p>
           Professor da Escola Técnica Estadual Pedro Ferreira Alves, da Faculdade de Tecnologia 
           de Mogi Mirim e da Faculdade Santa Lúcia de Engenharia da Computação.
       </p>
       <Link href="/">
            <a a className="btn btn-primary">Acessar a página home</a>
       </Link>
    </div>
}

export default Sobre