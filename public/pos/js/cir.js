const Dcir= posed.circle({
  draggable: 'x',
  dragBounds: { left: 0, right: 100 }
})

export default ({ radius }) => <Dcir={radius} />
