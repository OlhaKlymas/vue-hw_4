export default {
    props: {
        type:{
            type: String,
            default: 'button'
        },
        label: {
            type: String,
            default: 'This is button from mixin'
        }
    },
    methods:{
        btnMixinHandler(someFn){
         console.log('Hello from btnMixin')
            someFn()
            this.$emit('mixinEvent')
        }
    }
}