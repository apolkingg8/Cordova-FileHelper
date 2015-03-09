#Cordova-FileHelper(still on working)
A class for cordova [File](https://github.com/apache/cordova-plugin-file) and [FileTransfer]() plugin.

##Dependency
This project dependence on [kriskowal's Q Promise](https://github.com/kriskowal/q), that solves the callback hell issue.


##Installation

`bower install `

##Document

###Initialize

```coffee
fh = new CDVFileHelper({
    cordovaNameSpace: 'cordova' # cordova plugin name space
    cache: true # cache some static dir entries in memory
    initStaticDir: false # get static dir entries when init CDVFileHelper
})
```

###Method

#####getStaticDirEntry(cordova.file.*)
Get static dir entries. You can check [Cordova File Plugin - File System Layout](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md#file-system-layouts) for more information.

```coffee
fn.getStaticDirEntry(cordova.file.documentsDirectory).then(
  (appDocumentsDirEntry)->
    # resolve with app's documents dir entry
  (err)->
    # reject with CDV err object
)
```

#####getEntryByPath(`String`path)
Get file or dir entry by path.
```coffee
fh.getEntryByPath('file:///path/to/target').then(
  (fileEntry)->
    # resolve with file entry object
  (err)->
    # reject with CDV err object
)
```

#####removeEntry(`String`path || `Object`entry)
Delete file or dir in device.
```coffee
# by path
fh.removeEntry('file:///path/to/target').then(
  ()->
    # resolve with empty
  (err)->  
    # reject with CDV err object
)

#by entry
fh.removeEntry(fileOrDirEntryObject).then(
  ()->
    # resolve with empty
  (err)->  
    # reject with CDV err object
)
```

####upload(soruce, target)
Upload file in device.

**soruce**  
  `String`  file path string.  
  `Object`  file entry object.

**target**  
  `String`  target url string.

```coffee
```


####download
Download file to device.
