
import { Description } from "../components/home/Description";
import { Hero } from "../components/home/Hero";

export default function Homelayout({children}:{children: React.ReactNode}) {
    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    )
}
