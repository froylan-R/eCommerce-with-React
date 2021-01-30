import React, { Component } from 'react';
import Nav from "../components/nav"
import Footer from "../components/footer"

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
        <Footer />
        {/* <!-- end of footer --> */}

      </div>
    );
  }
}

export default contact;


