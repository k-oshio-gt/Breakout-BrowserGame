chcp 65001

rem Node.jsでHTTPサーバを起動
cd ..
start http-server -c-1

rem Chromeをシークレットモードで起動
C:
cd C:\Program Files\Google\Chrome\Application
start chrome.exe http://127.0.0.1:8080 --incognito