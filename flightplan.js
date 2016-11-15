var plan = require('flightplan');

var appName = 'virtuosi';
var username = 'developer';
var tmpDir = appName+'-' + new Date().getTime();

plan.target('staging', [
  {
    host: '104.131.150.242',
    port: '2625',
    username: 'developer',
    privateKey: "/Users/leaf/.ssh/vi_id_rsa",
    agent: process.env.SSH_AUTH_SOCK
  }
]);

plan.local(function(local) {
  local.log('Copy files to remote hosts');
  local.exec('webpack');
  var filesToCopy = ['src/index.html','src/index.min.js'];
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.log('Copy from /tmp to /home...');
  remote.sudo('cp -R /tmp/' + tmpDir + '/src ~/' + tmpDir, {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  // Create symlink
  remote.log('Link to app name...');
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+ appName, {user: username});

  //remote.exec('sudo service virtuosi restart');

  remote.log('DONE!');
});
