/*
 * MF = "Membership Function"
*/
const MFEmosi = [ // Trapesium
	{	// Tidak suka
		linguistik: "TS", 
		a: 0,
		b: 0,
		c: 20,
		d: 30
	},
	{	// Netral
		linguistik: "N",
		a: 20,
		b: 30,
		c: 50,
		d: 60
	},
	{	// Suka
		linguistik: "S",
		a: 50,
		b: 60,
		c: 80,
		d: 90
	},
	{	// Sangat Suka
		linguistik: "SS",
		a: 80,
		b: 90,
		c: 100,
		d: 100
	},
]

const MFProvokasi = [	// Trapesium
	{	// Rendah
		linguistik: "R", 
		a: 0,
		b: 0,
		c: 20,
		d: 35
	},
	{	// Medium
		linguistik: "M",
		a: 20,
		b: 35,
		c: 40,
		d: 55
	},
	{	// Tinggi
		linguistik: "T",
		a: 40,
		b: 55,
		c: 70,
		d: 85
	},
	{	// Sangat Tinggi
		linguistik: "ST",
		a: 70,
		b: 85,
		c: 100,
		d: 100
	}
]

const GetFuzzyInputProvokasi = x => { // Trapesium
	let arrProvokasi = MFProvokasi.filter(p => x >= p.a && x <= p.d)
	return arrProvokasi.map(p => {
		let n = {}
		n.linguistik = p.linguistik

		n.deg = (x <= p.a || x >= p.d) ? 0 :
				(x > p.a && x < p.b) ? (x - p.a) / (p.b - p.a) :
				(x >= p.b && x <= p.c) ? 1 :
				-1 * (x - p.d) / (p.d - p.c)

		return n
	})

	// provokasi = [
	// 	{
	// 		linguistik: 'M',
	// 		deg: 0.8

	// 	},
	// 	{
	// 		linguistik: 'T',
	// 		deg: 0.2
	// 	}
	// ]
}

const GetFuzzyInputEmosi = x => { // Trapesium
	let arrEmosi = MFEmosi.filter(e => x >= e.a && x <= e.d)
	return arrEmosi.map(e => {
		let n = {}
		n.linguistik = e.linguistik

		n.deg = (x <= e.a || x >= e.d) ? 0 :
				(x > e.a && x < e.b) ? (x - e.a) / (e.b - e.a) :
				(x >= e.b && x <= e.c) ? 1 :
				-1 * (x - e.d) / (e.d - e.c)

		return n
	})
}

const GetFuzzyInput = (emosi, provokasi) => { // Trapesium
	let a = new Object();	
	a.provokasi = GetFuzzyInputProvokasi(provokasi);
	a.emosi = GetFuzzyInputEmosi(emosi);
		
	return a
}

export default GetFuzzyInput