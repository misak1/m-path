# Generated by CoffeeScript 1.8.0
module.exports = new (->
  getPathseparator = undefined
  getPlatform = undefined
  isWin = undefined
  isWindows = undefined
  os = undefined
  pathJoin = undefined
  pathSplit = undefined
  pathseparator = undefined
  platform = undefined
  w_pathseparator = undefined
  getPathseparator = undefined
  getPlatform = undefined
  isWin = undefined
  isWindows = undefined
  os = undefined
  pathSplit = undefined
  pathseparator = undefined
  platform = undefined
  w_pathseparator = undefined
  os = require("os")
  pathseparator = "/"
  w_pathseparator = "\\"
  platform = os.platform().toLowerCase()
  if platform.match("darwin") isnt null
    isWin = false
  else if platform.match("linux") isnt null
    isWin = false
  else
    isWin = true  if platform.match("win") isnt null
  @getPlatform = ->
    platform

  @isWindows = ->
    isWin

  @getPathseparator = ->
    if isWin
      w_pathseparator
    else
      pathseparator

  @pathSplit = (path) ->
    aryPath = undefined
    i = undefined
    x = undefined
    aryPath = path.split(@getPathseparator())
    x = []
    i = 0
    while i < aryPath.length
      if aryPath[i] isnt ""
        console.log aryPath[i]
        x.push aryPath[i]
      ++i
    x

  @pathJoin = (ary) ->
    ary.join @getPathseparator()

  return
)()
