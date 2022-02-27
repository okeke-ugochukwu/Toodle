npm run build
cd dist
git add -A
git commit -m 'deploy'
git push -f https://github.com/okeke-ugochukwu/Toodle.git main:vue-version-live
cd ..