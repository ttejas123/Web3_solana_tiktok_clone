@echo off
git status
git add .
git status
git commit -m "New Changes `%DATE%_%TIME%`"
git push origin Master
npm start
pause