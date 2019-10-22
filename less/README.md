# LESS Documentation

## Mixins

The mixins used for this less can be fround in the ```mixins.less``` file.

* ```.makelinkMixin()``` includes the standard over rides of  ```text-decoration: none;``` and ```font-weight: bold;``` to help links pop with out disrupting color choices.

## Variables

All valibals used can be found in the ```variables.less``` file.

A google font has been incorpirated for this project
```@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');```
Which can be made use of on any elment by calling
```font-family: 'Nunito', sans-serif;```
as has been done in the ```global.less``` file.

#### Colors
```
@gray: #e5e5e5;
@blue: #055596;
@green: #05af50;
@orange: #dc960a;
@white: #ffffff;
```

#### Resonsive Design Media Variables
```
@tablet: ~"(min-width: 500px)";
@desktop: ~"(min-width: 800px)";
```
Exsample call
```
@media @tablet {}
@media @desktop {}
```

## Editing
The core index file is ```index.less``` so to allow easy mantnace of the project with ```less-watch-compiler less css index.less```.

The files have self explanitory names:
```
@import "reset";

@import "variables";
@import "mixins";

@import "global";
@import "navigation";
@import "footer";
@import "header";
@import "landing-page";
@import "about-page";
```
in that the header contains the less for the header page elements, navigation for nav page elements, and so on. It would be best to include custome additions in these files or in a new custome file included after the curent ones.
