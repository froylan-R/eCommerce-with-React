const Footer = () => {
    return (
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
    )
}

export default Footer;