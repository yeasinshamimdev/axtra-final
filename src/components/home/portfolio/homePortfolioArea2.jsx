import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from "swiper";

export default function HomePortfolioArea2() {
    return (
        <section className="portfolio__area-2">
            <div className="container g-0 line pt-100 pb-140">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper text-anim">
                            <h2 className="sec-title-3 title-anim">Selected <span>Projects</span></h2>
                            <p className="sec-text">Worked with global brands & agency at the
                                intersection of flat design and digital
                                technology.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                modules={[Pagination, Mousewheel]}
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}   
            >
            <div className="portfolio__slider-2">
                <SwiperSlide>
                    <div className="">
                        <div className="portfolio__slide-2">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/1.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <h2 className="sec-title"> <Link href="/portfolio-details">Lionpro <span>Agency</span></Link>
                                </h2>
                                <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                    both
                                    ourselves</p>
                                <div className="btn-common-wrap">
                                    <Link href="/portfolio-details" className="btn-common">View details <i
                                        className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="portfolio__slide-2">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/1.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <h2 className="sec-title"> <Link href="/portfolio-details">Lionpro <span>Agency</span></Link>
                                </h2>
                                <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                    both
                                    ourselves</p>
                                <div className="btn-common-wrap">
                                    <Link href="/portfolio-details" className="btn-common">View details <i
                                        className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="portfolio__slide-2">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/2.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <h2 className="sec-title"><Link href="/portfolio-details">crodyflw <span>Website</span></Link>
                                </h2>
                                <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                    both
                                    ourselves</p>
                                <div className="btn-common-wrap">
                                    <Link href="/portfolio-details" className="btn-common">View details <i
                                        className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="portfolio__slide-2">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/3.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <h2 className="sec-title"> <Link href="/portfolio-details">developers
                                    <span>digital</span></Link></h2>
                                <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                    both
                                    ourselves</p>
                                <div className="btn-common-wrap">
                                    <Link href="/portfolio-details" className="btn-common">View details <i
                                        className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" ">
                        <div className="portfolio__slide-2">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/3.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <h2 className="sec-title"> <Link href="/portfolio-details">developers
                                    <span>digital</span></Link></h2>
                                <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                    both
                                    ourselves</p>
                                <div className="btn-common-wrap">
                                    <Link href="/portfolio-details" className="btn-common">View details <i
                                        className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="portfolio__slide-2">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/4.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <h2 className="sec-title"> <Link href="/portfolio-details">Lionpro
                                    <span>marketeers</span></Link></h2>
                                <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                    both
                                    ourselves</p>
                                <div className="btn-common-wrap">
                                    <Link href="/portfolio-details" className="btn-common">View details <i
                                        className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="">
                        <div className="portfolio__slide-2">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/5.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <h2 className="sec-title"> <Link href="/portfolio-details">Lionpro <span>Agency</span></Link>
                                </h2>
                                <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                    both
                                    ourselves</p>
                                <div className="btn-common-wrap">
                                    <Link href="/portfolio-details" className="btn-common">View details <i
                                        className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="portfolio__slider-2-pagination--">
                    <div className="swiper-pagination circle-pagination right"></div>
                </div>
            </div>
        </Swiper>
        </section >
    )
}