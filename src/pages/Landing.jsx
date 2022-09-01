import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Landing = () => {
  const bannerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const serviceSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ourValiableClients = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="modularize-banner-area modularize-banner-slide">
        <Slider {...bannerSettings}>
          <div className="modularize-banner-slide-active item-1">
            <div className="item-1"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="modularize-banner-content">
                    <h4
                      className="title"
                      data-animation="fadeInDown"
                      data-delay=".1s"
                    >
                      Experience the best IT Solutions
                    </h4>
                    <h1
                      className=""
                      data-animation="fadeInLeft"
                      data-delay=".3s"
                    >
                      IT Solutions{" "}
                      {/* <img src="assets/images/banner-icon.png" alt="" /> {" "} */}{" "}
                      & <br />
                      Services
                    </h1>
                    <a
                      className="main-btn"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                      href="#"
                    >
                      Learn More
                    </a>
                    <img
                      className="banner-arrow"
                      data-animation="fadeInRight"
                      data-delay=".9s"
                      src="assets/images/banner-arrow.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modularize-banner-slide-active item-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="modularize-banner-content">
                    <h4
                      className="title"
                      data-animation="fadeInDown"
                      data-delay=".1s"
                    >
                      Experience the best IT Solutions
                    </h4>
                    <h1
                      className=""
                      data-animation="fadeInLeft"
                      data-delay=".3s"
                    >
                      IT Solutions{" "}
                      {/* <img src="assets/images/banner-icon.png" alt="" /> <br />{" "} */}
                      & <br />
                      Services
                    </h1>
                    <a
                      className="main-btn"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                      href="#"
                    >
                      Learn More
                    </a>
                    <img
                      className="banner-arrow"
                      data-animation="fadeInRight"
                      data-delay=".9s"
                      src="assets/images/banner-arrow.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modularize-banner-slide-active item-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="modularize-banner-content">
                    <h4
                      className="title"
                      data-animation="fadeInDown"
                      data-delay=".1s"
                    >
                      Experience the best IT Solutions
                    </h4>
                    <h1
                      className=""
                      data-animation="fadeInLeft"
                      data-delay=".3s"
                    >
                      IT Solutions{" "}
                      {/* <img src="assets/images/banner-icon.png" alt="" /> <br />{" "} */}
                      & <br />
                      Services
                    </h1>
                    <a
                      className="main-btn"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                      href="#"
                    >
                      Learn More
                    </a>
                    <img
                      className="banner-arrow"
                      data-animation="fadeInRight"
                      data-delay=".9s"
                      src="assets/images/banner-arrow.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className="modularize-about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="modularize-about-thumb animated wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="0ms"
              >
                <img src="assets/images/about-thumb-1.jpg" alt="" />
                <img
                  className="thumb"
                  src="assets/images/about-thumb-2.jpg"
                  alt=""
                />
                {/* <div className="about-box">
                  <h4 className="title">
                    6800 <sup>+</sup>
                  </h4>
                  <span>Satisfied Clients</span>
                </div> */}
                <img
                  className="about-logo"
                  src="assets/images/cloudPartner-footer.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="modularize-about-content">
                <span>About Our Company</span>
                <h3 className="title">We’re Partner of Your Innovations</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even.
                </p>
                {/* <div className="row">
                  <div className="col-md-6">
                    <div className="about-card">
                      <div className="icon">
                        <img src="assets/images/icon/icon-1.png" alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">Website Development</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-card">
                      <div className="icon">
                        <img src="assets/images/icon/icon-2.png" alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">Website Development</h4>
                      </div>
                    </div>
                  </div>
                </div> */}
                <ul>
                  <li>
                    <i className="fas fa-check-circle"></i> Exploring version
                    oflorem veritatis proin
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Auctor aliquet
                    aenean simply free text veritatis quis
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Consequat ipsum nec
                    lorem sagittis sem nibh.
                  </li>
                </ul>
                <Link to="/about" className="main-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Three Cards */}

      <section className="modularize-service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-modularize-serice-item animated wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="0ms"
              >
                <div className="thumb">
                  <img src="assets/images/service-1.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="icon">
                    <img src="assets/images/icon/service-icon-1.png" alt="" />
                  </div>
                  <h3 className="title">
                    <a href="#">Perfect solutions that business demands</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-modularize-serice-item animated wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <div className="thumb">
                  <img src="assets/images/service-2.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="icon">
                    <img src="assets/images/icon/service-icon-2.png" alt="" />
                  </div>
                  <h3 className="title">
                    <a href="#">Reduced Spending with IT Talent Sourcing</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-modularize-serice-item animated wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <div className="thumb">
                  <img src="assets/images/service-3.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="icon">
                    <img src="assets/images/icon/service-icon-3.png" alt="" />
                  </div>
                  <h3 className="title">
                    <a href="#">Access to Experts and the Latest Technology</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealing in all Professional IT Services */}

      <section className="modularize-feature-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title section-title-2">
                <span>What We’re Offering</span>
                <h4 className="title">
                  Dealing in all Professional IT Services
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title pl-100">
                <p>
                  There are many variations of passages of available but
                  majority have suffered alteration in some form, by humou or
                  randomised words which don't look even slightly believable.
                </p>
              </div>
            </div>
          </div>
          <div className="row modularize-feature-slide">
            <Slider {...serviceSettings}>
              <div className="col-lg-2">
                <div className="single-modularize-feature-item">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="60px"
                      version="1.1"
                      viewBox="0 0 512 512"
                      width="60px"
                    >
                      <g id="surface1">
                        <path
                          fill="#b882fc"
                          d="M 488.90625 84 L 384 84 C 379.855469 84 376.5 87.355469 376.5 91.5 C 376.5 95.644531 379.855469 99 384 99 L 488.90625 99 C 493.371094 99 497 102.628906 497 107.09375 L 497 395.90625 C 497 400.371094 493.371094 404 488.90625 404 L 23.09375 404 C 18.628906 404 15 400.371094 15 395.90625 L 15 107.09375 C 15 102.628906 18.628906 99 23.09375 99 L 187.875 99 L 187.875 114 L 37.5 114 C 33.355469 114 30 117.355469 30 121.5 L 30 319.667969 C 30 323.808594 33.355469 327.167969 37.5 327.167969 C 41.644531 327.167969 45 323.808594 45 319.667969 L 45 129 L 187.875 129 L 187.875 169.234375 L 155.765625 184.574219 C 153.203125 185.800781 151.5 188.449219 151.5 191.34375 L 151.5 313.65625 C 151.5 316.546875 153.160156 319.179688 155.765625 320.425781 L 252.765625 366.769531 C 254.867188 367.757812 257.238281 367.707031 259.234375 366.769531 L 313.765625 340.714844 C 317.503906 338.929688 319.085938 334.449219 317.300781 330.714844 C 315.515625 326.976562 311.03125 325.394531 307.296875 327.179688 L 263.5 348.105469 L 263.5 242.414062 L 345.5 203.238281 L 345.5 308.929688 L 334.359375 314.25 C 330.621094 316.035156 329.039062 320.515625 330.824219 324.25 C 332.609375 327.988281 337.089844 329.570312 340.824219 327.785156 L 356.234375 320.425781 C 358.839844 319.179688 360.5 316.546875 360.5 313.65625 L 360.5 191.34375 C 360.5 188.484375 358.835938 185.820312 356.234375 184.574219 L 324.125 169.234375 L 324.125 129 L 467 129 L 467 374 L 45 374 L 45 351.667969 C 45 347.523438 41.644531 344.167969 37.5 344.167969 C 33.355469 344.167969 30 347.523438 30 351.667969 L 30 381.5 C 30 385.644531 33.355469 389 37.5 389 L 474.5 389 C 478.644531 389 482 385.644531 482 381.5 L 482 121.5 C 482 117.355469 478.644531 114 474.5 114 L 324.125 114 L 324.125 99 L 352 99 C 356.144531 99 359.5 95.644531 359.5 91.5 C 359.5 87.355469 356.144531 84 352 84 L 324.125 84 L 324.125 69 L 391.375 69 C 395.519531 69 398.875 65.644531 398.875 61.5 L 398.875 43.710938 C 407.605469 40.613281 413.875 32.277344 413.875 22.5 C 413.875 10.09375 403.78125 0 391.375 0 C 378.96875 0 368.875 10.09375 368.875 22.5 C 368.875 32.277344 375.144531 40.613281 383.875 43.710938 L 383.875 54 L 316.625 54 C 312.480469 54 309.125 57.355469 309.125 61.5 L 309.125 84 L 263.5 84 L 263.5 43.710938 C 272.230469 40.613281 278.5 32.277344 278.5 22.5 C 278.5 10.09375 268.40625 0 256 0 C 243.59375 0 233.5 10.09375 233.5 22.5 C 233.5 32.277344 239.769531 40.613281 248.5 43.710938 L 248.5 84 L 202.875 84 L 202.875 61.5 C 202.875 57.355469 199.519531 54 195.375 54 L 128.125 54 L 128.125 43.710938 C 136.855469 40.613281 143.125 32.277344 143.125 22.5 C 143.125 10.09375 133.03125 0 120.625 0 C 108.21875 0 98.125 10.09375 98.125 22.5 C 98.125 32.277344 104.394531 40.613281 113.125 43.710938 L 113.125 61.5 C 113.125 65.644531 116.480469 69 120.625 69 L 187.875 69 L 187.875 84 L 23.09375 84 C 10.359375 84 0 94.359375 0 107.09375 L 0 395.90625 C 0 408.640625 10.359375 419 23.09375 419 L 185.695312 419 C 182.792969 446.511719 164.601562 462.578125 158.867188 467 L 127 467 C 114.59375 467 104.5 477.09375 104.5 489.5 C 104.5 501.90625 114.59375 512 127 512 L 385 512 C 397.40625 512 407.5 501.90625 407.5 489.5 C 407.5 477.09375 397.40625 467 385 467 L 353.152344 467 C 347.492188 462.59375 329.238281 446.382812 326.3125 419 L 488.90625 419 C 501.640625 419 512 408.640625 512 395.90625 L 512 107.09375 C 512 94.359375 501.640625 84 488.90625 84 Z M 391.375 15 C 395.511719 15 398.875 18.363281 398.875 22.5 C 398.875 26.636719 395.511719 30 391.375 30 C 387.238281 30 383.875 26.636719 383.875 22.5 C 383.875 18.363281 387.238281 15 391.375 15 Z M 256 15 C 260.136719 15 263.5 18.363281 263.5 22.5 C 263.5 26.636719 260.136719 30 256 30 C 251.863281 30 248.5 26.636719 248.5 22.5 C 248.5 18.363281 251.863281 15 256 15 Z M 120.625 15 C 124.761719 15 128.125 18.363281 128.125 22.5 C 128.125 26.636719 124.761719 30 120.625 30 C 116.488281 30 113.125 26.636719 113.125 22.5 C 113.125 18.363281 116.488281 15 120.625 15 Z M 202.875 129 L 248.5 129 L 248.5 140.269531 L 202.875 162.070312 Z M 335.601562 191.34375 L 256 229.371094 L 176.398438 191.34375 L 256 153.3125 Z M 166.5 203.238281 L 248.5 242.414062 L 248.5 348.105469 L 166.5 308.929688 Z M 309.125 162.070312 L 263.5 140.269531 L 263.5 129 L 309.125 129 Z M 309.125 99 L 309.125 114 L 263.5 114 L 263.5 99 Z M 248.5 99 L 248.5 114 L 202.875 114 L 202.875 99 Z M 392.5 489.5 C 392.5 493.636719 389.136719 497 385 497 L 127 497 C 122.863281 497 119.5 493.636719 119.5 489.5 C 119.5 485.363281 122.863281 482 127 482 L 385 482 C 389.136719 482 392.5 485.363281 392.5 489.5 Z M 331.640625 467 L 180.359375 467 C 189.152344 456.730469 198.90625 440.726562 200.777344 419 L 311.222656 419 C 313.09375 440.726562 322.847656 456.730469 331.640625 467 Z M 331.640625 467 "
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        Product <br /> Development
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum has been the industry text ever since then.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="single-modularize-feature-item">
                  <div className="icon">
                    <svg
                      id="Layer_1_1_"
                      enable-background="new 0 0 64 64"
                      height="60px"
                      viewBox="0 0 64 64"
                      width="60px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#b882fc"
                        d="m16 32c0 8.822 7.178 16 16 16s16-7.178 16-16-7.178-16-16-16-16 7.178-16 16zm8.485-11.793 1.62 3.24c.097.193.254.351.447.447l3.034 1.517-2.152 3.589h-3.434c-.431 0-.812.275-.949.684l-.772 2.316h-4.279c0-4.953 2.593-9.304 6.485-11.793zm7.515 22.793v3c-4.906 0-9.223-2.541-11.723-6.371l4.543-1.514 3.58 2.685c.365.273.869.266 1.225-.019l4.301-3.441 2.074 2.074v1.805l-3.243.811c-.445.111-.757.511-.757.97zm14-11c0 2.206-.527 4.287-1.44 6.146l-2.273-2.273 1.545-2.318c.156-.234.207-.524.138-.797l-1-4c-.067-.27-.245-.5-.489-.634-.245-.135-.534-.16-.798-.072l-2.316.772-2.282-3.042.696-2.782h4.928c2.05 2.436 3.291 5.574 3.291 9zm-9-11c-.459 0-.859.312-.97.757l-1 4c-.073.292-.01.602.17.843l3 4c.258.344.708.485 1.116.349l1.976-.659.63 2.523-1.754 2.632c-.265.396-.212.925.125 1.262l3.228 3.228c-2.168 3.137-5.582 5.338-9.521 5.905v-2.06l3.243-.811c.445-.11.757-.51.757-.969v-3c0-.265-.105-.52-.293-.707l-3-3c-.36-.361-.934-.393-1.332-.074l-4.395 3.516-3.38-2.535c-.262-.198-.604-.252-.917-.149l-5.387 1.796c-.555-1.201-.941-2.492-1.137-3.847h4.841c.431 0 .812-.275.949-.684l.772-2.316h3.279c.351 0 .677-.184.857-.485l3-5c.144-.239.181-.527.103-.794s-.264-.49-.513-.615l-3.702-1.851-1.501-3.003c1.758-.797 3.703-1.252 5.756-1.252 3.257 0 6.251 1.128 8.632 3z"
                      />
                      <path
                        fill="#b882fc"
                        d="m59 29c-1.302 0-2.402.839-2.816 2h-6.184v2h6.184c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z"
                      />
                      <path
                        fill="#b882fc"
                        d="m59 49c0-1.654-1.346-3-3-3-1.302 0-2.402.839-2.816 2h-1.507l-1.749-4.372c-.152-.379-.519-.628-.928-.628h-3v2h2.323l1.749 4.372c.152.379.519.628.928.628h2.184c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3zm-4 0c0-.551.449-1 1-1s1 .449 1 1-.449 1-1 1-1-.449-1-1z"
                      />
                      <path
                        fill="#b882fc"
                        d="m48 61c1.654 0 3-1.346 3-3s-1.346-3-3-3c-1.302 0-2.402.839-2.816 2h-2.43l-1.793-6.275c-.122-.429-.515-.725-.961-.725h-5v2h4.246l1.793 6.275c.122.429.515.725.961.725h3.184c.414 1.161 1.514 2 2.816 2zm0-4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
                      />
                      <path
                        fill="#b882fc"
                        d="m39.895 13.447 2.723-5.447h2.554c.421 1.19 1.557 2 2.827 2 .149 0 .3-.011.452-.034.792-.121 1.49-.542 1.965-1.188s.67-1.438.55-2.229c-.249-1.635-1.779-2.759-3.417-2.516-.792.121-1.49.542-1.965 1.188-.177.241-.301.506-.399.779h-3.185c-.379 0-.725.214-.895.553l-2.723 5.447h-3.382v2h4c.379 0 .725-.214.895-.553zm7.299-7.04c.159-.215.391-.356.655-.396.051-.008.101-.011.151-.011.486 0 .914.355.989.85.04.264-.025.528-.183.743-.159.215-.391.356-.655.396-.538.085-1.056-.293-1.139-.839-.041-.264.024-.528.182-.743z"
                      />
                      <path
                        fill="#b882fc"
                        d="m54.184 17c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3s-1.346-3-3-3c-1.302 0-2.402.839-2.816 2h-4.184c-.334 0-.646.167-.832.445l-1.703 2.555h-2.465v2h3c.334 0 .646-.167.832-.445l1.703-2.555zm2.816-2c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
                      />
                      <path
                        fill="#b882fc"
                        d="m3 27c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h2.464c.25 1.328.604 2.646 1.058 3.937l-2.137 1.233c-.479.276-.642.888-.366 1.366l4 6.928c.276.478.885.642 1.366.366l2.141-1.236c.886 1.029 1.85 1.994 2.879 2.879l-1.236 2.141c-.276.479-.112 1.09.366 1.366l6.928 4c.477.275 1.089.111 1.366-.366l1.233-2.137c1.29.454 2.608.808 3.937 1.058v2.465c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-10c0-.552-.448-1-1-1-9.925 0-18-8.075-18-18s8.075-18 18-18c.552 0 1-.448 1-1v-10c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v2.464c-1.328.25-2.646.604-3.937 1.058l-1.232-2.137c-.277-.479-.889-.643-1.366-.366l-6.928 4c-.479.276-.642.888-.366 1.366l1.236 2.141c-1.029.886-1.994 1.85-2.879 2.879l-2.142-1.235c-.481-.276-1.09-.112-1.366.366l-4 6.928c-.276.478-.112 1.09.366 1.366l2.137 1.233c-.454 1.291-.808 2.609-1.058 3.937zm4.295 1.153c.271-1.75.738-3.491 1.39-5.172.178-.46-.005-.981-.433-1.228l-2-1.155 3-5.196 2.004 1.157c.427.246.969.144 1.278-.238 1.122-1.391 2.396-2.665 3.787-3.787.383-.309.484-.852.238-1.278l-1.157-2.004 5.196-3 1.155 2c.247.427.767.609 1.227.433 1.682-.652 3.422-1.119 5.172-1.39.488-.075.848-.495.848-.988v-2.307h2v8.025c-10.565.522-19 9.282-19 19.975s8.435 19.453 19 19.975v8.025h-2v-2.307c0-.493-.36-.913-.847-.988-1.75-.271-3.491-.738-5.172-1.39-.46-.177-.98.005-1.228.433l-1.155 2-5.196-3 1.157-2.004c.246-.427.145-.969-.238-1.278-1.391-1.122-2.665-2.396-3.787-3.787-.31-.384-.852-.485-1.278-.238l-2.004 1.157-3-5.196 2-1.155c.427-.247.611-.768.433-1.227-.652-1.682-1.119-3.422-1.39-5.172-.075-.488-.495-.848-.988-.848h-2.307v-6h2.307c.493 0 .913-.36.988-.847z"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        Digital <br /> Marketing
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum has been the industry text ever since then.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="single-modularize-feature-item">
                  <div className="icon">
                    <svg
                      id="_x33_0"
                      enable-background="new 0 0 64 64"
                      height="60px"
                      viewBox="0 0 64 64"
                      width="60px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          fill="#b882fc"
                          d="m32 17c-8.271 0-15 6.729-15 15s6.729 15 15 15 15-6.729 15-15-6.729-15-15-15zm0 28c-7.168 0-13-5.832-13-13s5.832-13 13-13 13 5.832 13 13-5.832 13-13 13z"
                        />
                        <path
                          fill="#b882fc"
                          d="m37 27v-1c0-2.757-2.243-5-5-5s-5 2.243-5 5v1c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-10c0-1.103-.897-2-2-2zm-8-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1h-6zm-2 13v-10h10l.001 10z"
                        />
                        <path
                          fill="#b882fc"
                          d="m32 30c-1.654 0-3 1.346-3 3 0 1.302.839 2.402 2 2.816v2.184h2v-2.184c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3zm0 4c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z"
                        />
                        <path fill="#b882fc" d="m49 11h8v-6h-8zm2-4h4v2h-4z" />
                        <path fill="#b882fc" d="m5 55h8v-10h-8zm2-8h4v6h-4z" />
                        <path fill="#b882fc" d="m7 57h4v2h-4z" />
                        <path
                          fill="#b882fc"
                          d="m60 41h-5v-8h-4.051c.018-.333.051-.662.051-1s-.033-.667-.051-1h4.051v-11h5.5c1.379 0 2.5-1.122 2.5-2.5 0-.537-.177-1.069-.5-1.5l-1.5-2v-10c0-1.654-1.346-3-3-3h-10c-1.654 0-3 1.346-3 3v10l-1.501 2.001c-.148.198-.262.419-.345.651-1.276-.93-2.666-1.706-4.154-2.299v-1.537c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.402 2 2.816v.874c-1.285-.352-2.622-.567-4-.639v-6.235c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.402 2 2.816v6.235c-2.109.111-4.127.557-6 1.302v-3.537c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.402 2 2.816v4.457c-5.106 2.758-8.791 7.791-9.739 13.727h-2.261v-8h2.719c.62 0 1.194-.28 1.576-.769s.515-1.114.364-1.717l-.379-1.514h.72c1.654 0 3-1.346 3-3v-10c0-1.654-1.346-3-3-3h-12c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h.719l-.379 1.516c-.149.602-.017 1.228.365 1.716s.956.768 1.576.768h2.719v10h4.051c-.018.333-.051.662-.051 1s.033.667.051 1h-4.051v8h-5c-1.654 0-3 1.346-3 3v16c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-16c0-.151-.023-.296-.045-.441 1.63 2.116 3.68 3.89 6.045 5.168v4.457c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.402-2-2.816v-3.537c1.873.746 3.891 1.192 6 1.302v6.235c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.402-2-2.816v-6.235c1.378-.072 2.715-.288 4-.639v.874c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.402-2-2.816v-1.537c3.203-1.275 5.972-3.396 8.045-6.088-.022.145-.045.29-.045.441v16c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-16c0-1.654-1.346-3-3-3zm-22-32c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm-14-2c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm-20-4h12c.552 0 1 .449 1 1v7h-14v-7c0-.551.448-1 1-1zm-1 11v-1h14v1c0 .551-.448 1-1 1h-12c-.552 0-1-.449-1-1zm3.28 5 .5-2h6.439l.499 2zm17.72 38c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm14-2c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm23-11v1h-12v-1c0-.551.448-1 1-1h10c.552 0 1 .449 1 1zm-12 3h12v10h-12zm4-18h-2.261c-.539-3.376-1.951-6.462-4.025-9h6.286zm-6-25c0-.551.448-1 1-1h10c.552 0 1 .449 1 1v9h-12zm-1.9 13.2 1.65-2.2h12.5l1.649 2.199c.066.088.101.192.101.301 0 .276-.225.5-.5.5h-7.5-7.5c-.275 0-.5-.224-.5-.5 0-.109.035-.213.1-.3zm-13.1-14.2c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm-17 57c0 .551-.448 1-1 1h-10c-.552 0-1-.449-1-1v-16c0-.551.448-1 1-1h10c.552 0 1 .449 1 1zm-1-19h-3v-6h2.261c.369 2.309 1.146 4.48 2.27 6.434-.45-.269-.97-.434-1.531-.434zm18 20c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm0-12c-9.374 0-17-7.626-17-17s7.626-17 17-17 17 7.626 17 17-7.626 17-17 17zm18.739-14h2.261v6h-3c-.561 0-1.081.165-1.531.434 1.124-1.954 1.902-4.125 2.27-6.434zm9.261 26h-10c-.552 0-1-.449-1-1v-1h12v1c0 .551-.448 1-1 1z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        Security <br /> System
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum has been the industry text ever since then.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="single-modularize-feature-item">
                  <div className="icon">
                    <svg
                      id="Capa_1"
                      fill="#b882fc"
                      enable-background="new 0 0 512 512"
                      height="60px"
                      viewBox="0 0 512 512"
                      width="60px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <g>
                          <path d="m238 371.49c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h36c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z" />
                          <path d="m90 255.034h49.576c3.028 7.881 10.657 13.5 19.591 13.5s16.563-5.619 19.591-13.5h9.909c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-9.909c-3.028-7.881-10.657-13.5-19.591-13.5s-16.563 5.619-19.591 13.5h-49.576c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5zm69.167-13.5c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                          <path d="m90 212.034h9.576c3.028 7.881 10.657 13.5 19.591 13.5s16.563-5.619 19.591-13.5h49.909c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-49.909c-3.028-7.881-10.657-13.5-19.591-13.5s-16.563 5.619-19.591 13.5h-9.576c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5zm29.167-13.5c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                          <circle cx="190.167" cy="135.534" r="7.5" />
                          <circle cx="169.5" cy="135.534" r="7.5" />
                          <circle cx="148.833" cy="135.534" r="7.5" />
                          <path d="m489.5 50.483h-2.809l2.095-2.095c6.275-6.275 6.275-16.486 0-22.761l-16.418-16.418c-6.275-6.274-16.485-6.274-22.761 0l-41.271 41.273h-385.836c-12.406 0-22.5 10.093-22.5 22.5v311.464c0 15.164 12.336 27.5 27.5 27.5h177.645v53.055h-36.145c-9.649 0-17.5 7.851-17.5 17.5v7.494c0 9.649 7.851 17.5 17.5 17.5h174c9.649 0 17.5-7.851 17.5-17.5v-7.494c0-9.649-7.851-17.5-17.5-17.5h-36.145v-53.055h80.145c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-359.5c-6.893 0-12.5-5.607-12.5-12.5v-22.2h482v22.2c0 6.893-5.607 12.5-12.5 12.5h-62.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h62.5c15.164 0 27.5-12.336 27.5-27.5v-311.463c0-12.406-10.094-22.5-22.5-22.5zm-146.5 429.519c1.379 0 2.5 1.122 2.5 2.5v7.494c0 1.378-1.121 2.5-2.5 2.5h-174c-1.379 0-2.5-1.122-2.5-2.5v-7.494c0-1.378 1.121-2.5 2.5-2.5zm-122.855-68.054h71.711v53.055h-71.711zm240.069-392.131c.428-.427 1.122-.426 1.548 0l16.417 16.417c.427.427.427 1.122 0 1.548l-15.665 15.665-17.965-17.965zm-26.272 26.272 17.964 17.965-5.231 5.231-17.964-17.965zm-15.838 15.838 17.965 17.965-88.751 88.751-17.965-17.965zm-11.104 68.569c10.201 0 18.5 8.299 18.5 18.5s-8.299 18.5-18.5 18.5-18.5-8.299-18.5-18.5c0-.119.016-.234.018-.353l18.132-18.129c.117-.002.232-.018.35-.018zm-72.706 46.337-22.197 9.066 9.066-22.197zm162.706 170.415h-482v-274.265c0-4.135 3.364-7.5 7.5-7.5h370.837l-11.436 11.436h-254.901c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h239.902l-52.901 52.904c-1.495 1.508-2.664 3.268-3.469 5.238l-16.753 41.016c-1.537 3.767-.671 8.06 2.206 10.936 1.931 1.931 4.499 2.955 7.118 2.955 1.284 0 2.579-.246 3.818-.751l41.015-16.752c1.914-.782 3.626-1.914 5.106-3.349l22.816-22.813c4.915 12.399 17.015 21.194 31.143 21.194 18.472 0 33.5-15.028 33.5-33.5 0-14.126-8.793-26.225-21.19-31.141l25.939-25.936h25.314v228.893h-3.975l-27.18-47.077c-2.07-3.588-6.66-4.817-10.245-2.745-3.587 2.071-4.816 6.658-2.745 10.245l22.85 39.577h-104.77l-11.237-19.463 52.385-90.733 23.271 40.308c2.072 3.587 6.659 4.817 10.245 2.745 3.587-2.071 4.816-6.658 2.745-10.245l-24.827-43.001c-2.387-4.134-6.661-6.602-11.435-6.602s-9.049 2.468-11.436 6.602l-49.61 85.927-63.654-110.251c-2.387-4.134-6.661-6.602-11.436-6.602-4.773 0-9.048 2.468-11.435 6.602l-16.911 29.291v-80.393c0-9.649-7.851-17.5-17.5-17.5h-128.664c-9.649 0-17.5 7.851-17.5 17.5v164c0 6.893 5.607 12.5 12.5 12.5h95.679l-11.152 19.316h-113.09v-228.895h50.563c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-53.063c-6.893 0-12.5 5.607-12.5 12.5v233.893c0 6.893 5.607 12.5 12.5 12.5h434.127c6.893 0 12.5-5.607 12.5-12.5v-233.893c0-6.893-5.607-12.5-12.5-12.5h-12.812l11.438-11.436h17.81c4.136 0 7.5 3.365 7.5 7.5zm-290.833-180.714v119.962h-133.667v-119.962zm-133.667-15v-26.538c0-1.378 1.121-2.5 2.5-2.5h128.667c1.379 0 2.5 1.122 2.5 2.5v26.538zm110.5 149.962h25.667c6.893 0 12.5-5.607 12.5-12.5v-15.887c1.876.9 3.965 1.387 6.153 1.387 5.12 0 9.704-2.648 12.263-7.081l12.764-22.107c.386-.668.976-.809 1.401-.809.427 0 1.017.141 1.402.809l7.869 13.629c2.56 4.435 7.145 7.082 12.266 7.082 5.12 0 9.705-2.647 12.264-7.081l1.954-3.384 37.676 65.257h-155.331zm38.167-53.493v-12.614l28.347-49.097 31.328 54.262-5.558 9.626-7.144-12.373c-3.004-5.203-8.384-8.309-14.393-8.309-6.008 0-11.388 3.106-14.392 8.309l-12.038 20.85z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        UI/UX <br /> Designing
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum has been the industry text ever since then.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="single-modularize-feature-item">
                  <div className="icon">
                    <svg
                      fill="#b882fc"
                      id="Layer_5"
                      enable-background="new 0 0 62 62"
                      height="60px"
                      viewBox="0 0 62 62"
                      width="60px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="m4 4h2v4h-2z" />
                        <path d="m8 4h2v4h-2z" />
                        <path d="m4 24h2v4h-2z" />
                        <path d="m8 24h2v4h-2z" />
                        <path d="m14 14h2v4h-2z" />
                        <path d="m18 14h2v4h-2z" />
                        <path d="m10 48h6v2h-6z" />
                        <path d="m10 52h6v2h-6z" />
                        <path d="m10 56h6v2h-6z" />
                        <path d="m28 48h6v2h-6z" />
                        <path d="m28 52h6v2h-6z" />
                        <path d="m28 56h6v2h-6z" />
                        <path d="m46 52h6v2h-6z" />
                        <path d="m46 56h6v2h-6z" />
                        <path d="m52.364 9.537-.18-.612-.631-.095c-2.525-.378-6.232-.83-9.553-.83s-7.028.452-9.553.831l-.631.095-.18.612c-.752 2.557-2.589 4.639-5.038 5.712l-.598.261v.925c0 11.263 5.326 22.091 14.247 28.967.5.385 1.123.597 1.753.597s1.252-.212 1.753-.597c8.921-6.876 14.247-17.704 14.247-28.966v-.925l-.599-.262c-2.448-1.074-4.285-3.156-5.037-5.713zm-9.831 34.281c-.302.231-.764.233-1.066 0-8.337-6.426-13.353-16.505-13.465-27.022 2.497-1.277 4.405-3.443 5.352-6.078 2.42-.346 5.704-.718 8.646-.718s6.226.372 8.646.719c.946 2.634 2.854 4.801 5.352 6.078-.112 10.516-5.128 20.596-13.465 27.021z" />
                        <path d="m62 12h-1c-2.757 0-5-2.243-5-5 0-.177.01-.352.028-.524l.095-.91-.898-.175c-.291-.057-7.198-1.391-13.225-1.391s-12.934 1.334-13.225 1.391l-.898.175.095.91c.018.172.028.347.028.524 0 1.852-1.025 3.454-2.525 4.318-.077-.114-.158-.223-.25-.324.476-.531.775-1.226.775-1.994v-6c0-1.654-1.346-3-3-3h-20c-1.654 0-3 1.346-3 3v6c0 .771.301 1.468.78 2-.479.532-.78 1.229-.78 2v6c0 .771.301 1.468.78 2-.479.532-.78 1.229-.78 2v6c0 1.654 1.346 3 3 3h9v12h-6v18h14v-8h4v8h14v-8h4v8h14v-18h-4.823c6.862-7.441 10.823-17.339 10.823-27.563zm-60 7v-6c0-.551.449-1 1-1h19v4.437c0 1.194.071 2.381.177 3.563h-19.177c-.551 0-1-.449-1-1zm0-16c0-.551.449-1 1-1h20c.551 0 1 .449 1 1v6c0 .551-.449 1-1 1h-20c-.551 0-1-.449-1-1zm0 26v-6c0-.551.449-1 1-1h19.407c.33 2.345.865 4.649 1.593 6.889v.111c0 .551-.449 1-1 1h-20c-.551 0-1-.449-1-1zm16 31h-10v-14h10zm2-8v-8h-6v-12h9c.713 0 1.361-.261 1.876-.678 1.846 4.659 4.532 8.975 7.947 12.678h-8.823v8zm6 8v-14h8.814c.391.369.78.74 1.186 1.093v12.907zm12-8v-3.303c1.162.834 2.569 1.303 4 1.303v2zm16 8h-10v-10.315c.715-.218 1.39-.551 2-.989v1.304h6v-2h-5.108c.792-.639 1.557-1.306 2.294-2h4.814zm6-43.563c0 11.878-5.617 23.299-15.026 30.551-1.695 1.307-4.252 1.307-5.947 0-9.41-7.253-15.027-18.673-15.027-30.551v-2.508c3.323-.478 5.9-3.298 5.997-6.728 2.028-.354 7.367-1.201 12.003-1.201s9.975.847 12.003 1.201c.097 3.43 2.674 6.25 5.997 6.728z" />
                        <path d="m37 31.586-2.293-2.293-1.414 1.414 3.707 3.707 15.707-15.707-1.414-1.414z" />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        Data <br /> Analysis
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum has been the industry text ever since then.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="single-modularize-feature-item">
                  <div className="icon">
                    <svg
                      id="Layer_1_1_"
                      enable-background="new 0 0 64 64"
                      height="60px"
                      viewBox="0 0 64 64"
                      width="60px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#b882fc"
                        d="m16 32c0 8.822 7.178 16 16 16s16-7.178 16-16-7.178-16-16-16-16 7.178-16 16zm8.485-11.793 1.62 3.24c.097.193.254.351.447.447l3.034 1.517-2.152 3.589h-3.434c-.431 0-.812.275-.949.684l-.772 2.316h-4.279c0-4.953 2.593-9.304 6.485-11.793zm7.515 22.793v3c-4.906 0-9.223-2.541-11.723-6.371l4.543-1.514 3.58 2.685c.365.273.869.266 1.225-.019l4.301-3.441 2.074 2.074v1.805l-3.243.811c-.445.111-.757.511-.757.97zm14-11c0 2.206-.527 4.287-1.44 6.146l-2.273-2.273 1.545-2.318c.156-.234.207-.524.138-.797l-1-4c-.067-.27-.245-.5-.489-.634-.245-.135-.534-.16-.798-.072l-2.316.772-2.282-3.042.696-2.782h4.928c2.05 2.436 3.291 5.574 3.291 9zm-9-11c-.459 0-.859.312-.97.757l-1 4c-.073.292-.01.602.17.843l3 4c.258.344.708.485 1.116.349l1.976-.659.63 2.523-1.754 2.632c-.265.396-.212.925.125 1.262l3.228 3.228c-2.168 3.137-5.582 5.338-9.521 5.905v-2.06l3.243-.811c.445-.11.757-.51.757-.969v-3c0-.265-.105-.52-.293-.707l-3-3c-.36-.361-.934-.393-1.332-.074l-4.395 3.516-3.38-2.535c-.262-.198-.604-.252-.917-.149l-5.387 1.796c-.555-1.201-.941-2.492-1.137-3.847h4.841c.431 0 .812-.275.949-.684l.772-2.316h3.279c.351 0 .677-.184.857-.485l3-5c.144-.239.181-.527.103-.794s-.264-.49-.513-.615l-3.702-1.851-1.501-3.003c1.758-.797 3.703-1.252 5.756-1.252 3.257 0 6.251 1.128 8.632 3z"
                      />
                      <path
                        fill="#b882fc"
                        d="m59 29c-1.302 0-2.402.839-2.816 2h-6.184v2h6.184c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z"
                      />
                      <path
                        fill="#b882fc"
                        d="m59 49c0-1.654-1.346-3-3-3-1.302 0-2.402.839-2.816 2h-1.507l-1.749-4.372c-.152-.379-.519-.628-.928-.628h-3v2h2.323l1.749 4.372c.152.379.519.628.928.628h2.184c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3zm-4 0c0-.551.449-1 1-1s1 .449 1 1-.449 1-1 1-1-.449-1-1z"
                      />
                      <path
                        fill="#b882fc"
                        d="m48 61c1.654 0 3-1.346 3-3s-1.346-3-3-3c-1.302 0-2.402.839-2.816 2h-2.43l-1.793-6.275c-.122-.429-.515-.725-.961-.725h-5v2h4.246l1.793 6.275c.122.429.515.725.961.725h3.184c.414 1.161 1.514 2 2.816 2zm0-4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
                      />
                      <path
                        fill="#b882fc"
                        d="m39.895 13.447 2.723-5.447h2.554c.421 1.19 1.557 2 2.827 2 .149 0 .3-.011.452-.034.792-.121 1.49-.542 1.965-1.188s.67-1.438.55-2.229c-.249-1.635-1.779-2.759-3.417-2.516-.792.121-1.49.542-1.965 1.188-.177.241-.301.506-.399.779h-3.185c-.379 0-.725.214-.895.553l-2.723 5.447h-3.382v2h4c.379 0 .725-.214.895-.553zm7.299-7.04c.159-.215.391-.356.655-.396.051-.008.101-.011.151-.011.486 0 .914.355.989.85.04.264-.025.528-.183.743-.159.215-.391.356-.655.396-.538.085-1.056-.293-1.139-.839-.041-.264.024-.528.182-.743z"
                      />
                      <path
                        fill="#b882fc"
                        d="m54.184 17c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3s-1.346-3-3-3c-1.302 0-2.402.839-2.816 2h-4.184c-.334 0-.646.167-.832.445l-1.703 2.555h-2.465v2h3c.334 0 .646-.167.832-.445l1.703-2.555zm2.816-2c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
                      />
                      <path
                        fill="#b882fc"
                        d="m3 27c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h2.464c.25 1.328.604 2.646 1.058 3.937l-2.137 1.233c-.479.276-.642.888-.366 1.366l4 6.928c.276.478.885.642 1.366.366l2.141-1.236c.886 1.029 1.85 1.994 2.879 2.879l-1.236 2.141c-.276.479-.112 1.09.366 1.366l6.928 4c.477.275 1.089.111 1.366-.366l1.233-2.137c1.29.454 2.608.808 3.937 1.058v2.465c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-10c0-.552-.448-1-1-1-9.925 0-18-8.075-18-18s8.075-18 18-18c.552 0 1-.448 1-1v-10c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v2.464c-1.328.25-2.646.604-3.937 1.058l-1.232-2.137c-.277-.479-.889-.643-1.366-.366l-6.928 4c-.479.276-.642.888-.366 1.366l1.236 2.141c-1.029.886-1.994 1.85-2.879 2.879l-2.142-1.235c-.481-.276-1.09-.112-1.366.366l-4 6.928c-.276.478-.112 1.09.366 1.366l2.137 1.233c-.454 1.291-.808 2.609-1.058 3.937zm4.295 1.153c.271-1.75.738-3.491 1.39-5.172.178-.46-.005-.981-.433-1.228l-2-1.155 3-5.196 2.004 1.157c.427.246.969.144 1.278-.238 1.122-1.391 2.396-2.665 3.787-3.787.383-.309.484-.852.238-1.278l-1.157-2.004 5.196-3 1.155 2c.247.427.767.609 1.227.433 1.682-.652 3.422-1.119 5.172-1.39.488-.075.848-.495.848-.988v-2.307h2v8.025c-10.565.522-19 9.282-19 19.975s8.435 19.453 19 19.975v8.025h-2v-2.307c0-.493-.36-.913-.847-.988-1.75-.271-3.491-.738-5.172-1.39-.46-.177-.98.005-1.228.433l-1.155 2-5.196-3 1.157-2.004c.246-.427.145-.969-.238-1.278-1.391-1.122-2.665-2.396-3.787-3.787-.31-.384-.852-.485-1.278-.238l-2.004 1.157-3-5.196 2-1.155c.427-.247.611-.768.433-1.227-.652-1.682-1.119-3.422-1.39-5.172-.075-.488-.495-.848-.988-.848h-2.307v-6h2.307c.493 0 .913-.36.988-.847z"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        Digital <br /> Marketing
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum has been the industry text ever since then.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Our Completed Projects */}

      <section className="modularize-project-area pt-115 ">
        <div className="container">
          <div className="row align-items-center mb-55">
            <div className="col-lg-6">
              <div className="section-title">
                <span>Our Completed Projects</span>
                <h4 className="title">Improve & Enhance Our Tech Projects</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title pl-100">
                <p>
                  There are many variations of passages of available but
                  majority have suffered alteration in some form, by humou or
                  randomised words which don't look even slightly believable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pl-160 pr-160">
          <div className="row modularize-project-slide">
            <Slider {...serviceSettings}>
              <div className="col-lg-3">
                <div className="single-project-item">
                  <img src="assets/images/project-1.jpg" alt="" />
                  <div className="single-project-overlay">
                    <h4 className="title">Tech Solutions</h4>
                    <span>DESIGN / IDEAS</span>
                    <a href="#">
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-project-item">
                  <img src="assets/images/project-2.jpg" alt="" />
                  <div className="single-project-overlay">
                    <h4 className="title">Smart Visions</h4>
                    <span>DESIGN / IDEAS</span>
                    <a href="#">
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-project-item">
                  <img src="assets/images/project-3.jpg" alt="" />
                  <div className="single-project-overlay">
                    <h4 className="title">Platform Integration</h4>
                    <span>DESIGN / IDEAS</span>
                    <a href="#">
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-project-item">
                  <img src="assets/images/project-4.jpg" alt="" />
                  <div className="single-project-overlay">
                    <h4 className="title">Web Development</h4>
                    <span>DESIGN / IDEAS</span>
                    <a href="#">
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-project-item">
                  <img src="assets/images/project-2.jpg" alt="" />
                  <div className="single-project-overlay">
                    <h4 className="title">Smart Visions</h4>
                    <span>DESIGN / IDEAS</span>
                    <a href="#">
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Our valuable Clients */}

      {/* <div className="modularize-valuable-clients">
        <div className="modularize-clients-area">
          <div className="modularize-clients">
            <span>Our Valuable Clients!</span>
          </div>
          <div className="container">
            <div className="row modularize-clients-area-slide slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: "1",
                    width: "4080px",
                    transform: "translate3d(-1200px, 0px, 0px)",
                  }}
                >
                  <div
                    className="col-lg-3 slick-slide slick-cloned"
                    tabindex="-1"
                    style={{ width: "240px" }}
                    data-slick-index="-5"
                    aria-hidden="true"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>

                  <div
                    className="col-lg-3 slick-slide slick-cloned"
                    tabindex="-1"
                    style={{ width: "240px" }}
                    data-slick-index="-4"
                    aria-hidden="true"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>

                  <div
                    className="col-lg-3 slick-slide slick-cloned"
                    tabindex="-1"
                    style={{ width: "240px" }}
                    data-slick-index="-3"
                    aria-hidden="true"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>

                  <div
                    className="col-lg-3 slick-slide slick-cloned"
                    tabindex="-1"
                    style={{ width: "240px" }}
                    data-slick-index="-2"
                    aria-hidden="true"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>

                  <div
                    className="col-lg-3 slick-slide slick-cloned"
                    tabindex="-1"
                    style={{ width: "240px" }}
                    data-slick-index="-1"
                    aria-hidden="true"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>

                  <div
                    className="col-lg-3 slick-slide slick-current slick-active"
                    tabindex="0"
                    style={{ width: "240px" }}
                    data-slick-index="0"
                    aria-hidden="false"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>

                  <div
                    className="col-lg-3 slick-slide slick-active"
                    tabindex="0"
                    style={{ width: "240px" }}
                    data-slick-index="1"
                    aria-hidden="false"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>

                  <div
                    className="col-lg-3 slick-slide slick-active"
                    tabindex="0"
                    style={{ width: "240px" }}
                    data-slick-index="2"
                    aria-hidden="false"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>

                  <div
                    className="col-lg-3 slick-slide slick-active"
                    tabindex="0"
                    style={{ width: "240px" }}
                    data-slick-index="3"
                    aria-hidden="false"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>

                  <div
                    className="col-lg-3 slick-slide slick-active"
                    tabindex="0"
                    style={{ width: "240px" }}
                    data-slick-index="8"
                    aria-hidden="false"
                  >
                    <div className="modularize-clients-area-item">
                      <img src="assets/images/brand-logo.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row modularize-sponser-slide">
            <Slider {...ourValiableClients}>
              <div class="col-lg-3">
                <div class="modularize-sponser-item">
                  <img src="assets/images/brand-logo.png" alt="" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="modularize-sponser-item">
                  <img src="assets/images/brand-logo.png" alt="" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="modularize-sponser-item">
                  <img src="assets/images/brand-logo.png" alt="" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="modularize-sponser-item">
                  <img src="assets/images/brand-logo.png" alt="" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="modularize-sponser-item">
                  <img src="assets/images/brand-logo.png" alt="" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="modularize-sponser-item">
                  <img src="assets/images/brand-logo.png" alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div> */}

      {/* We’re Ready Develop Your Site! */}

      <div className="modularize-cta-area pt-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="modularize-cta-box animated wow fadeIn"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <div className="row">
                  <div className="col-lg-3">
                    <div className="cta-thumb">
                      <img src="assets/images/cta-thumb.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="cta-content">
                      <h2 className="title">We’re Ready Develop Your Site!</h2>
                      <div className="row align-items-center">
                        <div className="col-lg-8">
                          <ul>
                            <li>
                              <i className="fas fa-check-circle"></i> Exploring
                              version oflorem veritatis proin
                            </li>
                            <li>
                              <i className="fas fa-check-circle"></i> Auctor
                              aliquet aenean simply free text veritatis quis
                            </li>
                            <li>
                              <i className="fas fa-check-circle"></i> Consequat
                              ipsum nec lorem sagittis sem nibh.
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <a href="#" className="main-btn ml-30">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Valuable Clients  */}

      <div className="modularize-valuable-clients">
        <div class="modularize-sponser-area modularize-sponser-about-area">
          <div className="modularize-clients mb-3">
            <span>Our Valuable Clients!</span>
          </div>
          <div class="container">
            <div class="row modularize-sponser-slide">
              <Slider {...ourValiableClients}>
                <div class="col-lg-3">
                  <div class="modularize-sponser-item">
                    <img src="assets/images/brand-logo.png" alt="" />
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="modularize-sponser-item">
                    <img src="assets/images/brand-logo.png" alt="" />
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="modularize-sponser-item">
                    <img src="assets/images/brand-logo.png" alt="" />
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="modularize-sponser-item">
                    <img src="assets/images/brand-logo.png" alt="" />
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="modularize-sponser-item">
                    <img src="assets/images/brand-logo.png" alt="" />
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="modularize-sponser-item">
                    <img src="assets/images/brand-logo.png" alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Starts  */}

      <section class="modularize-testimonial-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center mb-55">
                <span>Client Testimonials</span>
                <h3 class="title">What They’re Talking?</h3>
              </div>
            </div>
          </div>
          <div class="row modularize-testimonial-slide">
            <Slider {...testimonialSettings}>
              <div class="col-lg-6">
                <div class="single-testimonial-box">
                  <div class="single-testimonial-user">
                    <div class="thumb">
                      <img src="assets/images/testimonial-thumb-1.png" alt="" />
                    </div>
                    <div class="user-content">
                      <h5 class="title">Mike Hardson</h5>
                      <span>Senior Designer</span>
                      {/* <img src="assets/images/testimonial-shape.png" alt="" /> */}
                    </div>
                  </div>
                  <div class="single-testimonial-item">
                    <ul>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                    </ul>
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s refresing to get such a
                      personal touch. Duis aute lorem ipsum is simply free text
                      reprehen.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single-testimonial-box">
                  <div class="single-testimonial-user">
                    <div class="thumb">
                      <img src="assets/images/testimonial-thumb-2.png" alt="" />
                    </div>
                    <div class="user-content">
                      <h5 class="title">Aleesha Smith</h5>
                      <span>Senior Developer</span>
                      {/* <img src="assets/images/testimonial-shape.png" alt="" /> */}
                    </div>
                  </div>
                  <div class="single-testimonial-item">
                    <ul>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                    </ul>
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s refresing to get such a
                      personal touch. Duis aute lorem ipsum is simply free text
                      reprehen.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single-testimonial-box">
                  <div class="single-testimonial-user">
                    <div class="thumb">
                      <img src="assets/images/testimonial-thumb-1.png" alt="" />
                    </div>
                    <div class="user-content">
                      <h5 class="title">Mike Hardson</h5>
                      <span>Senior Designer</span>
                      {/* <img src="assets/images/testimonial-shape.png" alt="" /> */}
                    </div>
                  </div>
                  <div class="single-testimonial-item">
                    <ul>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                    </ul>
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s refresing to get such a
                      personal touch. Duis aute lorem ipsum is simply free text
                      reprehen.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
