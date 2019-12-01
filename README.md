# Muse 
Muse is a Spotify clone app. Done as part of a team project for the course SOEN343

# To Deploy the Backend

## Step 1
[Install Java 11 JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)


## Step 2
[Install MondoDB Locally](https://github.com/mongodb/homebrew-brew)
```bash
$ brew tap mongodb/brew
$ brew install mongodb-community
```

## Step 3
Install IntelliJ Ultimate


## Step 4 (Creating New Project in IntelliJ)

Open the project's `pom.xml` file when importing project
<img src="https://i.imgur.com/AZ1YeSV.png"
alt="Run"
style="float: left; margin-right: 10px;" />


Follow the next 4 steps  to create new project:
### 1
<img src="https://i.imgur.com/LAV5pJL.png"
alt="Run"
style="float: left; margin-right: 10px;" />

### 2
<img src="https://i.imgur.com/rOmjSjM.png"
alt="Run"
style="float: left; margin-right: 10px;" />

### 3
<img src="https://i.imgur.com/lHGve9c.png"
alt="Run"
style="float: left; margin-right: 10px;" />

### 4
<img src="https://i.imgur.com/mIuVZoh.png"
alt="Run"
style="float: left; margin-right: 10px;" />


## Step 5
Ensure some additional settings configured by selecting Preferences --> Languages & Frameworks --> Spring

<img src="https://i.imgur.com/g6Hr8Sa.png"
alt="Spring Setting"
style="float: left; margin-right: 10px;" />

## Step 6
Run a basic MongoDB server locally in the foreground:
```
$ mongod --config /usr/local/etc/mongod.conf
```

###  Make sure that the MongoDB server is running in the foreground before continuing to the next 2 steps

## Step 7
Run the MuseApplication:

<img src="https://i.imgur.com/JYJkYZz.png"
alt="Run"
style="float: left; margin-right: 10px;" />

## Step 8
If you are using regular code Editor  
Download npm, mongodb, maven, and the rest mentioned above. Then  

:
from root go inside the **back-end** folder and run these two commands to start the back-end server.
```mvn clean install``` then  
```mvn spring-boot:run```

from root go inside the **client** folder and run these two commands to start the front-end server
```npm install```
```npm run start```  
navigate to ***localhost:3000*** in your browser


