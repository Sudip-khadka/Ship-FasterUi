import {
  AlertCircle,
  // ArrowBigLeft,
  ArrowLeft,
  ArrowRight,
  Bitcoin,
  Box,
  CheckCheckIcon,
  Globe,
  Home,
  Settings,
  User,
  XIcon,
} from "lucide-react";
import "./App.css";
// import { Input } from "./components/ui/input";
// import FileUpload from "./ui/internal/FileUpload";
// import { Dropdown, DropdownItem } from "./ui/internal/DropDown";
// import { OTPInput } from "@/components/ui/OtpInput";
import OTPFormExample from "./ui/external/InputOtpForm";
import { PaginationExamples } from "./pages/PaginationDemo";
// import CustomToaster from "./ui/internal/CustomToaster";
// import { useState } from "react";
// import TableComp from "./components/sanitizeEmail/tableComp";
// import { PieChartExample } from "./pages/chartdemo";
// import ToggleDemo from "./pages/ToggleDemo";
import Zoro from "@/assets/zoro.jpg";
// import { Rating } from "./components/ui/rating";
// import ChartDemo from "./pages/chartdemo";
// import ActionDropdown from "./ui/internal/ActionDropDown";
// import { RadioButton } from "./components/ui/radiobutton";
import { Button } from "./components/ui/button";
import { AlertExamples, FormWithAlertFeedback } from "./pages/AlertExample";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {Badge} from "./components/ui/badge";
import { Avatar } from "./components/ui/avatar";
import { Slider } from "./components/ui/slider";

import ToastExampleApp from "./pages/Toastexample";
import TimePickerDemo from "./pages/TimePickerDemo";
// import { useState } from "react";
import FormWithValidation from "./pages/FormExample";
import CustomInputExamples from "./pages/custom-input-examples";
// import CheckboxDemo from "./pages/CheckboxDemo";
import OTPExample from "./pages/OtpExample";

// import { ParentComponent } from "./components/testing/paginationTesting";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
//   PaginationWrapper,
// } from "@/components/ui/pagination";
import DistributedPagination from "./components/testing/pagination/distributed";
import CompressedPagination from "./components/testing/pagination/compressed";
import LeftAndRight from "./components/testing/pagination/leftAndright";
import Middle from "./components/testing/pagination/middle";
// import { InputDropDown } from "./components/internal/CustomDropDown";
import TooltipDemo from "./pages/TooltipExample";
// import FileUploadExamples from "./pages/FileuploadDemo";
import CheckboxDemo from "./pages/CheckboxDemo";
import PieChartExample from "./pages/chartdemo";
import ToggleDemo from "./pages/ToggleDemo";
import TextareaExample from "./pages/TextareaDemo";
import { Tabs, TabsContent, TabsLabel, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import FileUploadExamples from "./pages/FileuploadDemo";
import Example from "./components/testing/dropdown/avatarDropdown";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Stat, StatIndicator } from "./components/ui/stat";

function App() {
  // const [selectedValue, setSelectedValue] = useState("option1");
  // const [isToasterOpen, setIsToasterOpen] = useState<boolean>(false);

  // const handleOpenToaster = (): void => {
  //   setIsToasterOpen(true);
  // };

  // const handleCleanLater = (): void => {
  //   console.log("User chose to clean file later");
  //   setIsToasterOpen(false);
  //   // Additional logic here
  // };

  // const handleDiscardFile = (): void => {
  //   console.log("User chose to discard file");
  //   setIsToasterOpen(false);
  //   // Additional logic here
  // };
  // const data = [
  //   { value: "data1", label: "data1" },
  //   { value: "data2", label: "data2" },
  //   { value: "data3", label: "data3" },
  //   { value: "data4", label: "data 4" },
  // ];
  // const actions = [
  //   {
  //     id: "analyze",
  //     label: "Analyze List",
  //     onClick: () => console.log("Analyze clicked"),
  //   },
  //   {
  //     id: "verify",
  //     label: "Verify Email List",
  //     onClick: () => console.log("Verified  clicked"),
  //   },
  //   // Add more actions as needed
  // ];
  // Handler for dropdown changes
  // const handleDropdownChange = (selectedItems: DropdownItem[]) => {
  //   console.log("Selected items:", selectedItems);
  // };
  //for rating

  //for rating
  // const datas = [
  //   {
  //     email: "user1@example.com",
  //     status: "Tag1",
  //     reason: "Reason 1",
  //     date: "2023-01-01",
  //   },
  //   {
  //     email: "user2@example.com",
  //     status: "Tag2",
  //     reason: "Reason 2",
  //     date: "2023-01-02",
  //   },
  //   {
  //     email: "user3@example.com",
  //     status: "Tag3",
  //     reason: "Reason 3",
  //     date: "2023-01-03",
  //   },
  //   {
  //     email: "user4@example.com",
  //     status: "Tag1",
  //     reason: "Reason 4",
  //     date: "2023-01-04",
  //   },
  //   {
  //     email: "user5@example.com",
  //     status: "Tag2",
  //     reason: "Reason 5",
  //     date: "2023-01-05",
  //   },
  //   {
  //     email: "user6@example.com",
  //     status: "Tag3",
  //     reason: "Reason 6",
  //     date: "2023-01-06",
  //   },
  //   {
  //     email: "user7@example.com",
  //     status: "Tag1",
  //     reason: "Reason 7",
  //     date: "2023-01-07",
  //   },
  //   {
  //     email: "user8@example.com",
  //     status: "Tag2",
  //     reason: "Reason 8",
  //     date: "2023-01-08",
  //   },
  //   {
  //     email: "user9@example.com",
  //     status: "Tag3",
  //     reason: "Reason 9",
  //     date: "2023-01-09",
  //   },
  //   {
  //     email: "user10@example.com",
  //     status: "Tag1",
  //     reason: "Reason 10",
  //     date: "2023-01-10",
  //   },
  // ];
  // const handleTimeChange = (time: {
  //   hours: number;
  //   minutes: number;
  //   seconds?: number;
  //   period: "AM" | "PM";
  // }) => {
  //   console.log("Selected Time:", time);
  // };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedValue(e.target.value);
  // };
  // const [singleValue, setSingleValue] = useState<string>("")
  // const [currentPage, setCurrentPage] = useState(1);

  // const handlePageChange = (newPage: number) => {
  //   console.log("Page changed to:", newPage);
  //   alert(`Page changed to: ${newPage}`);
  //   setCurrentPage(newPage); // Update the current page in the parent state
  // };

  return (
    <div className="w-full overflow-hidden">
      <div className="testing-toast h-screen w-screen flex items-center justify-center gap-3">
        <Stat overview="Overline" description="Description" value={"$99.99"} variant="withButton" statIndicator={<StatIndicator startIcon={false} variant="upTrend" size="lg" styles="accent" percentage={0} />} icon={<Bitcoin/>} button={<Button>CLickMe</Button>} />
        </div>
      <div className="w-full justify-center items-center">
      <Avatar size="2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fIxHT7pNFMiBfPoFSYGJqYL5QyncODgSLkNuDGNs5vn-swTPmUQtZERlKjN7bi8Q2KpiF3gAong0VRRiDzHga-jXjRyD6ULF3Qd4KDz8" type="image" status="none" shape="circle" notification notificationCount={2} onClick={()=>alert("you have 2 notifications")} />
      <div className="w-[300px] mx-auto"><Example/></div>
      </div>
        <TextareaExample />
      <div className="">
        <FileUploadExamples />
      </div>
      <div className="testing-Breadcrumb h-screen w-screen flex items-center justify-center gap-3">
        <div className="row-1 w-full flex text-center items-center justify-center">
          <Breadcrumb>
          <BreadcrumbList>
          <BreadcrumbLink>
            <BreadcrumbItem size="3xl" type="default" label="HOme" startIcon={<Home/>}/>
          </BreadcrumbLink>
          <BreadcrumbLink>
            <BreadcrumbItem  size="3xl" type="default" label="HOme" startIcon={<Home/>}/>
          </BreadcrumbLink>
          <BreadcrumbLink>
            <BreadcrumbItem size="3xl" type="outline" label="Profile" startIcon={<User/>}/>
          </BreadcrumbLink>
          <BreadcrumbLink>
            <BreadcrumbItem size="3xl" type="link" label="Setting" startIcon={<Settings/>}/>
          </BreadcrumbLink>
          </BreadcrumbList>
          </Breadcrumb>
        </div>
        </div>
      <div className="testing-dropdown h-screen w-screen flex items-center justify-center gap-3">
        <div className="row-1 w-full flex text-center items-center justify-center">
          {/* <Dropdown options={data}/> */}
          {/* <Dropdown>
          <DropdownTrigger>Open</DropdownTrigger>
          <DropdownContent>
          <DropdownItem>Hello</DropdownItem>
          </DropdownContent>
          </Dropdown> */}
          {/* <InputDropDown
            maxHeight="50px"
            className="w-[300px]"
            multiSelect={true}
            // dropDownTrigger={<Badge>Badge</Badge>}
            scrollable
            data={customData}
            placeholder="Select frameworks..."
            // onChange={(value) => setMultiValues(value as string[])}
          /> */}
        </div>
      </div>
      <div className="testing-tabs h-screen w-screen flex items-center justify-center">
      <Tabs defaultValue="account" className="w-full">
      <TabsList className="">
        <TabsTrigger size="lg" variant="divider" value="account" ><Globe/> Line Buttom <TabsLabel value={2}/></TabsTrigger>
        <TabsTrigger variant="divider" value="password" >Line Top <TabsLabel value={2}/></TabsTrigger>
        <TabsTrigger variant="divider"  value="button" isFullWidth>Button <TabsLabel value={2}/></TabsTrigger>
        <TabsTrigger variant="divider" value="buttonOutlined">Button Outlined <TabsLabel value={2}/></TabsTrigger>
        <TabsTrigger variant="divider"  value="divider" isFullWidth>Divider <TabsLabel value={2}/></TabsTrigger>
        <TabsTrigger variant="divider" value="dot" >Dot <TabsLabel value={2}/></TabsTrigger>
        
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="name">Name</label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <label htmlFor="username">Username</label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current">Current password</label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <label htmlFor="new">New password</label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="button">
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>
              This is the content for tabs with button variant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="name">Name</label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <label htmlFor="username">Username</label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="buttonOutlined">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current">Current password</label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <label htmlFor="new">New password</label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="divider">
        <Card>
          <CardHeader>
            <CardTitle>Divider</CardTitle>
            <CardDescription>
              This is the content for tabs with divider variant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current">Current password</label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <label htmlFor="new">New password</label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="dot">
        <Card>
          <CardHeader>
            <CardTitle>Dot</CardTitle>
            <CardDescription>
              This is a content for tabs with dot variant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current">Current password</label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <label htmlFor="new">New password</label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
          </div>
      <div className="testing-pagination h-screen w-screen flex items-center justify-center gap-3">
        <div className="row-1 w-full text-center">
          <p>Distributed Default</p>
          <DistributedPagination />
          <p>Distributed Minimal</p>
          <DistributedPagination variant="minimal" />
          <p>Distributed Primary</p>
          <DistributedPagination variant="primary" />
          <p>Distributed Outlined</p>
          <DistributedPagination variant="outlined" />
          <p>Distributed Minimal IconOnly</p>
          <DistributedPagination variant="minimal" iconOnly />
          <p>Compressed Minimal</p>
          <CompressedPagination />
          <p>Compressed Minimal IconOnly</p>
          <CompressedPagination iconOnly />
          <p>Left&Right </p>
          <LeftAndRight />
          <p>Left&Right IconONly</p>
          <LeftAndRight iconOnly />
          <p>Middle</p>
          <Middle />
          <p>Middle IconOnly</p>
          <Middle iconOnly />
          {/* <ParentComponent /> */}
        </div>
      </div>

      <div className="">
        <TooltipDemo />
      </div>
      <div className="testing-slider h-screen w-screen flex items-center justify-center gap-3">
        <div className="slider-1 flex flex-col items-center justify-center w-full max-w-[400px]">
          <Slider
            iconPosition={"center"}
            showTooltip
            variant="default"
            defaultValue={[0]}
            showMinMaxLabels
          />
          <Slider
            iconPosition={"center"}
            showTooltip
            variant="minmax"
            defaultValue={[50, 60]}
            min={10}
            max={70}
          />
        </div>
      </div>
      <div className="testing-avatar h-screen w-screen flex items-center justify-center gap-3">
        <div className="row1 flex flex-col gap-2 items-center">
          <Avatar
            size="3xl"
            shape="circle"
            status="none"
            type="initial"
            initials="Pa"
            notification
            notificationCount={1}
          />
          <Avatar
            size="2xl"
            shape="circle"
            status="none"
            type="initial"
            initials="Pa"
            action="verified"
          />
          <Avatar
            size="2xl"
            shape="circle"
            status="none"
            type="initial"
            initials="Pa"
            action="verified"
            verifiedIcon={<CheckCheckIcon />}
          />
          <Avatar
            size="xl"
            shape="circle"
            status="none"
            type="initial"
            initials="Pa"
            action="company"
            logoImage="https://cdn.dribbble.com/userupload/14358315/file/original-e983008284fbea5fec7388e538b984ca.png?resize=752x&vertical=center"
          />
          <Avatar
            size="md"
            shape="circle"
            status="none"
            type="initial"
            initials="Pa"
          />
          <Avatar
            size="sm"
            shape="circle"
            status="none"
            type="initial"
            initials="Pa"
          />
          <Avatar
            size="xs"
            shape="circle"
            status="none"
            type="initial"
            initials="Pa"
          />
        </div>
        <div className="row1 flex flex-col gap-2 items-center">
          <Avatar
            size="3xl"
            shape="rounded"
            status="none"
            type="image"
            src={Zoro}
            initials="Pa"
            notification
            notificationCount={1}
          />
          <Avatar
            size="2xl"
            src={Zoro}
            shape="circle"
            status="none"
            type="image"
            initials="Pa"
            action="verified"
          />
          <Avatar
            size="2xl"
            shape="circle"
            status="none"
            type="image"
            initials="Pa"
            src={Zoro}
            action="verified"
            verifiedIcon={<CheckCheckIcon />}
          />
          <Avatar
            size="xl"
            shape="circle"
            status="none"
            type="image"
            initials="Pa"
            src={Zoro}
            action="company"
            logoImage="https://cdn.dribbble.com/userupload/14358315/file/original-e983008284fbea5fec7388e538b984ca.png?resize=752x&vertical=center"
          />
          <Avatar
            size="md"
            src={Zoro}
            shape="square"
            status="none"
            type="image"
            initials="Pa"
          />
          <Avatar
            size="sm"
            src={Zoro}
            shape="rounded"
            status="none"
            type="image"
            initials="Pa"
          />
          <Avatar
            size="xs"
            src={Zoro}
            shape="circle"
            status="none"
            type="image"
            initials="Pa"
          />
        </div>
        <div className="row1 flex flex-col gap-2 items-center">
          <Avatar
            size="3xl"
            shape="square"
            status="none"
            type="placeholder"
            initials="Pa"
            notification
            notificationCount={1}
          />
          <Avatar
            size="2xl"
            shape="circle"
            status="none"
            type="placeholder"
            initials="Pa"
            action="verified"
          />
          <Avatar
            size="2xl"
            shape="circle"
            status="none"
            type="placeholder"
            initials="Pa"
            action="verified"
            verifiedIcon={<CheckCheckIcon />}
          />
          <Avatar
            size="xl"
            shape="circle"
            status="none"
            type="placeholder"
            initials="Pa"
            action="company"
            logoImage="https://cdn.dribbble.com/userupload/14358315/file/original-e983008284fbea5fec7388e538b984ca.png?resize=752x&vertical=center"
          />
          <Avatar
            size="md"
            shape="circle"
            status="none"
            type="placeholder"
            initials="Pa"
          />
          <Avatar
            size="sm"
            shape="circle"
            status="none"
            type="placeholder"
            initials="Pa"
          />
          <Avatar
            size="xs"
            shape="circle"
            status="none"
            type="placeholder"
            initials="Pa"
          />
        </div>
      </div>
      <div className="testing-alert h-screen w-screen flex items-center justify-center gap-3 flex-col">
        <h1>Alerts</h1>
        <div className="w-full flex flex-col items-center gap-3">
          <Alert variant={"secondary"} className="w-[600px]">
            <AlertTitle>
              Hello Guys asa cbass aad ca cca ascadc aaadcadcad cadcadc ca{" "}
            </AlertTitle>
            <AlertDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              quisquam tempore dolorum eaque aliquam, velit reprehenderit error
              quis dolorem fugit tenetur modi iste provident dolor magnam saepe
              cumque deserunt nostrum?
            </AlertDescription>
          </Alert>
          <Alert variant={"secondary"} style={"outline"} className="w-[400px]">
            <AlertTitle>
              Hello Guys asa cbass aad ca cca ascadc aaadcadcad cadcadc ca{" "}
            </AlertTitle>
            <AlertDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              quisquam tempore dolorum eaque aliquam, velit reprehenderit error
              quis dolorem fugit tenetur modi iste provident dolor magnam saepe
              cumque deserunt nostrum?
            </AlertDescription>
          </Alert>
          <Alert variant={"secondary"} style={"filled"} className="w-[400px]">
            <AlertTitle>
              Hello Guys asa cbass aad ca cca ascadc aaadcadcad cadcadc ca{" "}
            </AlertTitle>
            <AlertDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              quisquam tempore dolorum eaque aliquam, velit reprehenderit error
              quis dolorem fugit tenetur modi iste provident dolor magnam saepe
              cumque deserunt nostrum?
            </AlertDescription>
          </Alert>
        </div>
      </div>
      <div className="">
        <Badge style="outlined" variant="warning" isHover={true}>
          Badge
        </Badge>
        <Badge style="outlined" isHover={true}>
          Badge
        </Badge>
      </div>
      <div className="textingBadges h-screen w-screen flex items-center justify-center gap-3 flex-wrap">
        <div className="single">
          <p>Primary</p>
          <div className=" flex gap-2">
            <div className="row-1 flex flex-col gap-2">
              <Badge
                shape={"dot"}
                size={"sm"}
                variant={"primary"}
                style={"filled"}
                isHover={true}
              >
                Badge
              </Badge>
              <Badge shape={"dot"} style={"filled"} isHover={true}>
                Badge
              </Badge>
              <Badge shape={"dot"} size={"lg"} style={"accent"} isHover={true}>
                Badge
              </Badge>
            </div>
            <div className="row-1 flex flex-col gap-2">
              <Badge
                shape={"dot"}
                size={"sm"}
                style={"outlined"}
                isHover={true}
                variant={"success"}
              >
                Badge
              </Badge>
              <Badge
                shape={"dot"}
                style={"outlined"}
                isHover={true}
                variant={"success"}
              >
                Badge
              </Badge>
              <Badge
                shape={"dot"}
                size={"lg"}
                style={"outlined"}
                isHover={true}
              >
                Badge
              </Badge>
            </div>
          </div>
        </div>
        <div className="single">
          <p>Primary with icon</p>
          <div className=" flex gap-2">
            <div className="row-1 flex flex-col gap-2">
              <Badge
                startIcon={<AlertCircle height={10} width={10} />}
                // shape={"dot"}
                size={"sm"}
                style={"accent"}
                isHover={true}
              >
                Badge
              </Badge>
              <Badge
                endIcon={<ArrowRight height={10} width={10} />}
                size={"md"}
                style={"accent"}
                isHover={true}
              >
                Badge
              </Badge>
              <Badge
                startIcon={<ArrowLeft height={10} width={10} />}
                endIcon={<ArrowRight height={10} width={10} />}
                size={"lg"}
                style={"accent"}
                isHover={true}
              >
                Badge bana
              </Badge>
            </div>
            <div className="row-1 flex flex-col gap-2">
              <Badge
                shape={"dot"}
                size={"sm"}
                style={"outlined"}
                isHover={true}
                variant={"success"}
              >
                Badge
              </Badge>
              <Badge
                shape={"dot"}
                style={"outlined"}
                isHover={true}
                variant={"success"}
              >
                Badge
              </Badge>
              <Badge
                shape={"dot"}
                size={"lg"}
                style={"outlined"}
                isHover={true}
              >
                Badge
              </Badge>
            </div>
          </div>
        </div>
        <div className="single">
          <p>Secondary</p>
          <div className="flex gap-2">
            <div className="row-1 flex flex-col gap-2">
              <Badge
                variant={"secondary"}
                isHover={true}
                shape={"dot"}
                size={"sm"}
              >
                Badge
              </Badge>
              <Badge variant={"secondary"} shape={"dot"} size={"md"}>
                Badge
              </Badge>
              <Badge variant={"secondary"} shape={"dot"} size={"lg"}>
                Badge
              </Badge>
              {/* <Badge shape={"dot"}>Badge</Badge>
              <Badge shape={"dot"}>Badge</Badge> */}
            </div>
            <div className="row-1 flex flex-col gap-2">
              <Badge
                variant={"secondary"}
                shape={"dot"}
                size={"sm"}
                style={"accent"}
              >
                Badge
              </Badge>
              <Badge variant={"secondary"} shape={"dot"} style={"accent"}>
                Badge
              </Badge>
              <Badge
                variant={"secondary"}
                shape={"dot"}
                size={"lg"}
                style={"accent"}
              >
                Badge
              </Badge>
            </div>
            <div className="row-1 flex flex-col gap-2">
              <Badge
                variant={"secondary"}
                shape={"dot"}
                size={"sm"}
                style={"outlined"}
              >
                Badge
              </Badge>
              <Badge variant={"secondary"} shape={"dot"} style={"outlined"}>
                Badge
              </Badge>
              <Badge
                variant={"secondary"}
                shape={"dot"}
                size={"lg"}
                style={"outlined"}
              >
                Badge
              </Badge>
            </div>
          </div>
        </div>
        <div className="single">
          <p>Warning</p>
          <div className="primary flex gap-2">
            <div className="row-1 flex flex-col gap-2">
              <Badge variant={"warning"} shape={"dot"} size={"sm"}>
                Badge
              </Badge>
              <Badge variant={"warning"} shape={"dot"} size={"md"}>
                Badge
              </Badge>
              <Badge variant={"warning"} shape={"dot"} size={"lg"}>
                Badge
              </Badge>
              {/* <Badge shape={"dot"}>Badge</Badge>
              <Badge shape={"dot"}>Badge</Badge> */}
            </div>
            <div className="row-1 flex flex-col gap-2">
              <Badge
                variant={"warning"}
                shape={"dot"}
                size={"sm"}
                style={"accent"}
              >
                Badge
              </Badge>
              <Badge variant={"warning"} shape={"dot"} style={"accent"}>
                Badge
              </Badge>
              <Badge
                variant={"warning"}
                shape={"dot"}
                size={"lg"}
                style={"accent"}
              >
                Badge
              </Badge>
            </div>
            <div className="row-1 flex flex-col gap-2">
              <Badge
                variant={"warning"}
                shape={"dot"}
                size={"sm"}
                style={"outlined"}
              >
                Badge
              </Badge>
              <Badge variant={"warning"} shape={"dot"} style={"outlined"}>
                Badge
              </Badge>
              <Badge
                variant={"warning"}
                shape={"dot"}
                size={"lg"}
                style={"outlined"}
              >
                Badge
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="testingButton h-screen w-screen flex items-center justify-center">
        <div className="first-row flex gap-3">
          <div className="primary flex flex-col gap-2">
            <Button size={"md"} variant={"secondary"} className="w-fit">
              Button CTA Lorem, ipsum. Lorem ipsum dolor sit amet.
            </Button>
            <Button
              variant={"secondary"}
              size={"md"}
              className="w-fit"
              startIcon={<Box size={15} />}
              endIcon={<Box size={15} />}
            >
              Button CTA
            </Button>
            <Button
              variant={"secondary"}
              size={"md"}
              className="w-fit"
              startIcon={<Box />}
            >
              Button CTA
            </Button>
            <Button
              variant={"secondary"}
              size={"md"}
              className="w-fit"
              endIcon={<Box />}
            >
              Button CTA
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
              startIcon={<Box />}
              endIcon={<Box />}
              className="w-[400px]"
            >
              Button CTA{" "}
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
              endIcon={<Box />}
              className="w-[400px]"
            >
              Button CTA{" "}
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
              startIcon={<Box />}
              className="w-[400px]"
            >
              Button CTA{" "}
            </Button>
            <Button variant={"secondary"} size={"md"} className="w-[300px]">
              Button CTA
            </Button>
            <Button
              variant={"secondary"}
              size={"lg"}
              endIcon={
                <span className="h-[50px] w-[50px] items-center flex ">
                  <XIcon className="h-[50px] w-[50px]" />
                </span>
              }
              className="text-5xl leading-[40px]"
            >
              Button CTA
            </Button>
          </div>
          <div className="secondary flex flex-col gap-2 w-[200px]">
            <Button
              variant={"secondary"}
              size={"sm"}
              startIcon={<Box />}
            ></Button>
          </div>
        </div>
      </div>

      <div className="m-8">
        <div className="">
          <CustomInputExamples />
          <FormWithValidation />
          <CheckboxDemo />
        </div>
        <ToastExampleApp />
        <TimePickerDemo />

        <div className="p">Target</div>
        <h2>
          scrollable icon export Form element (React hook form ) sidebar
          collapsible toaster date range time picker fully functional
        </h2>
        <AlertExamples />
        <FormWithAlertFeedback />
        <Button className="" size="sm">
          Button CTA
        </Button>
      </div>
      <div className="mx-3 my-1.5 flex flex-col gap-5 ">
        {/* <ChartCollection /> */}
        {/* <RadioButton
          label="Option 1"
          name="interactive"
          value="option1"
          active={selectedValue === "option1"}
          onChange={handleChange}
        /> */}
        <PieChartExample />
        <ToggleDemo />
        <div className="flex items-center justify-center p-50 h-screen">
          {/* <TableComp data={datas} /> */}
        </div>
        {/* <div className="relative">
          <button
            className="rounded-ss-2xl cursor-pointer border border-purple-700 bg-purple-400 text-white p-2 "
            onClick={handleOpenToaster}
          >
            Open Toaster
          </button>

          <CustomToaster
            isOpen={isToasterOpen}
            onClose={() => setIsToasterOpen(false)}
            onPrimaryClick={handleCleanLater}
            onSecondaryClick={handleDiscardFile}
          />
        </div> */}
        {/* <Input className="w-full" placeholder="enter text" />
        <Input className="w-full" placeholder="enter text" leftIcon={<Eye />} />
        <Input
          className=""
          inputSize="lg"
          placeholder="enter text"
          rightIcon={<Eye />}
          iconClassName="text-blue-500"
        />
        <Input
          className=""
          inputSize="lg"
          placeholder="enter text"
          rightIcon={<Apple />}
          leftIcon={<Banana />}
        /> */}
        {/* <button className="w-32 rounded-3xl border-2 cursor-pointer">
          Save
        </button> */}
        <div className="flex">
          {/* <div className="fileupload w-[555px] flex items-center justify-center ">
            <FileUpload buttontext="Sign Up" />
          </div> */}
          <div className=" w-[555px] flex items-center justify-center ">
            {/* <Dropdown
              items={data}
              onChange={handleDropdownChange}
              placeholder="Placeholder"
            /> */}
          </div>
        </div>
        <div className="mx-64">
          {/* <InputOTPForm /> */}
          <OTPFormExample />
          {/* <ActionDropdown buttonText="Quick Action" actions={actions} /> */}
          <div className="container mx-auto py-10 space-y-12">
            <h1 className="text-2xl font-bold mb-6">
              Custom Pagination Examples
            </h1>
            <PaginationExamples />
            <p>Data table pagination</p>
            {/* <DataTablePagination table="" /> */}
          </div>
        </div>
        <div className="">{/* <Calendar /> */}</div>
        <div className="space-y-4"></div>
        <OTPExample />
        <div className="">{/* <Pagination /> */}</div>
      </div>
    </div>
  );
}

export default App;
