<template>
<div class="hello">
<h1><title></title></h1>
</div>

<div class="notes">
    <ul>
        <li v-for="(page, index) of pages" class="page">
            <div> {{page.title }}</div>
            <div> {{page.content }}</div>

        </li>
        <li class="new-note">
            <v-btn fab dark color="indigo" @click="newNote()">
                <v-icon dark>add</v-icon>
            </v-btn>
        </li>

    </ul>
</div>
</template>

<script>
export default{
    name:'Notes',
    props:['pages'],
    methods: {
        newNote(){
            this.$emit('new-note')
        }
    }
}
</script>

<style>
h3 {
    margin: 40px 0 0 ;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
   display: inline-block;
   margin: 0 10 px;

}

a {
    color: #42b983;
}


</style>