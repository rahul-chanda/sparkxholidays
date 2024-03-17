import dynamic from "next/dynamic";

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {ssr : false,});


export default function Home() {
  return (
    <>
      <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
            <div className="col-md-9 ftco-animate-removed" data-scrollax=" properties: { translateY: '70%' }">
              <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><strong>Explore <br /></strong>
                your amazing city</h1>
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Find great places to stay, eat, shop, or
                visit from local experts</p>
              {/* <div className="block-17 my-4">
                <form method="post" className="d-block d-flex">
                  <div className="fields d-block d-flex">
                    <div className="textfield-search one-third">
                      <input type="text" className="form-control" placeholder="Ex: food, service, hotel" />
                    </div>
                    <div className="select-wrap one-third">
                      <div className="icon"><span className="ion-ios-arrow-down" /></div>
                      <select className="form-control" placeholder="Keyword search">
                        <option value>Where</option>
                        <option value>San Francisco USA</option>
                        <option value>Berlin Germany</option>
                        <option value>Lodon United Kingdom</option>
                        <option value>Paris Italy</option>
                      </select>
                    </div>
                  </div>
                  <input type="submit" className="search-submit btn btn-primary" defaultValue="Search" />
                </form>
              </div>
              <p>Or browse the highlights</p>
              <p className="browse d-md-flex">
                <span className="d-flex justify-content-md-center align-items-md-center"><a href="/"><i className="flaticon-fork" />Restaurant</a></span>
                <span className="d-flex justify-content-md-center align-items-md-center"><a href="/"><i className="flaticon-hotel" />Hotel</a></span>
                <span className="d-flex justify-content-md-center align-items-md-center"><a href="/"><i className="flaticon-meeting-point" />Places</a></span>
                <span className="d-flex justify-content-md-center align-items-md-	center"><a href="/"><i className="flaticon-shopping-bag" />Shopping</a></span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section services-section bg-light">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-3 d-flex align-self-stretch ftco-animate-removed">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon"><span className="flaticon-guarantee" /></div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">Best Price Guarantee</h3>
                  <p>A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate-removed">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon"><span className="flaticon-like" /></div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">Travellers Love Us</h3>
                  <p>A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate-removed">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon"><span className="flaticon-detective" /></div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">Best Travel Agent</h3>
                  <p>A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate-removed">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon"><span className="flaticon-support" /></div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">Our Dedicated Support</h3>
                  <p>A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-destination">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate-removed">
              <span className="subheading">Featured</span>
              <h2 className="mb-4"><strong>Featured</strong> Destination</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                items={4}
                margin={30}
                nav={true}
                autoplay={true}
                className="destination-slider ftco-animate-removed">
                  <div className="item">
                    <div className="destination">
                      <a href="/" className="img d-flex justify-content-center align-items-center" style={{
                        backgroundImage: 'url(images/destination-1.jpg)'
                      }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3><a href="/">Paris, Italy</a></h3>
                        <span className="listing">15 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a href="/" className="img d-flex justify-content-center align-items-center" style={{
                        backgroundImage: 'url(images/destination-2.jpg)'
                      }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3><a href="/">San Francisco, USA</a></h3>
                        <span className="listing">20 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a href="/" className="img d-flex justify-content-center align-items-center" style={{
                        backgroundImage: 'url(images/destination-3.jpg)'
                      }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3><a href="/">Lodon, UK</a></h3>
                        <span className="listing">10 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a href="/" className="img d-flex justify-content-center align-items-center" style={{
                        backgroundImage: 'url(images/destination-4.jpg)'
                      }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3><a href="/">Lion, Singapore</a></h3>
                        <span className="listing">3 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a href="/" className="img d-flex justify-content-center align-items-center" style={{
                        backgroundImage: 'url(images/destination-5.jpg)'
                      }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3><a href="/">Australia</a></h3>
                        <span className="listing">3 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a href="/" className="img d-flex justify-content-center align-items-center" style={{
                        backgroundImage: 'url(images/destination-6.jpg)'
                      }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3><a href="/">Paris, Italy</a></h3>
                        <span className="listing">3 Listing</span>
                      </div>
                    </div>
                  </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate-removed">
              <span className="subheading">Special Offers</span>
              <h2 className="mb-4"><strong>Top</strong> Tour Packages</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm col-md-6 col-lg ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{
                  backgroundImage: 'url(images/destination-1.jpg)'
                }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <div className="d-flex">
                    <div className="one">
                      <h3><a href="/">Paris, Italy</a></h3>
                      <p className="rate">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star-o" />
                        <span>8 Rating</span>
                      </p>
                    </div>
                    <div className="two">
                      <span className="price">$200</span>
                    </div>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <p className="days"><span>2 days 3 nights</span></p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> San Franciso, CA</span>
                    <span className="ml-auto"><a href="/">Discover</a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{
                  backgroundImage: 'url(images/destination-2.jpg)'
                }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <div className="d-flex">
                    <div className="one">
                      <h3><a href="/">Paris, Italy</a></h3>
                      <p className="rate">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star-o" />
                        <span>8 Rating</span>
                      </p>
                    </div>
                    <div className="two">
                      <span className="price">$200</span>
                    </div>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <p className="days"><span>2 days 3 nights</span></p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> San Franciso, CA</span>
                    <span className="ml-auto"><a href="/">Discover</a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{
                  backgroundImage: 'url(images/destination-3.jpg)'
                }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <div className="d-flex">
                    <div className="one">
                      <h3><a href="/">Paris, Italy</a></h3>
                      <p className="rate">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star-o" />
                        <span>8 Rating</span>
                      </p>
                    </div>
                    <div className="two">
                      <span className="price">$200</span>
                    </div>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <p className="days"><span>2 days 3 nights</span></p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> San Franciso, CA</span>
                    <span className="ml-auto"><a href="/">Discover</a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{
                  backgroundImage: 'url(images/destination-4.jpg)'
                }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <div className="d-flex">
                    <div className="one">
                      <h3><a href="/">Paris, Italy</a></h3>
                      <p className="rate">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star-o" />
                        <span>8 Rating</span>
                      </p>
                    </div>
                    <div className="two">
                      <span className="price">$200</span>
                    </div>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <p className="days"><span>2 days 3 nights</span></p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> San Franciso, CA</span>
                    <span className="ml-auto"><a href="/">Discover</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-counter img" id="section-counter-removed" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate-removed">
              <h2 className="mb-4">Some fun facts</h2>
              <span className="subheading">More than 100,000 websites hosted</span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate-removed">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={100000}>0</strong>
                      <span>Happy Customers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate-removed">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={40000}>0</strong>
                      <span>Destination Places</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate-removed">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={87000}>0</strong>
                      <span>Hotels</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate-removed">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={56400}>0</strong>
                      <span>Restaurant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate-removed">
              <span className="subheading">Special Offers</span>
              <h2 className="mb-4"><strong>Popular</strong> Hotels &amp; Rooms</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm col-md-6 col-lg ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-1.jpg)' }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <div className="d-flex">
                    <div className="one">
                      <h3><a href="/">Hotel, Italy</a></h3>
                      <p className="rate">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star-o" />
                        <span>8 Rating</span>
                      </p>
                    </div>
                    <div className="two">
                      <span className="price per-price">$40<br /><small>/night</small></span>
                    </div>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> Miami, Fl</span>
                    <span className="ml-auto"><a href="/">Book Now</a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-2.jpg)' }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <div className="d-flex">
                    <div className="one">
                      <h3><a href="/">Hotel, Italy</a></h3>
                      <p className="rate">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star-o" />
                        <span>8 Rating</span>
                      </p>
                    </div>
                    <div className="two">
                      <span className="price per-price">$40<br /><small>/night</small></span>
                    </div>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> Miami, Fl</span>
                    <span className="ml-auto"><a href="/">Book Now</a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-3.jpg)' }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <div className="d-flex">
                    <div className="one">
                      <h3><a href="/">Hotel, Italy</a></h3>
                      <p className="rate">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star-o" />
                        <span>8 Rating</span>
                      </p>
                    </div>
                    <div className="two">
                      <span className="price per-price">$40<br /><small>/night</small></span>
                    </div>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> Miami, Fl</span>
                    <span className="ml-auto"><a href="/">Book Now</a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-4.jpg)' }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <div className="d-flex">
                    <div className="one">
                      <h3><a href="/">Hotel, Italy</a></h3>
                      <p className="rate">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star-o" />
                        <span>8 Rating</span>
                      </p>
                    </div>
                    <div className="two">
                      <span className="price per-price">$40<br /><small>/night</small></span>
                    </div>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> Miami, Fl</span>
                    <span className="ml-auto"><a href="/">Book Now</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-5 heading-section ftco-animate-removed">
              <span className="subheading">Best Directory Website</span>
              <h2 className="mb-4 pb-3"><strong>Why</strong> Choose Us?</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
              </p>
              <p><a href="/" className="btn btn-primary btn-outline-primary mt-4 px-4 py-3">Read more</a></p>
            </div>
            <div className="col-md-1" />
            <div className="col-md-6 heading-section ftco-animate-removed">
              <span className="subheading">Testimony</span>
              <h2 className="mb-4 pb-3"><strong>Our</strong> Guests Says</h2>
              <div className="row ftco-animate-removed">
                <div className="col-md-12">
                  <OwlCarousel 
                  items={1}
                  autoplay={true}
                  className="carousel-testimony">
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div className="user-img mb-5" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text ml-md-4">
                          <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts.</p>
                          <p className="name">Dennis Green</p>
                          <span className="position">Guest from italy</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div className="user-img mb-5" style={{ backgroundImage: 'url(images/person_2.jpg)' }}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text ml-md-4">
                          <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts.</p>
                          <p className="name">Dennis Green</p>
                          <span className="position">Guest from London</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div className="user-img mb-5" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text ml-md-4">
                          <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts.</p>
                          <p className="name">Dennis Green</p>
                          <span className="position">Guest from Philippines</span>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate-removed">
              <span className="subheading">Special Offers</span>
              <h2 className="mb-4"><strong>Popular</strong> Restaurants</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/restaurant-1.jpg)' }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <h3><a href="/">Luxury Restaurant</a></h3>
                  <p className="rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-o" />
                    <span>8 Rating</span>
                  </p>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> San Franciso, CA</span>
                    <span className="ml-auto"><a href="/">Discover</a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/restaurant-2.jpg)' }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <h3><a href="/">Luxury Restaurant</a></h3>
                  <p className="rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-o" />
                    <span>8 Rating</span>
                  </p>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> San Franciso, CA</span>
                    <span className="ml-auto"><a href="/">Book Now</a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/restaurant-3.jpg)' }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <h3><a href="/">Luxury Restaurant</a></h3>
                  <p className="rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-o" />
                    <span>8 Rating</span>
                  </p>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> San Franciso, CA</span>
                    <span className="ml-auto"><a href="/">Book Now</a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate-removed">
              <div className="destination">
                <a href="/" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/restaurant-4.jpg)' }}>
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3">
                  <h3><a href="/">Luxury Restaurant</a></h3>
                  <p className="rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-o" />
                    <span>8 Rating</span>
                  </p>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                  <hr />
                  <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" /> San Franciso, CA</span>
                    <span className="ml-auto"><a href="/">Book Now</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate-removed">
              <span className="subheading">Recent Blog</span>
              <h2><strong>Tips</strong> &amp; Articles</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-3 d-flex ftco-animate-removed">
              <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_1.jpg")' }}>
                </a>
                <div className="text p-4 d-block">
                  <span className="tag">Tips, Travel</span>
                  <h3 className="heading mt-3"><a href="/">8 Best homestay in Philippines that you don't miss out</a></h3>
                  <div className="meta mb-3">
                    <div><a href="/">August 12, 2018</a></div>
                    <div><a href="/">Admin</a></div>
                    <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate-removed">
              <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_2.jpg")' }}>
                </a>
                <div className="text p-4">
                  <span className="tag">Culture</span>
                  <h3 className="heading mt-3"><a href="/">Even the all-powerful Pointing has no control about the blind
                    texts</a></h3>
                  <div className="meta mb-3">
                    <div><a href="/">August 12, 2018</a></div>
                    <div><a href="/">Admin</a></div>
                    <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate-removed">
              <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_3.jpg")' }}>
                </a>
                <div className="text p-4">
                  <span className="tag">Tips, Travel</span>
                  <h3 className="heading mt-3"><a href="/">Even the all-powerful Pointing has no control about the blind
                    texts</a></h3>
                  <div className="meta mb-3">
                    <div><a href="/">August 12, 2018</a></div>
                    <div><a href="/">Admin</a></div>
                    <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate-removed">
              <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_4.jpg")' }}>
                </a>
                <div className="text p-4">
                  <span className="tag">Tips, Travel</span>
                  <h3 className="heading mt-3"><a href="/">Even the all-powerful Pointing has no control about the blind
                    texts</a></h3>
                  <div className="meta mb-3">
                    <div><a href="/">August 12, 2018</a></div>
                    <div><a href="/">Admin</a></div>
                    <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section-parallax">
        <div className="parallax-img d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7 text-center heading-section heading-section-white ftco-animate-removed">
                <h2>Subcribe to our Newsletter</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                  blind texts. Separated they live in</p>
                <div className="row d-flex justify-content-center mt-5">
                  <div className="col-md-8">
                    <form action="#" className="subscribe-form">
                      <div className="form-group d-flex">
                        <input type="text" className="form-control" placeholder="Enter email address" />
                        <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
