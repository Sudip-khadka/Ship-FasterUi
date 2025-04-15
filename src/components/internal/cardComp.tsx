import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card/card";
  import { Badge } from "../ui/badge";
  import { Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
  
  function cardComp({ title, description, content, badge ,cardFooter}: {
      title: string;
      description: string;
      content: React.ReactNode;
      badge?: {
          label: string;
          variant?: "success" | "warning";
      };
      cardFooter:React.ReactNode
  }) {
    const [isSelected, setIsSelected] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsSelected(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    return (
      <Card ref={cardRef}
      onClick={() => setIsSelected(true)}
      className={`w-full max-w-[300px] h-auto overflow-hidden border-2 transition-all hover:border-primary-300 ${
        isSelected ? "border-primary-300" : "border-transparent"
      }`}>
        <CardHeader className="flex justify-between w-full items-center">
          <div className="titles flex flex-col gap-1.5">
            <CardTitle ><p className="line-clamp-1 overflow-hidden ">{title}</p></CardTitle>
            <CardDescription className="flex gap-3 items-center text-sm text-muted-foreground">
              <Calendar className="size-4" />
              <p className="line-clamp-1 w-[150px]">{description}</p>
            </CardDescription>
          </div>
          {badge && <Badge variant={badge.variant || "success"} size={"sm"} shape={"circle"} style={"accent"} className="text-[12px]">{badge.label}</Badge>}
        </CardHeader>
        <CardContent className="flex flex-wrap">
          {content}
        </CardContent>
        <CardFooter className="pointer-events-none">
        <div className="pointer-events-auto w-full">
          {cardFooter}
        </div>
      </CardFooter>
      </Card>
    );
  }
  
  export default cardComp;
  