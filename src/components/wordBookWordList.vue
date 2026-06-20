<template>
    <!--
        rowkey 标识一行数据的字段名 有几行
        data数据源
        columns表头配置
        stripe斑马纹
        bordered边框
        hover悬停
        size表格尺寸
        table-layout表格布局 auto fixed
        pagination分页配置
        showHeader是否显示表头
        cellEmptyContent单元格空值内容
         resizable是否可调整列宽
    -->
   <t-table
   
      rowKey="wordId"
      :data="wordList"
      :columns="columns"
      :stripe="stripe"
      :bordered="bordered"
      :hover="hover"
      :size="size"
      :table-layout="tableLayout ? 'auto' : 'fixed'"
      :pagination="pagination"
      :showHeader="showHeader"
      cellEmptyContent="-"
      resizable
    ></t-table>
</template>

<script>
import { mapState } from 'vuex';
import {getWordList} from "../api/book"

//total是数据总数
//const total = 28;
//for (let i = 0; i < total; i++) {
//  initialData.push({
//    index: i + 1,
//    word: ['贾明', '张三', '王芳'][i % 3],
//    status: i % 3,
//    forgetNumber: ['电子签署', '纸质签署', '纸质签署'][i % 3],
//    detail: {
//      Chinese: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
//    },
//    matters: ['宣传物料制作费用', 'algolia 服务报销', '相关周边制作费', '激励奖品快递费'][i % 4],
//    time: [2, 3, 1, 4][i % 4],
//  });
//}
export default {
    data() {
    return {
      //data: wordList,
      size: 'medium',
      tableLayout: false,
      stripe: true,
      bordered: true,
      hover: false,
      showHeader: true,
      columns: [
        { colKey: 'english', title: '单词', width: '100' },
        {
          colKey: 'wordStatus',
          title: '背诵状态',
          width: '150',
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '已背诵', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '未背诵', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '背诵中', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.wordStatus].theme} variant="light-outline">
                {statusNameListMap[row.wordStatus].icon}
                {statusNameListMap[row.wordStatus].label}
              </t-tag>
            );
          },
        },
        { colKey: 'forgetCount', title: '忘记次数' },
        { colKey: 'chinese', title: '中文', ellipsis: true },
      ],

    };
  },
  computed:{
    ...mapState("MemoryAbout",["wordList"]),
    /** 非受控用法：与分页组件对齐 */
      pagination() {
        return{
        //默认第一页
        defaultCurrent: 1,
        //默认显示数据
        defaultPageSize: 5,
        //默认
        total:this.wordList.length
        }
      },
  },
  created(){
    getWordList()
  .then(res=>{
  console.log(res)
  this.$store.commit('MemoryAbout/SET_WORD_LIST', res.data);
  })
  .catch(err=>
  {
    console.log(err)
  })
  }
};
</script>

<style scoped>
    .t-table__body .t-tag span {
    display: inline-flex;
    align-items: center;
    }
</style>