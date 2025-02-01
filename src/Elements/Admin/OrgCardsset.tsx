import OrganizerCard from "./OrgCards";


export default function OrgCardsset({data} : any) {
    return (
      <div>
        {
            data.map((el: any)=>{
            return(<>
                <OrganizerCard {...el}/>
            </>)
            })
        }
        </div>
    );
  }
  