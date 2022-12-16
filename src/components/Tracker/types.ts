export type TStatusTracker = "init" | "launched" | "finished";

export interface IDisruption {
  value: number;
  label: string;
}
export interface IFinallyDisruption {
  value: number;
  isDisruption: boolean;
}
