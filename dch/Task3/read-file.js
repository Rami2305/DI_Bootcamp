
import fs from 'fs';

// function readFx () {
//     fs.readFile('file-data.txt', 'utf-8',function (err, data) {
//         if (err) {
//             console.error(err)
//             return
//         }
//         console.log(data)
//     })
// }
export const readFx = function() {
    fs.readFile('./Task3/file-data.txt', 'utf-8', function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

