# Boldly going where no paper element has gone before!

Infinite diversity in infinite combinations got you down?  Have you and your loved one ever needed to watch a Star Trek episode, but couldn't figure out which one?

Well, now you can let Paper Trek solve all your problems for you!

Features:

* Random Episode Generator
* Episode List
* Animations
* Settings
* Love

Paper Trek is the ultimate Trek experience for fans worldwide, built using the latest web technologies.

Enjoy, have fun, and remember:

Live long, and prosper!

# Build

As per the usual [Polymer Starter Kit](https://developers.google.com/web/tools/polymer-starter-kit/index?hl=en) style project, install the necessary dependencies first:

```
npm install && bower install
```

For android, additionally install [cordova](https://cordova.apache.org/):

```
npm -g install cordova
```

## Web

```
gulp serve
```

to serve it in the browser, or

```
gulp
```

to build to `dist`.

## Android

Make sure `cordova` is installed, and the android sdk is installed.  I told you how to do the first, and I won't go into installing the second.  Please see the [official install page](https://developer.android.com/sdk/index.html).

**NOTE**: the provided script assumes the sdk is installed to `/opt/local/android-sdk`, and so I set:

```
ANDROID_HOME=/opt/local/android-sdk
```

in the script.  If that is not the location (it probably won't be unless you're running Archlinux), then you have to change the `ANDROID_HOME` environment variable to what the SDKs path/location is.

Now setup the environment:

1. `cordova create mobile`
2. `cd mobile`
3. `cordova platform add android`
4. `cd ..`

Now that that's over with, you can:

1. Plug an android phone in.
2. Enable developer settings.
3. Enable USB debugging.
4. Run the script I provide: `./run.sh`
5. Dance.

It probably has some missing things, may not work at all: I hacked it together real quick.  And much of the copying could be done in the gulp flow, but I'm too lazy and busy to figure out gulp right now.

If you want to know how to build a fully signed APK, either ask me, raise an issue, or maybe I'll write a blog post.

It's not hard, just boring.

You'll also want splashscreen/icon autogen scripts as well.  I can dig those up too, if the need arises.

Lastly I've included a signed APK in the release section; you'll need to enable install from third-party/untrusted sources, or whatever it is, in settings.
