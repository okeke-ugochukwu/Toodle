#!/usr/bin/env sh
set -e
npm run build
cd dist
git add .
git commit -m 'deploy'
git push -f https://github.com/okeke-ugochukwu/Toodle.git main:vue-verion:live
cd ..