const conf={idle: {
scale: 1,
opacity: 0.1,
transition: props => tween({props, duration: 2000 })
},
hovered: {
scale: 5,
opacity: 1,
transition: props => tween({props, duration: 1000 })
}
}

module.exports=conf
