import roomSandbox from './room_layouts/sandbox.txt';
import room1 from './room_layouts/1.txt';
import room2 from './room_layouts/2.txt';

// level layouts
const rooms = [
    roomSandbox,
    room1,
    room2
];

// split rooms by newline
for(const i in rooms)
    rooms[i] = rooms[i].split('\n');


export default rooms;