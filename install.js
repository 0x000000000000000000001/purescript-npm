const https = require('https');
const fs = require('fs');
const { execSync } = require('child_process');

const TAR_URL = 'https://github.com/0x000000000000000000001/purescript/releases/download/v0.15.16-0x1/macos-arm64.tar.gz';
const TAR_FILE = 'macos-arm64.tar.gz';

console.log('Downloading PureScript (0x1 TAST Fork)...');

https.get(TAR_URL, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, downloadAndExtract);
    } else {
        downloadAndExtract(res);
    }
}).on('error', (e) => {
    console.error(`Download error: ${e.message}`);
    process.exit(1);
});

function downloadAndExtract(response) {
    if (response.statusCode !== 200) {
        console.error(`Failed to download binary, status code: ${response.statusCode}`);
        process.exit(1);
    }
    
    const fileStream = fs.createWriteStream(TAR_FILE);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
        fileStream.close();
        console.log('Download complete. Extracting...');
        try {
            execSync(`tar -xzf ${TAR_FILE}`);
            execSync('chmod +x purs');
            fs.unlinkSync(TAR_FILE);
            console.log('Installation of purs complete!');
        } catch (error) {
            console.error('Error extracting the file:', error);
            process.exit(1);
        }
    });
}
