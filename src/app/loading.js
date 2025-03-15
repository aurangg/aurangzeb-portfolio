"use client";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="loading-box">
              <Image
                src="/loading-avatar.svg"
                alt="loading-avatar"
                className="loading-avatar"
                width={426}
                height={338}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
