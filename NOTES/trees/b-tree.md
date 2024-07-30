# B-tree
> It's a m-way tree with special properties

- tree grows upwards

## Requirements of the b-tree
If we create a b-tree we must specify `order`
- root doesn't follow those rules - can have only 1 `key`

`order = 5` gives the following rules:

Max requirements:
- `Kmax = 4` key max: `Cmax - 1`
- `Cmax = 5`children max: `order`

Min requirements:
- `Kmin = 2` key min: `ceiling(order/2) - 1`
- `Cmin = 3` children min: `Kmin + 1`
