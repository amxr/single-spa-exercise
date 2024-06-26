# single-spa exercise

This is a single-spa app that sends messages between 2 single-spa applications by clicking a button.

This app consists of 4 apps:
- root-config (port 9000): the root config for the application
- common (port 9001): the utility module that handles sending messages betweeen apps and the shared components
- app1 & app2 (port 9002 & 9003): basic react apps 

### How to run
```
git clone https://github.com/amxr/single-spa-exercise.git
cd single-spa-exercise
make install
make start
```