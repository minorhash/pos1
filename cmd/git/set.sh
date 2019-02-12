dir=$(pwd)
str=${dir: -10}
echo $str

git remote set-url origin git@github.com:minorhash/$str.git

