import GetFuzzyInput from './Fuzzification.js'
import GetFuzzyOutput from './Interference.js'
import GetCrispValue from './Difuzzification.js'


const berita = [
	{
		judul: "B01",
		emosi: 97,
		provokasi: 74
	},
	{
		judul: "B02",
		emosi: 36,
		provokasi: 85
	},
	{
		judul: "B03",
		emosi: 63,
		provokasi: 43
	},
	{
		judul: "B04",
		emosi: 82,
		provokasi: 90
	},
	{
		judul: "B05",
		emosi: 71,
		provokasi: 25
	},
	{
		judul: "B06",
		emosi: 79,
		provokasi: 81
	},
	{
		judul: "B07",
		emosi: 55,
		provokasi: 62
	},
	{
		judul: "B08",
		emosi: 57,
		provokasi: 45
	},
	{
		judul: "B09",
		emosi: 40,
		provokasi: 65
	},
	{
		judul: "B10",
		emosi: 57,
		provokasi: 45
	},
	{
		judul: "B11",
		emosi: 77,
		provokasi: 70
	},
	{
		judul: "B12",
		emosi: 68,
		provokasi: 75
	},
	{
		judul: "B13",
		emosi: 60,
		provokasi: 70
	},
	{
		judul: "B14",
		emosi: 82,
		provokasi: 90
	},
	{
		judul: "B15",
		emosi: 48,
		provokasi: 85
	},
	{
		judul: "B16",
		emosi: 80,
		provokasi: 68
	},
	{
		judul: "B17",
		emosi: 60,
		provokasi: 72
	},
	{
		judul: "B18",
		emosi: 50,
		provokasi: 95
	},
	{
		judul: "B19",
		emosi: 100,
		provokasi: 18
	},
	{
		judul: "B20",
		emosi: 11,
		provokasi: 99
	},
	{
		judul: "B21",
		emosi: 58,
		provokasi: 63
	},
	{
		judul: "B22",
		emosi: 68,
		provokasi: 70
	},
	{
		judul: "B23",
		emosi: 64,
		provokasi: 66
	},
	{
		judul: "B24",
		emosi: 57,
		provokasi: 77
	},
	{
		judul: "B25",
		emosi: 77,
		provokasi: 55
	},
	{
		judul: "B26",
		emosi: 98,
		provokasi: 64
	},
	{
		judul: "B27",
		emosi: 91,
		provokasi: 59
	},
	{
		judul: "B28",
		emosi: 50,
		provokasi: 95
	},
	{
		judul: "B29",
		emosi: 95,
		provokasi: 55
	},
	{
		judul: "B30",
		emosi: 27,
		provokasi: 79
	},
]


berita.map(b => {
	let fuzzyInput = GetFuzzyInput(b.emosi, b.provokasi);
	let fuzzyOutput = GetFuzzyOutput(fuzzyInput)
	let crispValue = GetCrispValue(fuzzyOutput)

	console.log('------------------------------')
	console.log(`${b.judul} : ${(crispValue > 70) ? "Ya" : "Tidak"} : ${crispValue}`)
})

// console.log('------------------------- FUZZIFICATION')
// let fuzzyInput = GetFuzzyInput(100, 18);
// console.log(fuzzyInput)

// console.log('------------------------- INTERFERENCE')
// let fuzzyOutput = GetFuzzyOutput(fuzzyInput)
// console.log(fuzzyOutput)

// console.log('------------------------- INTERFERENCE')
// let crispValue = GetCrispValue(fuzzyOutput)
// console.log(crispValue)

