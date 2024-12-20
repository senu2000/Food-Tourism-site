import { Carousel } from "flowbite-react";

export function CommenCarousel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel className="rounded-[20px]">
                <img src="/full meal.jpg" alt="..." />
                <img src="/hoppers.jpg" alt="..." />
                <img src="/Kiribath.jpg" alt="..." />
                <img src="/roti.jpg" alt="..." />
                <img src="/wade.jpg" alt="..." />
            </Carousel>
        </div>
    );
}
