import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return <div className="container">
       <h1>Home</h1>
       <h3>Página do professor Maromo</h3>
       <Link href="/sobre">
            <a className="btn btn-primary" >Acessar a página sobre</a>
       </Link>
    </div>
}

export default Home