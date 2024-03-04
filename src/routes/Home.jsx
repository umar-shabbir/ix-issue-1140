import { IxIconButton, IxContentHeader } from "@siemens/ix-react";

export default function Home() {
  return (
    <>
      <div className="row">
        <IxContentHeader
          header-title="Ix Issue 1140"
          header-subtitle="Reproduce issue with Tooltip"
        ></IxContentHeader>
        See MainLayout.jsx line no 28
      </div>
    </>
  );
}
