import React from 'react';


const Footer = () => {
    return (
        <div className='w-full text-white mt-4'>
<div className=" max-w-screen-xl mx-auto py-10 flex gap-32"><div className="basis-1/2">
      <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">refokus.</h1>
</div>

<div className="basis-1/2 flex gap-4">
    <div className="basis-1/3">
         <h4 className=" mb-10 text-zinc-200 text-3xl capitalize">socials</h4>
             <a className="block mt-2 text-xl capitalize text-zinc-600">instagram</a>
             <a className="block mt-2 text-xl  capitalize text-zinc-600">twitter (x?)</a>
             <a className="block mt-2  text-xl   capitalize text-zinc-600">LinkedIn</a>
             </div>
             
             <div className="basis-1/3">
              <h1 className="mb-10 text-zinc-200 text-3xl capitalize">sitemao</h1>
              <a className="block mt-2 text-xl capitalize text-zinc-600 ">home</a>
              <a className="block mt-2 text-xl  capitalize text-zinc-600 ">work</a>
              <a className="block mt-2 text-xl capitalize text-zinc-600 ">careers</a>
              <a className="block mt-2 text-xl capitalize text-zinc-600 ">contacts</a>
              </div>
              
              <div className="basis-1/2 flex flex-col items-end">
              <p class="text-right text-xl text-gray-400">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
              
              <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo"/>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default Footer;