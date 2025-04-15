import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog/dialog";
export type DialogComponentProps = {
  variant: "slot" | "media" | "default" | "defaultLeft";
  alignment: "horizontal" | "vertical";
  triggerBtn: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  primaryBtn?: string;
  secondaryBtn?: string;
  innerContent?: React.ReactNode;
  image: string;
  triggerBtnVarient?: Button;
  primaryBtnVarient?: Button;
  secondaryBtnVarient?: Button;
  primaryButtonOnClick?: () => void;
  secondaryButtonOnClick?: () => void;
};
type Button = "default" | "destructive" | "tertiary" | "secondary" | "link";
function DialogComponent({
  variant,
  alignment,
  triggerBtn,
  triggerBtnVarient,
  primaryBtnVarient,
  secondaryBtnVarient,
  icon,
  title,
  description,
  primaryBtn,
  secondaryBtn,
  innerContent,
  image,
  primaryButtonOnClick,
  secondaryButtonOnClick,
  ...props
}: DialogComponentProps) {
  let content;
  switch (variant) {
    case "slot":
      content = (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">{triggerBtn}</Button>
          </DialogTrigger>
          <DialogContent
            className={`sm:max-w-[425px] flex flex-col gap-[3rem] ${
              alignment === "vertical" ? "w-[400px]" : "max-w-auto"
            }`}
          >
            <DialogHeader>
              <DialogTitle>
                <h2> {title}</h2>
              </DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div>{innerContent}</div>
            <DialogFooter>
              <div
                className={`footer-container flex ${
                  alignment === "vertical"
                    ? "flex-col"
                    : "items-end justify-end"
                } w-full gap-2`}
              >
                <Button
                  type="submit"
                  className={`${
                    alignment === "horizontal" ? "w-fit" : "w-full"
                  }`}
                  onClick={primaryButtonOnClick}
                >
                  {primaryBtn}
                </Button>
                <Button
                  variant="secondary"
                  type="submit"
                  className={`${
                    alignment === "horizontal" ? "w-fit" : "w-full"
                  }`}
                  onClick={secondaryButtonOnClick}
                >
                  {secondaryBtn}
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
      break;
    case "media":
      content = (
        <Dialog {...props}>
          <DialogTrigger asChild>
            <Button variant={triggerBtnVarient || "default"}>
              {triggerBtn}
            </Button>
          </DialogTrigger>
          <DialogContent
            className={`sm:max-w-[425px] flex flex-col gap-[2rem] ${
              alignment === "vertical" ? "w-[400px]" : "max-w-auto"
            }`}
          >
            <div className="imageContainer">
              <img src={image} alt={title} className="w-full h-[200px]" />
            </div>
            <DialogHeader>
              <DialogTitle className="w-full">
                <h2> {title}</h2>
              </DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div>{innerContent}</div>
            <DialogFooter>
              <div
                className={`footer-container flex ${
                  alignment === "vertical"
                    ? "flex-col"
                    : "items-end justify-end"
                } w-full gap-2`}
              >
                {primaryBtn && (
                  <Button
                    type="submit"
                    variant={primaryBtnVarient || "default"}
                    className={`${
                      alignment === "horizontal" ? "w-fit" : "w-full"
                    }`}
                    onClick={primaryButtonOnClick}
                  >
                    {primaryBtn}
                  </Button>
                )}
                {secondaryBtn && (
                  <Button
                    variant={secondaryBtnVarient || "secondary"}
                    type="submit"
                    className={`${
                      alignment === "horizontal" ? "w-fit" : "w-full"
                    }`}
                    onClick={secondaryButtonOnClick}
                  >
                    {secondaryBtn}
                  </Button>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
      break;
    case "default":
      content = (
        <Dialog {...props}>
          <DialogTrigger asChild>
            <Button variant={triggerBtnVarient}>{triggerBtn}</Button>
          </DialogTrigger>
          <DialogContent
            className={`sm:max-w-[425px] flex flex-col gap-[3rem] ${
              alignment === "vertical" ? "w-[400px]" : "max-w-auto"
            }`}
          >
            <DialogHeader>
              <DialogTitle className="w-full flex flex-col gap-2 items-center justify-center ">
                <div
                  className={`iconcontainer h-[50px] w-[50px] bg-primary-200 rounded-full flex items-center justify-center m-auto`}
                >
                  {icon}
                </div>
                <h2 className="text-center"> {title}</h2>
              </DialogTitle>
              <DialogDescription className="text-center">
                {description}
              </DialogDescription>
            </DialogHeader>
            <div>{innerContent}</div>
            <DialogFooter>
              <div
                className={`footer-container flex ${
                  alignment === "vertical"
                    ? "flex-col"
                    : "items-end justify-end"
                } w-full gap-2`}
              >
                {primaryBtn && (
                  <Button
                    type="submit"
                    className={`${
                      alignment === "horizontal" ? "w-fit" : "w-full"
                    }`}
                    onClick={primaryButtonOnClick}
                  >
                    {primaryBtn}
                  </Button>
                )}
                {secondaryBtn && (
                  <Button
                    variant="secondary"
                    type="submit"
                    className={`${
                      alignment === "horizontal" ? "w-fit" : "w-full"
                    }`}
                    onClick={secondaryButtonOnClick}
                  >
                    {secondaryBtn}
                  </Button>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
      break;
    case "defaultLeft":
      content = (
        <Dialog {...props}>
          <DialogTrigger asChild>
            <Button variant="default">{triggerBtn}</Button>
          </DialogTrigger>
          <DialogContent
            className={`sm:max-w-[425px] flex flex-col gap-[3rem] ${
              alignment === "vertical" ? "w-[400px]" : "max-w-auto"
            }`}
          >
            <DialogHeader>
              <DialogTitle className="w-full flex flex-col gap-2">
                <div
                  className={`iconcontainer h-[50px] w-[50px] bg-primary-200 rounded-full flex items-center justify-center`}
                >
                  {icon}
                </div>
                <h2> {title}</h2>
              </DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div>{innerContent}</div>
            <DialogFooter>
              <div
                className={`footer-container flex ${
                  alignment === "vertical"
                    ? "flex-col"
                    : "items-end justify-end"
                } w-full gap-2`}
              >
                {primaryBtn && (
                  <Button
                    type="submit"
                    className={`${
                      alignment === "horizontal" ? "w-fit" : "w-full"
                    }`}
                    onClick={primaryButtonOnClick}
                  >
                    {primaryBtn}
                  </Button>
                )}
                {secondaryBtn && (
                  <Button
                    variant="secondary"
                    type="submit"
                    className={`${
                      alignment === "horizontal" ? "w-fit" : "w-full"
                    }`}
                    onClick={secondaryButtonOnClick}
                  >
                    {secondaryBtn}
                  </Button>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
      break;
    default:
      throw new Error(`Unknown variant: ${variant}`);
  }
  return content;
}

export default DialogComponent;
