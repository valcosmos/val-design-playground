#!/bin/bash
set -e

pwd

remote=$(git config remote.origin.url)

echo "remote=>" $remote

mkdir -pv val-design-pg

cd val-design-pg

git config --global user.email "$V_EMAIL"
git config --global user.name "$V_NAME"

git init

git remote add origin "$remote"

echo "email:" $V_EMAIL
echo "name:" $V_NAME
echo "sitesource": $V_DIST

if git rev-parse --verify origin/gh-pages; then
  git checkout gh-pages
  git rm -rf .
else
  git checkout --orphan gh-pages
fi

cp -a ../${V_DIST}/* ./

ls -la

git add .

git commit -m "deploy val-design-pg"

git push origin gh-pages -f

cd ..

rm -rf val-design-pg

echo "Success"
