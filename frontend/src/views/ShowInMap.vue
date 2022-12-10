<template>
  <ion-header class="background-principal">
    <a href="/menu"
      ><ion-button class="background-none">
        <ion-img
          class="seta"
          src="../../assets/seta.png "
        ></ion-img></ion-button
    ></a>
  </ion-header>
  
  <ion-content>
    <iframe
      :src="place.imageSrc"
      width="100%"
      height="400"
      style="border: 0; padding: 2rem"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    >
    </iframe>
  </ion-content>

  RUAS E ETC
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonImg, IonContent, IonHeader } from "@ionic/vue";
import { RouterView } from "vue-router";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./style.css";

import { Pagination, Navigation } from "swiper";
import api from "@/services/api.service";

export default defineComponent({
  $route: RouterView,
  name: "DetailsPage",
  components: {
    IonImg,
    IonHeader,
    IonContent,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },

  data: function () {
    return {
      place: {
        longitude: null,
        latitude: null,
        imageUri: null,
        imageSrc: "",
      },
      key: process.env.API_KEY,
    };
  },
  created() {
    this.getPlace();
  },
  methods: {
    getPlace() {
      api
        .get(`http://localhost:3000/lugares/${this.$route.params.id}`)
        .then((result) => {
          this.place = result.data[0];
          this.place.imageSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=${this.place.longitude},${this.place.latitude}&zoom=15`;
        });
    },
  },
});
</script>

<style scoped>
.ion-padding {
  background-color: #f8fafe;
  text-emphasis-color: #f8fafe;
}

.ionCardMaster {
  margin-top: -0.5em;
  --background: #2f80ed;
  padding-top: 0em;
}

.background-principal {
  background-color: #2f80ed;
}

.background-none {
  background-color: none !important;
  box-shadow: none !important;
}

swiper-slide {
  box-sizing: border-box;

  position: relative;

  background-color: #e78500;
  border: 5px solid #e78500;
}

.toolbar {
  padding-bottom: 30px;
  padding-top: 30px;
}

.imgGrid2 {
  height: 25px;
  width: 22px;
  left: 168px;
  top: 453px;
  border-radius: 100%;
  margin-top: 0.8em;
  margin-right: 5px;
  margin-left: 5px;
}

.textTitleMain {
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  text-align: left;
  /* identical to box height, or 36px */
  margin-left: 0.5em;
  letter-spacing: 2px;

  color: #ffffff;
}

.imgGrid {
  box-sizing: border-box;
  border: 3px solid #db870f;
  border-radius: 13px;
  width: 75px;
  height: 75px;

  background: rgba(0, 0, 0, 0.2);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.imgGrid3 {
  box-sizing: border-box;
  border: 3px solid #db870f;
  border-radius: 13px;
  width: 141px;
  height: 108px;

  background: rgba(0, 0, 0, 0.2);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.imgCarrosel {
  box-sizing: border-box;
  border: 5px solid #db870f;
  border-radius: 5px;
}

.imgCarrosel3 {
  box-sizing: border-box;
  border: 2px solid #db870f;
  border-radius: 2px;
}

.cardSup {
  background-color: #2f80ed;
}

.cardSup3 {
  background-color: #2f80ed;
}

.seach {
  margin-top: 1%;

  color: hsl(0, 0%, 100%);
  margin-bottom: 1px;
  padding: 0%;

  margin-left: 5%;
  margin-right: 5%;

  width: 90%;
}

.grid {
  margin-top: -30px;
  padding: 1px;
}

.cardBot {
  color: #ffffff;
}

.colunaText {
  width: 172px;
  height: 27px;

  /* Header/H2 */
  margin-top: 10%;
  text-align: left;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  letter-spacing: 0.15px;

  color: #130a72;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.textTitleGrid {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 14.6923px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.22806px;
  text-align: left;
  color: #ffffff;
}

.textSubtitleMain {
  margin-top: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 14.6923px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  text-align: justify;
  color: #ffffff;
  line-height: 150%;
}

.textToolbar {
  color: #ffffff;
}

.textSubtitleGrid {
  text-align: justify;
  color: #ffffff;
  padding-left: 1;
  margin-left: 1;
}

ion-col {
  background-color: #525e04;
  border: solid 1px #2f80ed;
  padding: 2px;

  text-align: center;

  margin-top: 10%;

  box-sizing: border-box;

  width: 74px;
  height: 74px;
}
</style>
