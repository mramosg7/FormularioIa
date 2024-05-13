const imgs = [
    {
        url: '/marcas/reactjs.png',
        tittle: 'ReactJS',
    },
    {
        url: '/marcas/Nextjs.png',
        tittle: 'NextJS',
    },
    {
        url: '/marcas/TailwindCSS.png',
        tittle: 'TailwindCSS',
    },
    {
        url: '/marcas/Prisma.png',
        tittle: 'Prisma',
    },
    {
        url: '/marcas/OpenAi.png',
        tittle: 'OpenAi',
    },
    {
        url: '/marcas/PostgreSQL.png',
        tittle: 'PostgreSQL',
    }
]



export default function Slider() {
  return (
    <div className="w-[100%]  flex overflow-hidden">
        <div className=" flex-shrink-0  gap-[60px] flex animate-slide ">
            {imgs.map((img) => (
                <img src={img.url} alt={img.tittle} key={img.tittle} className="h-[50px]"/>
            ))}
        </div>
        <div className="flex-shrink-0  gap-[60px] flex animate-slide">
            {imgs.map((img) => (
                <img src={img.url} alt={img.tittle} key={img.tittle} className="h-[50px] flex-grow-0 flex-shrink-0"/>
            ))}
        </div>
    </div>
  );
}