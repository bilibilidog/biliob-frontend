cd ~/biliob-frontend;
git pull;
yarn install;
yarn build;
source /etc/profile
scp -i ~/.ssh/login_rsa -r dist/* $BILIOB_NGINX_PATH;