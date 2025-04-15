import { useState } from "react";
import {CustomFileUpload} from "@/components/internal/fileUpload/CustomFileUpload";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";

export default function FileUploadExamples() {
  const [uploadType, setUploadType] = useState<
    "drag-drop" | "browse" | "combined"
  >("combined");
  const [showIcon, setShowIcon] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">File Upload Component</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Configuration</h2>

            <div className="space-y-2">
              <label className="text-sm font-medium">Upload Type</label>
              <Tabs
                defaultValue="combined"
                onValueChange={(value) => setUploadType(value as any)}
              >
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="drag-drop">Drag & Drop</TabsTrigger>
                  <TabsTrigger value="browse">Browse</TabsTrigger>
                  <TabsTrigger value="combined">Combined</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showIcon}
                  onChange={() => setShowIcon(!showIcon)}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">Show Icon</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showDescription}
                  onChange={() => setShowDescription(!showDescription)}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">Show Description</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isDisabled}
                  onChange={() => setIsDisabled(!isDisabled)}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">Disabled</span>
              </label>
            </div>
          </div>

          <div className="p-6 border rounded-lg bg-white">
            <h2 className="text-lg font-medium mb-4">Preview</h2>
            <CustomFileUpload
              uploadType={uploadType}
              showLeadingIcon={showIcon}
              showPromptDescription={showDescription}
              disabled={isDisabled}
              onFilesSelected={(files) => console.log("Files selected:", files)}
              onUploadComplete={(files) =>
                console.log("Upload complete:", files)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// import CustomFileUpload from "../components/internal/CustomFileUpload";

// export default function FileUploadExamples() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* Browse files examples */}
//       <div className="p-4 border border-neutral-100 rounded-lg bg-white">
//         <CustomFileUpload
//           uploadType="browse"
//           promptTitle2="Browse files to upload"
//           className="w-full"
//         />
//       </div>

//       <div className="p-4 border border-green-100 rounded-lg bg-white">
//         <CustomFileUpload
//           uploadType="browse"
//           promptTitle2="Browse files to upload"
//           className="w-full"
//         />
//       </div>

//       <div className="p-4 border border-neutral-100 rounded-lg bg-white">
//         <CustomFileUpload
//           uploadType="browse"
//           promptTitle2="Browse files to upload"
//           className="w-full"
//         />
//       </div>

//       {/* Upload a file examples */}
//       <div className="p-4 border border-neutral-100 rounded-lg bg-white">
//         <div className="flex justify-center">
//           <CustomFileUpload
//             uploadType="drag-drop"
//             promptTitle1="Upload a file or drag and drop"
//           />
//         </div>
//       </div>

//       <div className="p-4 border border-green-100 rounded-lg bg-white">
//         <div className="flex justify-center">
//           <CustomFileUpload
//             uploadType="drag-drop"
//             promptTitle1="Upload a file or drag and drop"
//           />
//         </div>
//       </div>

//       <div className="p-4 border border-neutral-100 rounded-lg bg-white">
//         <div className="flex justify-center">
//           <CustomFileUpload
//             uploadType="drag-drop"
//             promptTitle1="Upload a file or drag and drop"
//           />
//         </div>
//       </div>

//       {/* Drag and drop examples */}
//       <div className="p-4 border border-neutral-100 rounded-lg bg-white">
//         <div className="flex justify-center">
//           <CustomFileUpload
//             uploadType="combined"
//             promptTitle3="Drag and drop a file to upload"
//           />
//         </div>
//       </div>

//       <div className="p-4 border border-green-100 rounded-lg bg-white">
//         <div className="flex justify-center">
//           <CustomFileUpload
//             uploadType="combined"
//             promptTitle3="Drag and drop a file to upload"
//           />
//         </div>
//       </div>

//       <div className="p-4 border border-neutral-100 rounded-lg bg-white">
//         <div className="flex justify-center">
//           <CustomFileUpload
//             uploadType="combined"
//             promptTitle3="Drag and drop a file to upload"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
