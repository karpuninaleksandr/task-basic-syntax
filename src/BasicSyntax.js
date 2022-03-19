export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; ++i) {
        switch (str[i]) {
            case 'I':
                if (i < str.length - 1) {
                    switch (str[i + 1]) {
                        case 'V':
                            result += 4;
                            ++i;
                            break;
                        case 'X':
                            result += 9;
                            ++i;
                            break;
                        case 'L':
                            result += 49;
                            ++i;
                            break;
                        case 'C':
                            result += 99;
                            ++i;
                            break;
                        case 'D':
                            result += 499;
                            ++i;
                            break;
                        case 'M':
                            result += 999;
                            ++i;
                            break;
                        default:
                            result += 1;
                            break;
                    }
                } else {
                    result += 1;
                }
                break;
            case 'V':
                if (i < str.length - 1) {
                    switch (str[i + 1]) {
                        case 'X':
                            result += 5;
                            ++i;
                            break;
                        case 'L':
                            result += 45;
                            ++i;
                            break;
                        case 'C':
                            result += 95;
                            ++i;
                            break;
                        case 'D':
                            result += 495;
                            ++i;
                            break;
                        case 'M':
                            result += 995;
                            ++i;
                            break;
                        default:
                            result += 5;
                            break;
                    }
                } else {
                    result += 5;
                }
                break;
            case 'X':
                if (i < str.length - 1) {
                    switch (str[i + 1]) {
                        case 'L':
                            result += 40;
                            ++i;
                            break;
                        case 'C':
                            result += 90;
                            ++i;
                            break;
                        case 'D':
                            result += 490;
                            ++i;
                            break;
                        case 'M':
                            result += 990;
                            ++i;
                            break;
                        default:
                            result += 10;
                            break;
                    }
                } else {
                    result += 10;
                }
                break;
            case 'L':
                if (i < str.length - 1) {
                    switch (str[i + 1]) {
                        case 'C':
                            result += 50;
                            ++i;
                            break;
                        case 'D':
                            result += 450;
                            ++i;
                            break;
                        case 'M':
                            result += 950;
                            ++i;
                            break;
                        default:
                            result += 50;
                            break;
                    }
                } else {
                    result += 50;
                }
                break;
            case 'C':
                if (i < str.length - 1) {
                    switch (str[i + 1]) {
                        case 'D':
                            result += 400;
                            ++i;
                            break;
                        case 'M':
                            result += 900;
                            ++i;
                            break;
                        default:
                            result += 100;
                            break;
                    }
                } else {
                    result += 100;
                }
                break;
            case 'D':
                if (i < str.length - 1) {
                    switch (str[i + 1]) {
                        case 'M':
                            result += 500;
                            ++i;
                            break;
                        default:
                            result += 500;
                            break;
                    }
                } else {
                    result += 100;
                }
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
    return result;
}
