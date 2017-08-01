# Git
[Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

Git provides amazing benefits for programmers. Git is a **version-control tool** that keeps a record of *snapshots* of your code as it **changes**. Git was invented by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), the same dude that wrote the Linux kernel (Linux OS, Android OS, Chrome OS).

Git keeps track of the **changes** (not the whole files) you make in your code. This is very useful when debugging complex code because you can easily see the difference between 2 versions of the same file.

A git repository (**repo** for short) is the entire group of code that is being tracked by git. It's the folder that contains all the code for your project.

The command `git init` enables git in the working directory, meaning every change that's made inside that directory will now be tracked by git. This includes creating new files and folders within the working directory. Once git is enabled in a repo/directory, there's no need to `git init` on its sub-directories. If you do, you're gonna have some funky commits.

One way to check to see if you're in a git repo is to type `git status` in your terminal. If you're not in a git repo, it'll say something like this: `fatal: Not a git repository (or any of the parent directories): .git`

<!-- The easiest way to see if you're in a git repo is to check your terminal. If there's a git branch at the end, it means you're in a git repo (eg. `isaackang ~/Desktop/shenanigans on (master)`). -->

<hr>

## Something to note before moving forward
Typically, when something is typed inside of square brackets like this: `[clues]` ... it means "HEY, don't take this literally, but use it as a reference for the **type** of info that it represents! Replace these brackets and whatever is in them with your version of it."

It's just a placeholder. A variable.

What goes there instead? It depends on you!

#### Examples
Variable command | Meaning | Your input (if you feel like it)
--- | --- | ---
`cd [directory]` | Change to an actual directory in your computer | `cd Desktop` , `cd ..` , `cd ~`
`touch [file]` | Create a file, you get to name it | `touch index.html`
`git commit -m "[message]"` | Commit a change with a specific message | `git commit -m "created directory structure"`
`git push [remote] [branch]` | Push to one of your specific remotes on a specific branch | `git push origin master`

<hr>

## General flow of Git
1. `git init` - Enable git in the working directory, which becomes the top-level (root) directory of a repo/project. Git will now start tracking changes in this repo.
1. Make some changes in the project and save your file(s).
1. `git add [path]` - "stage" the changes, specifying which changes you want to commit. You may not see this as a necessary step just yet, but you will soon find that it's one of the best features in git. Say for example you are working on two separate files, fixing two different bugs - one that's easy peasy, and another that's breaking your brain. You fix the baby bug and you want to implement the bug fix into your web app. That's great, but what about the other bug that's only partially fixed? The staging area allows us to have complete control over the changes that we commit.
1. `git commit -m "[message]"` - commit those changes with a message that **describes the changes** that were made.
1. `git push origin master` - publish your commits to your GitHub remote repo.

<hr/>

### Read This
Steps 1 - 4 happened on your computer's hard drive. **No Internet**. Git helped you make controlled, organized changes to your work **locally**.

Step 5, you used the **Internet** to publish your work along with your git history. Now your project exists in a second place **remotely**.

<hr/>

## Local vs Remote
A **local** repo is stored on your computer's hard drive.

A **remote** repo is a copy of your local repo, stored on the Internet (eg. GitHub).

**Branches** are used for many reasons like testing parts of code and working with other developers.

We'll see different types of remotes and branches soon. For now, remember:

**Main remote** - `origin` (your GitHub)

**Main branch** - `master`

### Common local commands
Command | Description
--- | ---
`git help -a` | List available git commands
`git init` | Enables git in working directory
`git status` | Show changes in working directory
`git log` | Show all commits
`git diff` | Show changes to tracked files
`git add [file]` | Stage changes to [file]
`git add .` | Stage all changes in working directory
`git commit -m '[message]'` | Commit staged changes with [message]
`git branch` | Show all local branches
`git branch [branch]` | Create branch [branch]
`git checkout [branch]` | Switch from current branch to [branch]
`git merge [branch]` | Pull changes from [branch] and combine with current working branch
`git branch -d [branch]` | Delete local [branch]
`rm -rf .git` | Remove git from working directory

### Common remote commands
Command | Description
--- | ---
`git remote -v` | Show all remotes
`git clone [URL]` | Clone (copy) remote repo from [URL] to working directory (local)
`git remote add [remote] [URL]` | Add [remote] and set the [URL]
`git push origin master` | Publish local commits to origin
`git pull origin master` | Update local repo with changes from origin
`git push [remote] [branch]` | Publish local commits to [remote]
`git pull [remote] [branch]` | Update local repo with changes from [remote]
`git branch -r` | Show all remote branches
`git push origin --delete [branch]` | Delete remote [branch]


<!-- ### Git Merging

#### Example
Let's merge our changes from branch (let's call it nanigans)

After you make some changes on the nanigans branch, you want to merge those changes INTO the master branch

`git checkout master` -- switch to master branch

`git merge nanigans` -- pull the commits from the nanigans branch and combine them with the master branch



**HEAD**: last state of the repo that the merge is going INTO
- If you're bringing in changes from another branch, HEAD is the working branch

**>>>>**: points to newer commit -- the one that is trying to merge -->
