// add active class to sidebar menu
export const activeLink = (index, keyword, url) => url.split("/")[index] === keyword;

//add active class to sidebar submenu

export const activeSubmenuLink = (index, keyword, url, indexParent) => {
    const arrayKeyword = keyword.split("/");
    return url.split("/")[index] === arrayKeyword[1] && url.split("/")[indexParent] === arrayKeyword[0]
}