import { Chip } from "@mui/material";

export default function MyChip({ length }) {
  const handleColor = (length) => {
    if (length > 1) return "success";
    else if (length === 1) return "warning";
    else return "error";
  };

  const handleLable = (length) => {
    if (length > 1) return `${length} room categories available`;
    else if (length === 1) return `${length} room category available`;
    else return "No room available";
  };

  return <Chip label={handleLable(length)} color={handleColor(length)} style={{ borderRadius: "3px" }} />;
}
