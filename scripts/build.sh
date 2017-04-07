#! /bin/bash
./node_modules/.bin/browserify -o build/js/background-bundle.js src/js/background.js -t [ babelify --presets [ es2015 ] ]
./node_modules/.bin/browserify -o build/js/content-bundle.js src/js/content.js -t [ babelify --presets [ es2015 react ] ]
npm run bower_install
echo "Ran build at `date`"
