<template>
    <div class="edit-area" contenteditable="true" @input="handlerInput" v-on:keyup.enter="enterLine">
        <slot></slot>
    </div>
</template>

<script type="es6">
    export default {
        // render(createElement){
        //     return createElement(
        //         'div',
        //          {
        //             'class': {
        //                 'edit-area': true
        //             },
        //              props: {
        //                 myProp: 'bar'
        //              },
        //              attrs: {
        //                  contenteditable: true
        //              }
        //          },
        //          this.$slots.default
        //     );
        // },
        data(){
            return {

            }
        },
        methods: {
            handlerInput(event){
            },
            enterLine(event){
                this.$emit('newLine', event);
            }
        }
    }
</script>