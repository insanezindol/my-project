<template>
    <div id="axios">
        <div class="container">
            <div class="form-group">
                <input type="text" v-model="pageNo" placeholder="페이지 번호" value="1" />
                <input type="text" v-model="pageSize" placeholder="페이지 크기" value="10" />
                <button @click="fetchNotices">1페이지 게시글 조회</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="add_title" placeholder="제목을 입력합니다" />
                <input type="text" v-model="add_contents" placeholder="내용을 입력합니다" />
                <input type="text" v-model="add_status" placeholder="상태 입력합니다 (default : 1)" />
                <input type="text" v-model="add_regUser" placeholder="등록자를 입력합니다" />
                <button @click="addNotice">게시글 1건 추가</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="select_id"/>
                <button @click="fetchNoticeOne">게시글 1건 조회</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="modify_id" placeholder="ID을 입력합니다" />
                <input type="text" v-model="modify_title" placeholder="제목을 입력합니다" />
                <input type="text" v-model="modify_contents" placeholder="내용을 입력합니다" />
                <button @click="updateNotice">수정</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="delete_id"/>
                <button @click="deleteNotice">게시글 1건 삭제</button>
            </div>
            <div class="form-group">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Contents</th>
                        <th>Status</th>
                        <th>User</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        <tr v-for="info in list" :key="info.id">
                            <td>{{ info.id }}</td>
                            <td>{{ info.title }}</td>
                            <td>{{ info.contents }}</td>
                            <td>{{ info.status }}</td>
                            <td>{{ info.regUser }}</td>
                            <td>{{ info.regDate }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <span>JSON 출력</span>
        <div id="result" class="container">
            <xmp> {{ result }} </xmp>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios',
  created () {
    this.fetchNotices()
  },
  data () {
    return {
      pageNo: 1,
      pageSize: 10,
      add_title: '',
      add_contents: '',
      add_status: '',
      add_regUser: '',
      select_id: 0,
      modify_id: '',
      modify_title: '',
      modify_contents: '',
      delete_id: '',
      result: '',
      list: null
    }
  },
  methods: {
    fetchNotices: function () {
      axios({
        method: 'GET',
        url: '/api/notice/resource',
        params: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
      }).then(response => {
        this.result = response.data
        this.list = response.data.data
      }).catch(ex => {
        console.error('ERR!!!!! : ', ex)
      })
    },

    addNotice: function () {
      axios.post('/api/notice/resource',
        { title: this.add_title, contents: this.add_contents, status: this.add_status, regUser: this.add_regUser }
      ).then(response => {
        this.result = response.data
        this.no = response.data.no
      }).catch(ex => {
        console.error('ERROR!!!!! : ', ex)
      })
    },

    fetchNoticeOne: function () {
      axios.get('/api/notice/resource/' + this.select_id)
        .then((response) => {
          this.result = response.data
        })
    },

    updateNotice: function () {
      axios.put('/api/notice/resource/',
        { id: this.modify_id, title: this.modify_title, contents: this.modify_contents }
      ).then(response => {
        this.modify_id = ''
        this.modify_title = ''
        this.modify_contents = ''
        this.modify_status = ''
        this.modify_regUser = ''
        this.result = response.data
      }).catch(ex => {
        console.error('ERROR!!!!! : ', ex)
      })
    },

    deleteNotice: function () {
      axios.delete('/api/notice/resource/' + this.delete_id)
        .then(response => {
          this.result = response.data
        }).catch(ex => {
          console.error('ERROR!!!!! : ', ex)
        })
    }

  }
}
</script>

<style>
@import url("http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osz-font-smoothing: grayscale;
    text-align: center;
    color : #2c3e50;
    margin-top : 60px;
}

.container {
    border: solid 1px gray;
    padding: 10px;
    margin-bottom: 10px;
    text-align: left;
}

#result {
    text-align: left;
    padding: 20px;
    border: solid 1px black;
}

.form-group {
    border: dashed 1px gray;
    padding: 5px 5px 5px 20px;
}

</style>
