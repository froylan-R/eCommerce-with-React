import React, { Component } from 'react';
import Nav from "../components/nav"

class contact extends Component {
    render() {
        return (
            <div>
                {/* <!-- start of nav --> */}
        <Nav />
    {/* <!-- end of nav --> */}

    <div className="contactMainDivHome">
            <form className="cmxform" id="commentForm" method="get" action="#" >
              <fieldset>
                <legend>Please provide your name, email address (won't be published) and a comment as to why you are contacting us</legend>
                <p>
                  <label for="cname">Name (required, at least 2 characters)</label>
                  <input id="cname" name="name" minlength="2" type="text" required />
                </p>
                <p>
                  <label for="cemail">E-Mail (required)</label>
                  <input id="cemail" type="email" name="email" required />
                </p>
                <p>
                  <label for="ccomment">Your comment (required)</label>
                  <textarea id="ccomment" name="comment" required></textarea>
                </p>
                <p>
                  <label for="cagree"><input type="checkbox" id="cagree" name="agree" value="agree" /> Please agree to our
                    policy</label>
                </p>
                <p>
                  <input className="submit" type="submit" value="Submit" />
                </p>
              </fieldset>
            </form>
          </div>



    {/* <!-- start of footer --> */}
    <footer>
        <div className="inner-footer">
            <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLkrGU4-uQBJO3JOzUpi0iPYaG7aLZMhA8jw&usqp=CAU"
                    alt="car logo for company" />
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
                <h2 className="footer-h2">Follow us</h2>
                <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>

                <span>
                    &copy; ApexImports <br />
                    Charlotte, NC<br />
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

export default contact;
    
    
    