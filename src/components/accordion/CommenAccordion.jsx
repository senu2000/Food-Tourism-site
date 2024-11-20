import { Accordion } from "flowbite-react";

export function CommenAccordion() {
    return (
        <Accordion>
            <Accordion.Panel>
                <Accordion.Title className="text-orange-400">What is Food Tourism?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Food Tourism, or Culinary Tourism, is traveling to explore and enjoy a destination's unique food and drink.
                        It’s about experiencing the culture through local dishes, street food, cooking classes, food festivals, and markets.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="text-orange-400">Why is Food Tourism important?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Food tourism allows travelers to connect with a region's culture, traditions, and heritage. It also supports local economies
                        by promoting small businesses and sustainable practices in food production.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="text-orange-400">What activities are included in Food Tourism?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Food tourism involves a variety of activities such as:
                    </p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>Visiting local food markets and street food stalls</li>
                        <li>Participating in food festivals</li>
                        <li>Taking cooking classes to learn local recipes</li>
                        <li>Exploring farms, vineyards, and food production facilities</li>
                        <li>Enjoying authentic dining experiences at local restaurants</li>
                    </ul>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="text-orange-400">Which destinations are famous for Food Tourism?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Some of the most popular destinations for food tourism include:
                    </p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>Italy – Known for its pasta, pizza, and wine</li>
                        <li>Japan – Famous for sushi, ramen, and sake</li>
                        <li>India – Renowned for its diverse regional cuisines and spices</li>
                        <li>France – Celebrated for fine dining, cheese, and wine</li>
                        <li>Thailand – Loved for its vibrant street food scene</li>
                    </ul>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}
