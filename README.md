#ng-Cordova-FileHelper(working)
An angular module for cordova [File]() and [FileTransfer]() plugin.

##Install

##Document

#####getAppDir()
Get entry by`cordova.file.applicationDirectory`. Read-only directory where the application is installed
```coffee
CDVFileHelper.getAppDir().then(
  (appDirEntry)->
    # resolve with app dir entry
  (err)->
    # reject with CDV err object
)
```

#####getAppStorageDir()
Get entry by `cordova.file.applicationStorageDirectory`. Root directory of the application's sandbox; on iOS this location is read-only (but specific subdirectories [like /Documents] are read-write). All data contained within is private to the app. ( iOS, Android, BlackBerry 10)
```coffee
CDVFileHelper.getAppStorageDir().then(
  (appDirEntry)->
    # resolve with app dir entry
  (err)->
    # reject with CDV err object
)
```

#####getEntryByPath(`String`path)
Get file or dir entry by path.
```coffee
CDVFileHelper.getEntryByPath('file:///path/to/target').then(
  (fileEntry)->
    # resolve with file entry object
  (err)->
    # reject with CDV err object
)
```

####upload(soruce, target)
Upload file in device.

`source`



####download
Download file to device.



#####removeEntry(`String`path || `Object`entry)
Delete file or dir in device.
```coffee
# by path
CDVFileHelper.removeEntry('file:///path/to/target').then(
  ()->
    # resolve with empty
  (err)->  
    # reject with CDV err object
)

#by entry
CDVFileHelper.removeEntry(fileOrDirEntryObject).then(
  ()->
    # resolve with empty
  (err)->  
    # reject with CDV err object
)
```
