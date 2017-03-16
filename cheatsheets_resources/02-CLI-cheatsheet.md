# Command line interface
- CLI stands for Command Line Interface
  - Think: Terminal / Bash / Shell / Console
- GUI stands for Graphical User Interface
  - Think: Finder / Windows explorer

CLI can be frustrating at first -- it's not visually appealing and it takes a little time getting used to the syntax. But once you get the hang of it, it's actually not very hard to use!

CLI is how developers directly control a computer. It is by far the most powerful tool on the computer, and a lot of actions can only be done through the command line. CLI can execute everything from simple actions (like creating, deleting, moving, copying) to complex actions (like git, compiling code, or deploying a server).

Using the CLI will vastly increase your professional level as a developer.

## Common commands
Command | Description
--- | ---
`pwd` | Print full path to working directory
`ls` | List
`cd [directory]` | Change directory -- move to a different folder
`.` | Represents current directory
`..` | Represents parent directory
`cd ../` | Move 1 directory level up
`cd ../../` | Move 2 levels up
`mkdir [directory]` | Make directory / create a folder
`touch [file]` | Create file
`mv [source] [destination]` | Move or rename a file / directory
`cp [source] [destination]` | Copy a file / directory
`rm [path]` | Remove a file / directory
`atom .` | Open this directory in atom
`atom [file]` | Open file in atom
`subl [file]` | Open file in sublime
`pbcopy < [file]` | Copy file contents to clipboard
`echo 'text' >> [path]` | Directly adds text to a file

NOTE: when moving, copying, or removing directories, use the `-r` flag


## File structure
#### Basic Example
```bash
isaackang ~/Desktop/dummy on master[?]
$
```
#### Let's break it down
| User | Working directory | Git branch | Next command |
| ------- | ------- | ------- | ------- |
| isaackang | ~/Desktop/dummy | on master[?] | $ |

##### "Working directory"
Means: current location in the computer's file structure -- WHERE you are right now -- the wd in "pwd"

#### Root - `/`
Uppermost directory of hard drive, the first `/` in any absolute path
- In here, we have Users, Volumes, Library, Applications, etc.

#### Home - `~`
Uppermost directory for current User
- In here, we have Desktop, Downloads, Documents, Movies, etc.

#### You can access these two shortcuts (`/` and `~`) from any directory!
For example..

If i'm in `~/Desktop/dir_1/dir_2/dir_3`, I can type `cd /`
```bash
isaackang ~/Desktop/dir_1/dir_2/dir_3
$ cd /

isaackang /
$ pwd
/
```
and I'll be in the root directory

...or type `cd ~`

```bash
isaackang ~/Desktop/dir_1/dir_2/dir_3
$ cd ~

isaackang ~
$ pwd
/Users/isaackang
```
and I'll be in the home directory
Notice: Home is denoted as tilde `~`, but it's actually `/Users/isaackang`


### Tips
- Create a directory you will use for this class and know where it’s located so you always know where your files are.
- Similarly, always know what file you are editing and be sure it’s the one you intend.
- You can [command-click (hold down ⌘ and click) the proxy icon of a window](http://lifehacker.com/5791407/manage-files-from-their-title-bar-icons-in-os-x) to see where the file is located.
- Resize your terminal windows to fill up the entire screen so you can read output and error messages more easily —- if you have a tiny terminal window, lines will wrap, making it much more difficult to read output and understand what’s going on
- Up and down arrow keys will move back and forth through the history of commands you’ve typed —- don’t waste time retyping the same commands over and over again
- You can drag files and directories (including proxy icons) onto Terminal to paste their full path into the command line.
- You can open an entire directory of files in Sublime by dragging the directory onto Sublime.
- `⌘ + T` will open a new tab
- `Tab` will autocomplete things like commands and filenames
- `Ctrl + C` will kill running programs
