
const GetCripsValue = fuzzySet => {
	let MFHoax = new Map()
	MFHoax.set("T", 35)
	MFHoax.set("A", 50)
	MFHoax.set("Y", 80)

	let a = 0
	let b = 0

	fuzzySet.forEach((deg, hoax) => {
		a += deg * MFHoax.get(hoax)
		b += deg
	})

	return a / b

}

export default GetCripsValue