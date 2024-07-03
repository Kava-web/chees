import * as functions from "./files/functions.js";

import "../scss/style.scss";
import "./files/sliders.js";

import spoller from "./files/spoller.js";

import smoothScroll from "./files/smooth-scroll.js";
import Aos from "aos";

functions.mediaAdaptive();
functions.isWebp();

spoller();
smoothScroll();
Aos.init();