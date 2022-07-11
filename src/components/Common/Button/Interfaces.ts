export interface ButtonProps {
  label: string;
  onClick: VoidFunction;
  className?: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}
