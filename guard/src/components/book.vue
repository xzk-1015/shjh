<template>
    <div class="book">
        <div class="place"> 当前位置：<span>首页</span>><span>传过来的</span>><span>{{categoryItem}}</span> </div>
        <div class="itemOne clearfix">
            <div style="float:left"> 类型：</div>
            <div class="listOnediv" >
            <div v-for="(i,index) in categoryArr"  @click="categoryBtn(i,index)" :class="index==categoryIndex?'active':''">{{i.cate_name}}</div>
            </div>
        </div>
        <div class="itemTwo">
            <div style="float:left"> 智能排序：</div>
            <div class="listOnediv" >
               <div v-for="(i,index) in sortArr" @click="sortBtn(index)" :class="index==sortIndex?'active':''">{{i}}</div>
            </div>
        </div>
        <div class="video">
            <div class="videoBox" v-for="(item,index) in videoArr">
                <img :src="item.cover_img" alt="" >
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
                /*分类*/
                
                //传过来的id
                categoryId: 5,
                categoryItem:'图画书',
                /**/
                categoryArr: [],
                categoryIndex:'0',
                
                /*排序*/
                sortArr:['最新发布','最多喜欢','最多分享'],
                sortIndex:0,
                /**/
                sortId :'5',

                /*视频*/
                videoArr:[],

                id: 15,
            }
        },
        created() {
            // console.log(this.categoryArr);
            this.$http.get(`http://jzfp.anhui.xingyao100.com/api/v1/categorys/${this.categoryId}`).then(function (res) {
                this.categoryArr = res.data.data
                console.log(this.categoryArr)
            }, function () {
                console.log('请求失败');
            })
            this.$http.get(`http://jzfp.anhui.xingyao100.com/api/v1/pbooks/${this.id}`,{
                params: {
                    page: 1,
                    size: 12,
                    order_type:this.sortIndex
                }
            }).then(function (res) {
                this.videoArr = res.data.data
                console.log(this.videoArr)
            }, function () {
                console.log('请求失败');
            })
        },
        methods: {
            categoryBtn(item,index){
                // var whole = document.getElementById('whole')
                // console.log(whole)
                // whole.classList.remove("whole");
                this.categoryItem = item.cate_name
                // console.log(this.categoryItem)
                this.categoryIndex = index
                // console.log(this.categoryIndex)
                this.id = item.id
                if (this.id==15) {
                    this.$http.get(`http://jzfp.anhui.xingyao100.com/api/v1/pbooks/${this.id}`, {
                        params: {
                            page: 1,
                            size: 12,
                            order_type: this.sortIndex
                        }
                    }).then(function (res) {
                        this.videoArr = res.data.data
                        console.log(this.videoArr)
                    }, function () {
                        console.log('请求失败');
                    })
                } else if(this.id==16) {
                    this.$http.get(`http://jzfp.anhui.xingyao100.com/api/v1/ebooks/${this.id}`, {
                        params: {
                            page: 1,
                            size: 12,
                            order_type: this.sortIndex
                        }
                    }).then(function (res) {
                        this.videoArr = res.data.data
                        console.log(this.videoArr)
                    }, function () {
                        console.log('请求失败');
                    })
                }
                

            },
            sortBtn(index){
                // console.log(index)
                this.sortIndex = index
                this.sortId = index+1
                if (this.id==15) {
                    this.$http.get(`http://jzfp.anhui.xingyao100.com/api/v1/pbooks/${this.id}`, {
                        params: {
                            page: 1,
                            size: 12,
                            order_type: this.sortIndex
                        }
                    }).then(function (res) {
                        this.videoArr = res.data.data
                        console.log(this.videoArr)
                    }, function () {
                        console.log('请求失败');
                    })
                } else if(this.id==16) {
                    this.$http.get(`http://jzfp.anhui.xingyao100.com/api/v1/ebooks/${this.id}`, {
                        params: {
                            page: 1,
                            size: 12,
                            order_type: this.sortIndex
                        }
                    }).then(function (res) {
                        this.videoArr = res.data.data
                        console.log(this.videoArr)
                    }, function () {
                        console.log('请求失败');
                    })}
            }
        },
}
</script>

<style scoped>
body {
            background:url(http://jzfp.anhui.xingyao100.com/web/static/img/list_bg.34060a9.png);
        }

        * {
            margin: 0;
            padding: 0;

        }
        .clearfix:after,
        .clearfix:before {
            content: '';
            display: table;
            clear: both;
        }
        .book {
            width: 1200px;
            min-height: 500px;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.7);
            margin: 0 auto;
        }

        .place{
            width: 1100px;
            padding: 0 50px;
            height: 85px;
            line-height: 85px;  
        }

        .itemOne {
            width: 1110px;
            padding: 0 50px;
        }
        .itemOne div {
            height: 40px;
            line-height: 40px;
        }
        .listOnediv{
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
        }
        .listOnediv .active{
            background: rgb(0,160,233)
        }
        .listOnediv div{
            flex: 0 0  12.5%;
            text-align: center;
            border-radius: 20px
        }

        .itemTwo {
            margin-top:20px;
            width: 1110px;
            padding: 0 50px;
        }
        .itemTwo div {
            height: 40px;
            line-height: 40px;
        }
        .listTwodiv{
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
        }
        .listTwodiv .active{
            background: rgb(0,160,233)
        }
        .listTwodiv div{
            flex: 0 0 12.5%;
            text-align: center;
            border-radius: 20px
        }
        

        .video{
            width: 1110px;
            padding: 0 50px;
            margin-top:20px;
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
        }
        .videoBox{
            text-align: center;
            flex: 0 0 22%;
        }
        .videoBox img{
            font-family: Avenir,Helvetica,Arial,sans-serif;
            -webkit-font-smoothing: antialiased;
            color: #0e0e0e;
            list-style: none;
            text-decoration: none;
            width: 164.3px;
            height: 251px;
            border-radius: 17px;
            border: 2px dashed #278ed1;
            box-sizing: border-box;
        }
        .videoBox p{
            font-family: Avenir,Helvetica,Arial,sans-serif;
            -webkit-font-smoothing: antialiased;
            padding: 0;
            margin: 0;
            color: #0e0e0e;
            list-style: none;
            text-decoration: none;
            height: 54px;
            line-height: 54px;
            margin-bottom: 15px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
        }
</style>