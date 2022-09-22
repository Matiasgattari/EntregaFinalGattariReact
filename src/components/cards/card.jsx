import React from 'react';

const Card = ({ tipo }) => {


    return (
        <>
            <div >
                <div className="card mb-3 m-5  d-flex justify-content-center align-items-center" style={{ width: '300px', height: 'auto' }}>
                    <h3 className="card-header">Cerveza {tipo}</h3>
                    <div className="card-body">
                    </div>
                    <img style={{ width: '100%', height: '200px' }} src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/26/16458586559431.jpg" alt="imagen cerveza rubia" />

                    <div className="card-body">

                        <h4>Precio por unidad: $</h4>
                    </div>

                    <div className="card-body">
                        <button id="comprar1" className="btn btn-primary">Comprar</button>
                    </div>
                    <div className="card-footer text-muted">
                        Cerveza kon, siempre con vos.
                    </div>
                </div>

            </div>





        </>
    );
}

export default Card;
