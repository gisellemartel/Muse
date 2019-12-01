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
Install IntelliJ Ultimate. If using a regular text editor, see step 7.


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

If you are using regular code Editor  
Download mongodb, maven and npm and the rest mentioned above. Then  

:
from root go inside the **back-end** folder and run these two commands to start the back-end server.
```mvn clean install``` then  
```mvn spring-boot:run```

## Step 8 (Run the Client app)

###  Again, ensure that both the MongoDB server and the back-end app are running in the foreground before continuing

### 1
[Download npm package manager](https://www.npmjs.com)

### 2
from root go inside the **client** folder using Terminal/Commandline and run these two commands to start the front-end server
```npm install```
```npm run start```  

### 3
navigate to ***localhost:3000*** in your browser


