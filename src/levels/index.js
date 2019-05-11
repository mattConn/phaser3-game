import level1 from './1.txt';

// level layouts
const levels = [
    level1
];

// split levels by newline
for(const i in levels)
    levels[i] = levels[i].split('\n');


export default levels;