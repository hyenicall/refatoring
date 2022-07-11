import { getDefaultOwner } from './6-6.js'

const owner = getDefaultOwner()
// owner.firstName = '엘리' //set 불가능
console.log(owner.firstName)
console.log(owner.lastName)
