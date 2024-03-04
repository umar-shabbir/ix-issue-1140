import {
  IxBasicNavigation,
  IxMenu,
  IxMenuItem,
  IxMenuSettings,
  IxMenuSettingsItem,
  IxMenuAbout,
  IxMenuAboutItem,
  IxTooltip,
} from "@siemens/ix-react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <IxBasicNavigation applicationName="Ix Issue 1140">
      <IxMenu id="navMenu" enableToggleTheme={true} expand={false}>
        <IxMenuItem
          id="homeMenuItem"
          tab-icon="function-block"
          onClick={() => navigate("home")}
          {...(location.pathname.split("/")[1] == "home" && { active: true })}
        >
          Home
        </IxMenuItem>
        {/* Should display tooltip only when #navMenu has expanded class on it.
        For tooltip on collapsed menu, reverse/not of this css selector can be applied. */}
        <IxTooltip for="#navMenu.expanded > #homeMenuItem">Home</IxTooltip>
        <IxMenuSettings>
          <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
          <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
        </IxMenuSettings>

        <IxMenuAbout>
          <IxMenuAboutItem label="Tab 1">Content 1</IxMenuAboutItem>
          <IxMenuAboutItem label="Tab 2">Content 2</IxMenuAboutItem>
        </IxMenuAbout>
      </IxMenu>

      <div className="container-fluid mx-3">
        <Outlet />
      </div>
    </IxBasicNavigation>
  );
}
