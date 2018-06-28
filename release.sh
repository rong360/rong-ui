#! /bin/bash
#
npm run build

rm -rf release

mkdir release

cp -r ./dist/ release/lib/

cp -r ./src/components/ release/lib/
cp -r ./src/util/ release/util/
cp -r ./src/assets/ release/assets/
cp -r ./src/directives/ release/directives/


cp release.package.json release/package.json

cp release.README.md release/README.md

cd release

npm publish

cd ..

rm -rf release