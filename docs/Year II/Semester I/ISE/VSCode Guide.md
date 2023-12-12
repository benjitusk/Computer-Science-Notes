## Why you should _not_ do this
The instructions for the ISE MiniProject strongly recommend against using VSCode, instead suggesting IDEs such as Eclipse or IntelliJ IDEA. I believe this is for the following reasons:

- Eclipse and IDEA are built specifically for Java.
	- Meaning, they come with built in support for Java.
- The instructors are more used to those IDEs.
- Those IDEs take care of most of the project setup.
- You may already be comfortable with those IDEs.

## Why you should do this
Well, the reason *I’m* doing this is because I absolutely love VSCode. I have my theme set up, and my custom keyboard shortcuts, etc. I’m already comfortable with VSCode and I don’t want to learn the layout of another IDE. In short, I’m stuck in my ways. Here are some other reasons to do this:

- VSCode is awesome.
- There are extensions in VSCode that are not part of other IDEs.
- You’re a freak and want to go through the process of configuring everything yourself.

---

## 1. Installing VSCode
You can download VSCode from [here](https://code.visualstudio.com/download). 
I’m not going to go into so much detail for this one, I’m assuming that if you want to stick it out with VSCode, you already have it installed or know how to get it up and running.

## 2. Setting up Java support in VSCode
I’m assuming you have java already installed on your computer. To check, run this in a terminal / command prompt: `java --version`. You should see an output like this:
```
java 17.0.5 2022-10-18 LTS
Java(TM) SE Runtime Environment (build 17.0.5+9-LTS-191)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.5+9-LTS-191, mixed mode, sharing)
```
As you can tell, I’m running Java at version 17. I think you should be good with anything as early as Java 12, but I haven’t tested that.
If you get a “command not found” error, you’ll have to figure out how to install Java on your computer. There are lots of resources online for that, so I’m not going to go through that here.

I’m using the Extension Pack for Java by Microsoft (Extension ID: `vscjava.vscode-java-pack`).
This comes with a bunch of things including IntelliSense, Java Project Management, Test Running, language support, etc.

I’m also using Maven to manage the project builds. The extension pack has built in integration with Maven, but you may need to install Maven on your computer before you can use it. On MacOS, you can use `brew install maven`, and confirm the installation with `mvn -v`.

With that all done, VSCode is now set up to handle Java projects. Here’s some chocolate to celebrate: 🍫.

## 3. Creating the Java Project
1. In VSCode, open the Command Palette (<kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> or <kbd>CMD</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd>) and run `> Java: Create Java Project...`.
	- ![[Pasted image 20231212122215.png]]
2. Choose `Maven` as your project type.
	- ![[Pasted image 20231212122241.png]]
3. Select `No Archetype`.
	- ![[Pasted image 20231212122406.png]]
4. Set your “group ID”. I chose to format mine as `com.<myLastName>_<partnerLastName>`
5. Set your artifact ID. Per the ISE MiniProject guidelines, this must be in the format `ISE5784_<lastFourDigitsOfYourID>_<lastFourDigitsOfPartnersID>`.
6. Choose where you want the **root folder** of your project to be. All project files will be contained **within** this folder.
7. Open the folder in VSCode. Not sure why this isn’t automatic.

If you did everything correctly, your project in VSCode will look like this:
![[Pasted image 20231212123221.png]]
Note the collapsed “Java Projects” and “Maven” panes at the bottom of the file explorer.

Almost all of the code you write will be in `src/main/java/com/lastname_lastname`.

## 4. Configuring Maven
Open `pom.xml`. If you get errors, that’s somewhat expected. The default generated file needs a bit of modification so we can work with it. 

1. Replace all occurrences of `http://` with `https://`.
2. Set your compiler source and target properties to your Java version.

After these changes, my `pom.xml` looked like this:
![[Pasted image 20231212124050.png]]

## 5. Run and Debug
At this point, you are technically done, but I recommend setting this up so that you and your partner are using the exact same VSCode configuration.

Open the Run and Debug tab, and choose `Create a launch.json file`.
I highly recommend to **delete** the first generated launch configuration, and only leave the “Main” configuration. I renamed the Main configuration to “Run Project”. This was the end result:
![[Pasted image 20231212124648.png]]