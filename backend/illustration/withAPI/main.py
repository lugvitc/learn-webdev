from api import checkUser

print("Hello User, it's time to authenticate!")
uname = input("Enter your username: ")
passd = input("Enter your password: ")

if(checkUser(uname, passd)):
    print("Congrats, you are authenticated!")
else:
    print("Sorry, you are not in our database!")
