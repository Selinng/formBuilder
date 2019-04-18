<template>
    <div class="form-group">
        <label for="name" class="col-sm-3 control-label">{{componentattr ? componentattr.title : defaultData.title}}</label>
        <div class="col-sm-9">
            <input type="hidden" v-model="selectstar">
            <div class="starratingbox">
                <span 
                    v-for="(item, index) in stararr" 
                    :key="item.index" 
                    @click="select(index)" 
                    @mouseenter="enter(index)"
                    @mouseleave="leave()"
                    :class="{
                        starselect: item.selected,
                        starhover: item.hovered
                    }"
                ></span>
                <a @click="clearSelect">×</a>
            </div>
            <p class="help-block">{{componentattr ? componentattr.remarks : defaultData.remarks}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            selectstar: 0,
            allstarcount:5,
            stararr: [],
            defaultData: {
                componentname: 'starrating',
                title: 'star-rating',
                remarks: '零星视为无效评级'
            }
        }
    },


    props: ['componentattr'],

    created() {
        this.stararr = Array.from({length:this.allstarcount}, i => i = {selected: false, hovered: false})
    },

    computed: {
        // stararr() {
        //     return new Array(this.allstarcount).fill({selected: false, hovered: false})
        // }
    },

    methods: {
        select (selectindex) {
            this.selectstar = selectindex + 1
            this.stararr.forEach((item, index) => {
                if (selectindex >= index) {
                    item.selected = true
                } else {
                    item.selected = false
                }
            })
        },

        enter(enterindex) {
            this.stararr.forEach((item, index) => {
                if (enterindex >= index) {
                    item.hovered = true
                } else {
                    item.hovered = false
                }
            })
        },

        leave() {
            this.stararr.forEach((item, index) => {
                item.hovered = false
            })
        },

        clearSelect() {
            this.selectstar = 0
            this.stararr.forEach(item => item.selected = false)
        }
    }
}
</script>
<style scoped>
.starratingbox span{
    display: inline-block;
    width: 27px;
    height: 27px;
    background: url(/static/images/star.svg) no-repeat;
    background-size: 100% 100%;

}
.starratingbox .starselect{
    background: url(/static/images/star-select.svg) no-repeat;
    background-size: 100% 100%;
}
.starratingbox .starhover{
    background: url(/static/images/star-hover.svg) no-repeat;
    background-size: 100% 100%;
}
.starratingbox a{
    cursor: pointer;
    text-decoration: none;
    color: #888;
    font-size: 20px;
    line-height: 27px;
}
.starratingbox a:hover{
    color: #000;
}
</style>

