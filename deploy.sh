npm run build
cd dist
git add -A
git commit -m 'deploy'
git push -f https://github.com/okeke-ugochukwu/Toodle.git vue-verion-live
cd ..