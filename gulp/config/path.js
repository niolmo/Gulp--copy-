// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
	build: {
		html :   buildFolder ,
		pug:   buildFolder ,
		css:   buildFolder  + '/css/',
		scss:   buildFolder  + '/css/',
		img:   buildFolder  + '/img/',
		js: buildFolder + '/js/',
		font : buildFolder + '/fonts/',
		svgicons:  buildFolder + '/img/svg'
	},
	src:{
		html :  srcFolder + '/*.html',
		pug :  srcFolder + '/*.pug',
		css :  srcFolder + '/css/*.css',
		scss :  srcFolder + '/scss/*.{scss, sass}',
		img:   srcFolder + '/img/*.{jpg,jpeg,png,gif,svg,webp}' ,
		js: srcFolder + '/js/*.js',
		font:  srcFolder + '/font/*.{woff,otf,otc,woff2,ttf,svg}',
		// svgicons:  srcFolder + '/svgicons/*.svg'
	},
	watch: {
		html : srcFolder +  '/**/*.html',
		pug : srcFolder +  '/**/*.pug',
		css : srcFolder +  '/**/*.css',
		scss :  srcFolder + '/**/*.{scss, sass}',
		img :  srcFolder + '/**/*.{jpg,jpeg,png,gif,svg,webp}',
		js: srcFolder + '/**/*.js',
		font:  srcFolder + '/**/*.{woff,otf,otc,woff2,ttf,svg}',
		// svgicons:  srcFolder + '/**/*.svg'
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}