import React, { Component } from 'react'
import Nav from "../components/nav"
import Footer from "../components/footer"

class home extends Component {
    render() {
        return (
            <div>
                {/* <!-- start of nav --> */}
                <Nav />
                {/* <!-- end of nav --> */}

                {/* <!-- start of hero --> */}
                <main>
                    <section className="index-hero">
                        <article className="hero-article">
                            <h1 className="hero-h1">its all about letting you try new experiences</h1>
                        </article>
                    </section>
                    {/* <!-- end of hero --> */}

                    {/* <!-- start of little section --> */}
                    <section className="main-index-section">
                        <article className="main-section">
                            <div className="p-main">
                                <p className="p-main-tag">here at apex imports we value our costumers, and because of that we want to
                        bring each and every one of you a new experience that you will remeber for a lifetime.</p>
                            </div>
                            <div className="p2-main">
                                <p className="p2-main-tag">From just trying something new, to having a weekend joyride, to suprising
                        somebody for a birthday we believe we have something for everybody.</p>
                            </div>
                        </article>
                    </section>
                    {/* <!-- end of little section --> */}

                    {/* <!-- start of final section --> */}
                    <section id="no-worries-section">
                        <h2 className="bottom-section-title">Worries no problem</h2>
                        <ul className=" no-worries_list">
                            <li className="no-worries">
                                <div className="no-worries-image home-image-1">

                                </div>
                                <p className="no-worries-description">30 thousand sattisfied costumers</p>
                            </li>
                            <li className="no-worries">
                                <div className="no-worries-image home-image-2">

                                </div>
                                <p className="no-worries-description">You didnt get to drive it, NO PROBLEM, 100% money back garuntee
                    </p>
                            </li>
                            <li className="no-worries">
                                <div className="no-worries-image home-image-3">

                                </div>
                                <p className="no-worries-description">Alway available monday-sunday 7am to 8pm</p>
                            </li>
                        </ul>
                    </section>
                    {/* <!-- end of final section --> */}
                </main>

                {/* <!-- start of footer --> */}
                <Footer />
                {/* <!-- end of footer --> */}
            </div>
        );
    }
}

export default home;