export function getCookie(name) {
    const cookies = getAllCookies()

    return cookies[name]
}

export function getAllCookies() {
    let cookies = {}
    const cookieStringSplit = document.cookie.split(" ")

    cookieStringSplit.map((string) => {
        let keyValSplit = string.split("=")

        cookies[keyValSplit[0].trim()] = keyValSplit[1]
    })

    return cookies
}

export function setCookie(name, value) {
    document.cookie = name + "=" + value + "; Path=/;"
}

export function deleteCookie(name) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}