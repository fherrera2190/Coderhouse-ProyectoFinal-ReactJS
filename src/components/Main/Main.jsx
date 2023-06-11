import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Categorias from '../Category/Category';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Main(props) {
    return (
        <>
            <div className='container'>
                <div className='row row-cols-2'>
                    <div className='d-flex justify-content-center'>
                        <Categorias />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <CartWidget />
                    </div>
                </div>
                <div className='d-flex justify-content-center '>

                    <ItemListContainer Greeting={"Bienvenidos"} />
                </div>
            </div>
        </>
    );
};

export default Main
