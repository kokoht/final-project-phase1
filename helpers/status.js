module.exports = function(input){
  let status = [];
  let today = new Date()
  input.forEach( function(num){
    if(num.date < today ) { status.push('***closed***')
} else { status.push(num.date) }
  })
  return status;
}
