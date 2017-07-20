module.exports = function(input){
  let status = [];
  let today = new Date()
  input.forEach( function(num){
    if(num.date < today ) { status.push('closed')
} else { status.push(num.date) }
  })
  return status;
}

//
// getAge: function() {
//           let today = new Date();
//           let birthday = new Date(this.birthday);
//           let age = today.getFullYear() - birthday.getFullYear();
//           let month = today.getMonth() - birthday.getMonth();
//           if(month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
//             age-=1;
//           }
//           return age;
