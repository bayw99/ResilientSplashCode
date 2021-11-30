import Vue from "vue";
import Router from "vue-router";
import SignIn from "./components/SignIn";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: SignIn,
      props: {
        overlapGroup2:
          "https://anima-uploads.s3.amazonaws.com/projects/618a0d9a5ac643e10b1a70e8/releases/61a57488dd0b318d6e94a195/img/background@1x.png",
        background:
          "https://anima-uploads.s3.amazonaws.com/projects/618a0d9a5ac643e10b1a70e8/releases/61a57488dd0b318d6e94a195/img/background-1@1x.png",
        hello:
          "https://anima-uploads.s3.amazonaws.com/projects/618a0d9a5ac643e10b1a70e8/releases/61a5702fcf9262dc19132d17/img/hello@1x.png",
        signIn:
          "https://anima-uploads.s3.amazonaws.com/projects/618a0d9a5ac643e10b1a70e8/releases/61a54ebfa105faad22b231b9/img/sign-in@1x.png",
        resilientSplashRgb1:
          "https://anima-uploads.s3.amazonaws.com/projects/618a0d9a5ac643e10b1a70e8/releases/61a54ebfa105faad22b231b9/img/resilient-splash-rgb-1-1@1x.png",
        newuserbutton:
          "https://anima-uploads.s3.amazonaws.com/projects/618a0d9a5ac643e10b1a70e8/releases/61a5702fcf9262dc19132d17/img/newuserbutton@1x.png",
        signinbutton:
          "https://anima-uploads.s3.amazonaws.com/projects/618a0d9a5ac643e10b1a70e8/releases/61a5702fcf9262dc19132d17/img/signinbutton@1x.png",
      },
    },
  ],
});
