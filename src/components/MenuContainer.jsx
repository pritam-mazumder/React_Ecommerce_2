import React, {useState} from 'react';
import {IoFastFood} from "react-icons/io5";
import {categories} from '../utils/data'

const MenuContainer = () => {
    const [filter, setFilter] = useState("curry");

    return (
        <section className='w-full my-6' id='menu'>
            <div className="w-full flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                    Our hot dish
                </p>

                <div className='w-full'>
                </div>
            </div>
        </section>
    );
};

export default MenuContainer;