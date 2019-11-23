# Muse 
Muse is a Spotify clone app. Done as part of a team project for the course SOEN343

# To Deploy the Backend

## Step 1
[Install MondoDB Locally](https://github.com/mongodb/homebrew-brew)
```bash
$ brew tap mongodb/brew
$ brew install mongodb-community
```

## Step 2
Install IntelliJ Ultimate

## Step 3
Open the project's `pom.xml` file when importing project

## Step 4
Ensure some additional settings configured:

![Spring Setting](https://imgur.com/g6Hr8Sa)

## Step 5
Run a basic MongoDB server locally in the foreground:
```
$ mongod --config /usr/local/etc/mongod.conf
```

## Step 6 
Run the MuseApplication:

![Run](https://imgur.com/JYJkYZz)

## Step 7
Test the REST API endpoint
```
$ curl localhost:8080/greeting
<!DOCTYPE HTML>
<html>
<head>
    <title>Getting Started: Serving Web Content</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<p>Hello, World!</p>
</body>
</html>
~
```

## Step 8
Start writing some good old React :)