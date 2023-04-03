interface Link {
    text: string;
    url: string;
}

export function findLink(text: string): Link | undefined {
    const urlRegex = /((http(s)?):\/\/[\w\d./?=#]+)|(www.[\w\d./?=#]+)/g;
    const matches = text.match(urlRegex);
    if (matches) {
        const link = matches[0];
        const url = link.startsWith("http") ? link.replace("http", "https") : `https://${link}`;
        return { text, url };
    }
}
