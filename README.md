# Process Status Demo App

To execute this demo its needed:
  - NodeJS (latest stable version)
  - Java 8
  - Maven 3.2.x+

# How to build

1.- Install NodeJS

2.- Open a Terminal and clone this repo then, enter at the repository folder and install bower and bower dependencies. Finally build maven project.

```sh
$ git clone https://github.com/tlacuache987/process-mockup.git
$ cd process-mockup/
$ npm install -g bower
$ bower install
$ mvn clean package
```

# How to execute

Option 1: Simple execute using maven.

```sh
$ pwd
/<your-path>/process-mockup/
$ mvn spring-boot:run
```

open http://localhost:8888 in browser


---------------------------------------------------------------------------


Option 2: Simple execute using java.

```sh
$ pwd
/<your-path>/process-mockup/
$ java -jar target/process-mockup-0.0.1-SNAPSHOT.jar
```

open http://localhost:8888 in browser


---------------------------------------------------------------------------



# Running the app

First. Select a Process

![Select a process](https://cdn.pbrd.co/images/GOO091Q.png)

---------------------------------------------------------------------------


Then... just watch table.


![Watch table](https://cdn.pbrd.co/images/GOO0KZN.png)

---------------------------------------------------------------------------