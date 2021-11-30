<template>
  <div class="password-container">
    <div class="overlap-group">
      <img
        class="background-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/618a0d9a5ac643e10b1a70e8/releases/61a57488dd0b318d6e94a195/img/background-2@2x.svg"
      />
      <input class="password abeezee-normal-white-36px" name="password" placeholder="Password" type="password" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordContainer",
};
</script>

<style>
.password-container {
  align-items: flex-start;
  display: flex;
  height: 85px;
  left: 358px;
  min-width: 452px;
  position: absolute;
  top: 426px;
}

.overlap-group {
  height: 85px;
  position: relative;
  width: 450px;
}

.background-1 {
  height: 85px;
  left: 0;
  position: absolute;
  top: 0;
  width: 450px;
}

.password {
  background-color: transparent;
  border: 0;
  height: 64px;
  left: 37px;
  letter-spacing: 0;
  padding: 0;
  position: absolute;
  top: 12px;
  width: 383px;
}

.password::placeholder {
  color: #ffffff99;
}
</style>
