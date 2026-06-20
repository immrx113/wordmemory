<template>
  <div class="result">

    <t-card class="card">

      <div class="score">
         本次考试得分：{{ score }} 分
      </div>

      <t-button theme="primary" block @click="restart">
        重新考试
      </t-button>

    </t-card>

  </div>
</template>

<script>
export default {
  name: "wordTestResult",

  data() {
    return {
      score: 0
    };
  },

  created() {
    this.loadScore();
  },

  methods: {

    loadScore() {
      const examState = JSON.parse(localStorage.getItem("exam_state"));

      if (!examState) return;

      const answers = examState.answers || [];
      const questions = examState.questions || [];

      const correct = answers.filter(a => a.correct).length;

      this.score = Math.round((correct / questions.length) * 100);
    },

    restart() {
      localStorage.removeItem("exam_state");
      this.$router.push("/main/test");
    }
  }
};
</script>

<style scoped>
.result {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.card {
  width: 500px;
  text-align: center;
  padding: 30px;
}

.score {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>