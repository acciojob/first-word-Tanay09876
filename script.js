function firstWord(s) {
  if (!s) return "";
 
  const trimmed = s.trim();
  const index = trimmed.indexOf(" ");
  return index === -1 ? trimmed : trimmed.substring(0, index);
}


const s = prompt("Enter String:");
alert(firstWord(s));
