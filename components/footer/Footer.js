import React from "react";
import { Link } from "react-scroll";
import CtaSection from "../ctaSection/ctaSection";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer className="wpo-site-footer">
      <div className="upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link className="site-logo" to="/">
                    <img src="images/logo.jpg" alt="" />
                    Mithun.
                  </Link>
                </div>
                <p>
                  Full-Stack Web Developer | Building RedX & NextBuy | SEO &
                  Digital Growth 🚀
                </p>
                <div className="social-icons">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/mithun.munsi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/MithunMunsi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mithunmunsi/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        href="https://github.com/mithunmunsi"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          class="md:w-6 md:h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Discord"
                        href="https://discord.gg/ZdhCA3rK"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          class="md:w-6 md:h-6"
                        >
                          <path d="M14.82 4.26a10 10 0 0 0-.53 1.1 14.7 14.7 0 0 0-4.58 0 10 10 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A13 13 0 0 0 8.23 18a9.7 9.7 0 0 1-1.71-.83 3.4 3.4 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a11 11 0 0 1-1.71.84 12.4 12.4 0 0 0 1.08 1.78 16.4 16.4 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16 16 0 0 0-4.09-1.35M8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2m6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Navigation</h3>
                </div>
                <ul>
                  <li>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="experience"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="testimonial"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Testimonial
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget link-widget service-link-widget">
                <div className="widget-title">
                  <h3>Other Brands</h3>
                </div>
                <ul>
                  <li>
                    <a
                      href="https://redx.fi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      redx.fi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nextbuy.fi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      nextbuy.fi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://hungrilli.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hungrilli.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://swapnora.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      swapnora.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget newsletter-widget">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>
                  Subscribe to my newsletter to access exclusive discounts,
                  course updates, and other news.
                </p>
                <form onSubmit={SubmitHandler}>
                  <div className="input-1">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                  <div className="submit clearfix">
                    <button type="submit">
                      <i className="ti-email"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-shape">
          <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
            <g filter="url(#filter0_f_39_3833)">
              <circle
                cx="803"
                cy="803"
                r="303"
                fill="#59C378"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_39_3833"
                x="0"
                y="0"
                width="1606"
                height="1606"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_3832"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="separator"></div>
            <p className="copyright">
              Copyright &copy; 2026 Mithun. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
