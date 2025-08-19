import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Button from './Button';

const Navbar = () => {
    return (
        <div className='max-w-screen-xl mx-auto  p-4  flex justify-between border-b-[1px] border-zinc-700'>
            <div className='flex justify-center '>
                <img className='h-5 mt-1' src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg" alt="" />
                <div className="link flex ml-14 gap-8">
                    {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                        elem.length === 0 ? <span className='w-[4px] h-7 bg-gray-600 block opacity-30'></span> :

                            <a className='text-white  font-medium text-xl  tracking-wide flex items-center gap-1
                ' href='#'>
                                {index == 1 ? <span className=' w-1 h-1 bg-green-400 inline-block rounded-full shadow-[0_0_0.55em_#00FF19] '></span> : null}
                                {elem}</a>))}
                </div>
            </div>

            <Button/>
        </div>
    )

};

export default Navbar;