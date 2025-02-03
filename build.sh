#!/bin/bash
echo "Installing required system dependencies..."
apt-get update && apt-get install -y build-essential python3.11 make gcc g++

echo "Installing project dependencies..."
npm install
npm rebuild sweph --update-binary