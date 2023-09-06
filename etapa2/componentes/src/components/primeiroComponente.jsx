import SegundoComponente from './SegundoComponente'
const PrimeiroComponente = () => {
    return(
        <div>
            <h2>Primeiro Componente</h2>
            <div>
                <SegundoComponente />
            </div>
        </div>
    );
}

export default PrimeiroComponente;