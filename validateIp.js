// 468. Validate IP Address

// Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

// A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

// A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

// 1 <= xi.length <= 4
// xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
// Leading zeros are allowed in xi.
var validIPAddress = function (IP) {

    if (ipV4(IP)) {
        return "IPv4";
    } else if (ipV6(IP)) {
        return "IPv6"
    } else {
        return 'Neither';
    }
};

function ipV4(ip) {
    if (/[A-Za-z]/.test(ip)) return false;
    ip = ip.split('.');
    if (ip.length !== 4) return false;
    return ip.every((i) => {
        if (i.length < 1) return false;
        if (parseInt(i) < 0 || parseInt(i) > 255) return false
        if (i.length > 1 && i[0] === '0') return false;
        return true
    })
}

function ipV6(ip) {
    ip = ip.split(':');
    if (ip.length !== 8) return false
    return ip.every((i) => {
        if (i.length < 1 || i.length > 4) return false;
        if (!isValidChar(i)) return false;
        return true
    })
}

function isValidChar(str) {
    str = str.toLowerCase();

    for (let c of str) {

        if ((c.charCodeAt() >= 97 && c.charCodeAt() <= 102)) continue
        if (c.charCodeAt() >= 48 && c.charCodeAt() <= 57) continue;
        return false;

    }
    return true;
}