function toCamelCase(str){
  var num = str.indexOf('-');
  if(num >= 0)
  {
    return str.charAt(0).toLowerCase() + str.substr(1, num-1) + str.charAt(num+1).toUpperCase() + str.slice(num+2);
  }
  else
  {
    num = str.indexOf('_');
    return str.charAt(0).toLowerCase() + str.substr(1, num-1) + str.charAt(num+1).toUpperCase() + str.slice(num+2);
  }

}
