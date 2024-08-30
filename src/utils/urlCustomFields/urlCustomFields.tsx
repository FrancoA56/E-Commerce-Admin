// in src/MyUrlField.tsx
import { useRecordContext } from "react-admin";
import style from "./styles.module.css";

const UrlCustomField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <a href={record[source]} rel="noreferrer" target="_blank">
      <p className={style.text}>{record[source]}</p>
    </a>
  );
};

export default UrlCustomField;