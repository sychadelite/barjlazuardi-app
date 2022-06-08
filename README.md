# Git
## Getting Started
- git remote add origin https://github.com/username/new_repo
- git remote -v
- git init
- git add .
- git commit -m "initial commit"
- git push -u origin master
- git push -f origin master:main

## Pull
- git log
- git status
- git branch
- git checkout master
- git pull origin master

## Push
- git log
- git status
- git branch
- git checkout master
- git push origin master

# Staging Heroku
### https://devcenter.heroku.com/articles/getting-started-with-laravel
- echo "web: vendor/bin/heroku-php-apache2 public/" > Procfile 
- git add . 
- git commit -m "Procfile for Heroku"
- heroku config:set APP_KEY=…

# Installation
- npm install
- composer install
- php artisan migrate

# Run
- php artisan serve --host 0.0.0.0
