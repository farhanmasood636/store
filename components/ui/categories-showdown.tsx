import { Category } from "@/types";

interface MainNavProps {
    data: Category[];
}

const CategoriesShowdown: React.FC<MainNavProps> = ({ data }) => {

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        img: route.name === 'Mobile Phones' && "category2.jpg" || route.name === 'Tablets' && "category3.jpeg" || route.name === 'Watches' && "category1.png"
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