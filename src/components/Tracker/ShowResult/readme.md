The component has to display the result data to a user.
 
### Input data:
```js
[
  {
    value: 1,
    status: true
  },
  {
    value: 2,
    status: false
  },
  ... 
  {
    value: 140,
    status: false
  }
]

```
### Output data:
Component with visualization of the data.
And marked the longest period of time when the status was true.

### Order of implementing
0. Get the array of values from the disrupted array.
1. Create an array with dates of type:
```js
[
  {
    value: 1,
    isDisruption: false
  },
  {
    value: 2,
    isDisruption: false
  },
  ... 
  {
    value: 120,
    isDisruption: true
  }
]
```
2. Define array elements with status: true
3. Find the biggest cut with status: true
4. Render component with result
