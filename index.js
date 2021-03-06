// Generated by CoffeeScript 1.8.0
module.exports = new(function() {
  var getPathseparator, getPlatform, isWin, isWindows, os, pathJoin, pathSplit, pathseparator, platform, w_pathseparator;
  getPathseparator = void 0;
  getPlatform = void 0;
  isWin = void 0;
  isWindows = void 0;
  os = void 0;
  pathSplit = void 0;
  pathseparator = void 0;
  platform = void 0;
  w_pathseparator = void 0;
  os = require("os");
  pathseparator = "/";
  w_pathseparator = "\\";
  platform = os.platform().toLowerCase();
  if (platform.match("darwin") !== null) {
    isWin = false;
  } else if (platform.match("linux") !== null) {
    isWin = false;
  } else {
    if (platform.match("win") !== null) {
      isWin = true;
    }
  }
  this.getPlatform = function() {
    return platform;
  };
  this.isWindows = function() {
    return isWin;
  };
  this.getPathseparator = function() {
    if (isWin) {
      return w_pathseparator;
    } else {
      return pathseparator;
    }
  };
  this.pathSplit = function(path) {
    var aryPath, i, x;
    aryPath = path.split(this.getPathseparator());
    x = [];
    i = 0;
    while (i < aryPath.length) {
      if (aryPath[i] !== '') {
        x.push(aryPath[i]);
      }
      ++i;
    }
    return x;
  };
  this.pathJoin = function(ary) {
    return ary.join(this.getPathseparator());
  };
})();
