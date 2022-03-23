cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/okeke-ugochukwu/Toodle.git main:vue-version-live
cd ..