import Card from "./card";


export default function Cards({ data }: any) {
  return (
    <div>
      {
        data.map((el: any, idx: number) => {
          return (<div key={idx} >
            <Card {...el} />
          </div>)
        })
      }
    </div>
  );
}
