.DEFAULT_GOAL := help

APP_NAME = single-spa-exercise

help:
	@echo "Makefile commands:"
	@echo "  make install       Install npm dependencies"
	@echo "  make start         Start the application"
	@echo "  make clean         Remove node_modules and build directories"

install:
	@echo "Installing dependencies"
	npm install

start:
	@echo "Starting the application"
	npm start

# Clean the project (remove node_modules and build directories)
clean:
	@echo "Cleaning the project"
	rm -rf node_modules
	rm -rf build

.PHONY: help install start clean