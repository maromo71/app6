import Link from 'next/link';

function Home() {
    return <div>
       <h1>Home</h1>
       <h3>Página do professor Maromo</h3>
       <Link href="/sobre">
            <a >Acessar a página sobre</a>
       </Link>
    </div>
}

export default Home