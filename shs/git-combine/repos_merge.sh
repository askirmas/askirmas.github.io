#!/bin/bash
SubName="sub"
SubDir="sub"
SubRemote="../$SubName"
SubBranch="master"
SubInjectionName="submodule_origin"
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

# Prepare Additional Repository to be injected
cd "$SubName"
mkdir "$SubDir"
find * -maxdepth 1 -and -not -name "$SubDir" | xargs -d'\n' -I{} git mv {} "$SubDir"/
git commit -m "Preparation as subfolder move"
cd ..

# Swallowing
cd "$ProjName"
git remote add -f "$SubInjectionName" "$SubRemote"
# For even crazier stuff - use `git read-tree` like `git read-tree --preix=? -u remote/master:path`
git merge -X theirs --allow-unrelated-histories --no-edit "$SubInjectionName/$SubBranch"
git commit -m "Merge"
git remote rm "$SubInjectionName"
cd ..

exit
