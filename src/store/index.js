//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import { getStudyWords, updateWordStatus } from "../api/word";
import {getExamRecords} from "../api/exam"
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
//const actions = {}
//准备mutations对象——修改state中的数据
//const mutations = {}
//准备state对象——保存具体的数据
//const state = {}
 
//命名空间维护
const MemoryOptions={
	namespaced:true,
	state:{
		//todayGoal可能要存在数据库里
		todayGoalNumber:20,
		alreadyNumber:0,
		notNumber:0,
		//先写死看看
		chooseTargetUsers:"四级",
		chooseBookInfo:"这是一本四级书",
		chooseBookName:"四级",
		wordList:[],
		bookList:[],
		currentBookId:null,
		nowWordList:[],//今日学习单词
		studyQueue:[],//学习队列
		currentIndex:0,
		
	},
	actions:{
		async fetchWords({commit,dispatch,state}){
			const res=await getStudyWords(state.todayGoalNumber);
			console.log("接口返回：", res);
			const list=res.data || [];
			commit("SET_NOW_WORD_LIST",list);
			dispatch("buildQueue")
		},

		buildQueue({ state, commit }){
			const queue=[];
			state.nowWordList.forEach(word => {
				if (word.wordStatus === 0) {
					queue.push(word);
					queue.push(word);
				}
				if (word.wordStatus === 1) {
					queue.push(word);
				}
				// 2 = 记得 → 不加入
			});

				// 打乱顺序
				queue.sort(() => Math.random() - 0.5);
				commit("SET_QUEUE", queue);
				commit("RESET_INDEX");
			},
		async updateWordStatus({ dispatch,state }, { word, status }) {
				await updateWordStatus(word.wordId, status);
				if(status === 0){
					state.studyQueue.push(word);
					state.studyQueue.push(word);
				}
				if (status === 1) {
					state.studyQueue.push(word);
				}
				dispatch("fetchWords");
			},
			nextWord({commit}){
				commit("NEXT_INDEX");
			}

	},
	getters:{
		//获取当前单词
		currentWord:(state)=>{
			return state.studyQueue[state.currentIndex] || null;
		}
	},

	mutations:{
		//设置目标
		SET_GOAL(state,value){
			state.todayGoalNumber=value
		},
		//添加已经学会
		ADD_ALREADY(state){
			state.alreadyNumber++
		},
		//添加未学会
		ADD_NOT(state){
			state.notNumber++
		},
		SET_WORD_LIST(state,value){
			state.wordList=value
		},
		SET_BOOK_LIST(state,list){
			state.bookList=list
		},
		SET_CERRENT_BOOK(state,id){
			state.currentBookId=id
		},
		//背单词相关函数
		SET_NOW_WORD_LIST(state,list){
			state.nowWordList=list
		},
		SET_QUEUE(state, queue) {
			state.studyQueue = queue;
		},
		NEXT_INDEX(state) {
			state.currentIndex++;
		},
		RESET_INDEX(state) {
		state.currentIndex = 0;
		},
		RESET_MAINBOOK(state,obj){
			state.chooseBookName=obj.bookName
			state.chooseBookInfo=obj.intro
			state.chooseTargetUsers=obj.targetUser
		}
	},
}
const ExamOptions={
	namespaced:true,
	state:{
		config:{
			cnToEnRatio:50, //中文选英文比例
			enToCnRatio:50, //英文选中文比例
			wordCount:20,
			duration:10 //单位分钟
		},
		history:[]
	},
	mutations:{
		SET_CONFIG(state,config){
			state.config={...state.config,...config}
		},
		SET_HISTORY(state,list){
			state.history=list.map(item=>({
				id:item.id,
				score:item.score,
				time:item.endTime,
			}))
		}
	},
	actions:{
		async loadHistory({commit}){
			const res=await getExamRecords()
			const list=res.data.records || []
			commit("SET_HISTORY",list)
		},
		saveConfig({commit},config){
			commit("SET_CONFIG",config)
			localStorage.setItem("examConfig",JSON.stringify(config))
		},
		initConfig({commit}){
			const data=localStorage.getItem("examConfig")
			if(data){
				commit("SET_CONFIG",JSON.parse(data))
			}
		}
	},
	getters:{
		config:state=>state.config,
		history:state=>state.history
	}
}

//创建并暴露store
export default new Vuex.Store({
	modules:{
		MemoryAbout:MemoryOptions,
		ExamAbout:ExamOptions,

	}
})
