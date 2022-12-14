<template>
  <ion-header class="header">
    <ion-img class="seta" src="../../assets/seta.png"></ion-img>
    <ion-title class="textToolbar"> {{ place.nome }} </ion-title>
  </ion-header>

  <img :src="place.imageUri[0]" class="principal-img" alt="Imagem Local" />
  <ion-row class="box-description">
    <h5 class="acessivel" v-if="place.acessibilidade">
      Local é acessível para pessoas com deficiencia
    </h5>
    <h5 class="inacessivel" v-else>
      Local não possui acessibilidade para pessoas com deficiencia
    </h5>
    <p>
      {{ place.descricao }}
    </p>
    <a :href="`/menu/in-map/` + place.id"
      ><ion-icon name="location-outline"></ion-icon> ></a
    >
  </ion-row>

  <ion-row> </ion-row>

  <ion-content>
    <ion-card class="ionCardMaster">
      <swiper
        :slidesPerView="2"
        :spaceBetween="1"
        :slidesPerGroup="1"
        :loopFillGroupWithBlank="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <ion-card>
            <img class="imgGrid" :src="place.imageUri[0]" />
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <img class="imgGrid" :src="place.imageUri[1]" />
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <img class="imgGrid" :src="place.imageUri[2]" />
          </ion-card>
        </swiper-slide>
      </swiper>
    </ion-card>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonImg, IonContent, IonHeader, IonTitle, IonCard } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { RouterView } from "vue-router";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import api from "@/services/api.service";

//import "./style.css";
import { Pagination, Navigation } from "swiper";

export default defineComponent({
  $route: RouterView,
  name: "DetailsPage",
  components: {
    IonImg,
    IonHeader,
    IonContent,
    Swiper,
    SwiperSlide,
    IonTitle,
    IonCard,
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
          console.log(this.place);
        });
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data: function () {
    return {
      place: {
        imageUri: "",
        descricao: "",
        categoria: "",
        nome: "",
        id: "",
        cidade: "",
        rua: "",
        estado: "",
        bairro: "",
        acessibilidade: "",
      },
    };
  },
});
</script>

<style scoped>
.principal-img {
  width: 30rem;
  height: 15rem;
}
.header {
  margin: 0.5rem 0 1rem 0;
  display: flex;
  padding-left: 1rem;
}

.box-description {
  margin: 1rem;
  text-align: justify;
}

.box-description .acessivel,
.box-description .inacessivel {
  text-align: center;
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.box-description .acessivel {
  border: 2px solid green;
}

.box-description .inacessivel {
  border: 2px solid red;
}

.ionCardMaster {
  margin-top: -0.5em;
  --background: #fff;
  padding-top: 0em;
}

.textToolbar {
  font-size: 1.3rem;
  font-weight: 700;
}
.seta {
  width: 50px;
  height: 50px;
}

ion-content {
  --background: #fff;
}

ion-card {
  --background-color: #fff;
}

ion-toolbar {
  --background: #fff;
}

swiper-slide {
  box-sizing: border-box;

  position: relative;

  background-color: #e78500;
  border: 5px solid #e78500;
}

.imgGrid {
  box-sizing: border-box;
  border-radius: 2px;
  /* Inside auto layout */
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
</style>
