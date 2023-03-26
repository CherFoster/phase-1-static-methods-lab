class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ']/g, '');
  };

  static titleize(string){
    const arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let modString = string.split(' ').map(s => {
      if (!arr.includes(s)){
        return Formatter.capitalize(s)
      } else {
        return s
      }
    }).join(' ')
    return Formatter.capitalize(modString)
  }
}