Set-Location c:\work\ahjojs\server\
rollup -c
yalc publish
Set-Location c:\work\ahjotest\servertest\
yalc update
node ./index.js