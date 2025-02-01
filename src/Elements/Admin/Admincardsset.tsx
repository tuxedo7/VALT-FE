import AdminCard from "./Admincard";


export default function AdminCardsset({data} : any) {
    return (
      <div>
        {
            data.map((el: any)=>{
            return(<>
                <AdminCard {...el}/>
            </>)
            })
        }
        </div>
    );
  }
  