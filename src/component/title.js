/**
 * Created by ouyangshan09 on 2017/3/17.
 * 测试render函数
 */

export default {
    render(createElement){
        return createElement(
            'h' + this.level,
            this.$slots.default
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
}