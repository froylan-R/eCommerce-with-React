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
      <h1>Apex Imports</h1>
      <div id="slider">
        <input type="radio" name="slider" id="slide1" checked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        <input type="radio" name="slider" id="slide4" />
        <div id="slides">
          <div id="overflow">
            <div class="inner">
              <div class="slide slide_1">
              </div>
              <div class="slide slide_2">
              </div>
              <div class="slide slide_3">
              </div>
              <div class="slide slide_4">
              </div>
            </div>
          </div>
        </div>
        <div id="controls">
          <label for="slide1"></label>
          <label for="slide2"></label>
          <label for="slide3"></label>
          <label for="slide4"></label>
        </div>
        <div id="bullets">
          <label for="slide1"></label>
          <label for="slide2"></label>
          <label for="slide3"></label>
          <label for="slide4"></label>
        </div>
      </div>
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