#ng-Cordova-FileHelper
An angular module for cordova [File]() and [FileTransfer]() plugin.

##Install

##Document

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
