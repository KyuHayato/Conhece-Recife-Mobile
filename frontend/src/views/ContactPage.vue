<template>
  <ion-page>
    <ion-content :fullscreen="true">
      
      <a href="/menu"><ion-button class="botao-topo"> <ion-img class="seta" src="../../assets/seta.png "></ion-img></ion-button></a>

      <ion-grid class="center" style="margin-top: 5rem">
        <ion-row>
          <ion-col>
            <ion-label
              position="stacked"
              class="font-style"
              
              >Nome completo</ion-label
            >
            <ion-input class="input-style"></ion-input>
          </ion-col>

          <ion-col>
            <ion-label position="stacked" class="font-style">Email</ion-label>
            <ion-input class="input-style"></ion-input>
          </ion-col>

          <ion-col>
            <ion-label position="stacked" class="font-style"
              >Telefone</ion-label
            >
            <ion-input class="input-style"></ion-input>
          </ion-col>

          <ion-col>
            <ion-label position="stacked" class="font-style">Assunto</ion-label>
            <ion-input class="input-style"></ion-input>
          </ion-col>

          <ion-col>
            <ion-label position="stacked" class="font-style"
              >Descrição</ion-label
            >
            <ion-textarea
              class="input-style"
              style="width: 309px; height: 210px"
            ></ion-textarea>
          </ion-col>

          <ion-col class="center">
            <ion-button size="small" class="button-style enviar"> Enviar </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonLabel,
  IonInput,
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    IonContent,
    IonLabel,
    IonInput,
    IonCol,
    IonGrid,
    IonRow,
    IonButton,
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
  --background: none;
  --box-shadow: none;
  
}
.enviar {
  --background: #e78500;
   
}

.botao-topo {
  background: none;
  position: absolute;
  top: 8px;
  margin-top: 10%;
  height: 5%;
  width: 70px;           
}
.center {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 50%;
}
.input-style {
  border: 2px solid #4d4c4c;
  border-radius: 10px;
  background: #ffffff;
  width: 309px;
  height: 40px;
  margin-bottom: 14px;

}
.font-style {
  font-family: Nunito;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: rgb(0, 0, 0);
}

.md{
  color: #000000;
  
  

}
.button-style {
  width: 81px;
  height: 32px;
  --padding-bottom: 8px;
  --padding-end: 12px;
  --padding-start: 12px;
  --padding-top: 8px;
  gap: 10px;
  --border-radius: 16px;
  color: rgb(255, 255, 255);
  
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
