<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img :src="picture" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <span
            class="home-title"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >Welcome to my portfolio!</span
          >
          <div>
            <p v-html="description"></p>
          </div>
          <div class="text-center pb-4">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
              v-tooltip.bottom="'GitHub'"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('behance')"
              v-tooltip.bottom="'behance'"
            >
              <i class="fab fa-behance"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
              v-tooltip.bottom="'Resume'"
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

import Wave from "./helpers/Wave";

export default {
  name: "Home",
  components: {
    Wave,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      behance: info.links.behance,
      resume: info.links.resume
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "behance":
          window.open(this.behance, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
.home-title {
  font-size: 32px;
  font-weight: 500;
}

img {
  max-width: 800px;
  max-height: 500px;
  margin-top: 80px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #759CC9;
  color: #759CC9;
}

.btn:hover {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */
</style>
