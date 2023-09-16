import { Category } from "@/types";

interface MainNavProps {
    data: Category[];
}

const cardList = [
    {
        img: "wallpaper1.png",
        title: "Watches",
        href: '/category/f6e77843-7486-42cc-bda4-6c80987765e6'
    },
    {
        img: "wallpaper2.jpg",
        title: "Mobile Phones",
        href: '/category/b9884b41-7063-4cad-aa83-5ebaa931ca13'
    },
    {
        img: "wallpaper3.jpg",
        title: "Laptops",
        href: '/category/d4dcc271-a84c-4b1b-820a-fcc7b37798d7'
    },
];

const CategoriesShowdown: React.FC<MainNavProps> = ({ data }) => {

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        img: route.name === 'Mobile Phones' && "wallpaper2.jpg" || route.name === 'Laptops' && "wallpaper3.jpg" || route.name === 'Watches' && "wallpaper1.png"
    }));

    return (
        <>
            {routes.map((route, id) => (
                <a
                    href={route.href}
                    style={{ backgroundImage: `url(${route.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                    key={id}
                    className="flex flex-col justify-center items-center cursor-pointer py-6 px-10 text-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
                >
                    <h1 className="max-sm:text-xl max-md:text-2xl text-3xl font-bold uppercase text-white">{route.label}</h1>
                </a>
            ))}
        </>
    )
}

export default CategoriesShowdown