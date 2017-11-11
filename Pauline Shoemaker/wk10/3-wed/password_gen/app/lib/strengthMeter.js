export default function getStrength(password) {
  var points = 0
  if(password.search(/([a-z])/) != -1){
    points += 1
    // console.log('has lowercase')
  }
  if(password.search(/([A-Z])/) != -1){
    points += 1
    // console.log('has uppercase')
  }
  if(password.length >= 8){
    points += 1
    // console.log('is over 8 chars')
  }
  if(password.search(/([\d])/) != -1){
    points += 1
    // console.log('has a num')
  }
  if(password.search(/([^\d^\s^\w])/) != -1){
    points += 1
    // console.log('has special char')
  }
  // console.log(points)
  if(points === 5){
    return 'secure'
  } else if (points > 3) {
    return 'medium'
  } else {
    return 'weak'
  }
}
