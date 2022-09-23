<script>
    //js


</script>


<template>
    <section>
        <img src="src/assets/img/WebElements/pinkball.png" class="ball">
        <div>
            <h1 class="titleText --pink">The community</h1>
            <a class="normalText --small --lightBlack">Where you can read book reviews from other book lovers and also share your thoughts about the books you read or want to buy.</a>
            <button class="button --pink">Subscribe</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import 'src/assets/main.scss';
    
    section {
        position:relative;

        div {
            display: flex;
            flex-direction: column;
            padding: 40px;
            margin-left: 130px;
            
            * {
                margin-bottom: 15px;
            }

            .normalText{
                width:335px;
            }

            .button {
                margin: 0px;
            }
        }

        .ball {
            position: absolute;
            left:-80px;
            top:-100px;
            z-index: 50;
        }
    }

</style>