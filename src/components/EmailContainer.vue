<template>
  <div class="email-container">
    <div class="overlap-group1">
      <img
        class="background-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/618a0d9a5ac643e10b1a70e8/releases/61a57488dd0b318d6e94a195/img/background-3@2x.svg"
      />
      <input class="email abeezee-normal-white-36px" name="email" placeholder="Email" type="email" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailContainer",
};
</script>

<style>
.email-container {
  align-items: flex-start;
  display: flex;
  height: 85px;
  left: 358px;
  min-width: 452px;
  position: absolute;
  top: 325px;
}

.overlap-group1 {
  height: 85px;
  position: relative;
  width: 450px;
}

.background-2 {
  height: 85px;
  left: 0;
  position: absolute;
  top: 0;
  width: 450px;
}

.email {
  background-color: transparent;
  border: 0;
  height: 68px;
  left: 37px;
  letter-spacing: 0;
  padding: 0;
  position: absolute;
  top: 9px;
  width: 383px;
}

.email::placeholder {
  color: #ffffff99;
}
</style>
