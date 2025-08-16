import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import banner4 from "../../../src/assets/Home/Were-the-Millers.jpg.jpeg"
import banner5 from "../../../src/assets/Home/banner2.png"
import banner6 from "../../../src/assets/Home/moviebannermaster-jumanjinextlvl.png"
import banner1 from "../../../src/assets/Home/share.png"
import banner2 from "../../../src/assets/Home/maxresdefault.jpg"
import banner3 from "../../../src/assets/Home/hq720.jpg"
import swip1 from "../../../src/assets/Home/captain.jpeg"
import swip2 from "../../../src/assets/Home/0b34ce2145b475247577a5d438a199b0.jpg"
import swip3 from "../../../src/assets/Home/mission.jpeg"
import swip4 from "../../../src/assets/Home/Superman _ Legacy (7_11_25).jpeg"
import swip5 from "../../../src/assets/Home/unicorn.jpeg"
import swip6 from "../../../src/assets/Home/cac76151db313b83ec79e33f8906fa35.jpg"

import Questions from "./Questions";
import { Helmet } from "react-helmet-async";
const Home = () => {
    return (
        <div className="mt-32 lg:mt-8">
            <Helmet><title>Home</title></Helmet>
            <Carousel>
                <div>
                    <img className='' src={banner1} />
                </div>
                <div className="">
                    <img className='' src={banner2} />
                </div>
                <div className="">
                    <img className='' src={banner3} />
                </div>
                <div className="">
                    <img className='' src={banner4} />
                </div>
                <div className="">
                    <img className='' src={banner5} />
                </div>
                <div className="">
                    <img className='' src={banner6} />
                </div>
            </Carousel>
            <p className="divider"></p>
            <p className="font-bold text-3xl uppercase mb-5">Some Latest Collections</p>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={swip1} className="md:h-[60vh] rounded" /></SwiperSlide>
                    <SwiperSlide><img src={swip4} className="md:h-[60vh] rounded" /></SwiperSlide>
                    <SwiperSlide><img src={swip3} className="md:h-[60vh]  rounded" /></SwiperSlide>
                    <SwiperSlide><img src={swip2} className="md:h-[60vh]  rounded" /></SwiperSlide>
                    <SwiperSlide><img src={swip5} className="md:h-[60vh]  rounded" /></SwiperSlide>
                    <SwiperSlide><img src={swip6} className="md:h-[60vh] rounded" /></SwiperSlide>
                </Swiper>
            </div>
            <p className="divider"></p>
            <p className="font-bold uppercase text-3xl">trending now</p>
            <p className="text-yellow-600 italic mb-5">---Check it out---</p>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="flex justify-center items-center">
                <div>
                    <button className="mr-5" onClick={() => document.getElementById('my_modal_1').showModal()}> <img src={swip6} alt="" className="md:h-[40vh] md:w-[15vw] rounded-2xl" /> </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <img src={swip6} alt="" className="mb-3" />
                        </div>
                    </dialog>
                </div>

                <div>
                    <button className="mr-5" onClick={() => document.getElementById('my_modal_2').showModal()}> <img src={swip2} alt="" className="md:h-[40vh] md:w-[15vw] rounded-2xl" /> </button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <img src={swip2} alt="" className="mb-3" />
                        </div>
                    </dialog>
                </div>

                <button className="" onClick={() => document.getElementById('my_modal_3').showModal()}> <img src={swip5} alt="" className="md:h-[40vh] md:w-[15vw] rounded-2xl" /> </button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <img src={swip5} alt="" className="mb-3" />
                    </div>
                </dialog>
            </div>
            <p className="divider"></p>
            <Questions></Questions>
        </div>
    );
};

export default Home;