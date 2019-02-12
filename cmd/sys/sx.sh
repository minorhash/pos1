if [ -z $1 ];then
    echo "usage"
else

    se=$(echo $1|sed s/jsx//g)
    echo $se
#jsx --executable web --output hello.jsx.js hello.jsx

fi
