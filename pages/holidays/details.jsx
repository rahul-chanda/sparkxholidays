import dynamic from "next/dynamic";

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {ssr : false,});

export default function Details() {
  return (
    <>
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: 'url("/images/bg_5.jpg")' }}
      >
        <div className="overlay" />
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div
              className="col-md-9 ftco-animate-removed text-center"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <p
                className="breadcrumbs"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                <span className="mr-2">
                  <a href="index-2.html">Home</a>
                </span>{" "}
                <span className="mr-2">
                  <a href="hotel.html">Hotel</a>
                </span>{" "}
                <span>Hotel Single</span>
              </p>
              <h1
                className="mb-3 bread"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Hotels Details
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-3 sidebar">
              <div className="sidebar-wrap bg-light ftco-animate-removed">
                <h3 className="heading mb-4">Find City</h3>
                <form action="#">
                  <div className="fields">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Destination, City"
                      />
                    </div>
                    <div className="form-group">
                      <div className="select-wrap one-third">
                        <div className="icon">
                          <span className="ion-ios-arrow-down" />
                        </div>
                        <select
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Keyword search"
                        >
                          <option value="">Select Location</option>
                          <option value="">San Francisco USA</option>
                          <option value="">Berlin Germany</option>
                          <option value="">Lodon United Kingdom</option>
                          <option value="">Paris Italy</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        id="checkin_date"
                        className="form-control"
                        placeholder="Date from"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        id="checkin_date"
                        className="form-control"
                        placeholder="Date to"
                      />
                    </div>
                    <div className="form-group">
                      <div className="range-slider">
                        <span>
                          <input
                            type="number"
                            defaultValue={25000}
                            min={0}
                            max={120000}
                          />{" "}
                          -
                          <input
                            type="number"
                            defaultValue={50000}
                            min={0}
                            max={120000}
                          />
                        </span>
                        <input
                          defaultValue={1000}
                          min={0}
                          max={120000}
                          step={500}
                          type="range"
                        />
                        <input
                          defaultValue={50000}
                          min={0}
                          max={120000}
                          step={500}
                          type="range"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Search"
                        className="btn btn-primary py-3 px-5"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="sidebar-wrap bg-light ftco-animate-removed">
                <h3 className="heading mb-4">Star Rating</h3>
                <form method="post" className="star-rating">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate">
                        <span>
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate">
                        <span>
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate">
                        <span>
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <i className="icon-star-o" />
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate">
                        <span>
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <i className="icon-star-o" />
                          <i className="icon-star-o" />
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate">
                        <span>
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <i className="icon-star-o" />
                          <i className="icon-star-o" />
                          <i className="icon-star-o" />
                        </span>
                      </p>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row"> */}
                <div className="col-md-12 ftco-animate-removed">
                  <OwlCarousel 
                    items={1}
                    autoplay={true}
                    className="single-slider">
                    <div className="item">
                      <div
                        className="hotel-img"
                        style={{ backgroundImage: 'url("/images/hotel-2.jpg")' }}
                      />
                    </div>
                    <div className="item">
                      <div
                        className="hotel-img"
                        style={{ backgroundImage: 'url("/images/hotel-3.jpg")' }}
                      />
                    </div>
                    <div className="item">
                      <div
                        className="hotel-img"
                        style={{ backgroundImage: 'url("/images/hotel-4.jpg")' }}
                      />
                    </div>
                  </OwlCarousel>
                </div>
                <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate-removed">
                  <span>Our Best hotels &amp; Rooms</span>
                  <h2>Luxury Hotel in Paris</h2>
                  <p className="rate mb-5">
                    <span className="loc">
                      <a href="#">
                        <i className="icon-map" /> 291 South 21th Street, Suite 721
                        New York NY 10016
                      </a>
                    </span>
                    <span className="star">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star-o" />8 Rating
                    </span>
                  </p>
                  <p>
                    When she reached the first hills of the Italic Mountains, she
                    had a last view back on the skyline of her hometown
                    Bookmarksgrove, the headline of Alphabet Village and the subline
                    of her own road, the Line Lane. Pityful a rethoric question ran
                    over her cheek, then she continued her way.
                  </p>
                  <div className="d-md-flex mt-5 mb-5">
                    <ul>
                      <li>The Big Oxmox advised her not to do so</li>
                      <li>
                        When she reached the first hills of the Italic Mountains
                      </li>
                      <li>
                        She had a last view back on the skyline of her hometown{" "}
                      </li>
                      <li>Bookmarksgrove, the headline of Alphabet </li>
                    </ul>
                    <ul className="ml-md-5">
                      <li>Question ran over her cheek, then she continued</li>
                      <li>Pityful a rethoric question ran</li>
                      <li>Mountains, she had a last view back on the skyline</li>
                      <li>Headline of Alphabet Village and the subline</li>
                    </ul>
                  </div>
                  <p>
                    When she reached the first hills of the Italic Mountains, she
                    had a last view back on the skyline of her hometown
                    Bookmarksgrove, the headline of Alphabet Village and the subline
                    of her own road, the Line Lane. Pityful a rethoric question ran
                    over her cheek, then she continued her way.
                  </p>
                </div>
                <div className="col-md-12 hotel-single ftco-animate-removed mb-5 mt-4">
                  <h4 className="mb-4">Take A Tour</h4>
                  <div className="block-16">
                    <figure>
                      <img
                        src="/images/hotel-6.jpg"
                        alt="Image placeholder"
                        className="img-fluid"
                        width={1200}
                      />
                      <a
                        href="https://vimeo.com/45830194"
                        className="play-button popup-vimeo"
                      >
                        <span className="icon-play" />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-md-12 hotel-single ftco-animate-removed mb-5 mt-4">
                  <h4 className="mb-4">Our Rooms</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="destination">
                        <a
                          href="hotel-single.html"
                          className="img img-2"
                          style={{ backgroundImage: 'url("/images/room-4.jpg")' }}
                        />
                        <div className="text p-3">
                          <div className="d-flex">
                            <div className="one">
                              <h3>
                                <a href="hotel-single.html">Hotel, Italy</a>
                              </h3>
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
                              <span className="price per-price">
                                $40
                                <br />
                                <small>/night</small>
                              </span>
                            </div>
                          </div>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries
                          </p>
                          <hr />
                          <p className="bottom-area d-flex">
                            <span>
                              <i className="icon-map-o" /> Miami, Fl
                            </span>
                            <span className="ml-auto">
                              <a href="#">Book Now</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="destination">
                        <a
                          href="hotel-single.html"
                          className="img img-2"
                          style={{ backgroundImage: 'url("/images/room-5.jpg")' }}
                        />
                        <div className="text p-3">
                          <div className="d-flex">
                            <div className="one">
                              <h3>
                                <a href="hotel-single.html">Hotel, Italy</a>
                              </h3>
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
                              <span className="price per-price">
                                $40
                                <br />
                                <small>/night</small>
                              </span>
                            </div>
                          </div>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries
                          </p>
                          <hr />
                          <p className="bottom-area d-flex">
                            <span>
                              <i className="icon-map-o" /> Miami, Fl
                            </span>
                            <span className="ml-auto">
                              <a href="#">Book Now</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="destination">
                        <a
                          href="hotel-single.html"
                          className="img img-2"
                          style={{ backgroundImage: 'url("/images/room-6.jpg")' }}
                        />
                        <div className="text p-3">
                          <div className="d-flex">
                            <div className="one">
                              <h3>
                                <a href="hotel-single.html">Hotel, Italy</a>
                              </h3>
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
                              <span className="price per-price">
                                $40
                                <br />
                                <small>/night</small>
                              </span>
                            </div>
                          </div>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries
                          </p>
                          <hr />
                          <p className="bottom-area d-flex">
                            <span>
                              <i className="icon-map-o" /> Miami, Fl
                            </span>
                            <span className="ml-auto">
                              <a href="#">Book Now</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 hotel-single ftco-animate-removed mb-5 mt-4">
                  <h4 className="mb-5">Check Availability &amp; Booking</h4>
                  <div className="fields">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="checkin_date"
                            className="form-control"
                            placeholder="Date from"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="checkin_date"
                            className="form-control"
                            placeholder="Date to"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="select-wrap one-third">
                            <div className="icon">
                              <span className="ion-ios-arrow-down" />
                            </div>
                            <select
                              name=""
                              id=""
                              className="form-control"
                              placeholder="Guest"
                            >
                              <option value={0}>Guest</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="select-wrap one-third">
                            <div className="icon">
                              <span className="ion-ios-arrow-down" />
                            </div>
                            <select
                              name=""
                              id=""
                              className="form-control"
                              placeholder="Children"
                            >
                              <option value={0}>Children</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Check Availability"
                            className="btn btn-primary py-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 hotel-single ftco-animate-removed mb-5 mt-4">
                  <h4 className="mb-4">Review &amp; Ratings</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <form method="post" className="star-rating">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            <p className="rate">
                              <span>
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" /> 100 Ratings
                              </span>
                            </p>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            <p className="rate">
                              <span>
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star-o" /> 30 Ratings
                              </span>
                            </p>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            <p className="rate">
                              <span>
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star-o" />
                                <i className="icon-star-o" /> 5 Ratings
                              </span>
                            </p>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            <p className="rate">
                              <span>
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star-o" />
                                <i className="icon-star-o" />
                                <i className="icon-star-o" /> 0 Ratings
                              </span>
                            </p>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            <p className="rate">
                              <span>
                                <i className="icon-star" />
                                <i className="icon-star-o" />
                                <i className="icon-star-o" />
                                <i className="icon-star-o" />
                                <i className="icon-star-o" /> 0 Ratings
                              </span>
                            </p>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 hotel-single ftco-animate-removed mb-5 mt-5">
                  <h4 className="mb-4">Related Hotels</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="destination">
                        <a
                          href="hotel-single.html"
                          className="img img-2"
                          style={{ backgroundImage: 'url("/images/hotel-1.jpg")' }}
                        />
                        <div className="text p-3">
                          <div className="d-flex">
                            <div className="one">
                              <h3>
                                <a href="hotel-single.html">Hotel, Italy</a>
                              </h3>
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
                              <span className="price per-price">
                                $40
                                <br />
                                <small>/night</small>
                              </span>
                            </div>
                          </div>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries
                          </p>
                          <hr />
                          <p className="bottom-area d-flex">
                            <span>
                              <i className="icon-map-o" /> Miami, Fl
                            </span>
                            <span className="ml-auto">
                              <a href="#">Book Now</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="destination">
                        <a
                          href="hotel-single.html"
                          className="img img-2"
                          style={{ backgroundImage: 'url("/images/hotel-2.jpg")' }}
                        />
                        <div className="text p-3">
                          <div className="d-flex">
                            <div className="one">
                              <h3>
                                <a href="hotel-single.html">Hotel, Italy</a>
                              </h3>
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
                              <span className="price per-price">
                                $40
                                <br />
                                <small>/night</small>
                              </span>
                            </div>
                          </div>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries
                          </p>
                          <hr />
                          <p className="bottom-area d-flex">
                            <span>
                              <i className="icon-map-o" /> Miami, Fl
                            </span>
                            <span className="ml-auto">
                              <a href="#">Book Now</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="destination">
                        <a
                          href="hotel-single.html"
                          className="img img-2"
                          style={{ backgroundImage: 'url("/images/hotel-3.jpg")' }}
                        />
                        <div className="text p-3">
                          <div className="d-flex">
                            <div className="one">
                              <h3>
                                <a href="hotel-single.html">Hotel, Italy</a>
                              </h3>
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
                              <span className="price per-price">
                                $40
                                <br />
                                <small>/night</small>
                              </span>
                            </div>
                          </div>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries
                          </p>
                          <hr />
                          <p className="bottom-area d-flex">
                            <span>
                              <i className="icon-map-o" /> Miami, Fl
                            </span>
                            <span className="ml-auto">
                              <a href="#">Book Now</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div>
        </div> */}
      </section>
    </>
  )
}
