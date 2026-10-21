import styles from "./styles.module.css";

type DefaultInputProps = {
  labelText: React.ReactNode;
  id: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  labelText,
  type,
  id,
  ...props
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
