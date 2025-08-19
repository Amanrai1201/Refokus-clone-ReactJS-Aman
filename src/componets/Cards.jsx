import React from 'react';
import Card from './Card';

const Cards = () => {
    return (
        <div className="cards w-full">
            <div className='max-w-screen-xl mx-auto  py-28 flex gap-3'>
                <Card w={"basis-1/3"} hrading={false} p={true} hover={false} hidden={"block"} />
                <Card w={"basis-2/3"} hrading={true} p={false} hover={true} hidden={"hidden"} />
            </div>
        </div>
    );
};

export default Cards;


