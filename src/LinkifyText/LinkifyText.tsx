import React from 'react';

interface Props {
    text: string;
}

const LinkifyText: React.FC<Props> = ({ text }) => {
    const linkRegex = /(?:(?:(?:https?|ftp):\/\/)|www\.)?[a-zA-Z0-9]+[.][a-zA-Z]{2,}[^\s$?.#]/gi;
    const words = text.split(' ');
    const linkifiedWords = words.map((word, index) => {
        if (linkRegex.test(word)) {
            let url = word;
            if (!url.match(/^https?:\/\//i)) {
                url = `https://${url}`;
            } else if (url.startsWith('http://')) {
                url = url.replace('http://', 'https://');
            }
            return (
                <a href={url} key={index} target="_blank" rel="noopener noreferrer">
                    {word}{' '}
                </a>
            );
        } else {
            return <span key={index}>{word} </span>;
        }
    });
    return <>{linkifiedWords}</>;
};

export default LinkifyText;
