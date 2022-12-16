<template>
  <ion-header class="header">
    <a href="/menu/search-places/"
      ><ion-img class="seta" src="../../assets/seta.png"></ion-img
    ></a>
    <ion-title class="textToolbar"> {{ place.nome }} </ion-title>
  </ion-header>

  <ion-content>
    <iframe
      :src="place.imageSrc"
      width="100%"
      height="400"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      style="border: 0; padding: 1rem"
    >
    </iframe>

    <div class="box_fast-detail">
      <img
        class="box_fast-detail__img"
        :src="place.imageUri[0]"
        alt="imagem do local"
      />
      <span class="box_fast-titule-categories">{{ place.categoria[0] }}</span>
      <ion-text class="">
        {{ place?.descricao }}
      </ion-text>
    </div>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonHeader } from "@ionic/vue";
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
        imageUri: "",
        imageSrc: "",
        descricao: "",
        categoria: "",
        nome: "",
      },
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
          this.place.imageSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAyoxyRxHbWpaUVYNILliXtClPDGk_NViU&q=${this.place.longitude},${this.place.latitude}&zoom=16`;
        });
    },
  },
});
</script>

<style scoped>
.textToolbar {
  font-size: 1.3rem;
  font-weight: 700;
}

ion-content {
  --background: #ffffff;
}
.box_fast-description {
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: italic;
  font-weight: 400;
  margin-right: 0.5rem;

  position: relative;
}

.box_fast-detail {
  margin: 0 1rem;

  display: flex;
  position: relative;

  color: white;

  background-color: orange;
  border-radius: 0.5rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 1rem;
  padding: 0.5rem;

  height: 10rem;
}

.box_fast-titule-categories {
  position: absolute;

  background-color: orange;
  border-radius: 0.8rem;
  border: 2px solid white;

  margin: 1rem 0 1rem 0.7rem;
  padding: 0rem 0.7rem;

  font-style: italic;

  bottom: 0;
}

.box_fast-detail__img {
  border-radius: 0.6rem;

  margin-right: 1rem;
  width: 45%;
  height: 100%;
}

.header {
  margin: 0.5rem 0 1rem 0;
  display: flex;
  padding-left: 1rem;
}
</style>
