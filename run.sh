#!/bin/bash

ANDROID_HOME=/opt/local/android-sdk

cordova=mobile

gulp

echo -e "Copying files to $cordova"
cp -r dist/* $cordova/www/
cp app/data/* $cordova/www/data/
cp -r app/images/* $cordova/www/img/
rm $cordova/www/bower_components/web-animations-js/*.gz

cd $cordova
echo -e "Building and running"
cordova run android
echo -e "Done!"
