const getSeoLink = (string) => {
  const trMap = {
    çÇ: 'c',
    ğĞ: 'g',
    şŞ: 's',
    üÜ: 'u',
    ıİ: 'i',
    öÖ: 'o'
  }
  for (const key in trMap) {
    string = string.replace(new RegExp('[' + key + ']', 'g'), trMap[key])
  }
  return string
    .replace(/[^-a-zA-Z0-9\s]+/gi, '') // remove non-alphanumeric chars
    .replace(/\s/gi, '-') // convert spaces to dashes
    .replace(/[-]+/gi, '-') // trim repeated dashes
    .toLowerCase()
}
module.exports = {
  getSeoLink
}
