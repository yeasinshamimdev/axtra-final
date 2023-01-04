import React from 'react';
import Counter from '../common/counter';

const TeamCounterArea = () => {
    return (
        <section className="counter__area">
            <div className="container g-0 line pt-110">
                <span className="line-3"></span>

                <div className="row">
                    <div className="col-xxl-12">
                        <div className="counter__wrapper-2">
                            <div className="counter__item-2">
                            <Counter start={0} end={25} k={true} t1={"Project"} t2={"completed"} />
                                <span className="counter__border"></span>
                            </div>
                            <div className="counter__item-2">
                            <Counter start={0} end={8} k={true} t1={"Happy"} t2={"customers"} />
                                <span className="counter__border"></span>
                            </div>
                            <div className="counter__item-2">
                            <Counter start={0} end={15} k={false} t1={"Years"} t2={"experiences"} />
                                <span className="counter__border"></span>
                            </div>
                            <div className="counter__item-2">
                            <Counter start={0} end={98} k={false} t1={"Awards"} t2={"achievement"} />
                                <span className="counter__border"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamCounterArea;