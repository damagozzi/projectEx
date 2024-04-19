const { exec } = require('child_process');

function recoverFile(filePath, tool, callback) {
    let command;

    switch (tool) {
        case 'photorec':
            command = `photorec ${filePath}`;
            break;
        case 'testdisk':
            command = `testdisk ${filePath}`;
            break;
        case 'scalpel':
            command = `scalpel ${filePath} -o output_directory`;
            break;
        default:
            return callback(new Error('Invalid recovery tool selected'));
    }

    exec(command, (error, stdout, stderr) => {
        if (error) {
            return callback(error);
        }
        callback(null, { stdout, stderr });
    });
}

module.exports = { recoverFile };
