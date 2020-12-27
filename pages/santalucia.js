import { Container } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/MyFooter';


function SantaLucia() {
    return <div>
        <Header />
        <Container>
            <h1>Santa Lucia</h1>
            <h3>Faculdade Santa Lúcia</h3>
            <div style={{ display: 'block', margin: '0 auto', padding: '10px', width: '18rem' }}>
                <img style={{ borderRadius: '0%%' }} className="card-img-top" alt="Logo da Faculdade Santa Lúcia" src='https://santalucia.br/wp-content/uploads/2019/05/Logo-Santa-Lucia.png' />
            </div>
            <Container>
                <p>
                    A Faculdade Santa Lúcia é mantida pela Associação Educacional e Assistencial Santa Lúcia, associação civil de direito público privado, sem fins lucrativos para seus associados, fundada em 12 de março de 1990, com sede à Rua Maringá, 450, Parque Taquaral, no município de Piracicaba, Estado de São Paulo, inscrita no CNPJ sob o n. 60.717.261/0001–59, regendo-se pelo seu contrato social registrado no Primeiro Cartório de Registro de Imóveis e Anexos de Piracicaba sob 1.429 do Livro A-1, de 29/03/1990 sofrendo alteração estatutária em 26/09/1997. A unidade sede da Faculdade Santa Lúcia está situada a Rua Ulhoa Cintra, número 351 – Centro de Mogi Mirim – São Paulo – 13.800-000, onde funcionam os Cursos Administração, Ciências Contábeis, Serviço Social, Sistemas de Informação e Direito.
                </p>

                <p>
                    Mogi Mirim é um município do Estado de São Paulo, com vocação industrial e agrícola. Localiza-se a uma latitude 22º25’55” sul e a uma longitude 46º57’28” oeste, estando a uma altitude de 632 metros. Dista cerca de 60 km de Campinas e 180 km de São Paulo. Sua população estimada em 2006 é de 87.800 habitantes. A economia do município, que possui dois distritos industriais, é formada principalmente pelas empresas Baumer, Lindsay, Fundição Regali, Alpargatas, Eaton, Sabó, Monroe, Balestro, AmBev, Marangoni, Master Foods, dentre outras. O setor agrícola também é importante, em razão de grandes plantações de mandioca e laranja. O município conta ainda com um bem estruturado setor comercial e de serviços.
                </p>

                <p>
                    Em 1994, foi autorizado a funcionar o curso de Administração. Em 1995 foi autorizado o curso de Ciências Contábeis. Em 2004 foi autorizado o curso de Sistemas de Informação e, em 2005 foi autorizado o curso de Serviço Social. Em 2009, foram unificadas a Faculdade de Ciências Administrativas e Contábeis Santa Lúcia e a Faculdade de Direito de Mogi Mirim, através da Portaria nº 1.746 de 22/12/2009. D.O.U. 24/12/2009, nascendo a Faculdade Santa Lúcia.
                </p>
            </Container>
        </Container>
        <Footer />
    </div>
}

export default SantaLucia