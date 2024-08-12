import { cn } from "@/lib/utils";
import { LogoFont } from "@/lib/fonts";

export const Logo = () => {
    return(
        <div className={cn
            ("text-4xl",
                LogoFont.className)
        }>
            B
        </div>
    )
}