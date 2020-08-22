#!/bin/bash
SubName="sub"
SubDir="sub"
SubRemote="../$SubName"
SubBranch="master"
ProjName="project"

# Init demonstration
rm -rf "$SubName" "$ProjName"
mkdir "$SubName"
mkdir "$ProjName"

# Init Additional Repository
cd "$SubName"
git init && echo "sub repo" > readme.md
git add . && git commit -m "Init sub"
cd ..

# Init main repo
cd "$ProjName"
git init  && echo "project" > readme.md
git add . && git commit -m "Init main"
cd ..

# Add as submodule
cd "$ProjName"
git submodule add "$SubRemote"
git add . && git commit -m "Add submodule"
cd ..

# magic
cd "$ProjName"
mv "$SubDir" "${SubDir}_"
git submodule deinit "$SubDir"
git rm "$SubDir"
mv "${SubDir}_" "$SubDir"
rm -rf "$SubDir/.git" 
git add . && git commit -m "Gut subrepo"
exit 0