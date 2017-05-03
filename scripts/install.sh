echo 
echo "Hello!"
sleep 1
echo 
echo "This script will add some helpful stuff to your ~/.bash_profile"
sleep 2
echo 
echo "I'm gonna add aliases, colors, spacing, and git information to your command line"
sleep 3
echo 
echo "Check out the readme for more details"
sleep 1
echo 
echo "Ok, let's start!"
sleep 1
echo 
curl -o- https://raw.githubusercontent.com/kangarang/ptwdi-shenanigans/master/scripts/.bash_profile >> ~/.kang

source ~/.bash_profile
echo 
echo 
echo "All done! Enjoy your new shell!"
