import GetFuzzyInput from './Fuzzification.js'
import GetFuzzyOutput from './Interference.js'

let x = GetFuzzyInput(26, 76);
console.log(x)
let a = GetFuzzyOutput(x)
console.log(a)


// let bla = new Map()

// a.map(o => {
// 	if (!bla.has(o.hoax)) {
// 		bla.set(o.hoax, o.deg)
// 	} else {
// 		// if (bla.get(o.hoax))
// 		// console.log(o.deg)
// 		if (o.deg > bla.get(o.hoax)) {
// 			bla.set(o.hoax, o.deg)
// 		}
// 	}
// 	// console.log(bla.get(o.hoax))
// })

// console.log(bla)