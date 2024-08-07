import { cn } from "@/lib/utils";
import { LogoFont } from "@/lib/fonts";

export const Logo = () => {
    return(
        <div className={cn
            ("text-4xl md:mr-5",
                LogoFont.className)
        }>
            B
        </div>
    )
}