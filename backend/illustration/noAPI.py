username_pass = {
    "beleswar": "123",
    "samridh": "456",
    "lug": "789",
    "admin": "admin"
}

print("Hello User, it's time to authenticate!")
uname = input("Enter your username: ")
passd = input("Enter your password: ")

for keys in username_pass:
    if(uname==keys and passd==username_pass[keys]):
        print("Congrats, you are authenticated!")
else:
    print("Sorry, you are not in our database!")
