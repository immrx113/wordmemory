<template>
  <div class="page">

    <t-card class="card" v-if="currentWord">

      <div class="word">{{ currentWord.english }}</div>
      <div class="meaning">{{ currentWord.chinese }}</div>

      <div class="btns">
        <t-button theme="danger" @click="mark(0)">不记得</t-button>
        <t-button theme="warning" @click="mark(1)">模糊</t-button>
        <t-button theme="success" @click="mark(2)">记得</t-button>
      </div>

      <div class="progress">
        {{ currentIndex + 1 }} / {{ total }}
      </div>

    </t-card>

    <t-empty v-else description="已完成今日学习" />

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "wordMemory",

  computed: {
    ...mapState("MemoryAbout", ["studyQueue", "currentIndex"]),

    ...mapGetters("MemoryAbout", ["currentWord"]),

    total() {
      return this.studyQueue.length;
    }
  },

  created() {
    this.fetchWords();
  },

  methods: {
    ...mapActions("MemoryAbout", [
      "fetchWords",
      "nextWord",
      "updateWordStatus"
    ]),

    async mark(status) {
      const word = this.currentWord;
      console.log("word是什么",word)
      //word传参?word是一个对象
      await this.updateWordStatus({
        word,
        status
      });

      this.nextWord();
    }
  }
};
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.card {
  width: 420px;
  text-align: center;
  padding: 30px;
}

.word {
  font-size: 32px;
  font-weight: bold;
}

.meaning {
  margin-top: 10px;
  font-size: 18px;
  color: #666;
}

.btns {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.progress {
  margin-top: 15px;
  color: #999;
}
</style>