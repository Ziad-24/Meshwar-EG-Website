"use client";

import { useEffect, useState } from "react";
import { websiteLinks } from "@/data/links";

export default function DownloadPage() {
  const [deviceType, setDeviceType] = useState<"android" | "ios" | "other">(
    "other"
  );

  useEffect(() => {
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const IOS_LINK = websiteLinks.appStoreUrl;
    const ANDROID_LINK = websiteLinks.googlePlayUrl;

    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iphone|ipad|ipod/i.test(userAgent);

    if (isAndroid) {
      setDeviceType("android");
      window.location.href = ANDROID_LINK;
    } else if (isIOS) {
      setDeviceType("ios");
      window.location.href = IOS_LINK;
    } else {
      setDeviceType("other");
      window.location.href = "https://meshwareg.com";
    }
  }, []);

  return (
    <p className="text-center py-20 text-lg">
      Redirecting to the{" "}
      {deviceType === "android"
        ? "Google Play"
        : deviceType === "ios"
        ? "App Store"
        : "Home Page"}
      ...
    </p>
  );
}
