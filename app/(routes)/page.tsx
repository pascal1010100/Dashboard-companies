import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import { Tooltip } from "@radix-ui/react-tooltip";
import { LastCustomers } from "./components/LastCustomers";
import { Salesdistributor } from "./components/Salesdistributors";
import TotalSuscribers from "../../components/TotalSuscribers/TotalSuscribers";
import { ListIntegrations } from "@/components/ListIntegrations/ListIntegration";





export  const dataCardsSummary =[
  {
    icon:UserRound,
    total:"12.450",
    average:15,
    title:"Companies created",
    TooltipText:"See all of the companies created"
  },
  {
    icon:Waypoints,
    total:"86.5%",
    average:80,
    title:"Total Revenue",
    TooltipText:"See all  fo the summary"
  },
  {
    icon:BookOpenCheck,
    total:"363,95$",
    average:30,
    title:"Bounce Rate",
    tooltipText:"See all of the bounce rate"
  }

]


export default function Home() {
  return (
    <div>
      
      
      <h2 className="text-2xl mb-4">
        Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
          {dataCardsSummary.map(({icon, total, average,title,tooltipText})=> (
            <CardSummary
               key={title} 
               icon={icon}
               total={total}
               average={average}
               title="Companies created"
               tooltipText="See all of the companies created"
            />
          ))}
        </div>
        <div className=" grid grid-cols-1 mt-12 xl:grid-cols-2 md:gap-x-10">
          <LastCustomers />
          <Salesdistributor />
          </div>
          
            <div  className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4   md:gap-y-0 mt-12 md:mb-10 justify-center">
            <TotalSuscribers />
            <ListIntegrations />
            </div>
          </div>
       
    
  );
}
