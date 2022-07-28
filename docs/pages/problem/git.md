# git遇到的问题

## git连接错误
- git clone 或者 push 遇到如下问题

```javascript
fatal: unable to connect to github.com:
github.com[0:20.205.243.266]: errno=Unknown error
```
- 解决办法:
找到 .gitconfig 文件，把这几个配置删掉即可

```javascript
[url "git@github.com"]
insteadOf = https://github.com/:
[url "git://"]
insteadOf = https://
[url "https://"]
insteadOf = git://
```
- .gitconfig 文件位置，可以在命令行输入下面的命令查看：

```javascript
git config --list --show-origin
```
亲测有效~



