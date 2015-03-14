/// <reference path="../typings/tsd.d.ts" />
var CDVFileHelper = (function () {
    function CDVFileHelper(option) {
    }
    return CDVFileHelper;
})();
CDVFileHelper.prototype.getStaticDirEntry = function (cordovaFileSystemPath) {
    var defer = Q.defer();
    window.resolveLocalFileSystemURI(cordovaFileSystemPath, function (entry) {
        defer.resolve(entry);
    }, function (err) {
        defer.resolve(err);
    });
    return defer.promise;
};
CDVFileHelper.prototype.getFileSystem = function (type, size) {
    var defer = Q.defer();
    window.requestFileSystem(type, size, function (fs) {
        defer.resolve(fs);
    }, function (err) {
        var msg = '';
        switch (err.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
                msg = 'QUOTA_EXCEEDED_ERR';
                break;
            case FileError.NOT_FOUND_ERR:
                msg = 'NOT_FOUND_ERR';
                break;
            case FileError.SECURITY_ERR:
                msg = 'SECURITY_ERR';
                break;
            case FileError.INVALID_MODIFICATION_ERR:
                msg = 'INVALID_MODIFICATION_ERR';
                break;
            case FileError.INVALID_STATE_ERR:
                msg = 'INVALID_STATE_ERR';
                break;
            default:
                msg = 'Unknown Error';
                break;
        }
        defer.reject(msg);
    });
    return defer.promise;
};
CDVFileHelper.prototype.requestStorageQuota = function (type, size) {
    var defer = Q.defer();
    var successCallback = function (grantedBytes) {
        defer.resolve(grantedBytes);
    };
    var errorCallback = function (err) {
        defer.reject(err);
    };
    if (typeof navigator['webkitPersistentStorage'] !== 'undefined') {
        switch (type) {
            case window.PERSISTENT:
                navigator.webkitPersistentStorage.requestQuota(size, successCallback, errorCallback);
                break;
            case window.TEMPORARY:
                navigator.webkitTemporaryStorage.requestQuota(size, successCallback, errorCallback);
                break;
            default:
                errorCallback('storage type error.');
                break;
        }
    }
    else {
        window.webkitStorageInfo.requestQuota(type, size, successCallback, errorCallback);
    }
    return defer.promise;
};
//# sourceMappingURL=main.js.map