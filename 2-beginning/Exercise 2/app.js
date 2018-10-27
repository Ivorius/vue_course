new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          showAlert: function() {
            alert('Alert!');
          },
          showValue: function(event) {
            alert(event.target.value);
          //  this.value = event.target.value;
          }
        }
    });
