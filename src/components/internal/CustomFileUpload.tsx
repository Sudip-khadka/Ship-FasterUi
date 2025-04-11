import type React from "react";
import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FileStatus = "uploading" | "completed" | "failed" | "error";

export interface FileUploadProps {
  disabled?: boolean;
  promptTitle1?: string;
  promptTitle2?: string;
  promptTitle3?: string;
  showPromptDescription?: boolean;
  showLeadingIcon?: boolean;
  uploadType?: "drag-drop" | "browse" | "combined";
  allowedFileTypes?: string[];
  maxFileSize?: number;
  description?: string;
  onFilesSelected?: (files: File[]) => void;
  onUploadComplete?: (files: File[]) => void;
  className?: string;
}

export interface FileProgressProps {
  file: File;
  progress: number;
  status: FileStatus;
  errorMessage?: string;
  onRemove: () => void;
  onRetry?: () => void;
}

export const CustomFileUpload: React.FC<FileUploadProps> = ({
  disabled = false,
  promptTitle1 = "Upload a file or drag and drop",
  promptTitle2 = "Browse files to upload",
  promptTitle3 = "Drag and drop a file to upload",
  showPromptDescription = true,
  showLeadingIcon = true,
  uploadType = "combined",
  allowedFileTypes = ["image/png", "image/jpeg", "image/gif"],
  maxFileSize = 5 * 1024 * 1024,
  description = "PNG, JPG, GIF up to 5MB",
  onFilesSelected,
  onUploadComplete,
  className,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileProgress, setFileProgress] = useState<
    Record<
      string,
      { progress: number; status: FileStatus; errorMessage?: string }
    >
  >({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleFileChange = useCallback(
    (selectedFiles: FileList | null) => {
      console.log("File change triggered with files:", selectedFiles);
      if (!selectedFiles || disabled) return;

      const newFiles: File[] = [];
      const newFileProgress: Record<
        string,
        { progress: number; status: FileStatus; errorMessage?: string }
      > = {
        ...fileProgress,
      };

      Array.from(selectedFiles).forEach((file) => {
        // Check file type
        if (!allowedFileTypes.includes(file.type)) {
          newFileProgress[file.name] = {
            progress: 0,
            status: "error",
            errorMessage: "Error file type",
          };
          return;
        }

        // Check file size
        if (file.size > maxFileSize) {
          newFileProgress[file.name] = {
            progress: 0,
            status: "error",
            errorMessage: "File too large",
          };
          return;
        }

        newFiles.push(file);
        newFileProgress[file.name] = { progress: 0, status: "uploading" };
      });

      setFiles((prev) => [...prev, ...newFiles]);
      setFileProgress(newFileProgress);

      if (onFilesSelected) {
        onFilesSelected(newFiles);
      }

      // Simulate file upload for each file
      newFiles.forEach((file) => {
        simulateFileUpload(file);
      });
    },
    [allowedFileTypes, disabled, fileProgress, maxFileSize, onFilesSelected]
  );

  const simulateFileUpload = useCallback(
    (file: File) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 10;

        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);

          // Randomly fail some uploads for demonstration
          const shouldFail = Math.random() > 0.7;

          setFileProgress((prev) => ({
            ...prev,
            [file.name]: {
              progress,
              status: shouldFail ? "failed" : "completed",
              errorMessage: shouldFail ? "Oops! Upload failed" : undefined,
            },
          }));

          if (!shouldFail) {
            const completedFiles = files.filter(
              (f) =>
                fileProgress[f.name]?.status === "completed" ||
                f.name === file.name
            );

            if (onUploadComplete && completedFiles.length > 0) {
              onUploadComplete(completedFiles);
            }
          }
        } else {
          setFileProgress((prev) => ({
            ...prev,
            [file.name]: { ...prev[file.name], progress },
          }));
        }
      }, 200);

      return () => clearInterval(interval);
    },
    [fileProgress, files, onUploadComplete]
  );

  const handleBrowseClick = useCallback(() => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [disabled]);

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) {
        setIsDragging(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (!disabled) {
        handleFileChange(e.dataTransfer.files);
      }
    },
    [disabled, handleFileChange]
  );

  const handleRemoveFile = useCallback((fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
    setFileProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  }, []);

  const handleRetryUpload = useCallback(
    (file: File) => {
      setFileProgress((prev) => ({
        ...prev,
        [file.name]: { progress: 0, status: "uploading" },
      }));
      simulateFileUpload(file);
    },
    [simulateFileUpload]
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const renderFileProgress = () => {
    if (files.length === 0) return null;

    return (
      <div className="mt-6 space-y-4 w-full">
        {files.map((file) => (
          <FileProgress
            key={file.name}
            file={file}
            progress={fileProgress[file.name]?.progress || 0}
            status={fileProgress[file.name]?.status || "uploading"}
            errorMessage={fileProgress[file.name]?.errorMessage}
            onRemove={() => handleRemoveFile(file.name)}
            onRetry={() => handleRetryUpload(file)}
          />
        ))}
      </div>
    );
  };

  const renderDragDropUpload = () => (
    <div
      ref={dropAreaRef}
      className={cn(
        "Type:Drag and Drop flex w-[320px] p-[20px] flex-col items-center justify-center gap-[12px] rounded-[6px] border-[1px] border-secondary-200 bg-[#fff] cursor-pointer outline-none transition-colors duration-200",
        isDragging && "border-primary-500 bg-primary-50",
        isHovering && !isDragging && "bg-secondary-200",
        isFocused && "ring-4 ring-primary-100",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleBrowseClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={disabled ? -1 : 0}
    >
      {showLeadingIcon && (
        <div className="w-[32px] h-[32px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16.0002 22.1537L16.0002 13.2922M16.0002 13.2922L19.9387 17.2307M16.0002 13.2922L12.0617 17.2307M9.10789 26.0922C5.84516 26.0922 3.2002 23.4472 3.2002 20.1845C3.2002 17.5681 4.90102 15.349 7.25734 14.5725C7.17941 14.1576 7.13866 13.7297 7.13866 13.2922C7.13866 9.48569 10.2244 6.3999 14.031 6.3999C17.2227 6.3999 19.9078 8.56947 20.6918 11.5143C21.0748 11.3901 21.4835 11.323 21.9079 11.323C24.083 11.323 25.8463 13.0863 25.8463 15.2614C25.8463 15.7185 25.7685 16.1573 25.6253 16.5655C27.4812 17.2707 28.8002 19.0659 28.8002 21.1691C28.8002 23.8881 26.5961 26.0922 23.8771 26.0922H9.10789Z"
              stroke="#6366f1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-[4px] ">
        <div className="self-stretch">
          <span
            className="text-primary-500 font-fustat text-base font-medium leading-5"
            style={{ fontFeatureSettings: "'ss02' on, 'ss03' on" }}
          >
            {promptTitle1.split(" or ")[0]}
          </span>
          <span
            className="text-neutral-900 font-fustat text-base font-medium leading-5"
            style={{ fontFeatureSettings: "'ss02' on, 'ss03' on" }}
          >
            {" or " + promptTitle1.split(" or ")[1]}
          </span>
        </div>
        {showPromptDescription && (
          <div
            className="text-center text-neutral-400 font-open-sans text-sm font-normal leading-4"
            style={{ fontFeatureSettings: "'ss02' on, 'ss03' on" }}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );

  const renderBrowseUpload = () => (
    <div
      className={cn(
        "Type:Browse files flex flex-col items-start gap-6 p-5 w-[320px] rounded-lg border border-neutral-200 bg-white outline-none transition-colors duration-200",
        isHovering && "bg-secondary-200",
        isFocused && "ring-4 ring-primary-100",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={disabled ? -1 : 0}
    >
      <div className="content flex items-start gap-3 self-stretch">
        <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
          <div
            className="text-primary-500 font-open-sans text-base font-semibold leading-5"
            style={{ fontFeatureSettings: "'ss02' on, 'ss03' on" }}
          >
            {promptTitle2}
          </div>
          {showPromptDescription && (
            <div
              className="text-center text-neutral-400 font-open-sans text-sm font-normal leading-4"
              style={{ fontFeatureSettings: "'ss02' on, 'ss03' on" }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
      <div>
        <button
          className={cn(
            "flex items-center cursor-pointer justify-center gap-2 border border-primary-500 bg-primary-500 text-white rounded-lg shadow-sm hover:shadow-md p-2 px-4 outline-none transition-all duration-200",
            isFocused && "ring-4 ring-primary-100",
            isHovering && "bg-primary-600 border-primary-600"
          )}
          disabled={disabled}
          onClick={handleBrowseClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          {showLeadingIcon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3 13.5L3 14.375C3 15.8247 4.17525 17 5.625 17L14.375 17C15.8247 17 17 15.8247 17 14.375L17 13.5M13.5 6.5L10 3M10 3L6.5 6.5M10 3L10 13.5"
                stroke="#FBFBFB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          Browse files
        </button>
      </div>
    </div>
  );

  const renderCombinedUpload = () => (
    <div
      className={cn(
        "type:Drag or browse flex w-[320px] p-5 flex-col justify-center items-center gap-8 border-2 border-dashed border-neutral-200 bg-white rounded-lg outline-none transition-colors duration-200",
        isDragging && "border-primary-500 bg-primary-50",
        isHovering && !isDragging && "bg-secondary-200",
        isFocused && "ring-4 ring-primary-100",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      ref={dropAreaRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={disabled ? -1 : 0}
    >
      <div className="frame2 flex flex-col items-center justify-center gap-[20px] self-stretch">
        {showLeadingIcon && (
          <div className="icon h-[70px] w-[70px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <path
                d="M35 48.4615L35 29.0769M35 29.0769L43.6154 37.6923M35 29.0769L26.3846 37.6923M19.9231 57.0769C12.7859 57.0769 7 51.2911 7 44.1538C7 38.4305 10.7206 33.5762 15.875 31.8775C15.7045 30.97 15.6154 30.0339 15.6154 29.0769C15.6154 20.7502 22.3656 14 30.6923 14C37.6743 14 43.5478 18.7459 45.2629 25.1878C46.1007 24.9161 46.9947 24.7692 47.9231 24.7692C52.6812 24.7692 56.5385 28.6265 56.5385 33.3846C56.5385 34.3844 56.3682 35.3444 56.055 36.2372C60.1148 37.7798 63 41.7068 63 46.3077C63 52.2554 58.1785 57.0769 52.2308 57.0769H19.9231Z"
                stroke="#6366f1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        <div className="content flex flex-col items-center justify-center gap-2 self-stretch">
          <div
            className="text-primary-500 text-center font-sans text-base font-semibold leading-5"
            style={{ fontFeatureSettings: "'ss02' on, 'ss03' on" }}
          >
            {promptTitle3}
          </div>
          {showPromptDescription && (
            <div
              className="text-neutral-400 text-center font-sans text-sm font-normal leading-4"
              style={{ fontFeatureSettings: "'ss02' on, 'ss03' on" }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
      <div
        className="text-neutral-900 text-justify font-open-sans text-sm font-semibold leading-4"
        style={{ fontFeatureSettings: "'ss02' on, 'ss03' on" }}
      >
        OR
      </div>
      <Button
        className={cn(
          "btn bg-primary-500 text-white outline-none transition-all duration-200 hover:bg-primary-600",
          isFocused && "ring-4 ring-primary-100"
        )}
        disabled={disabled}
        onClick={handleBrowseClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Browse Files
      </Button>
    </div>
  );

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e.target.files)}
        className="hidden"
        disabled={disabled}
        multiple
        accept={allowedFileTypes.join(",")}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {uploadType === "drag-drop" && renderDragDropUpload()}
      {uploadType === "browse" && renderBrowseUpload()}
      {uploadType === "combined" && renderCombinedUpload()}

      {renderFileProgress()}
    </div>
  );
};

export const FileProgress: React.FC<FileProgressProps> = ({
  file,
  progress,
  status,
  errorMessage,
  onRemove,
  onRetry,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + "B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + "KB";
    return (bytes / (1024 * 1024)).toFixed(0) + "MB";
  };

  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "failed":
      case "error":
        return "bg-red-500";
      default:
        return "bg-primary-500";
    }
  };

  const getFileIcon = () => {
    const isError = status === "error" || status === "failed";

    return (
      <div
        className={`flex-shrink-0 ${
          isError ? "text-red-500" : "text-neutral-400"
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="4"
            fill={isError ? "#FEF2F2" : "#F9FAFB"}
          />
          <path
            d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  };

  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return (
          <div className=" text-green-500 hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66669 10L9.16669 12.5L13.3334 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      case "failed":
      case "error":
        return (
          <div className="flex-shrink-0 text-red-500">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6.66663V9.99996"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 13.3334H10.0083"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const getRetryIcon = () => {
    if (status === "failed" && onRetry) {
      return (
        <button
          onClick={onRetry}
          className="flex-shrink-0 text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-4 focus:ring-primary-100 rounded"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6667 3.33337V7.50004M16.6667 7.50004H12.5M16.6667 7.50004L13.3334 4.16671C12.4442 3.27745 11.2869 2.71732 10.0445 2.57121C8.80213 2.4251 7.54865 2.70114 6.49996 3.35837C5.45127 4.0156 4.66618 5.01772 4.26726 6.19313C3.86834 7.36855 3.87686 8.64931 4.29167 9.81837M3.33335 16.6667V12.5M3.33335 12.5H7.50002M3.33335 12.5L6.66669 15.8334C7.55583 16.7226 8.71314 17.2828 9.95553 17.4289C11.1979 17.575 12.4514 17.299 13.5 16.6417C14.5487 15.9845 15.3338 14.9824 15.7327 13.807C16.1317 12.6315 16.1232 11.3508 15.7084 10.1817"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      );
    }
    return null;
  };

  const getCloseIcon = () => (
    <button
      onClick={onRemove}
      className="flex-shrink-0 text-neutral-400 hover:text-neutral-600 focus:outline-none focus:ring-4 focus:ring-primary-100 rounded"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 5L5 15M5 5L15 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 border border-neutral-100 rounded-md bg-white focus-within:ring-4 focus-within:ring-primary-100 transition-colors duration-200",
        isHovering && "bg-secondary-200"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {getFileIcon()}

      <div className="flex-1">
        <div className="flex justify-between">
          <div className="text-sm font-medium text-neutral-900">
            {file.name}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
          {status === "uploading" ? (
            <span>
              {formatFileSize(file.size * (progress / 100))} •{" "}
              {progress.toFixed(0)}% uploading
            </span>
          ) : status === "completed" ? (
            <span>{formatFileSize(file.size)} • 100% uploaded</span>
          ) : status === "error" ? (
            <span className="text-red-500">{errorMessage}</span>
          ) : (
            <span className="text-red-500">Oops! Upload failed</span>
          )}
        </div>

        <div className="mt-2 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
          <div
            className={`h-full ${getStatusColor()} transition-all duration-300 ease-in-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {getRetryIcon()}
        {getStatusIcon()}
        {getCloseIcon()}
      </div>
    </div>
  );
};

export default CustomFileUpload;
