import { NavBar } from "../components/NavBar";
import { AdSingle } from "../components/AdSingle";
import { useAdDisplayQuery } from "../generated/graphql";

export const List = () => {
  const name = useAdDisplayQuery()[0].data?.adDisplay[0].companyName;
  const desc = useAdDisplayQuery()[0].data?.adDisplay[0].desc;
  const date = useAdDisplayQuery()[0].data?.adDisplay[0].startDate;
  const newDate = new Date(parseInt(date!) * 1000).toDateString();
  console.log(name);
  console.log(desc);
  console.log(newDate);
    return(<>
        <NavBar />
        <AdSingle name={name!} desc={desc!} date={newDate!} />
    </>)
}

export default List;  