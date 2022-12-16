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
          <ion-img class="imgCarrosel" :src="places[0]?.imageUri[0]"> </ion-img>
        </ion-card>
      </swiper-slide>

      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel" :src="places[1]?.imageUri[2]"> </ion-img>
        </ion-card>
      </swiper-slide>

      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel" :src="places[2]?.imageUri[0]"> </ion-img>
        </ion-card>
      </swiper-slide>
    </swiper>

    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-item
            v-for="categoria of categorias"
            :key="categoria.id"
            style="color: black;"
            class="sem-fundo"
            lines="none"
          >
            <label class="item4">
              {{ categoria.categoria }}
              <input
                type="radio"
                class="categoria"
                :value="categoria.categoria"
              />
            </label>
          </ion-item>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-footer class="ion-no-border">
      <ion-row>
        <ion-col size="12">
          <ion-button
            @click="chamaProximaTela()"
            color="orangebutton textToolbar"
            style=""
            expand="block"
            ><a :href="link"> BUSCAR</a>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-footer>
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
  IonGrid,
  IonItem,
  IonButton,
  IonImg,
  IonCard,
} from "@ionic/vue";
import api from "@/services/api.service";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default defineComponent({
  name: "PlacesPage",
  components: {
    IonContent,
    Swiper,
    SwiperSlide,
    IonHeader,
    IonFooter,
    IonRow,
    IonItem,
    IonCol,
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
      link: "",
    };
  },
  mounted() {
    this.getPlace();
    this.getCategorias();
  },
  methods: {
    chamaProximaTela() {
      let Collection = document.getElementsByClassName("categoria");

      let queryString = "";

      for (var i = 0; i < Collection.length; i++) {
        let item: any = Collection[i];

        if (item?.checked) {
          queryString += item.value + "+";
        }
      }

      // for (var i = 0; i < CollectionAccess.length; i++) {
      //   let item: any = Collection[i];

      //   if (item?.checked) {
      //     queryStringAccess += item.value + "+";
      //   }
      // }

      // &temAcessibilidade=${queryStringAccess}

      this.link = `http://localhost:8080/menu/places?categorias=${queryString}`;
    },
    getPlace() {
      api.get(`http://localhost:3000/lugares/`).then((data) => {
        console.log(data.data);
        this.places = data.data;
      });
    },
    getCategorias() {
      api.get(`http://localhost:3000/lugares/categoria/`).then((data) => {
        this.categorias = data.data;
      });
    },
  },
});
</script>

<style scoped>
ion-content {
  --background: #ffffff;
}

.cardSup {
  height: 7rem;
  width: 10rem;
  border: 3px solid orange;
}

.imgCarrosel {
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
