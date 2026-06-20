<template>
<div class="exam-page">

    <!-- 配置区域 -->
    <t-card title="考试设置" class="card">

      <div class="item">
        <div>中→英比例</div>
        <t-slider v-model="config.cnToEnRatio" />
      </div>

      <div class="item">
        <div>英→中比例</div>
        <t-slider v-model="config.enToCnRatio" />
      </div>

      <div class="item">
        <div>单词数量</div>
        <t-input-number v-model="config.wordCount" min="5" max="100" />
      </div>

      <div class="item">
        <div>考试时间（分钟）</div>
        <t-input-number v-model="config.duration" min="1" max="120" />
      </div>

      <t-button theme="primary" block @click="startExam">
        开始考试
      </t-button>

    </t-card>

    <!-- 历史记录 -->
    <t-card title="历史考试记录" class="card">

      <t-table :data="history" bordered row-key="id" :columns="columns">
        <t-table-column prop="time" label="时间" />
        <t-table-column prop="score" label="分数" />
      </t-table>

    </t-card>
    <t-pagination
    v-model="page"
    :total="total"
    :page-size="size"
    />
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    name:"wordTest",
    computed:{
        ...mapGetters("ExamAbout",["history"]),
        config:{
            get(){
                return this.$store.state.ExamAbout.config
            },
            set(value){
                this.$store.commit("ExamAbout/SET_CONFIG",value);
            }
        },
        tableData() {
            return this.history ? JSON.parse(JSON.stringify(this.history)) : [];
        },
        columns(){
            return[
                {colKey:"time",title:"时间"},
                {colKey:"score",title:"分数"}
            ]
        },
        //pagedHistory() {
        //    const start = (this.page - 1) * this.size;
        //    const end = this.page * this.size;
        //    return this.history.slice(start, end);
        //},

        total() {
            return this.history.length;
        }
    },
    created(){
        this.initConfig();
        this.loadHistory();
        console.log("history:", this.history);
        console.log("config:", this.config)
        console.log("raw history:", JSON.parse(JSON.stringify(this.history)))
    },
    methods:{
        ...mapActions("ExamAbout",["saveConfig","loadHistory","initConfig"]),
        startExam(){
            this.saveConfig(this.config);
            this.$router.push("/main/wordTest")
        }
    },
    data(){
        return{
            page:1,
            size:5
        }
    }
}
</script>

<style scoped>
    .exam-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}

.card {
  width: 500px;
}

.item {
  margin-bottom: 20px;
}
</style>