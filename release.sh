#! /bin/bash
#
npm run pack

rm -rf release

mkdir release

cp -r ./dist/ release/components/

cp -r ./src/ release/

cp package.json release/package.json

cp README.md release/README.md

cd release

npm publish

