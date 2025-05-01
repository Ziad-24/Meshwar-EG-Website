"use client";
import { useEffect } from "react";
import { websiteLinks } from "@/data/links";
export default function DownloadPage() {
  useEffect(() => {
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const IOS_LINK = websiteLinks.appStoreUrl;
    const ANDROID_LINK = websiteLinks.googlePlayUrl;
    if (/android/i.test(userAgent)) {
      window.location.href = ANDROID_LINK;
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = IOS_LINK;
    } else {
      window.location.href = "https://meshwareg.com";
    }
  }, []);

  return (
    <p className="text-center py-20 text-lg">Redirecting to the app store...</p>
  );
}
