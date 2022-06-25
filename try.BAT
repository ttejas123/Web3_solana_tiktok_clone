@echo off
git status
git add .
git status
git commit -m "New Changes `%DATE%_%TIME%`"
pause