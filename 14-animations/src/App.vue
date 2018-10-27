<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>

                <button class="btn btn-primary" @click="show = !show">Show</button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">Text ke zobrazení</div>
                </transition>
                <transition name="slide">
                    <div class="alert alert-info" v-if="show">Text ke zobrazení animace slide</div>
                </transition>

                <transition name="slide" appear>
                    <div class="alert alert-info">Text ke zobrazení hned po načtení stránky, pomocí appear</div>
                </transition>

                <transition
                        enter-active-class="animated pulse"
                        leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">Animace s vlastní css clasou - externí třídy z
                        animate.css
                    </div>
                </transition>

                <hr>
                Zvol si animaci
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <button class="btn btn-primary" @click="myShow = !myShow">Show</button>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="myShow">Animace vybrána na základě selectboxu</div>
                </transition>


                <transition :name="alertAnimation" mode="out-in"> <!--druhá varianta je in-out -->
                    <div class="alert alert-info" v-if="myShow" key="info">Dvojitá animace: info</div>
                    <div class="alert alert-warning" v-else key="warning">Dvojitá animace: warning</div>
                </transition>

                <hr>

                <h2>Javascript animace</h2>

                <button class="btn btn-primary" @click="load = !load">Load / remove Element</button>
                <br><br>
                <transition
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @afterEnter="afterEnter"
                        @enter-cancelled="enterCancelled"

                        @before-leave="beforeLeave"
                        @leave="leave"
                        @afterLeave="afterLeave"
                        @leave-cancelled="leaveCancelled"
                >
                    <div style="width:300px; height: 100px; background: lightgreen" v-if="load"></div>
                </transition>

                <hr>
                <h2>Animace načítání komponent</h2>
                <button
                        class="btn btn-primary"
                        @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
                >Přepínač komponent
                </button>
                <br><br>

                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>


                <hr>
                <h2>transition-group - animace více položek</h2>

                <button class="btn btn-primary" @click="addItem">Add item</button>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li
                                class="list-group-item"
                                v-for="(number, index) in numbers"
                                @click="removeItem(index)"
                                style="cursor:pointer"
                                :key="number"
                        >{{number}}</li>
                    </transition-group>

                </ul>
            </div>


        </div>
    </div>
</template>

<script>
  import DangerAlert from './DangerAlert';
  import SuccessAlert from './SuccessAlert';

  export default {
    data() {
      return {
        show: false,
        myShow: false,
        load: true,
        alertAnimation: 'fade',
        elementWidth: 100,
        selectedComponent: 'app-success-alert',
        numbers: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      beforeEnter(el) {
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px';
      },
      enter(el, done) {
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;

          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      beforeLeave(el) {
        this.elementWidth = 300;
        el.style.width = this.elementWidth + 'px';
      },
      leave(el, done) {
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;

          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1);
      },
      removeItem(index) {
        this.numbers.splice(index, 1);
      }

    },
    components: {
      appDangerAlert: DangerAlert,
      appSuccessAlert: SuccessAlert
    }
  }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s
    }

    .fade-leave {
        /*opacity: 1;*/
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }

</style>
