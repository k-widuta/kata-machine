# AVL
> `O(log(N))` for everything
- best for `SEARCHING` but not so good for inserting 

![Screenshot 2024-07-25 at 19 00 25](https://github.com/user-attachments/assets/c3625778-4967-4675-b428-ea87de491ea8)

### Balance factor
> Balance factor should be between: -1, 0, 1

- to calculate balance factor - `Right Node height - Left Node height`
- that way `-1` is the lean to the left, and `1` is lean to the right

### RR rotation
> Remember that tree is leaning to the right side - but rotation is made to the `left` side (to balance the tree)

### LL rotation
> Remember that tree is leaning to the left side - but rotation is made to the `right` side (to balance the tree)

## More complicated rotations

### LR rotation
![Screenshot 2024-07-25 at 19 17 29](https://github.com/user-attachments/assets/fe6bd6d3-ff39-4dea-b741-9737f768b773)

![Screenshot 2024-07-25 at 19 19 22](https://github.com/user-attachments/assets/f414627a-a707-4deb-ae60-8be9eb87760f)

> Left leaning rotation & right rotation
- first we need to `RR` the lower node
- then we finish with `LL rotation`

### RL rotation
![Screenshot 2024-07-25 at 19 20 18](https://github.com/user-attachments/assets/21fd416b-d89b-432a-9fc4-2a2117afc8f6)

![Screenshot 2024-07-25 at 19 21 29](https://github.com/user-attachments/assets/eaa37c03-eca7-40da-b87b-cf7f04324409)

![Screenshot 2024-07-25 at 19 21 49](https://github.com/user-attachments/assets/03382f9b-4105-4440-a44b-3387c83fccd4)

> Right leaning rotation & left leaning rotation
- first we need to `LL` the lower node
- then we finish with `RR rotation`

### Having more children
> remember the basics - on the left the values are smaller & on the right are larger

![Screenshot 2024-07-25 at 19 23 02](https://github.com/user-attachments/assets/5dbb8886-60a1-40d1-a03f-ff11eacaa34b)

![Screenshot 2024-07-25 at 19 24 09](https://github.com/user-attachments/assets/1452f33c-9da0-4a6d-ac29-4a06817bcde2)
