export function getCookie(name) {
    return getAllCookies()[name]
}

export function getAllCookies() {
    if(typeof document === "undefined") {
        return {}
    }

    let cookies             = {}
    const cookieStringSplit = document.cookie.split(";")

    cookieStringSplit.map((string) => {
        let keyValSplit = string.split("=")

        cookies[keyValSplit[0].trim()] = keyValSplit[1]
    })

    return cookies
}

export function setCookie(name, value) {
    let expiry = new Date()
    expiry.setFullYear(expiry.getFullYear() + 1)

    document.cookie = `${name}=${encodeURI(value)};expires=${expiry.toUTCString()};path=/`
}