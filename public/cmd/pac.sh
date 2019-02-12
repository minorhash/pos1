if [ -z $1 ];then
    echo "usage"
else
    se=$(echo $1|sed s/src\\///g|sed s/jsx//g)
    echo js/"$se"js
#npx webpack $1 -o

fi
