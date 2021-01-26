import React, { Component } from 'react';
import Nav from "../components/nav"

class products extends Component {
    render() {
        return (
            <div>
                <Nav />
    {/* <!-- end of nav --> */}

    {/* <!-- start of main section --> */}
    <main>
        <h1 className="products-h1">Apex imports garage</h1>
        <section>
            <article className="main-products-article">
                <h2 className="products-h2">This is our range of vehicles for rent </h2>
                <div className="card-set">
                    <div className="card card-1">
                        <div className="image image-1"></div>
                        <div className="container">
                            <h4>Mclaren Senna</h4><br/>
                            <p>price: $999 per day</p><br/>
                            <p>The McLAREN Senna is the personification of McLAREN's DNA at its most extreme,
                                creating the purest connection between car and driver. It is the most track-focused road
                                car we have ever built, and it will set the fastest lap times of any McLaren to
                                date.</p>
                        </div>
                    </div>

                    <div className="card card-2">
                        <div className="image image-2"></div>
                        <div className="container">
                            <h4>Rolls Royce Wraith</h4><br/>
                            <p>price: $1050 per day</p><br/>
                            <p>If you're looking for a performance vehicle, the 2019 Rolls-Royce Wraith certainly
                                delivers. This impressive two-door, four-passenger coupe features a twin-turbo engine
                                that produces a whopping 590 LB-FT of torque at 1,500 RPM.</p>
                        </div>
                    </div>
                </div>

                <div className="card-set">
                    <div className="card card-1">
                        <div className="image image-3"></div>
                        <div className="container">
                            <h4>Aston Martin DBS Superleggera</h4><br/>
                            <p>price: $850 per day</p><br/>
                            <p>he Aston Martin DBS Superleggera is the British marque's flagship coupe, available in
                                a single trim. It's motivated by a 5.2-liter twin-turbocharged V12 with 715 hp and 663
                                lb-ft of torque, with power sent to the rear wheels via an eight-speed automatic
                                transmission.</p>
                        </div>
                    </div>

                    <div className="card card-2 ">
                        <div className="image image-4"></div>
                        <div className="container">
                            <h4>Aston Martin Vanquish</h4><br/>
                            <p>price: $700</p><br/>
                            <p>The Vanquish S, the coupe, has a 5.9-liter naturally aspirated V12, good for 580
                                horsepower and 465 pound-feet of torque. The smooth, loud V12 drives the rear wheels via
                                an 8-speed automatic and will go from 0-62 mph in 3.5 seconds and on to a top speed of
                                201 mph.</p>
                        </div>
                    </div>
                </div>

                <div className="card-set">
                    <div className="card card-1">
                        <div className="image image-5"></div>
                        <div className="container">
                            <h4>Audi R8</h4><br/>
                            <p>price: $800 per day</p><br/>
                            <p>Sharp, fast, sporty. Showcasing its motorsport DNA and embodying its powerful
                                performance, the R8 Coupe has a honed new look, from its wide front grille to its
                                signature Audi Sport oval exhaust outlets, with new front and rear bumpers, side skirts,
                                darkened headlights and more.</p>
                        </div>
                    </div>

                    <div className="card card-2 ">
                        <div className="image image-6"></div>
                        <div className="container">
                            <h4>Ferrari Stradale</h4><br/>
                            <p>price: $1600 per day</p><br/>
                            <p>The SF90 Stradale is the first ever Ferrari to feature PHEV (Plug-in Hybrid Electric
                                Vehicle) architecture which sees the internal combustion engine integrated with three
                                electric motors, two of which are independent and located on the front axle, with the
                                third at the rear between the engine and the gearbox.</p>
                        </div>
                    </div>
                </div>

                <div className="card-set">
                    <div className="card card-1 ">
                        <div className="image image-7"></div>
                        <div className="container">
                            <h4>Ford GT</h4><br/>
                            <p>price: SALE $300 per day</p><br/>
                            <p>Innovation. That’s what the Ford GT is all about. From its aerodynamically optimized
                                shape to its multifunctional buttresses to its extraordinarily powerful 3.5L EcoBoost V6
                                engine, everything about the Ford GT is designed to deliver pure performance.</p>
                        </div>
                    </div>

                    <div className="card card-2 ">
                        <div className="image image-8"></div>
                        <div className="container">
                            <h4>Ferrari F8 Tributo</h4><br/>
                            <p>price: $650 per day</p><br/>
                            <p>The F8 Tributo is powered by a twin-turbocharged 3.9-liter V-8 that produces 710
                                horsepower and 568 lb-ft of torque. All models are rear-wheel drive, and a seven-speed
                                automatic transmission changes the gears</p>
                        </div>
                    </div>
                </div>

                <div className="card-set">
                    <div className="card card-1 ">
                        <div className="image image-9"></div>
                        <div className="container">
                            <h4>Lamborghini Huracan Evo</h4><br/>
                            <p>price: $500 per day</p><br/>
                            <p>The Huracán EVO outputs 640 hp (470 kW) at 8,000 rpm with 600 Nm of torque delivered
                                at 6,500 rpm. With a dry weight of 1,422 kg the Huracán EVO reaches a weight-to-power
                                ratio of 2.22 kg/hp, accelerates from 0-100 km/h in 2.9 seconds and from 0-200 km/h in
                                9.0 seconds.</p>
                        </div>
                    </div>

                    <div className="card card-2 ">
                        <div className="image image-10"></div>
                        <div className="container">
                            <h4>Maclaren 720S</h4><br/>
                            <p>price: $370 per day</p><br/>
                            <p>Highs Spellbinding appearance, F1-like performance for the street, Spider's open-air
                                cockpit. Lows Delayed low-end power, late braking response in the rain, hard to exploit
                                on public roads. Verdict The McLaren 720S is both mesmerizing to look at and hypnotizing
                                to drive.</p>
                        </div>
                    </div>
                </div>

                <div className="card-set">
                    <div className="card card-1 ">
                        <div className="image image-11"></div>
                        <div className="container">
                            <h4>Noble M600</h4><br/>
                            <p>price: $800 per day</p><br/>
                            <p>The Noble M600 is a handbuilt British sports car manufactured by low volume
                                automobile manufacturer Noble Automotive in Leicestershire. Construction of the car is
                                of stainless steel and carbon fibre. The car uses a twin-turbocharged Volvo/Yamaha V8
                                engine.</p>
                        </div>
                    </div>

                    <div className="card card-2 ">
                        <div className="image image-12"></div>
                        <div className="container">
                            <h4>Ferrari Stradale PREMIUM</h4><br/>
                            <p>price: $2000 per day</p><br/>
                            <p>The SF90 Stradale is motivated by three electric motors and a potent V-8, and they
                                combine to produce a staggering 986 horsepower. Serious power means seriously quick
                                acceleration; Ferrari claims this coupe sprints from zero to 60 mph in 2.5 seconds. The
                                SF90 Stradale is priced at more than $600,000.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>
    {/* <!-- end of main section --> */}

    {/* <!-- start of footer --> */}
    <footer>
            <div className="inner-footer">
                <div className="logo-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLkrGU4-uQBJO3JOzUpi0iPYaG7aLZMhA8jw&usqp=CAU"
                        alt="car logo for company"/>
                </div>
                <div className="footer-third">
                    <h2 className="footer-h2">Need Help?</h2>
                    <a href="#">terms &amp; conditions</a>
                    <a href="#">privacy policy</a>
                </div>
    
                <div className="footer-third">
                    <h2 className="footer-h2">Contact Us</h2>
                    <a href="#">froy.ramz10@gmail.com</a>
                    <a href="#">690-420-1010</a>
                </div>
    
                <div className="footer-third">
                    <h2 cclassName="footer-h2">Follow us</h2>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul>
    
                    <span>
                        &copy; ApexImports <br/>
                        Charlotte, NC<br/>
                        1400 southwest street
                    </span>
                </div>
            </div>
        </footer>
    {/* <!-- end of footer --> */}
    </div>

        );
    }
}

export default products;

