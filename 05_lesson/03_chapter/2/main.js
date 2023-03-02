function checkSpam(str) {
str = str.toLowerCase ()
if ((str.indexOf('viagra') != -1) || (str.indexOf('xxx') != -1)) {
  return true
} else {
  return false
}
}


checkSpam('buy ViAgRA now')
checkSpam('free xxxxx')
checkSpam("innocent rabbit") 