import { Skeleton, Card, CardContent, BorderLinearProgress } from "@mui/material";

export default function MyCard({ title, tahapan, percent, target }) {
  const formattingNumber = (value) => {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div>
      <Card variant='outlined'>
        <CardContent>
          <p>{title}</p>
          <h3>{formattingNumber(tahapan)}</h3>
          <p>Dosis telah diberikan</p>
          <p>
            {percent} dari {formattingNumber(target)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
