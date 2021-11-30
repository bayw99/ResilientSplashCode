<template>
  <div class="container-center-horizontal">
    <form class="signin screen" name="form2" action="form2" method="post">
      <div class="overlap-group2" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
        <img class="background" :src="background" /><password-container />
        <email-container />
        <img class="hello" :src="hello" /><img class="sign-in" :src="signIn" /><img
          class="resilient-splash-rgb-1"
          :src="resilientSplashRgb1"
        /><a href="javascript:SubmitForm('form2')"><img class="new-user-button" :src="newuserbutton" /></a
        ><a href="javascript:SubmitForm('form2')"><img class="sign-in-button" :src="signinbutton" /></a>
      </div>
    </form>
  </div>
</template>

<script>
import PasswordContainer from "./PasswordContainer";
import EmailContainer from "./EmailContainer";
export default {
  name: "SignIn",
  components: {
    PasswordContainer,
    EmailContainer,
  },
  props: ["overlapGroup2", "background", "hello", "signIn", "resilientSplashRgb1", "newuserbutton", "signinbutton"],
};
</script>

<style>
.signin {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 700px;
  overflow: hidden;
  width: 1152px;
}

.overlap-group2 {
  background-size: 100% 100%;
  height: 691px;
  margin-top: 9px;
  position: relative;
  width: 1152px;
}

.background {
  height: 691px;
  left: 304px;
  position: absolute;
  top: 0;
  width: 571px;
}

.hello {
  height: 37px;
  left: 413px;
  position: absolute;
  top: 204px;
  width: 113px;
}

.sign-in {
  height: 1px;
  left: 508px;
  position: absolute;
  top: 266px;
  width: 1px;
}

.resilient-splash-rgb-1 {
  height: 195px;
  left: 377px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 433px;
}

.new-user-button {
  cursor: pointer;
  height: 57px;
  left: 364px;
  position: absolute;
  top: 541px;
  transition: all 0.2s ease;
  width: 195px;
}

.new-user-button:hover,
.sign-in-button:hover {
  transform: scale(1.1);
}

.sign-in-button {
  cursor: pointer;
  height: 57px;
  left: 619px;
  position: absolute;
  top: 541px;
  transition: all 0.2s ease;
  width: 195px;
}
</style>
