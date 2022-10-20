<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-img class="conhece-header"
            src="../../assets/header-conhece-recife.png"
          ></ion-img>
      <div id="container">
        <div class="">
          <ion-img class="conhece-logo"
            src="../../assets/conhece-recife-logo.png"
            style=""
          ></ion-img>
          <ion-button href="/menu/"> VEM CONHECER! </ion-button>
        </div>
      </div>
          <ion-img class="conhece-footer"
            src="../../assets/footer-conhece-recife.png"
          ></ion-img>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonButton, IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonButton,
    IonImg,
  },
  data: function () {
    return {};
  },
  methods: {},
});
</script>

<style scoped>
ion-content {
  --background: #ffffff;
}

ion-button {
  --background: #e78500;
    width: 50%;
    height: 60px;
    font-weight: bold;
}
.conhece-header {
  width: 100%;
}
.conhece-footer{
  margin-top: 26%;
  width: 100%;
  height: 100%;
}
.style-internal {
  background: white;
  padding-bottom: 2rem;
}

.conhece-logo{
  width: 50%;
  padding-bottom: 20px;
  display: block;
  margin: 0px auto;  
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
