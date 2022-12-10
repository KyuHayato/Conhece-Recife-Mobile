<template>
  <ion-header class="ion-no-border">
    <a href="/menu">
      <ion-button class="botao-topo sem-fundo">
        <ion-img src="../../assets/seta.png "></ion-img>
      </ion-button>
    </a>
  </ion-header>

  <ion-content class="ion-padding">
    <swiper :slidesPerView="2" :spaceBetween="25" :slidesPerGroup="2" :pagination="{ clickable: false }"
      :modules="modules" class="mySwiper">
      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel"
            src="https://lh5.googleusercontent.com/p/AF1QipOHfj-37L7-wIIBAzGHLocH96ohUAC2AcVTDRJ1=w256-h240-p-k-no">
          </ion-img>
        </ion-card>
      </swiper-slide>
      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel"
            src="https://lh5.googleusercontent.com/p/AF1QipOHfj-37L7-wIIBAzGHLocH96ohUAC2AcVTDRJ1=w256-h240-p-k-no">
          </ion-img>
        </ion-card>
      </swiper-slide>
      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel"
            src="https://lh5.googleusercontent.com/p/AF1QipOHfj-37L7-wIIBAzGHLocH96ohUAC2AcVTDRJ1=w256-h240-p-k-no">
          </ion-img>
        </ion-card>
      </swiper-slide>
      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel"
            src="https://lh5.googleusercontent.com/p/AF1QipOHfj-37L7-wIIBAzGHLocH96ohUAC2AcVTDRJ1=w256-h240-p-k-no">
          </ion-img>
        </ion-card>
      </swiper-slide>
      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel"
            src="https://lh5.googleusercontent.com/p/AF1QipOHfj-37L7-wIIBAzGHLocH96ohUAC2AcVTDRJ1=w256-h240-p-k-no">
          </ion-img>
        </ion-card>
      </swiper-slide>
      <swiper-slide>
        <ion-card class="cardSup">
          <ion-img class="imgCarrosel"
            src="https://lh5.googleusercontent.com/p/AF1QipOHfj-37L7-wIIBAzGHLocH96ohUAC2AcVTDRJ1=w256-h240-p-k-no">
          </ion-img>
        </ion-card>
      </swiper-slide>
    </swiper>

    <ion-grid>
      <ion-row class="margin-text">
        <ion-label class="textToolbar">
          Buscar por categoria
        </ion-label>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item class="sem-fundo" lines="none">
            <ion-toggle class="icon_streettree1"></ion-toggle>
          </ion-item>
        </ion-col>
        <ion-col>
          <ion-item class="sem-fundo" lines="none">
            <ion-toggle class="icon_streettree2"></ion-toggle>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item class="sem-fundo" lines="none">
            <ion-toggle class="icone_praca"></ion-toggle>
          </ion-item>
        </ion-col>
        <ion-col>
          <ion-item class="sem-fundo" lines="none">
            <ion-toggle class="cine"></ion-toggle>
          </ion-item>
        </ion-col>
      </ion-row>

      <ion-row class="margin-text">
        <ion-label class="textToolbar">
          Buscar por condições especiais
        </ion-label>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item class="sem-fundo ion-text-center" lines="none">
            <ion-toggle class="cadeirante"></ion-toggle>
          </ion-item>
        </ion-col>
        <ion-col>
          <ion-item class="sem-fundo" lines="none">
            <ion-toggle class="braile" ion-toggle-text="online;offline"></ion-toggle>
          </ion-item>
        </ion-col>
      </ion-row>
    </ion-grid>



    <ion-footer class="ion-no-border">
      <ion-row>
        <ion-col>
        </ion-col>
        <ion-col size="8">
        <ion-button color="orangebutton textToolbar" expand="block">BUSCAR</ion-button>
        </ion-col>
        <ion-col>
        </ion-col>
      </ion-row>
    </ion-footer>
  </ion-content>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { IonContent, IonHeader, IonFooter, IonRow, IonCol, IonToggle, IonGrid, IonItem, IonButton, IonImg, IonCard } from "@ionic/vue";
import APIService from "@/services/api.service";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default defineComponent({
  name: "PlacesPage",
  components: { IonContent, Swiper, SwiperSlide, IonHeader, IonFooter, IonRow, IonCol, IonToggle, IonGrid, IonItem, IonButton, IonImg, IonCard },
  setup() { return { modules: [Pagination, Navigation] }; },
  data: function () { return {}; },
  methods: {},
});

</script>

<style scoped>

ion-toggle::part(track),
ion-toggle.toggle-checked::part(track) {
  background: #E78500;
}

ion-toggle::part(track),
ion-toggle.toggle::part(track) {
  background: #000000;
}

ion-content {
  --background: #ffffff;
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
  --handle-background-checked: #FFFFFF url('../../public/assets/icon/icon_streettree1.png') no-repeat center/ contain;
  --handle-background: #FFFFFF url('../../public/assets/icon/icon_streettree1.png') no-repeat center / contain;
}

.icon_streettree2 {
  --handle-background-checked: #FFFFFF url('../../public/assets/icon/icon_streettree2.png') no-repeat center / contain;
  --handle-background: #FFFFFF url('../../public/assets/icon/icon_streettree2.png') no-repeat center / contain;
}

.icone_praca {
  --handle-background-checked: #FFFFFF url('../../public/assets/icon/icone_praca.png') no-repeat center / contain;
  --handle-background: #FFFFFF url('../../public/assets/icon/icone_praca.png') no-repeat center / contain;
}

.cine {
  --handle-background-checked: #FFFFFF url('../../public/assets/icon/cine.png') no-repeat center / contain;
  --handle-background: #FFFFFF url('../../public/assets/icon/cine.png') no-repeat center / contain;
}

.cadeirante {
  --handle-background-checked: #FFFFFF url('../../public/assets/icon/cadeirante.png') no-repeat center / contain;
  --handle-background: #FFFFFF url('../../public/assets/icon/cadeirante.png') no-repeat center / contain;
}

.braile {
  --handle-background-checked: #FFFFFF url('../../public/assets/icon/braile.png') no-repeat center / contain;
  --handle-background: #FFFFFF url('../../public/assets/icon/braile.png') no-repeat center / contain;
}

/* .toggle-ios.toggle-checked.rainy-toggle .toggle-inner {
    background: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: 80%;
    background-color: white;
    background-position: center;
}

.toggle-ios.toggle-checked.rainy-toggle .toggle-icon {
    background-color: #0082FF;
} */


</style>
