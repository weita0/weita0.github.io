#!/bin/bash

hugo

cd public
git init
git remote add origin https://github.com/weita0/blog-pages.git
git add .
git commit -m "Deploy $(date)"
git push -f origin main