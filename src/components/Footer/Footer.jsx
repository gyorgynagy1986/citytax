import Link from "next/link";
import '../../app/footer.css'

const Footer5 = () => (
  <footer className="footer-three p-r z-1">
    <div className="container mx-auto sm:px-4 mx-auto sm:px-4">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-wrapper pt-120 pb-35">
        <div className="flex flex-wrap ">
          <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <div className="footer-widget about-company-widget-two mb-40 wow fadeInUp">
              <div className="footer-content">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logo/logo-4.png"
                        alt="Footer Logo"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  But I must explain to you how all this mistaken denouncing
                  plesure and praising pain was born
                </p>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Product</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Download</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Resources</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">
                      Affiliate <span className="status">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Changelog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Company</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Sales</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <div className="footer-widget contact-info-widget-two mb-40 wow fadeInUp">
              <h4 className="widget-title">Support</h4>
              <div className="footer-content">
                <div className="contact-info-box flex mb-10">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="text">
                    <p>55 Main Street, 2nd Block 3rd Floor, New York</p>
                  </div>
                </div>
                <div className="contact-info-box flex mb-10">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="contact-info-box flex mb-10">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="tel:+012(345)6789">+012 (345) 6789</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*=== Footer Copyright ===*/}
    <div className="footer-copyright border-top-1">
      <div className="container mx-auto sm:px-4 mx-auto sm:px-4">
        <div className="flex flex-wrap  items-center">
          <div className="lg:w-full pr-4 pl-4">
            <div className="footer-text text-center">
              <p>Copy@ 2022 Fintex. All Rights reserved by Webtend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer5