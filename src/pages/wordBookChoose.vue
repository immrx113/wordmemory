<template>
  <t-table
    row-key="id"
    :data="bookList"
    :columns="columns"
    :pagination="pagination"
    bordered
    stripe
    @page-change="onPageChange"
  />
</template>

<script>
import { mapState } from "vuex"
import { getBookList } from "../api/book"

export default {
    name:"wordBookChoose",
  data() {
    return {
      columns: [
        {
          colKey: "bookName",
          title: "书名",
        },
        {
          colKey: "targetUser",
          title: "适用人群"
        },
        {
          colKey: "intro",
          title: "简介",
          ellipsis: true
        },
        {
          colKey: "action",
          title: "操作",
          width: 120,
          cell: (h, { row }) => {
            return (
              <t-button
                theme="primary"
                size="small"
                onClick={() => this.setMainBook(row)}
              >
              设为主用
              </t-button>
            )
          }
        }
      ],

      pagination: {
        current: 1,
        pageSize: 10,
        total: 0
      }
    }
  },

  computed: {
    ...mapState("MemoryAbout", ["bookList"])
  },

  created() {
    this.loadData(1, 10)
  },

  methods: {
    // 获取数据
    loadData(page, size) {
      getBookList(page, size).then(res => {
        
        console.log("bookList raw =", res.data.records)
        // 存 Vuex
        this.$store.commit(
          "MemoryAbout/SET_BOOK_LIST",
          res.data.records
        )

        // 更新分页信息
        this.pagination.total = res.data.total
        this.pagination.current = res.data.current
        this.pagination.pageSize = res.data.size
      })
    },

    // 分页切换
    onPageChange(pageInfo) {
      this.loadData(pageInfo.current, pageInfo.pageSize)
    },

    // 设置主用书
    setMainBook(row) {
      this.$store.commit("MemoryAbout/RESET_MAINBOOK", row);
    }
  }
}
</script>