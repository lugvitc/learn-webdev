username_pass = {
    "beleswar": "123",
    "samridh": "456",
    "lug": "789",
    "admin": "admin"
}

def checkUser(uname, passd):
    for keys in username_pass:
        if(uname==keys and passd==username_pass[keys]):
            return True
    else:
        return False
