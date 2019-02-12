if [ -z $1 ];then
    echo "usage"
else

    se=$(echo $1|sed s/jsx//g)
    echo js"$se"js
jsx --executable web --output js"$se"js $1

fi
