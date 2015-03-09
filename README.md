#Cordova-FileHelper(still on working)
A class for cordova [File](https://github.com/apache/cordova-plugin-file) and [FileTransfer]() plugin.

##Dependency
This project dependence on [kriskowal's Q Promise](https://github.com/kriskowal/q), that solves the callback hell issue.
If you already used [jQuery Deferred](http://api.jquery.com/category/deferred-object/) or Angular [$q](https://docs.angularjs.org/api/ng/service/$q), you can set it in init options.

##Usage

1. install from bower

  `bower install `

2. include it.
  ```html
  <script src="path/to/cordova.js" />
  <script src="path/to/q.js" />
  <!-- you should include promise lib before CDVFileHelper.js.
  Default using is kriskowal's Q -->
  <script src="path/to/CDVFileHelper.js" />
  ```
3. no stpe 3

##Document

###Initialize

```js
fh = new CDVFileHelper({
    cordovaNameSpace: 'cordova',
    // cordova plugin name space

    cache: true,
    // cache some static dir entries in memory

    initStaticDir: false,
    // get static dir entries when init CDVFileHelper

    qType: 'Q',
    // 'Q' => kriskowal's Q Promise
    // 'jQuery' => jQuery Deferred
    // 'Angular' => Angular $q
});
```

###FileSystem Method
See [File Plugin Doc](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md) for more information.

####getStaticDirEntry(cordova.file.*)
Get static dir entries. You can check [Cordova File Plugin - File System Layout](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md#file-system-layouts).

```js
fn.getStaticDirEntry(cordova.file.documentsDirectory).then(
  function(appDocumentsDirEntry){
    // resolve with app's documents dir entry
  },
  function(err){
    // reject with CDV err object
  }
)
```

####getEntryByPath(`String`path)
Get file or dir entry by path.
```js
fh.getEntryByPath('file:///path/to/target').then(
  function(fileEntry){
    // resolve with file entry object
  },
  function(err){
    // reject with CDV err object
  }
)
```


####creatFile()


####creatDir()


####copy()
Copy file or dir.


####move()
Move file or dir.


####remove(`String`path || `Object`entry)
Delete file or dir.
```js
# by path
fh.remove('file:///path/to/target').then(
  function(){
    // resolve with empty
  },
  function(err){
    // reject with CDV err object
  }
)

#by entry
fh.remove(fileOrDirEntryObject).then(
  function(){
    // resolve with empty
  },
  function(err){
    // reject with CDV err object
  }
)
```

####getName()


####getDirSize(dir)
Get dir size.



####getDirContent(dir, deepGetFlag)




####find(keys, scopeDir)




###FileTransfer Method
See [FileTransfer Plugin Doc](https://github.com/apache/cordova-plugin-file-transfer/blob/master/doc/index.md) for more information.

####upload(soruce, target)
Upload file in device.

#####Parameters
* source: `String` Filesystem URL or `Object` File entry.

```coffee
demo code
```


####download
Download file to device.
