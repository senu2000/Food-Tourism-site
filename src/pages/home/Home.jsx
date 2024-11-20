import React from 'react';
import {CommenNavbar} from "../../components/navbar/CommenNavbar.jsx";
import {CommenCarousel} from "../../components/carousel/CommenCarousel.jsx";
import {CommenAccordion} from "../../components/accordion/CommenAccordion.jsx";
import {Link} from "react-router-dom";
import {CommenFooter} from "../../components/footer/CommenFooter.jsx";

const Home = () => {
    return (
        <>
            <div className="scroll-container">
                <section>
                    <div className="navdiv p-[10px]">
                        <CommenNavbar/>
                    </div>
                    <div className="flex justify-center items-center h-screen m-[25px] -mt-7">
                        <div className="text-center justify-center w-[50%]"> {/* Flex width */}
                            <h1 className="text-[80px] font-bold">What is
                                <span className="text-orange-400"> Food Tourism</span> ?
                            </h1>
                            <div>
                                Food Tourism, or Culinary Tourism, is traveling to explore and enjoy a
                                destination's unique food and drink. It’s about experiencing the culture
                                through local dishes, street food, cooking classes, food festivals, and
                                markets. From Italian pasta to Thai street food, food tourism connects
                                travelers to the heart of a place through its flavors and traditions.
                            </div>
                        </div>
                        <div className="w-[50%] p-8 rounded flex justify-center items-center "> {/* Flex width */}
                            <img src="/hero image.jpg" alt="" className="rounded-[20px] w-[75%]"/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex justify-center items-center h-screen m-[25px] -mt-7">
                        <div className="text-center justify-center w-[50%] p-4">
                            <CommenCarousel/>
                        </div>
                        <div className="text-center justify-center w-[50%]">
                            <hr className="w-[63%] ml-4"/>
                            <h1 className="text-[80px] font-bold">Our
                                <span className="text-orange-400"> Featured</span> Dishes
                            </h1>
                            <Link to="/foodItems">
                                <button
                                    className="bg-orange-500 text-white hover:bg-white hover:text-orange-400 p-4 pl-16 pr-16 rounded-full">
                                    Show more
                                </button>
                            </Link>
                            <br/><br/><br/>
                            <hr className="w-[63%] float-right"/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex justify-center items-center min-h-screen m-[25px] -mt-7 overflow-hidden">
                        <div className="w-full max-w-6xl">
                            <CommenAccordion/>
                        </div>
                    </div>
                    <CommenFooter/>
                </section>
            </div>
        </>
    );
};

export default Home;