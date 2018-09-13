#! /bin/bash
#
npm run pack

rm -rf release

mkdir release

cp -r ./dist/ release/components/

cp -r ./src/ release/

version=$(grep "version" package.json | head -n 1 | awk -F'"' '{print $4}')

s=`cat <<EOF
{
    "name": "rong-ui",
    "version": "$version",
    "description": "A Vue.js 2.0 UI Toolkit for Web.",
    "author": "rong-ui",
    "keywords": [
        "rong-ui"
    ],
    "bugs": {
        "url": "https://github.com/rong360/rong-ui/issues"
    },
    "homepage": "https://github.com/rong360/rong-ui",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/rong360/rong-ui.git"
    },
    "main": "components/rong-ui.js",
    "predependencies": {
        "vue": "^2.3.3"
    },
    "contributors": [
      {
        "name": "List of Acorn contributors. Updated before every release."
      },{
        "name": "MrBackKom && Ingid.Zhang && zyx"
      }
    ],
    "engines": {
      "node": ">= 4.0.0",
      "npm": ">= 3.0.0"
    },
    "browserslist": [
        "> 1%",
        "last 2 versions",
        "last 10 Chrome versions",
        "last 5 Firefox versions",
        "Safari >= 6",
        "not ie <= 8"
    ],
    "license": "MIT"
}

EOF`
echo "$s" > release/package.json


cp README.md release/README.md

cd release

npm publish




