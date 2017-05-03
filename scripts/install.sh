echo "Hello!"
sleep 1

echo "This script will add some helpful stuff to your ~/.bash_profile"
sleep 2

echo "I'm gonna add aliases, colors, spacing, and git information to your command line"
sleep 3

echo "Check out the readme for more details"
sleep 1

echo "Ok, let's start!"
sleep 1

curl -o- https://raw.githubusercontent.com/kangarang/ptwdi-shenanigans/master/scripts/.bash_profile >> ~/.bash_profile

source ~/.bash_profile

echo "All done! Enjoy your new shell!"
