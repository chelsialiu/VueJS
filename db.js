var app = new Vue({
  el: '#myapp',
  data: {
    users: "",
    id: 0
  },
  methods: {
    allRecords: function(){

      axios.get('ajaxfile.php')
      .then(function (response) {
         app.users = response.data;
      })
      .catch(function (error) {
         console.log(error);
      });
    },
    recordByID: function(){
      if(this.id > 0){
 
        axios.get('ajaxfile.php', {
           params: {
             id: this.id
           }
        })
        .then(function (response) {
           app.users = response.data;
        })
        .catch(function (error) {
           console.log(error);
        });
      }
    }
  }
})