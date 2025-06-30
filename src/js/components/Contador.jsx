import React, { useState, useEffect } from 'react';
import './Contador.css';

const Contador = () => {
    const [contador, setContador] = useState({
        unidades: 0,
        decenas: 0,
        centenas: 0,
        unidadesDeMil: 0,
        decenasDeMil: 0,
        centenasDeMil: 0
    });

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador(prev => {
                let { unidades, decenas, centenas, unidadesDeMil, decenasDeMil, centenasDeMil } = prev;

                unidades++;
                if (unidades === 10) {
                    unidades = 0;
                    decenas++;
                }
                if (decenas === 10) {
                    decenas = 0;
                    centenas++;
                }
                if (centenas === 10) {
                    centenas = 0;
                    unidadesDeMil++;
                }
                if (unidadesDeMil === 10) {
                    unidadesDeMil = 0;
                    decenasDeMil++;
                }
                if (decenasDeMil === 10) {
                    decenasDeMil = 0;
                    centenasDeMil++;
                }

                return { unidades, decenas, centenas, unidadesDeMil, decenasDeMil, centenasDeMil };
            });
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const { unidades, decenas, centenas, unidadesDeMil, decenasDeMil, centenasDeMil } = contador;

    return (
        <div className="contador-container">
            <div className="contador-card"><i class="fa-solid fa-clock fa-xl"></i></div>
            <div className="contador-card">{centenasDeMil}</div>
            <div className="contador-card">{decenasDeMil}</div>
            <div className="contador-card">{unidadesDeMil}</div>
            <div className="contador-card">{centenas}</div>
            <div className="contador-card">{decenas}</div>
            <div className="contador-card">{unidades}</div>
        </div>
    );
};

export default Contador;

