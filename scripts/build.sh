#! /bin/bash
./node_modules/.bin/browserify -o build/js/background-bundle.js src/js/background.js -t [ babelify --presets [ es2015 ] ]
./node_modules/.bin/browserify -o build/js/client-bundle.js src/js/client.jsx -t [ babelify --presets [ es2015 react ] ]
cp popup.html build/popup.html
cp manifest.json build/manifest.json
echo "Ran build at `date`"