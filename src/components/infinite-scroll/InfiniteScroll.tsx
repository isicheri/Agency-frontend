import { CurrencyPoundIcon,CloudIcon,CircleStackIcon, DevicePhoneMobileIcon, LockOpenIcon, DocumentArrowDownIcon, BeakerIcon } from "@heroicons/react/24/outline";


const InfiniteScrollPage = () => {
    return <div className="overflow-hidden flex">
        <ul className="flex gap-7 text-black text-sm py-4 animation-infinite-scroll">
            {
                projectTypeSymbol.map((data) => (
                    <li className="flex gap-4">
                            <p>{data.symbol}</p>
                            <p>{data.name}</p>
                 </li>
                ))
            }
        </ul>
    </div>
}

const projectTypeSymbol =  [
    {name: "Blockchain", symbol: <CurrencyPoundIcon className="h-[30px] w-[30px]" />},
    {name: "Cloud", symbol:<CloudIcon className="h-[30px] w-[30px]"/> },
    {name: "Databases", symbol: <CircleStackIcon className="h-[30px] w-[30px]"/>},
    {name: "Mobile Apps", symbol: <DevicePhoneMobileIcon className="h-[30px] w-[30px]"/>},
    {name: "Security Audits", symbol:<LockOpenIcon className="h-[30px] w-[30px]"/> },
    {name: "Web Applications", symbol: <DocumentArrowDownIcon className="h-[30px] w-[30px]"/>},
    {name: "HealthCare", symbol: <BeakerIcon className="h-[30px] w-[30px]"/>},
    {name: "HealthCare", symbol: <BeakerIcon className="h-[30px] w-[30px]"/>},
    {name: "HealthCare", symbol: <BeakerIcon className="h-[30px] w-[30px]"/>},
    {name: "HealthCare", symbol: <BeakerIcon className="h-[30px] w-[30px]"/>},
    {name: "HealthCare", symbol: <BeakerIcon className="h-[30px] w-[30px]"/>}
 ]

export default InfiniteScrollPage;