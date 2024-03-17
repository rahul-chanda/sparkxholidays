import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/ionicons.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="/css/jquery.timepicker.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/icomoon.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" />
            <circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" />
          </svg>
        </div>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/jquery-migrate-3.0.1.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.easing.1.3.js"></script>
        <script src="/js/jquery.waypoints.min.js"></script>
        <script src="/js/jquery.stellar.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/aos.js"></script>
        <script src="/js/jquery.animateNumber.min.js"></script>
        <script src="/js/bootstrap-datepicker.js"></script>
        {/* <script src="/js/jquery.timepicker.min.html"></script> */}
        <script src="/js/scrollax.min.js"></script>
        {/* <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&amp;sensor=false"></script>
        <script src="js/google-map.js"></script> */}
        <script src="/js/main.js"></script>
      </body>
    </Html>
  )
}
