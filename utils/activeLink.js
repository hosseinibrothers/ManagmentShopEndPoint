// add active class to sidebar menu
export const activeLink = (index, keyword, url) => url.split("/")[index] === keyword;