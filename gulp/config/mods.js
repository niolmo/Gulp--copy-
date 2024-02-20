export const mods = {
	htmlmin: {
		collapseWhitespace: true 
	},

	pug : {
		pretty: true,
        data: {
          car: require("../data/cards.json")
        }
      },
	  webpack :  {
		mode:  "development"
	  },
	  imagemin: {
		verbose: true
		}
	}

