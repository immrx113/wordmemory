<template>
  <div class="exam">

    <!-- 顶部 -->
    <div class="header">
      <div> {{ timeLeft }}s</div>
      <div>{{ currentIndex + 1 }} / {{ questions.length }}</div>
    </div>

    <!-- 题目 -->
    <t-card v-if="currentQuestion" class="card">

      <div class="question">
        {{ currentQuestion.englishWord }}
      </div>

      <div class="options">
        <t-button
          v-for="(opt, i) in currentQuestion.options"
          :key="i"
          block
          class="opt"
          @click="choose(opt)"
        >
          {{ opt }}
        </t-button>
      </div>

    </t-card>

    <t-empty v-else description="考试结束" />

  </div>
</template>

<script>
import { getExamQuestions } from "../api/exam";
import { mapState } from "vuex";

export default {
  name: "wordTestIng",

  data() {
    return {
    //承接返回回来的数据
      questions: [],
      currentIndex: 0,
      answers: [],
      timeLeft: 0,
      timer: null
    };
  },

  computed: {
    ...mapState("ExamAbout", ["config"]),

    currentQuestion() {
      return this.questions[this.currentIndex] || null;
    }
  },

  async created() {

    await this.restoreOrInitExam();
  },

  methods: {
    // 初始化考试
    async initExam() {

//传了但是没有用
      const payload = {
        bookId: 1, //
        examCount: this.config.wordCount,
        enToZhRatio: this.config.enToCnRatio / 100
      };

      const res = await getExamQuestions(payload);

      this.questions = res.data || [];

      this.timeLeft = this.config.duration * 60;

      this.startTimer();
    },
    async restoreOrInitExam(){
        const saved = localStorage.getItem("exam_state");
        if (saved) {
            const state = JSON.parse(saved);
            this.questions = state.questions || [];
            this.currentIndex = state.currentIndex || 0;
            this.answers = state.answers || [];
            this.timeLeft = state.timeLeft || 0;
            //this.startTime = state.startTime || Date.now();
            } 
        else{
            await this.initExam();
            //this.startTime = Date.now();
            }
        this.startTimer();
  },
    // 选择答案
    choose(option) {

      const q = this.currentQuestion;

      this.answers.push({
        wordId: q.wordId,
        answer: option,
        correct: option === q.correctAnswer
      });
      this.saveExamState();
      this.next();
    },

    next() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
      } else {
        this.finishExam();
      }
      this.saveExamState();
    },

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
      this.timer = setInterval(() => {
        this.timeLeft--;
        this.saveExamState();
        if (this.timeLeft <= 0) {
          this.finishExam();
        }
      }, 1000);
    },

    finishExam() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
    }

      const correct = this.answers.filter(a => a.correct).length;
      const score = Math.round((correct / this.questions.length) * 100);

      // 保存历史
      this.$store.commit("ExamAbout/SET_HISTORY", [
        ...this.$store.state.ExamAbout.history,
        {
          id: Date.now(),
          score,
          time: new Date().toLocaleString()
        }
      ]);

      this.$router.push("/main/examresult");
    },
    //保存考试状态
    saveExamState(){
        localStorage.setItem("exam_state", JSON.stringify({
        questions: this.questions,
        currentIndex: this.currentIndex,
        answers: this.answers,
        timeLeft: this.timeLeft,
        //startTime: this.startTime
    }));

},
    beforeDestroy() {
        if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
    }
}

    
  },
};
</script>

<style scoped>
.exam {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.card {
  width: 500px;
  text-align: center;
}

.question {
  font-size: 22px;
  margin-bottom: 20px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>