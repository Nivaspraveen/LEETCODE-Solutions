/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Array(rooms.length).fill(false);
    const dfs = room => {
        visited[room] = true;
        for (const key of rooms[room]) {
            if (!visited[key]) dfs(key);
        }
    }
    dfs(0);
    return visited.every(v => v);
};