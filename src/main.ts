/// <reference path="../typings/tsd.d.ts" />

interface FileEntry {

}

interface CDVFileObj {

}

interface DirEntry {

}

class CDVFileHelper {
    constructor(option: Object) {

    }

    getStaticDirEntry: Function;

    getFileSystem: Function;

    getStorageQuoda: Function;

    getEntryByPath: Function;

    creatFile: Function;

    creatDir: Function;

    copy: Function;

    move: Function;

    remove: Function;

    getName: Function;

    getMetadata: Function;

    getDirSize: Function;

    getDirContent: Function;

    find: Function;

    upload: Function;

    download: Function;
}

CDVFileHelper.prototype.getStaticDirEntry = function (cordovaFileSystemPath: String) {

};