# SellerUp API


# Getting started
- Clone the repository
```
git clone https://gitlab.com/sellerup/sellerup-back.git sellerup-back
```

- Install dependencies
```
cd sellerup-back
npm install
```

- Configure your mongoDB server
```bash
# create the db directory
sudo mkdir -p /data/db
# give the db correct read/write permissions
sudo chmod 777 /data/db

# starting from macOS 10.15 even the admin cannot create directory at root
# so lets create the db diretory under the home directory.
mkdir -p ~/data/db
# user account has automatically read and write permissions for ~/data/db.
```
- Start your mongoDB server (you'll probably want another command prompt)
```bash
mongod

# on macOS 10.15 or above the db directory is under home directory
mongod --dbpath ~/data/db
```
- Build and run the project
```
npm run build
npm start
```