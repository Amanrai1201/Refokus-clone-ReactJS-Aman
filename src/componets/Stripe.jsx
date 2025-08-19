export default function Stripe() {
    const Stripedata = [
        {ulr:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",number:52},
        {ulr:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",number:2},
        {ulr:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",number:89},
        {ulr:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",number:33},
        {ulr:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",number:10}

    ]
    return (

       <div className="flex mt-20" >
     {Stripedata.map((elem,index)=>(

<div className=" flex w-full ">
     <div className=" flex justify-around  text-white   px-4 py-5   border-r-[1px]  border-t-[1px] border-b-[1px] min-w-[20em] " >
        <span><img src={elem.ulr} alt="" /></span>
         <span className="font-bold">23</span>

       </div>
</div>

     ))}
       </div>
    )
}


