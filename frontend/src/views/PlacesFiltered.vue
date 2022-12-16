<template>
  <ion-header class="ion-no-border">
    <a href="/menu">
      <ion-button class="botao-topo sem-fundo">
        <ion-img src="../../assets/seta.png "></ion-img>
      </ion-button>
    </a>
  </ion-header>

  <ion-content class="ion-padding">
    <swiper
      :slidesPerView="2"
      :spaceBetween="8"
      :slidesPerGroup="2"
      :pagination="{ clickable: false }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel" :src="places[0]?.imageUri[2]"> </ion-img>
        </ion-card>
      </swiper-slide>

      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel" :src="places[2]?.imageUri[1]"> </ion-img>
        </ion-card>
      </swiper-slide>

      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel" :src="places[0]?.imageUri[1]"> </ion-img>
        </ion-card>
      </swiper-slide>
    </swiper>

    <ion-grid>
      <ion-row>
        <ion-col
          v-for="categoria in categoriasQuery"
          :key="categoria.id"
          style="color: black"
          lines="none"
          size="3"
          class="itemCategoria"
        >
          <span>{{ categoria }}</span>
        </ion-col>
      </ion-row>

      <ion-row class="margin-text">
        <ion-item
          v-for="place of places"
          :key="place.id"
          style="color: black"
          class="sem-fundo item"
          lines="none"
        >
          <div>
            <img style="width: 8rem" :src="place.imageUri[1]" alt="" />
          </div>
        </ion-item>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonRow,
  IonCol,
  IonToggle,
  IonGrid,
  IonItem,
  IonButton,
  IonImg,
  IonCard,
  IonLabel,
} from "@ionic/vue";
import api from "@/services/api.service";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swiper, { Pagination, Navigation } from "swiper";
import { RouterView } from "vue-router";

export default defineComponent({
  $route: RouterView,
  name: "PlacesPage",
  components: {
    IonContent,
    Swiper,
    SwiperSlide,
    IonHeader,
    IonRow,
    IonGrid,
    IonButton,
    IonImg,
    IonCard,
  },
  setup() {
    return { modules: [Pagination, Navigation] };
  },
  data: function () {
    return {
      places: [],
      categorias: [],
      categoriasQuery: [""],
      link: "",
    };
  },
  mounted() {
    this.getPlace();
    this.getCategorias();
    this.getQueries();
  },
  methods: {
    getPlace() {
      if (Object.keys(this.$route.query).length != 0) {
        const { categorias } = this.$route.query;
        api
          .get(`http://localhost:3000/lugares?categorias=${categorias}`)
          .then((data) => {
            this.places = data.data;
          });
      }
      api.get(`http://localhost:3000/lugares`).then((data) => {
        this.places = data.data;
      });
    },
    getCategorias() {
      api.get(`http://localhost:3000/lugares/`).then((data) => {
        this.categorias = data.data;
      });
    },
    getQueries() {
      console.log("entrou");
      if (Object.keys(this.$route.query).length != 0) {
        const { categorias } = this.$route.query;
        if (categorias) {
          this.categoriasQuery = categorias.toString().trim().split(" ");
        }
      }
    },
  },
});
</script>

<style scoped>
ion-content {
  --background: #ffffff;
}

.itemCategoria {
  margin-right: 10px;
  color: black;
  background: orange;

  text-align: center;
  border:1px solid black;

  border-radius: 20px;
}

.itemCategoria:nth-child(1) {
  margin-left: 15px;
}

.cardSup {
  height: 7rem;
  width: 10rem;
  border: 3px solid orange;
}

.item {
  margin-bottom: 1rem;
}

ion-toggle {
  height: 70%;
  width: 80%;
  --border-radius: 50px;

  --handle-width: 35%;
  --handle-height: 120%;
  --handle-max-height: auto;
  --handle-spacing: -5px;
}

.sem-fundo {
  --background: none;
  --box-shadow: none;
}

.botao-topo {
  top: 10px;
  left: 10px;
}

.textToolbar {
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

.margin-text {
  margin-top: 5%;
  margin-bottom: 5%;
}

.icon_streettree1 {
  --handle-background-checked: #ffffff
    url("../../public/assets/icon/icon_streettree1.png") no-repeat center/
    contain;
  --handle-background: #ffffff
    url("../../public/assets/icon/icon_streettree1.png") no-repeat center /
    contain;
}

.icon_streettree2 {
  --handle-background-checked: #ffffff
    url("../../public/assets/icon/icon_streettree2.png") no-repeat center /
    contain;
  --handle-background: #ffffff
    url("../../public/assets/icon/icon_streettree2.png") no-repeat center /
    contain;
}

.icone_praca {
  --handle-background-checked: #ffffff
    url("../../public/assets/icon/icone_praca.png") no-repeat center / contain;
  --handle-background: #ffffff url("../../public/assets/icon/icone_praca.png")
    no-repeat center / contain;
}

.cine {
  --handle-background-checked: #ffffff url("../../public/assets/icon/cine.png")
    no-repeat center / contain;
  --handle-background: #ffffff url("../../public/assets/icon/cine.png")
    no-repeat center / contain;
}

.cadeirante {
  --handle-background-checked: #ffffff
    url("../../public/assets/icon/cadeirante.png") no-repeat center / contain;
  --handle-background: #ffffff url("../../public/assets/icon/cadeirante.png")
    no-repeat center / contain;
}

.braile {
  --handle-background-checked: #ffffff
    url("../../public/assets/icon/braile.png") no-repeat center / contain;
  --handle-background: #ffffff url("../../public/assets/icon/braile.png")
    no-repeat center / contain;
}
</style>
