<template>
  <div class="timer">
    <p>Захиалга цуцлагдах хугацаа:</p>
    <p>Та захиалгаа тухайн хугацаанд багтаан хийнэ үү</p>
    <div>{{ formattedTime }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: 600,
      timer: null,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.duration / 60);
      const seconds = this.duration % 60;
      return `${minutes} мин ${seconds} сек`;
    },
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.duration > 0) {
          this.duration--;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },

//   TODO : 10 minut duusahad confirmation huudasnii this.invoice=null bolgoh
};
</script>

<style>
.timer {
  width: 40%;
  padding: 30px;
  font-size: 23px;
}
</style>
