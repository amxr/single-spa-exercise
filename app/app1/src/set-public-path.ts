import { setPublicPath } from "systemjs-webpack-interop";

//this sets __webpack_public_path__ dynamically to allow code splits work properly
setPublicPath("@verint/app1");