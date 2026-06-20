<template>
    <div class="homeContainer">
        <t-row :gutter="[12,36]"> 
        <t-col :span="12">
        <h1>今日学习</h1>
        </t-col>
        <t-col :span="12">
            <t-row :gutter="20" >
                <t-col :span="2">
                    <t-card>
                    <t-statistic title="今日目标" :value="todayGoalNumber"  />
                    </t-card>
                </t-col>
            </t-row>
        </t-col>
        <t-col :span="12">
        <t-row >
            <t-col :span="2">
                <t-button theme="primary" variant="base" @click="beginStudy">开始学习</t-button>
            </t-col>
            <t-col :span="2">
                <t-button theme="primary" variant="base" @click="openGoalDialog">修改目标</t-button>
            </t-col>
        </t-row>
        </t-col>
        </t-row>
            <t-dialog
            :visible.sync="goalDialogVisible"
            header="修改今日学习目标"
            width="400px"
            @confirm="confirmGoal"
>           
            <div>
              <t-input-number
                v-model="newGoal"
                :min="1"
                :max="1000"
                theme="normal"
              />
            </div>
            </t-dialog>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name: 'wordHome',
    methods:{
        beginStudy(){
            this.$router.push(
                {path:"/main/wordmemory"}
            )
        },
        openGoalDialog() {
              this.newGoal = this.todayGoalNumber
              this.goalDialogVisible = true
            },
        //后端接口只是apifox自动生成，不把这个数据放到后端
        confirmGoal() {
              this.$store.commit(
                "MemoryAbout/SET_GOAL",
                this.newGoal
              )
              this.goalDialogVisible = false
            }
    },
    computed:{
        ...mapState("MemoryAbout",["todayGoalNumber",'alreadyNumber',"notNumber"])
    },
    //created(){
    //    
    //}
    data(){
        return {
            goalDialogVisible:false,
            newGoal:0
        }
    }
}
</script>

<style scoped>
    .homeContainer{
        padding: 24px;
    }
</style>