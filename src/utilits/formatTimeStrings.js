const formatTimeStringstest =(strings, str) => {
    if(strings.length > 1) {
        return `${strings[0]} - ${strings[strings.length - 1]}`
    }

    if(strings.length) {
        return `${strings[0]} - Tillt`;
    }

    return 'None';
} 

export default formatTimeStringstest;