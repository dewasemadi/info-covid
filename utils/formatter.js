import moment from "moment";

export const formatDate = (arg) => moment(new Date(arg)).format("DD-MM-YYYY");
export const formatDateToUs = (arg) => moment(arg).format("lll");
export const formattingNumber = (value) => {
  let res = "";
  if (value) res = value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  return res;
};
