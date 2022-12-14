import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTimerStore } from "./store/useTimerStore";
import { memo } from "react";

export const Selector = memo(({ maxSeconds }: { maxSeconds: number }) => {
  const setMaxSeconds = useTimerStore((store) => store.setMaxSeconds);
  const handleChange = (event: SelectChangeEvent) => {
    setMaxSeconds(Number(event.target.value));
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select time</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={String(maxSeconds)}
        label="Select time"
        onChange={handleChange}
      >
        <MenuItem value={"120"}>120 s</MenuItem>
        <MenuItem value={"240"}>240 s</MenuItem>
        <MenuItem value={"480"}>480 s</MenuItem>
      </Select>
    </FormControl>
  );
});

//     () => {
//   const { setMaxSeconds, maxSeconds } = useTimerStore((store) => store);
//   const handleChange = (event: SelectChangeEvent) => {
//     setMaxSeconds(Number(event.target.value));
//   };
//   return (
//     <FormControl fullWidth>
//       <InputLabel id="demo-simple-select-label">Age</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={String(maxSeconds)}
//         label="Select you level"
//         onChange={handleChange}
//       >
//         <MenuItem value={"120"}>Junior</MenuItem>
//         <MenuItem value={"240"}>Middle</MenuItem>
//         <MenuItem value={"480"}>Master</MenuItem>
//       </Select>
//     </FormControl>
//   );
// };
