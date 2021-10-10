export default function HospitalCard({ data }) {
  console.log(data);
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.address}</p>
      <p>{data.phone}</p>
      {data.bedDetail.map((detail, idx) => (
        <div key={idx} style={{ margin: "30px 0" }}>
          <p>{detail.stats.title}</p>
          <p>{detail.stats.time}</p>
          <p>bed yang tersedia: {detail.stats.bed_available}</p>
          <p>bed kosong: {detail.stats.bed_empty}</p>
          <p>antrian: {detail.stats.queue}</p>
        </div>
      ))}
    </div>
  );
}
