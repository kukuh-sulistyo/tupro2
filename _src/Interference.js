const FuzzyRules = [
	{
		emosi: "TS",
		provokasik: "R",
		hoax: "T"
	},
	{
		emosi: "TS",
		provokasi: "M",
		hoax: "A"
	},
	{
		emosi: "TS",
		provokasi: "T",
		hoax: "A"
	},
	{
		emosi: "TS",
		provokasi: "ST",
		hoax: "Y"
	},
	{
		emosi: "N",
		provokasi: "R",
		hoax: "T"
	},
	{
		emosi: "N",
		provokasi: "M",
		hoax: "A"
	},
	{
		emosi: "N",
		provokasi: "T",
		hoax: "A"
	},
	{
		emosi: "N",
		provokasi: "ST",
		hoax: "Y"
	},
	{
		emosi: "S",
		provokasi: "R",
		hoax: "T"
	},
	{
		emosi: "S",
		provokasi: "M",
		hoax: "A"
	},
	{
		emosi: "S",
		provokasi: "T",
		hoax: "Y"
	},
	{
		emosi: "S",
		provokasi: "ST",
		hoax: "Y"
	},
	{
		emosi: "SS",
		provokasi: "R",
		hoax: "T"
	},
	{
		emosi: "SS",
		provokasi: "M",
		hoax: "T"
	},
	{
		emosi: "SS",
		provokasi: "T",
		hoax: "Y"
	},
	{
		emosi: "SS",
		provokasi: "ST",
		hoax: "Y"
	},
]

const GetFuzzyOutput = input => {
	let output = new Map()
	input.emosi.map(e => {
		input.provokasi.map(p => {
			// console.log(p.linguistik + "-" + e.linguistik)
			let o = {
				hoax: FuzzyRules.filter(f => f.emosi == e.linguistik && f.provokasi == p.linguistik)[0].hoax,
				deg: Math.min(e.deg, p.deg)
			}
			
			if (!output.has(o.hoax)) {
				output.set(o.hoax, o.deg)
			} else {
				if (o.deg > output.get(o.hoax)) {
					output.set(o.hoax, o.deg)
				}
			}

		})
	})
	return output
}

export default GetFuzzyOutput