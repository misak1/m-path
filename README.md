# m-path
[![npm total download](https://img.shields.io/npm/dt/m-path.svg?style=flat)](https://www.npmjs.com/package/m-path)
[![npm version](https://badge.fury.io/js/m-path.svg?style=flat)](https://badge.fury.io/js/m-path)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://ruedap.mit-license.org/2015)

## インストール - Install
```
$ npm i -S m-path
```

## 使い方 - Usage

### Functions
```
  }
  this.getPlatform = function() {…}
--
  };
  this.isWindows = function() {…}
--
  };
  this.getPathseparator = function() {…}
--
  };
  this.pathSplit = function(path) {…}
--
  };
  this.pathJoin = function(ary) {…}
```

### NodeJS
<table>
<tr>
  <th><h3>Code</h3></th>
  <th><h3>Result</h3></th>
</tr>
<tr>
  <td>
  <div class="highlight highlight-source-js">
    <pre class="rich-diff-level-zero">
require('m-path');
  require("m-util");
  var hr = "_".uRepeat(20);
  var m_path = require("./index.js");

  console.log(hr);
  console.log('getPlatform():', m_path.getPlatform());
  console.log('isWindows():', m_path.isWindows());
  console.log('getPathseparator():', m_path.getPathseparator());

  console.log(hr);
  console.log('pathSplit():', m_path.pathSplit("./path/path2/path3"));
  console.log('pathSplit():', m_path.pathSplit("path/path2/path3"));

  console.log(hr);
  console.log('pathJoin():', m_path.pathJoin(['.', 'path', 'path2', 'path3']));
  console.log('pathJoin():', m_path.pathJoin(['path', 'path2', 'path3']));

}).call(this);
    </pre>
  </div>
  </td>
  <td>
  <pre class="rich-diff-level-zero">
# node example.js
____________________
getPlatform(): darwin
isWindows(): false
getPathseparator(): /
____________________
pathSplit(): [ '.', 'path', 'path2', 'path3' ]
pathSplit(): [ 'path', 'path2', 'path3' ]
____________________
pathJoin(): ./path/path2/path3
pathJoin(): path/path2/path3
  </pre>
  </td>
</tr>
</table>

## ライセンス - License
MIT License


## 作者 - Author
- (C)Misaki Shibata <misaki.pink@gmail.com>

