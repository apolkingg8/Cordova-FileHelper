##ng-Cordova-FileHelper
An angular module for cordova [File]() and [FileTransfer]() plugin.

#Install

##Document

####getEntryByPath(`String` filePath)
```coffee
CDVFileHelper.getEntryByPath('file:///some/path/to/file.name').then(
  (fileEntry)->
    # resolve file entry
  (err)->
    # reject CDV err object
)
```
