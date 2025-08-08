import Aos from "aos";
import { cn } from "@/lib/utils";
import { SkillsProps } from "./props";
import { styles } from "@/lib/styles";
import { BebasNeue } from "@/lib/fonts";
import Reveal from "@/functions/reveal";
import { Badge } from "@/components/ui/badge";
import { Fragment, memo, useCallback, useEffect } from "react";

export const Skills = memo(function Skills({
  title,
  icon,
  constant,
}: SkillsProps) {
  const initAos = useCallback(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(initAos, [initAos]);

  return (
    <Fragment>
      <div className={cn(`flex items-center text-xl`, BebasNeue.className)}>
        <div className={`${styles.primaryBgColor} p-1.5 rounded-lg mr-2`}>
          {icon}
        </div>
        <Reveal>
          <div className="flex items-center">{title}</div>
        </Reveal>
      </div>
      <div>
        {constant.map((data: any) => (
          <Badge
            key={data.id}
            variant="secondary"
            className="m-1"
            data-aos={`fade-up`}
            data-aos-delay={data.id * 50}
          >
            {data.name}
          </Badge>
        ))}
      </div>
    </Fragment>
  );
});
