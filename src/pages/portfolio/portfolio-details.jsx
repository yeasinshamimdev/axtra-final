import Head from 'next/head';
import React, { useState } from 'react';
import CursorAnimation from '../../components/common/cursorAnimation';
import GoTopButton from '../../components/common/goTopButton';
import Offcanvas from '../../components/common/offcanvas';
import Placeholder from '../../components/common/placeholder';
import ScrollSmoother from '../../components/common/scrollSmoother';
 import SwitcherAreaDark from '../../components/common/switcherAreaDark';
import PortfolioHead from '../../components/portfolio/portfolioHead';
import Footer from '../../components/common/footer';
import PortfolioDetailsArea from '../../components/portfolio/portfolioDetailsArea';
import useScript from '../../../scripts/useScript';

const PortfolioDetailsPage = ({ dark }) => {
    const [stayDark, setStayDark] = useState(true)
    const handleDark = (prop) => {
        setStayDark(prop)
    }
    //Script hooks
    useScript("assets/js/jquery-3.6.0.min.js")
    useScript("assets/js/bootstrap.bundle.min.js")
    useScript("assets/js/swiper-bundle.min.js")
    useScript("assets/js/counter.js")
    useScript("assets/js/gsap.min.js")
    useScript("assets/js/ScrollTrigger.min.js")
    useScript("assets/js/ScrollToPlugin.min.js")
    useScript("assets/js/ScrollSmoother.min.js")
    useScript("assets/js/SplitText.min.js")
    useScript("assets/js/chroma.min.js")
    useScript("assets/js/jquery.meanmenu.min.js")
    useScript("assets/js/main.js")
    useScript("assets/js/progressbar.js")
    useScript("assets/js/TweenMax.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js")

    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio Details - Axtra</title>

                {/* Fav Icon   */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
 
            </Head>
            <main className={dark && stayDark && "dark"}>
                {/* Cursor Animation  */}
                <CursorAnimation />

                {/* Preloader  */}
                <Placeholder />

                {/* Switcher Area Start  */}
                <SwitcherAreaDark handleDark={handleDark} dark={dark} />  
                {/* Switcher Area End  */}

                {/* Scroll Smoother  */}
                <ScrollSmoother />

                {/* Go Top Button  */}
                <GoTopButton />
                {/* Header area start  */}
                <PortfolioHead />
                {/* Header area end  */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Portfolio area start   */}
                            <PortfolioDetailsArea />
                            {/* Portfolio area end   */}

                        </main>
                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end  */}

                    </div>
                </div>
            </main>
        </div>
    );
};

export default PortfolioDetailsPage;